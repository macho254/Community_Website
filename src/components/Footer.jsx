// export default function Footer() {
//   return (
//     <footer className="bg-[#111] p-4 border-t border-gold text-center text-sm text-gray-400">
//       <p>© {new Date().getFullYear()} BitBridge. All rights reserved.</p>
//     </footer>
//   );
// }
// src/components/Footer.jsx
// src/components/Footer.jsx
import { FaTelegramPlane, FaLinkedin, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


export default function Footer() {
  return (
    <footer className="bg-[#111]  text-gray-300 py-4">
      <div className="container mx-auto flex flex-col items-center space-y-1">
        {/* Social media icons */}
        <div className="flex space-x-6 text-xl">
          <a
            href="https://t.me/+bjFSNwZJFZY4MGNk"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition hover:translate-y-1"
          >
            <FaTelegramPlane />
          </a>
          <a
            href="https://x.com/Maore_Antony?t=JTvi4QNXrPGGVVRaITd2Jg&s=09"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition hover:translate-y-1"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/maore-antony%E2%9A%A1-600130240?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition hover:translate-y-1"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.tiktok.com/@maore_antony?_t=ZM-8z2JGjCXs6Y&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition hover:translate-y-1"
          >
            <FaTiktok />
          </a>
        </div>

        {/* Community slogan */}
        <p className="italic text-sm">“we grow as you grow”</p>

        {/* Copyright */}
        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} <span className="text-gold">BitBridge</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
