import { useState, useEffect } from "react";
import axios from "axios";

function UserPosts() {
  const [userPosts, setUserPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/posts")
      .then((posts) => setUserPosts(posts.data))
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false));
  });
  return (
    <div>
      <h1>Posts</h1>
      {isLoading && <h2>Loading Posts...</h2>}
      {userPosts.map((post) => (
        <div key={post.id}> {post.title}</div>
      ))}
    </div>
  );
}

export default UserPosts;
