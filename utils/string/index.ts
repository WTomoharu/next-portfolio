export function toKebabCase(text: string) {
  return text
    .replace(/(・|\.)/gm, `-`)
    .replace(/(?<=([a-z]))\s*?[A-Z]/gm, t => `-${t.trim().toLowerCase()}`)
    .replace(/[A-Z]/gm, t => `${t.toLowerCase()}`)
}