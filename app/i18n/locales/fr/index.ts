import type { LocaleSiteContent } from "../types";
import { general } from "./general";
import { pages } from "./pages";

export const content: LocaleSiteContent = { ...general, ...pages };
