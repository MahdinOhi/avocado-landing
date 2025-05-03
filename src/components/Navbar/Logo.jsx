import Link from 'next/link';

// Logo Component
const Logo = () => {
    return (
        <Link href="/" className="flex items-center font-bold text-xl">
            <span className="font-black">Avocado Inc.</span>
        </Link>
    );
};

export default Logo;