import UserAvatar from "@/components/UserAvatar";
import { NotificationData } from "@/lib/types";
import { cn } from "@/lib/utils";
import { NotificationType } from "@prisma/client";
import { Heart, MessageCircle, User2 } from "lucide-react";
import Link from "next/link";

interface NotificationProps {
  notification: NotificationData;
}

const Notification = ({ notification }: NotificationProps) => {
  const notificationTypeMap: Record<
    NotificationType,
    { message: string; icon: JSX.Element; href: string }
  > = {
    FOLLOW: {
      message: `${notification.issuer.displayName} followed you.`,
      icon: <User2 className="size-7 text-primary" />,
      href: `/users/${notification.issuer.username}`,
    },
    COMMENT: {
      message: `${notification.issuer.displayName} commented on your post.`,
      icon: <MessageCircle className="size-7 fill-primary text-primary" />,
      href: `/posts/${notification.postId}`,
    },
    LIKE: {
      message: `${notification.issuer.displayName} liked your post.`,
      icon: <Heart className="size-7 fill-red-500 text-red-500" />,
      href: `/posts/${notification.postId}`,
    },
  };

  const { message, icon, href } = notificationTypeMap[notification.type];

  return (
    <Link href={href} className="block">
      <article
        className={cn(
          "flex gap-3 rounded-2xl bg-foreground p-5 text-input shadow-sm transition-colors hover:bg-foreground/90",
          !notification.read &&
            "bg-orange-200 text-foreground hover:bg-orange-200/90 dark:text-input",
        )}
      >
        <div className="my-1">{icon}</div>
        <div className="flex flex-col space-y-2">
          <div className="flex flex-row items-center gap-3">
            <UserAvatar avatarUrl={notification.issuer.avatarUrl} size={36} />

            <span className="font-bold">{notification.issuer.displayName}</span>
          </div>
          <span className="">{message}</span>
          {notification.post && (
            <div className="line-clamp-3 whitespace-pre-line text-muted-foreground">
              {notification.post.content}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
};

export default Notification;
