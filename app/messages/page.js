import { unstable_noStore } from "next/cache";

import Messages from "@/components/messages";

// export const revalidate = 5; // 5초마다 갱신

// export const dynamic = "force-dynamic"; // cache : no-store와 같음 .

export default async function MessagesPage() {
  unstable_noStore();
  const response = await fetch("http://localhost:8080/messages");
  const messages = await response.json();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
