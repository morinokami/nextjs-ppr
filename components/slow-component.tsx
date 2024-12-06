import { headers } from "next/headers";

export async function SlowComponent() {
  const headersList = await headers();
  const userAgent = headersList.get("user-agent") || "unknown";
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return <div>🐢 ({userAgent})</div>;
}
