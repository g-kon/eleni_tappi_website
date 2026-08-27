const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const postsDir = path.join(root, "blog", "_posts");
const outputDir = path.join(root, "blog", "generated");

function parsePost(fileName) {
  const source = fs.readFileSync(path.join(postsDir, fileName), "utf8");
  const match = source.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return null;
  const metadata = {};
  match[1].split("\n").forEach((line) => {
    const separator = line.indexOf(":");
    if (separator < 0) return;
    const key = line.slice(0, separator).trim();
    let value = line.slice(separator + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) value = value.slice(1, -1);
    metadata[key] = value;
  });
  if (metadata.published !== "true") return null;
  const slug = fileName.replace(/^\d{4}-\d{2}-\d{2}-/, "").replace(/\.md$/, "");
  return { ...metadata, slug, body: match[2] };
}

function escapeHtml(value = "") {
  return value.replace(/[&<>\"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[character]));
}

function markdownToHtml(markdown = "") {
  return markdown
    .replace(/^## (.+)$/gm, "<h2>$1</h2>")
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean)
    .filter((block) => !block.startsWith("## "))
    .map((block) => `<p>${escapeHtml(block).replace(/\n/g, " ")}</p>`)
    .join("\n");
}

function pageShell(title, content) {
  return `<!DOCTYPE html><html class="light" lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${escapeHtml(title)} - Eleni Tappi</title><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Montserrat:wght@600;700&display=swap&subset=greek,latin" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet"><script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script><script src="../assets/js/tailwind-config.js"></script><link href="../assets/css/site.css" rel="stylesheet"></head><body class="bg-background text-on-background font-body-md antialiased min-h-screen flex flex-col pt-24" data-page="blog" data-base="../"><div id="site-header"></div>${content}<div id="site-footer"></div><script src="../assets/js/layout.js"></script></body></html>`;
}

const posts = fs.existsSync(postsDir) ? fs.readdirSync(postsDir).filter((file) => file.endsWith(".md")).map(parsePost).filter(Boolean).sort((a, b) => String(b.date).localeCompare(String(a.date))) : [];
fs.mkdirSync(outputDir, { recursive: true });
posts.forEach((post) => {
  const article = `<main class="flex-grow w-full max-w-3xl mx-auto px-gutter py-section-padding"><a class="inline-flex items-center gap-2 text-primary font-label-sm mb-8" href="../">← <span class="lang-en">Back to Nutrition Insights</span><span class="lang-gr">Πίσω στις Συμβουλές Διατροφής</span></a><article class="bg-surface-container-lowest rounded-xl border border-outline-variant/40 p-6 md:p-10">${post.image ? `<img class="w-full h-64 object-cover rounded-xl mb-6" src="${escapeHtml(post.image)}" alt="${escapeHtml(post.title_en)}">` : ""}<p class="font-label-sm text-primary mb-4"><span class="lang-en">${escapeHtml(post.category_en)} · ${escapeHtml(post.date)}</span><span class="lang-gr">${escapeHtml(post.category_gr)} · ${escapeHtml(post.date)}</span></p><h1 class="font-headline-xl text-headline-xl text-primary mb-6"><span class="lang-en">${escapeHtml(post.title_en)}</span><span class="lang-gr">${escapeHtml(post.title_gr)}</span></h1><div class="space-y-5 text-on-surface-variant leading-relaxed"><div class="lang-en">${markdownToHtml(post.body.split("## Ελληνικά")[0].replace("## English", ""))}</div><div class="lang-gr">${markdownToHtml(post.body.split("## Ελληνικά")[1] || "")}</div></div></article></main>`;
  fs.writeFileSync(path.join(outputDir, `${post.slug}.html`), pageShell(post.title_en, article));
});
fs.writeFileSync(path.join(outputDir, "posts.json"), JSON.stringify(posts.map(({ body, ...post }) => ({ ...post, url: `generated/${post.slug}.html` })), null, 2));
console.log(`Generated ${posts.length} blog post(s).`);
