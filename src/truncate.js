/**
 * Shorten text to at most `max` characters.
 *
 * Text that already fits is returned unchanged. Longer text keeps its first
 * `max - 1` characters and ends with an ellipsis, so the result never exceeds
 * `max` characters. Length is counted in Unicode code points. A non-positive or
 * non-finite `max` returns an empty string.
 */
export function truncate(text, max) {
  const value = String(text ?? '')
  const limit = Math.trunc(Number(max))
  if (!Number.isFinite(limit) || limit <= 0) return ''

  const chars = Array.from(value)
  if (chars.length <= limit) return value
  return `${chars.slice(0, limit - 1).join('')}…`
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const [text, max] = process.argv.slice(2)
  console.log(truncate(text, Number(max)))
}
