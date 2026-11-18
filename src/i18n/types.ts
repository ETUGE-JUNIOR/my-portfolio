export type Lang = "en" | "fr";

/** A string that exists in every language. Both keys are required, so a missing translation is a compile error. */
export type Text = Record<Lang, string>;

/** A plain string is allowed where nothing needs translating (a product name, a technology). */
export type Loc = string | Text;
