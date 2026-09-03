export const COOKIEBOT_DOMAIN_GROUP_ID = '1c7ca4e2-1117-40e9-8a0c-fe455f4bba76';
export const GTM_CONTAINER_ID = 'GTM-KK359VS8';

const COOKIEBOT_EVENTS = [
  'CookiebotOnDialogDisplay',
  'CookiebotOnAccept',
  'CookiebotOnDecline',
  'CookiebotOnLoad',
] as const;

export function isCookiebotDialogVisible(): boolean {
  if (typeof document === 'undefined') return false;
  const dialog = document.getElementById('CybotCookiebotDialog');
  if (!dialog) return false;
  const style = window.getComputedStyle(dialog);
  if (style.display === 'none' || style.visibility === 'hidden') return false;
  return dialog.getClientRects().length > 0;
}

export function onCookiebotVisibilityChange(callback: () => void): () => void {
  COOKIEBOT_EVENTS.forEach((event) => window.addEventListener(event, callback));
  return () => {
    COOKIEBOT_EVENTS.forEach((event) => window.removeEventListener(event, callback));
  };
}
