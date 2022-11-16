const firstAndLastSameCase = (word) => {
  const first = word[0];
  const last = word.slice(-1);
  return first.toLowerCase() === first && last.toLowerCase() === last;
};
const ascii = new Map(
  "abcdefghijklmnopqrstuvwxyz".split("").map((ch) => [ch, ch.codePointAt(0)])
);
/**
 * Could consider splitting the word then adding the double-underscore
 * back to the string again. Use this REGEX /^(?<start>_+).*(?<end>\w_)$/
 * @param {string} word
 * @returns
 */
const dunder = (word) => /^_.*_$/.test(word);
const baseCase = (word) => {
  if (!word || !word.length) return "";
  if (dunder(word) || /[A-Z][^a-z]/.test(word))
    return word
      .replace(/-|_/g, " ")
      .replace(/\s{2,}/g, " ")
      .trim();
  return word
    .replace(/[A-Z][a-z]*/g, " $&")
    .replace(/-|_|\.|\//g, " ")
    .replace(/\s{2,}/g, " ")
    .trim();
};

export default baseCase;
