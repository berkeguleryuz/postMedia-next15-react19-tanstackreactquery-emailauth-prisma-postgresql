import { StreamChat } from "stream-chat";

const streamServerClient = StreamChat.getInstance(
  process.env.STREAM_KEY!,
  process.env.STREAM_SECRET,
);
