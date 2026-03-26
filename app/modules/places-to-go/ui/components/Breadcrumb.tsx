import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbProps {
  placeName: string;
}

const Breadcrumb = ({ placeName }: BreadcrumbProps) => {
  return (
    <nav className="py-4 px-6 md:px-16 lg:px-24">
      <ol className="flex items-center gap-2 text-xs md:text-sm font-medium tracking-wide">
        <li>
          <Link
            href="/"
            className="text-gray-500 hover:text-primary transition-colors uppercase"
          >
            Home
          </Link>
        </li>
        <li>
          <ChevronRight size={14} className="text-gray-400" />
        </li>
        <li>
          <span className="text-gray-500 uppercase">Places to Go</span>
        </li>
        <li>
          <ChevronRight size={14} className="text-gray-400" />
        </li>
        <li>
          <span className="text-primary font-semibold uppercase">
            {placeName}
          </span>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
