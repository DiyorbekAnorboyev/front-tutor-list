"use client";
import axios from "./components/service/api.js";
import Link from "next/link";

import { useState, ReactNode, useEffect } from "react";
import Students from "./students/index";
import { usePathname } from "next/navigation";
import { useLocation } from "react-router-dom";

interface LayoutProps {
  components: ReactNode;
}
const Home: React.FC<LayoutProps> = ({ components }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [theme, setTheme] = useState<any>();

  const onDark = async () => {
    setDarkMode(darkMode ? false : true);
    await window.localStorage.setItem("darkMode", `${darkMode}`);
  };

  useEffect(() => {
    let app = window.localStorage.getItem("darkMode");
    setTheme(app);
  }, [darkMode]);

  let modeColor = theme === "false" ? "FFFFFF" : "000000";

  const router = usePathname();

  // const handleSubmit = async (e: FormEvent) => {
  //   e.preventDefault();

  //   try {
  //     const data = await axios.get("/Group");

  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <>
      <body
        className={`${
          theme === "false" ? "dark-mode" : "bg-stone-100"
        } h-screen flex flex-col`}
      >
        <div className="mx-auto flex w-full items-center justify-between border-b border-gray-300 p-6 ">
          <div className="flex ">
            <h1>LOGO</h1>
          </div>

          <div className="w-56 flex gap-x-3 justify-between ">
            <a href="#" className="text-sm font-semibold leading-6 ">
              {new Date().toLocaleDateString("en-GB")}
            </a>
            <label className="switch">
              <input onClick={onDark} type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
        {/* ------------------- */}
        <div className="flex h-full">
          <div className="w-24 h-auto flex flex-col align-center border-r border-gray-300 p-2 gap-2 ">
            <Link href="/">
              <div
                className={`flex-col h-auto text-center p-2 hover:bg-violet-500 cursor-pointer border-b border-gray-300 rounded-lg ${
                  router === "/" ? "bg-violet-500" : ""
                }`}
              >
                <img
                  className=" mx-auto"
                  src={`https://img.icons8.com/?size=35&id=48800&format=png&color=${modeColor}`}
                />
                <h5>Students</h5>
              </div>
            </Link>
            <Link href="/teachers">
              {" "}
              <div
                className={`flex-col h-auto text-center p-2 hover:bg-violet-500 cursor-pointer border-b border-gray-300 rounded-lg ${
                  router === "/teachers" ? "bg-violet-500" : ""
                }`}
              >
                <img
                  className=" mx-auto"
                  src={`https://img.icons8.com/?size=35&id=38HJBFwphJ3I&format=png&color=${modeColor}`}
                />
                Teachers
              </div>
            </Link>
            <Link href="/groups">
              <div
                className={`flex-col h-auto text-center p-2 hover:bg-violet-500 cursor-pointer border-b border-gray-300 rounded-lg ${
                  router === "/groups" ? "bg-violet-500" : ""
                }`}
              >
                <img
                  className=" mx-auto"
                  src={`https://img.icons8.com/?size=35&id=3734&format=png&color=${modeColor}`}
                />
                Groups
              </div>
            </Link>
            <Link href="/settings">
              <div
                className={`flex-col h-auto text-center p-2 hover:bg-violet-500 cursor-pointer border-b border-gray-300 rounded-lg ${
                  router === "/settings" ? "bg-violet-500" : ""
                }`}
              >
                <img
                  className=" mx-auto"
                  src={`https://img.icons8.com/?size=35&id=364&format=png&color=${modeColor}`}
                />
                Settings
              </div>
            </Link>
            <Link href="/edits">
              <div
                className={`flex-col h-auto text-center p-2 hover:bg-violet-500 cursor-pointer border-b border-gray-300 rounded-lg ${
                  router === "/edits" ? "bg-violet-500" : ""
                }`}
              >
                <img
                  className=" mx-auto"
                  src={`https://img.icons8.com/?size=35&id=49&format=png&color=${modeColor}`}
                />
                Edits
              </div>
            </Link>
            <Link href="/checks">
              <div
                className={`flex-col h-auto text-center p-2 hover:bg-violet-500 cursor-pointer border-b border-gray-300 rounded-lg ${
                  router === "/checks" ? "bg-violet-500" : ""
                }`}
              >
                <img
                  className=" mx-auto"
                  src={`https://img.icons8.com/?size=35&id=6552&format=png&color=${modeColor}`}
                />
                Checks
              </div>
            </Link>
          </div>
          <div className="w-full p-1">
            <div className=" h-full w-full border border-gray-300 rounded-md">
              {components ? components : <Students />}
            </div>
          </div>
        </div>
      </body>
    </>
  );
};
export default Home;
