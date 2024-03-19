import Link from 'next/link';
import { Url } from 'url';

type NavigationLink = {
  href: string;
  title: string;
};

const NavLink = ({ href, title }: NavigationLink) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white md:bg-transparent"
      aria-current="page"
    >
      {title}
    </Link>
  );
};
export default NavLink;
