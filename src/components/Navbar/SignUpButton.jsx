// components/SignUpButton.jsx
import Link from "next/link";

export default function SignUpButton() {
    return (
        <Link
            href="/signup"
            className="bg-lime-200 text-orange-600 font-semibold px-6 py-2 rounded-full transition-transform transform hover:scale-105"
        >
            Sign up
        </Link>
    );
}