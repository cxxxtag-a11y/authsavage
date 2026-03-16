import { NextResponse } from "next/server";

export async function GET() {
  const clientId = process.env.DISCORD_CLIENT_ID;
  const redirectUri = process.env.DISCORD_REDIRECT_URI;

  const params = new URLSearchParams({
    client_id: clientId || "",
    response_type: "code",
    redirect_uri: redirectUri || "",
    scope: "identify",
    prompt: "consent"
  });

  return NextResponse.redirect(
    `https://discord.com/oauth2/authorize?${params.toString()}`
  );
}