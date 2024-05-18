'use client';
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
    const [sessionId, setSessionId] = useState(1);
  return (
    <nav className="w-full h-16 bg-slate-300 px-5 flex items-center justify-between">
        <Link href="/" className="btn bg-black text-white hover:bg-slate-400 border-2 hover:border-black">
          Config
        </Link>
        <p className="text-black font-semibold text-xl">Session Id: <span>{sessionId}</span></p>
    </nav>
  );
};

export default Navbar