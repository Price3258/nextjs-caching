import Messages from "@/components/messages";
import { getMessages } from "@/lib/messages";

// export const revalidate = 5; // 5초마다 갱신

// export const dynamic = "force-dynamic"; // cache : no-store와 같음 .

export default async function MessagesPage() {
  // unstable_noStore();
  // const response = await fetch("http://localhost:8080/messages", {
  //   next: { tags: ["msg"] },
  // });
  // const messages = await response.json();

  const messages = await getMessages();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
