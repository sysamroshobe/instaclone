import React, { ChangeEvent } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { BsChatDots } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { VscBookmark } from "react-icons/vsc";
import { GrEmoji } from "react-icons/gr";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

import {
  addDoc,
  serverTimestamp,
  collection,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  doc,
  deleteDoc,
} from "@firebase/firestore";
import { db } from "../firebase";
import Moment from "react-moment";
import { AiFillHeart } from "react-icons/ai";

type CommentType = {
  id: string;
  userImg: string;
  name: string;
  comment: string;
  timestamp: {
    toDate: () => Date;
  };
};

type LikeType = {
  id: string;
};

function Post({
  id,
  name,
  userImg,
  img,
  caption,
}: {
  id: any;
  name: string;
  userImg: string;
  img: string;
  caption: string;
}) {
  const { data: session } = useSession();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<CommentType[]>([]);
  const [likes, setlikes] = useState<LikeType[]>([]);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(
        collection(db, "posts", id, "comments"),
        orderBy("timestamp", "desc")
      ),
      (snapshot) => {
        const commentsData: CommentType[] = snapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            userImg: data.userImg,
            name: data.name,
            comment: data.comment,
            timestamp: {
              toDate: () => data?.timestamp?.toDate(),
            },
          };
        });
        setComments(commentsData);
      }
    );

    return () => {
      unsubscribe(); // Clean up the listener when the component unmounts
    };
  }, [db, id]);

  useEffect(
    () =>
      onSnapshot(collection(db, "posts", id, "likes"), (snapshot) =>
        setlikes(snapshot.docs)
      ),
    [db, id]
  );

  useEffect(() => {
    setHasLiked(
      likes.findIndex((like) => like.id === session?.user?.uid) !== -1
    );
  }, [likes]);

  const likepost = async () => {
    const uid = session?.user?.uid;

    if (!uid) {
      // handle the case where uid is undefined
      console.error("User ID is undefined");
      return;
    }

    if (hasLiked) {
      await deleteDoc(doc(db, "posts", id, "likes", uid));
    } else {
      await setDoc(doc(db, "posts", id, "likes", uid), {
        name: session?.user?.name ?? undefined,
        userImg: session?.user?.image,
        timestamp: serverTimestamp(),
      });
    }
  };

  const sendComment = async (e: any) => {
    e.preventDefault();
    const commentToSend = comment;
    setComment("");
    await addDoc(collection(db, "posts", id, "comments"), {
      name: session?.user?.name ?? undefined,
      comment: commentToSend,
      timestamp: serverTimestamp(),
      userImg: session?.user?.image,
    });
  };

  return (
    <div className="bg-white my-7 border rounded-lg">
      <div className="flex items-center p-5 ">
        <img
          className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
          src={userImg}
          alt=""
        />
        <p className="flex-1 font-bold">{name}</p>
        <HiDotsHorizontal className="h-5" />
      </div>

      <img src={img} className="object-cover w-full" alt="" />

      {session && (
        <div className="flex justify-between px-4 pt-4">
          <div className="flex space-x-4">
            {hasLiked ? (
              <AiFillHeart onClick={likepost} className=" fill-red-600" />
            ) : (
              <FaRegHeart onClick={likepost} className="" />
            )}

            <BsChatDots />
            <FiSend />
          </div>
          <VscBookmark />
        </div>
      )}

      <p className="p-5 truncate">
        {likes.length > 0 && (
          <p className="font-bold mb-1">{likes.length} likes</p>
        )}
        <span className="font-bold mr-1">{name}</span>
        {caption}
      </p>

      {comments.length > 0 && (
        <div className="ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scroolbar-thin">
          {comments.map((comment) => (
            <div key={comment?.id} className="flex items-center space-x-2 mb-3">
              <img className="h-7 rounded-full" src={comment.userImg} alt="" />
              <p className="text-sm flex-1">
                <span className="font-bold">{comment.name}</span>{" "}
                {comment.comment}
              </p>
              <Moment fromNow>{comment.timestamp?.toDate()}</Moment>
            </div>
          ))}
        </div>
      )}

      {session && (
        <form className="flex items-center p-4">
          <GrEmoji className="h-7" />
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment..."
            className="border-none flex-1 focus:ring-0 outline-none"
          />
          <button
            type="submit"
            disabled={!comment.trim()}
            onClick={sendComment}
            className="font-semibold text-blue-400"
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
}

export default Post;
