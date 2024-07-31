import { Metadata } from "next";
import Bookmarks from "./Bookmarks";
import TrendSidebar from "@/components/TrendSidebar";

export const metadata: Metadata = {
  title: "Bookmarks",
};

export default function Page() {
  return (
    <main className="flex w-full min-w-0 gap-5">
      <div className="w-full min-w-0 space-y-5">
        <div className="rounded-2xl bg-card-foreground p-5 shadow-sm">
          <h1 className="text-center text-2xl font-bold text-input">Bookmarks</h1>
        </div>
        <Bookmarks />
      </div>
      <TrendSidebar />
    </main>
  );
}
