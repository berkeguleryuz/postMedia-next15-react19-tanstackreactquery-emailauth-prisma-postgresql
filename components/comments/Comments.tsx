import { PostData } from "@/lib/types";

interface CommentsProps {
    post: PostData
}

const Comments = ({post} : CommentsProps) => {
  return (
    <div>Comments</div>
  )
}

export default Comments