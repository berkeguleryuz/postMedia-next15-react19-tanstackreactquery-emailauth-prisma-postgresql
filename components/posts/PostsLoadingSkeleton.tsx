import React from "react";
import { Skeleton } from "../ui/skeleton";

const PostsLoadingSkeleton = () => {
  return (
    <div className="space-y-5">
      <PostLoadingSkeleton />
      <PostLoadingSkeleton />
      <PostLoadingSkeleton />
    </div>
  );
};

export default PostsLoadingSkeleton;

function PostLoadingSkeleton() {
  return (
    <div className="w-full animate-pulse space-y-3 rounded-2xl bg-card-foreground p-5 text-input shadow-sm">
      <div className="flex flex-wrap gap-3">
        <Skeleton className="size-12 rounded-full" />
        <div className="space-y-1.5">
          <Skeleton className="h-4 w-24 rounded" />
          <Skeleton className="h-4 w-24 rounded" />
        </div>
      </div>
      <Skeleton className="h-16 rounded" />
    </div>
  );
}
