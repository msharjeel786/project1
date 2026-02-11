const fs = require("fs");
const path = require("path");
const src = path.join(__dirname, "..", "..", "..", "index.html");
let html = fs.readFileSync(src, "utf8");
const body = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
html = body ? body[1] : html;
html = html.replace(/<script[\s\S]*?<\/script>/gi, "");
html = html.replace(/<!--([\s\S]*?)-->/g, "");
html = html.replace(/\bclass=/g, "className=");
html = html.replace(/\bfor=/g, "htmlFor=");
html = html.replace(/\btabindex=/g, "tabIndex=");
const voidTags = ["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"];
for (const tag of voidTags) {
  const re = new RegExp("<" + tag + "([^>/]*?)>", "gi");
  html = html.replace(re, function(_match, attrs) {
    return "<" + tag + attrs + " />";
  });
}
html = html.trim();
const out = "export default function Home(){\n  return (\n    <>\n" + html + "\n    </>\n  );\n}\n";
fs.writeFileSync(path.join(__dirname, "page.js"), out);
