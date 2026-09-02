import { notFound } from "next/navigation";

/** POS/Kasse is DACH-only (TSE/RKSV). Not offered on English or other market sites. */
export default function Page() {
  notFound();
}
