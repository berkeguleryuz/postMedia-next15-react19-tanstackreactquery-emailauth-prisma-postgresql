import { validateRequest } from "@/auth";
import { redirect } from "next/navigation";
import SessionProvider from "./SessionProvider";
import Navbar from "./Navbar";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await validateRequest();

  if (!session.user) redirect("/");

  return (
    <div className="flex min-h-screen flex-col">
      <SessionProvider value={session}>
        <Navbar />
        <div className="max-w-7xl mx-auto p-5">{children}</div>
      </SessionProvider>
    </div>
  );
}
