import { useState, useEffect } from "react";

export default function PostsPage() {
    const [posts, setPosts] = useState([]);
    const indexUrl = import.meta.env.VITE_POSTS_INDEX;
}

function fetchPosts() {
    fetch(indexUrl)
        .then((res) => res.json())
        .then((data) => setPosts(data))
        .catch((err) => console.error(err));
}

useEffect(() => {
    fetchPosts();
}, []);

return (
    <div className="row gap-2">
        {posts
            .filter((post) => post.isPublic)

        }