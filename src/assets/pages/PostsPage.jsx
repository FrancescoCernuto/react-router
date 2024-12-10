import { useState, useEffect } from "react";

export default function PostsPage() {
    const [posts, setPosts] = useState([]);
    const indexUrl = import.meta.env.VITE_POSTS_INDEX;
}

function fetchPosts()