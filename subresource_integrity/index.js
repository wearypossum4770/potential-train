import crypto from "crypto";
import { writeFileSync } from "fs";
import {
  resolveAlgorighm,
  algorithmWarning,
  crossOriginWarning,
  resolveCrossOrigin,
} from "./constants";
import htmlHandler from "./utils";

const { version } = process;
const defaultAlgorithm = "SHA-256";

export default function generateIntegrityHash(config = {}) {
  const { algorithm, crossorigin } = config;
  const prefix = algorithm
    ? algorithm.replaceAll(/\-/g, "").toLowerCase()
    : "sha256";
  return {
    name: "generate-integirty-hash",
    defaultCrossorigin: "anonymous",
    async generateBundle(_outputOptions, assetInfo) {
      const contents = [];
      if (!crossorigin)
        this.warn(
          "crossorigin value not set, default 'anonymous' will be used."
        );
      else if (crossorigin !== "anonymous") this.warn(crossOriginWarning);
      if (!resolveAlgorighm(algorithm)) this.warn(algorithmWarning);
      const assets = Object.keys(assetInfo);
      for (let item in assets) {
        const filename = assets[item];
        const context = assetInfo[filename];
        if (filename.endsWith("css")) {
          const data = context.source ?? context.code;
          const hashBuffer = await crypto.webcrypto.subtle.digest(
            algorithm ?? defaultAlgorithm,
            new Buffer.from(data)
          );
          const hashArray = new Buffer.from(new Uint8Array(hashBuffer));
          const integrity = `${prefix}-${hashArray.toString("base64")}`;
          contents.push({
            filename,
            integrity,
            version,
            build_date: new Date().toISOString(),
          });
        }
        if (filename.endsWith(".html")) {
          const fileContents = {
            ...context,
            source: htmlHandler({ ...config, ...context }),
          };
          const { source, type, fileName } = fileContents;
          this.emitFile({ source, type, fileName });
        }
      }
      writeFileSync("rollup_subresource_cache.json", JSON.stringify(contents));
    },
  };
}
