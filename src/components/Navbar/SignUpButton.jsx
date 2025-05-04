import Link from 'next/link';

// SignUpButton Component
const SignUpButton = () => {
    return (
        <Link href="/signup">
            <button
                className="bg-lime-200 text-black px-6 py-2 rounded-full font-medium 
                 transition-transform duration-300 hover:scale-105"
            >
                Sign up
            </button>
        </Link>
    );
};

export default SignUpButton;