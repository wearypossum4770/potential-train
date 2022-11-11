import { btoa, atob } from "abab";
import { webcrypto } from "crypto";
const digestMessage = async ({ algorithm = "SHA-256", message }) => {
  const data = new TextEncoder().encode(message);
  return webcrypto.subtle.digest(algorithm, data);
};
const hashToString = async (args) => {
  const hash = await digestMessage(args);
  const data = btoa(new Uint8Array(hash));
  console.log(data);
};
const msg = hashToString({
  algorithm: "SHA-256",
  message:
    "An obscure body in the S-K System, your majesty. The inhabitants refer to it as the planet Earth.",
});
