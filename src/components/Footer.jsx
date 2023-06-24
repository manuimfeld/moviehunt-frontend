import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#393E46]">
      <div className="p-5 h-[60px] text-center">
        <Link
          className="text-neutral-400"
          to="https://www.themoviedb.org/"
          target="_blank"
        >
          © 2023 Copyright: Moviehunt
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
