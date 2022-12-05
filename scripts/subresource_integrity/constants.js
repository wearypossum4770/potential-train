export const resolveAlgorighm = (value) =>
  Object.freeze(
    new Map([
      ["sha1", "SHA-1"],
      [1, "SHA-1"],
      ["1", "SHA-1"],
      ["SHA1", "SHA-1"],
      ["sha256", "SHA-256"],
      [256, "SHA-256"],
      ["256", "SHA-256"],
      ["SHA-26", "SHA-256"],
      ["sha384", "SHA-384"],
      [384, "SHA-384"],
      ["384", "SHA-384"],
      ["SHA-34", "SHA-384"],
      ["sha512", "SHA-512"],
      [512, "SHA-512"],
      ["512", "SHA-512"],
      ["SHA-52", "SHA-512"],
    ])
  ).get(value);
export const crossoriginUnset =
  "crossorigin value not set, default 'anonymous' will be used.";
export const algorithmWarning =
  "For increased security valid algorithmic options are one of the following. SHA-1 | SHA-256 | SHA-384 | SHA-512";
export const crossOriginWarning =
  "Setting the cross origin to a value other than anonymous can create a security risk.";
export const resolveCrossOrigin = (value) =>
  Object.freeze(new Set(["anonymous", "use-credentials"])).has(
    value.toLowerCase()
  );
