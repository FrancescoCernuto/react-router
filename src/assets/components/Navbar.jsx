import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <ul class="nav justify-content-center">
            <li class="nav-item">
                <a class="nav-link active" href="#">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Posts</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">About Us</a>
            </li>

        </ul>
    );
}