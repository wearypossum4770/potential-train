import * as cheerio from "cheerio";
import { readFileSync } from "fs";
import { resolve } from "path";
const transformLink = (attrs) => ({
  ...attrs,
  title: "English HTML",
  rel: "preload",
});
export default function htmlHandler({
  source,
  asAsync = false,
  asDefer = false,
  usBlocking = false,
  contents,
  isModule = false,
  referrerpolicy = "",
  href = "",
  cssPreload = false,
  title = "",
  transformLink: fn,
}) {
  const $ = cheerio.load(source);
  const links = $("link");
  const scripts = $("script");
  for (let i = 0; i < scripts.length; i++) {
    const script = scripts[i];
    const { src } = script.attribs;
    // This will be handling external scripts
    const element = contents.filter((ctx) => ctx.filename === src.slice(1))[0];
    if (element) {
      const { integrity } = element;
      Object.assign(script.attribs, { integrity, crossorigin: "anonymous" });
    }
    if (src.startsWith("http")) break;
  }
  for (let i = 0; i < links.length; i++) {
    const link = links[i];
    const { href } = link.attribs;
    // This will be handling external links
    const element = contents.filter((ctx) => ctx.filename === href.slice(1))[0];
    if (element) {
      const { integrity } = element;
      Object.assign(link.attribs, { integrity, crossorigin: "anonymous" });
    }
    if (href.startsWith("http")) break;
  }
  return $.html();
}
