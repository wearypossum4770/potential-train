import * as cheerio from "cheerio";
import { readFileSync } from "fs";
import { resolve } from 'path'
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
  crossorigin = "",
  isModule = false,
  referrerpolicy = "",
  href = "",
  cssPreload = false,
  title = "",
  transformLink: fn,
}) {
  const data = JSON.parse(
    readFileSync(resolve('./scripts/rollup_subresource_cache.json'), "utf-8") 
  );
  const $ = cheerio.load(source);
  const links = $("link");
  const scripts = $("script");  
  for (let i = 0; i < scripts.length; i++) {
    const script = scripts[i];
    const { src } = script.attribs;
    // This will be handling external scripts
    if (src.startsWith('http')) break;
    const element = data.filter((ctx) => ctx.filename === src.slice(1))[0];
    if (element) {
      const { integrity } = element;
      Object.assign(script.attribs, { integrity, crossorigin: "anonymous" });
    }
  }
  for (let i = 0; i < links.length; i++) {
    const link = links[i];
    const { href } = link.attribs;
    // This will be handling external links
    if (href.startsWith('http')) break;
    const element = data.filter((ctx) => ctx.filename === href.slice(1))[0];
    if (element) {
      const { integrity } = element;
      Object.assign(link.attribs, { integrity, crossorigin: "anonymous" });
    }
  }
  return $.html();
}
