export const prerender = true;

export function GET({ site }: { site?: URL }) {
  const origin = site?.origin ?? "https://tiagofga.com.br";
  const body = [
    "User-agent: *",
    "Allow: /",
    "",
    `Sitemap: ${origin}/sitemap.xml`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
