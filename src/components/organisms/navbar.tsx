import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-custom-bg-start p-4 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-custom-text font-semibold text-xl">
            Manage Your Task Here
          </Link>
        </div>
        <div className="flex items-center">
          <Link href="/tasks/active" className="text-custom-link hover:text-custom-hover mr-4">
            Active
          </Link>
          <Link href="/tasks/completed" className="text-custom-link hover:text-custom-hover mr-4">
            Completed
          </Link>
          <Link href="/tasks/details" className="text-custom-link hover:text-custom-hover">
            Details
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

