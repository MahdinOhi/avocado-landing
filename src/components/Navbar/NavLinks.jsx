// components/NavLinks.jsx
import Link from "next/link";

export default function NavLinks() {
    const links = [
        { href: "/about", label: "About Us" },
        { href: "/blogs", label: "Blogs" },
        { href: "/pricing", label: "Pricing" },
        { href: "/faqs", label: "FAQs" },
    ];

    return (
        <nav className="flex space-x-6">
            {links.map(({ href, label }) => (
                <Link
                    key={href}
                    href={href}
                    className="text-black text-sm font-medium hover:text-gray-700"
                >
                    {label}
                </Link>
            ))}
        </nav>
    );
}