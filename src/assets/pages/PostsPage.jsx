import { useState, useEffect } from "react";

export default function PostsPage() {
    const [posts, setPosts] = useState([]);
    const indexUrl = import.meta.env.VITE_POSTS_INDEX;

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
                .map((post) => (
                    <div key={post.id} className="col card p-0">
                        <img src={post.image} className="card-img-top" alt="😢" />
                        <div className="card-body">
                            <h5 className="card-title">{post.title}</h5>
                            <p className="card-text">{post.content}</p>
                        </div>
                    </div>
                ))}
        </div>
    );

}