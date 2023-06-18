import React, { useState, useEffect } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import Post from "./Post";

interface PostData {
  id: string;
  name: string;
  img: string;
  userImg: string;
  caption: string;
}

const Posts = () => {
  const [posts, setPosts] = useState<PostData[]>([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        const postList: PostData[] = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            name: doc.data().username,
            img: doc.data().image,
            userImg: doc.data().profileImg,
            caption: doc.data().caption,
          };
        });
        setPosts(postList);
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          name={post.name}
          img={post.img}
          userImg={post.userImg}
          caption={post.caption}
        />
      ))}
    </div>
  );
};

export default Posts;
