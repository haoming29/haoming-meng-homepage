import { baseTitle } from "../config";

export const title = (title) => `${title}${title && " | "}${baseTitle}`;
