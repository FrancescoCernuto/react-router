import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ShowPostPage() {
    const { id: postId } = useParams();
    const [post, setPost] = useState(null)
}
const indexUrl = import.meta.env.VITE_POSTS_INDEX;
function fetchPost(postId) {
    fetch(indexUrl + `/${postId}`)