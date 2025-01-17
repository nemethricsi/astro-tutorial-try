/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
        printWidth: 100,
        semi: true,
        singleQuote: false,
        tabWidth: 2,
        useTabs: false,
        trailingComma: "es5",
        bracketSpacing: true,
        bracketSameLine: false,
        htmlWhitespaceSensitivity: "css",
        embeddedLanguageFormatting: "auto",
        astroAllowShorthand: false,
      },
    },
  ],
};
