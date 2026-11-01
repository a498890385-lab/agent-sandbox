/**
 * Turn a title into a URL-safe slug.
 *
 * Rules: lower-case first, keep only ASCII letters and digits, turn every run
 * of other characters into one dash, then drop leading and trailing dashes.
 */
export function slugify(title) {
  return String(title ?? '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(slugify(process.argv.slice(2).join(' ')))
}
