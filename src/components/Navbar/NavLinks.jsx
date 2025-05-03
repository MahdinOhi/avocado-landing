import Link from 'next/link';

// NavLinks Component
const NavLinks = () => {
    const links = [
        { name: 'About Us', path: '/about' },
        { name: 'Blogs', path: '/blogs' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'FAQs', path: '/faqs' },
    ];

    return (
        <div className="hidden md:flex space-x-8">
            {links.map((link) => (
                <Link
                    key={link.name}
                    href={link.path}
                    className="text-black hover:text-gray-700 transition-colors duration-200"
                >
                    {link.name}
                </Link>
            ))}
        </div>
    );
};

export default NavLinks;