import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          {/* Navigation Links */}
          <Link legacyBehavior href="/boat-house">
            <a className="hover:bg-gray-700 px-3 py-2 rounded">Boat House</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
