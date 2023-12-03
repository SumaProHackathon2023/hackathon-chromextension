/**
 * @type {import('prettier').Options}
 */
export default {
  printWidth: 80,
  tabWidth: 2,
  useTabs: true,
  semi: true,
  quoteProps: "as-needed",
  bracketSpacing: true,
  bracketSameLine: true,
  arrowParens: "always",
  doubleQuote: true,
  trailingComma: "all",
  bracketSpacing: true,
  bracketSameLine: true,
  CamelCase: true,
  plugins: ["@ianvs/prettier-plugin-sort-imports"],
  importOrder: [
    "<BUILTIN_MODULES>", // Node.js built-in modules
    "<THIRD_PARTY_MODULES>", // Imports not matched by other special words or groups.
    "", // Empty line
    "^@plasmo/(.*)$",
    "",
    "^@plasmohq/(.*)$",
    "",
    "^~(.*)$",
    "",
    "^[./]"
  ]
}
