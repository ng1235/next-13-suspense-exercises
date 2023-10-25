import React from "react";

import { getComments } from "@/helpers/interview-helpers";
import Comment from "@/components/Comment";
import Spinner from "@/components/Spinner";

export const dynamic = "force-dynamic";

async function Comments() {
  const comments = await getComments();

  return (
    <>
      <React.Suspense fallback={<Spinner />}>
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </React.Suspense>
    </>
  );
}

export default Comments;
