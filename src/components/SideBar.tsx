import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

export const SideBar = () => {
    const [activLink, setActivLink] = useState<string>("");

    useEffect(() => {
        const storedActivLink = localStorage.getItem("activLink");
        if (storedActivLink) {
            setActivLink(storedActivLink);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("activLink", activLink);
    }, [activLink]);

    return (
        <aside
            className="flex flex-col w-64 h-screen max-h-full py-8 overflow-y-auto border-r rtl:border-r-0 rtl:border-l bg-purple-50 fixed">
            <Link to="/" onClick={() => setActivLink("/")}>
                <img className="mx-auto h-15" src="/smartcrech.svg" alt="logo avec écrit smart crech"></img>
            </Link>
            <div className="flex flex-col justify-between flex-1 mt-6">
                <nav className="ml-3 space-y-3 ">
                    <Link
                        className={activLink === "/" ? "flex items-center px-3 py-2 transition-colors duration-300 transform rounded-lg hover:text-blue-700 text-blue-900 link-side-bar-active font-bold" : "link-side-bar"}
                        onClick={() => setActivLink("/")} to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
                        </svg>

                        <span
                            className={activLink === "/" ? "mx-2 text-sm font-bold" : "mx-2 text-sm font-medium"}>Home</span>
                    </Link>

                    <Link
                        className={activLink === "/dashboard" ? "flex items-center px-3 py-2 transition-colors duration-300 transform rounded-lg hover:text-blue-700 text-blue-900 link-side-bar-active font-bold" : "link-side-bar"}
                        to="/dashboard" onClick={() => setActivLink("/dashboard")}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"/>
                        </svg>

                        <span
                            className={activLink === "/dashboard" ? "mx-2 text-sm font-bold" : "mx-2 text-sm font-medium"}>Dashboard</span>
                    </Link>

                    <Link
                        className={activLink === "/events" ? "flex items-center px-3 py-2 transition-colors duration-300 transform rounded-lg hover:text-blue-700 text-blue-900 link-side-bar-active font-bold" : "link-side-bar"}
                        to="/events" onClick={() => setActivLink("/events")}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"/>
                        </svg>

                        <span
                            className={activLink === "/events" ? "mx-2 text-sm font-bold" : "mx-2 text-sm font-medium"}>Events</span>
                    </Link>

                    <Link
                        className={activLink === "/profile" ? "flex items-center px-3 py-2 transition-colors duration-300 transform rounded-lg hover:text-blue-700 text-blue-900 link-side-bar-active font-bold" : "link-side-bar"}
                        to="/profile" onClick={() => setActivLink("/profile")}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"/>
                        </svg>

                        <span
                            className={activLink === "/profile" ? "mx-2 text-sm font-bold" : "mx-2 text-sm font-medium"}>Profile</span>
                    </Link>
                    <Link
                        className={activLink === "/logout" ? "flex items-center px-3 py-2 transition-colors duration-300 transform rounded-lg hover:text-blue-700 text-blue-900 link-side-bar-active font-bold" : "link-side-bar"}
                        to="/logout" onClick={() => setActivLink("/logout")}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="w-5 h-5">
                            <g clip-path="url(#clip0_32_2951)">
                                <path d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17ZM9 8V6C9 4.34 10.34 3 12 3C13.66 3 15 4.34 15 6V8H9Z" fill="#A3AED0"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_32_2951">
                                    <rect width="24" height="24" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>

                        <span
                            className={activLink === "/logout" ? "mx-2 text-sm font-bold" : "mx-2 text-sm font-medium"}>Logout</span>
                    </Link>
                </nav>
            </div>
        </aside>
    )
}