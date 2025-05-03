// components/Navbar.jsx
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import SignUpButton from "./SignUpButton";

export default function Navbar() {
    return (
        <header className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-5xl px-6">
            <div className="backdrop-blur bg-white/80 rounded-b-2xl shadow-md py-4 px-6 flex items-center justify-between">
                <Logo />
                <div className="flex items-center space-x-8">
                    <NavLinks />
                    <SignUpButton />
                </div>
            </div>
        </header>
    );
}