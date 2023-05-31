import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React from "react";
import { useState, useContext, useEffect } from "react";
import { db } from "../firebase";
import PostData from "./../data/PostData";
import Post from "./Post";

type Props = {};

const Posts = (props: Props) => {
  const [posts, setPosts] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    [db]
  );

  return (
    <div>
      {posts.map((post) => (
        <Post
          //   key={post.id}
          //   name={post.name}
          //   img={post.PostImg}
          //   userImg={post.avatar}
          //   caption={post.postCap}
          //

          key={post.id}
          id={post.id}
          name={post.data().username}
          img={post.data().image}
          userImg={post.data().profileImg}
          caption={post.data().caption}
        />
      ))}
    </div>
  );
};

export default Posts;
