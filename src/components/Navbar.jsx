import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const location = useLocation();
  const [pathName, setPathName] = useState("");

  useEffect(() => {
    setPathName(() => location.pathname);
  }, [location]);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-slate-800 shadow-lg">
      <h1 className="text-2xl font-bold text-white">Feedback Wall 💬</h1>
      <Link
        to={pathName === "/" ? "/add" : "/"}
        className="bg-blue-500 hover:bg-blue-600 transition px-4 py-2 rounded-lg font-medium"
      >
        {pathName === "/" ? "Leave an impression" : "See all impressions"}
      </Link>
    </nav>
  );
}
