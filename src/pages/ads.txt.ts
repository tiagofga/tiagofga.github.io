export const prerender = true;

export function GET() {
  const publisherId = import.meta.env.PUBLIC_GOOGLE_ADSENSE_PUBLISHER_ID?.trim();
  const validPublisherId = publisherId && /^pub-\d{16}$/.test(publisherId);

  const body = validPublisherId
    ? `google.com, ${publisherId}, DIRECT, f08c47fec0942fa0\n`
    : "# Google AdSense publisher ID not configured yet.\n";

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
