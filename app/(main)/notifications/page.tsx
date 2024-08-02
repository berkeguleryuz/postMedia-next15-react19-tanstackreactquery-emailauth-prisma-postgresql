import { Metadata } from "next";
import TrendSidebar from "@/components/TrendSidebar";
import Notifications from "./Notifications";

export const metadata: Metadata = {
  title: "Notifications",
};

const NotificationsPage = () => {
  return (
    <main className="flex w-full min-w-0 gap-5">
      <div className="w-full min-w-0 space-y-5">
        <div className="rounded-2xl bg-card-foreground p-5 shadow-sm">
          <h1 className="text-center text-2xl font-bold text-input">
            Notifications
          </h1>
        </div>
        <Notifications />
      </div>
      <TrendSidebar />
    </main>
  );
};

export default NotificationsPage;
