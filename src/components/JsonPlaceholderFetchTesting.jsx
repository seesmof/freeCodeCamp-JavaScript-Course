import React, { useEffect, useState } from "react";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiFillDislike,
  AiOutlineDislike,
} from "react-icons/ai";

const JsonPlaceholderFetchTesting = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUsers = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchComments = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/comments");
      const data = await res.json();
      setComments(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
    fetchUsers();
    fetchComments();
  }, []);

  const NewPost = () => {
    return (
      <>
        <div className="gray-card w-full mb-6">
          <div className="flex flex-col">
            <h2 className="text-slate-50 text-lg font-medium capitalize">
              Add new post
            </h2>

            <div className="flex flex-col gap-3 my-3">
              <input
                type="text"
                className="input-field-underline"
                placeholder="Post Title..."
              />
              <textarea
                className="input-field-underline resize-none"
                placeholder="What is on your mind..."
                rows="1"
              ></textarea>
              <button className="button button-gray mt-3">Post</button>
            </div>
          </div>
        </div>
      </>
    );
  };

  const PostCardComment = ({ message, user, email }) => {
    const [isLiked, setIsLiked] = useState(false);

    return (
      <>
        <div className="flex flex-col">
          <div className="flex flex-row items-center justify-between">
            <a
              href="#"
              className="underline-offset-2 hover:text-slate-50 active:scale-95 font-medium underline capitalize duration-300"
              onClick={(e) => {
                e.preventDefault();
                navigator.clipboard.writeText(email);
              }}
            >
              {user}
            </a>

            <button
              className="like-button text-2xl"
              onClick={() => setIsLiked(!isLiked)}
            >
              {isLiked ? (
                <AiFillHeart className="text-red-600" />
              ) : (
                <AiOutlineHeart />
              )}
            </button>
          </div>

          <p className="pt-2">{message}</p>
        </div>
      </>
    );
  };

  const PostCard = ({ title, user, message, postId }) => {
    const [isLiked, setIsLiked] = useState(false);
    const [isDisliked, setIsDisliked] = useState(false);
    const newCommentRef = useRef(null);

    const localComments = comments.filter((comment) => {
      return comment.postId === postId;
    });

    const addNewComment = ({ message, name, email }) => {
      const newComment = {
        body: message,
        name: name,
        email: email,
      };
      setComments([...localComments, newComment]);
    };

    return (
      <>
        <div className="gray-card w-full">
          <div className="flex flex-col">
            <div className="flex flex-row items-start justify-between">
              <h2 className="text-slate-50 text-lg font-medium capitalize">
                {title}
              </h2>

              <div className="flex flex-row items-center gap-2">
                <button
                  className="like-button text-2xl"
                  onClick={() => setIsLiked(!isLiked)}
                >
                  {isLiked ? (
                    <AiFillHeart className="text-red-600" />
                  ) : (
                    <AiOutlineHeart />
                  )}
                </button>
                <button
                  className="dislike-button text-2xl"
                  onClick={() => setIsDisliked(!isDisliked)}
                >
                  {isDisliked ? (
                    <AiFillDislike className="text-stone-100" />
                  ) : (
                    <AiOutlineDislike />
                  )}
                </button>
              </div>
            </div>
            <p className="text-sm">
              Shared by:{" "}
              <a href="#" className="underline-offset-2 underline">
                {user}
              </a>
            </p>

            <p className="py-3">{message}</p>

            <section className="flex flex-col">
              <h2 className="text-slate-50 mb-2 text-lg font-medium">
                Comments
              </h2>

              <article className="flex flex-col gap-4">
                {localComments.map((comment) => (
                  <PostCardComment
                    key={comment.id}
                    message={comment.body}
                    user={comment.name}
                    email={comment.email}
                  />
                ))}
              </article>

              <div className="flex flex-row items-end justify-between gap-4 mt-4">
                <textarea
                  rows="1"
                  className="input-field-underline w-full resize-none"
                  placeholder="What do you think..."
                  ref={newCommentRef}
                />
                <button
                  className="button button-gray"
                  onClick={addNewComment(
                    newCommentRef,
                    users[post.userId - 1].name,
                    users[post.userId - 1].email
                  )}
                >
                  Send
                </button>
              </div>
            </section>
          </div>
        </div>
      </>
    );
  };

  const PostsGrid = () => {
    return (
      <>
        <div className="md:grid-cols-2 grid grid-cols-1 gap-4">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              user={users[post.userId - 1].name}
              message={post.body}
              postId={post.id}
            />
          ))}
        </div>
      </>
    );
  };

  return (
    <>
      <section className="section-template">
        <h2 className="section-heading">JSON Placeholder Social Media Feed</h2>

        <div className="flex flex-col w-full">
          <NewPost />

          <PostsGrid />
        </div>
      </section>
    </>
  );
};

export default JsonPlaceholderFetchTesting;
