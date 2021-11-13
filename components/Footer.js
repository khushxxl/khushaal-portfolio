/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import { Twitter, Mail, Instagram, LinkedIn, GitHub } from "@material-ui/icons";

const Footer = () => {
  return (
    <div className="mt-5 flex flex-col justify-start items-start">
      <h1>Find Me Here ⚡️</h1>

      <div className="space-x-6 cursor-pointer flex mt-2">
        <Link href="https://github.com/khushxxl">
          <div className="hover:animate-bounce ">
            <GitHub />
          </div>
        </Link>
        <Link href="https://www.instagram.com/khushxxl_04/">
          <div className="hover:animate-bounce ">
            <Instagram />
          </div>
        </Link>
        <Link href="https://twitter.com/khushaal_04">
          <div className="hover:animate-bounce ">
            <Twitter />
          </div>
        </Link>
        <Link href="https://www.linkedin.com/in/khushaal-choithramani-250285208/">
          <div className="hover:animate-bounce ">
            <LinkedIn />
          </div>
        </Link>
        <Link href="">
          <div className="hover:animate-bounce ">
            <Mail />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
