export const escapeHtml = (unsafe: string,): string => {
  return unsafe
    .replaceAll('&amp;', '&',)
    .replaceAll('&lt;', '<',)
    .replaceAll('&gt;', '>',)
    .replaceAll('&quot;', '"',)
    .replaceAll('&#039;', "'",)
    .replaceAll('&eacute;', 'e',)
    .replaceAll('&rsquo;', "'",)
}
