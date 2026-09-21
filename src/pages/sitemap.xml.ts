export const prerender = true;

const routes = [
  "/",
  "/sobre/",
  "/pesquisa/",
  "/publicacoes/",
  "/ensino/",
  "/extensao/",
  "/software/",
  "/recursos/",
  "/contato/",
  "/privacidade/",
  "/en/",
  "/en/about/",
  "/en/research/",
  "/en/publications/",
  "/en/teaching/",
  "/en/extension/",
  "/en/software/",
  "/en/resources/",
  "/en/contact/",
  "/en/privacy/",
  "/ensino/acervo/uemg/2015/estrutura-de-dados-ii/",
  "/ensino/acervo/uemg/2015/logica-digital/",
  "/ensino/acervo/uemg/2015/sistemas-digitais/",
  "/ensino/acervo/uemg/2015/introducao-engenharia-computacao/",
  "/ensino/acervo/uemg/2015/principios-desenvolvimento-algoritmos/",
  "/ensino/acervo/uemg/2015/inteligencia-artificial/",
  "/ensino/acervo/uemg/2015/linguagens-programacao-compiladores/",
];

const escapeXml = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");

export function GET({ site }: { site?: URL }) {
  const base = site ?? new URL("https://tiagofga.com.br");
  const urls = routes
    .map((route) => `  <url><loc>${escapeXml(new URL(route, base).toString())}</loc></url>`)
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
