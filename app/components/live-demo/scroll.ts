/**
 * Scrollt sanft so, dass das Element mittig (bzw. oben mit Abstand) im Fenster steht.
 * window.scrollTo statt scrollIntoView, weil Letzteres bei gleichzeitigen
 * Layout-Änderungen in manchen Browsern abbricht.
 */
export function scrollToElement(element: HTMLElement | null, align: "center" | "start" = "center") {
  if (!element) return;
  window.requestAnimationFrame(() => {
    const rect = element.getBoundingClientRect();
    const offset = align === "center" ? Math.max(80, (window.innerHeight - rect.height) / 2) : 96;
    window.scrollTo({ top: Math.max(0, window.scrollY + rect.top - offset), behavior: "smooth" });
  });
}
