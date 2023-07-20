import { useState } from 'react'
import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { SideBar } from "./components/SideBar.tsx";
import { Dashboard } from "./pages/Dashboard.tsx";
import { Events } from "./pages/Events.tsx";
import { Profile } from "./pages/Profile.tsx";
import { Logout } from "./pages/logout.tsx";
import { SignIn } from "./pages/SignIn.tsx";
import { SignUp } from "./pages/SignUp.tsx";
import { SignUp2 } from "./pages/SignUp2.tsx";
import { Detail } from "./pages/Detail.tsx";

function App() {
    const [count] = useState(1)

    return <>
        <div className="flex">
            {count === 1 && <SideBar/>}
            <div className={count === 1 ? "flex-1 max-w-full overflow-hidden ml-64 px-10" : "flex-1 max-w-full overflow-hidden mx-auto px-10"} >
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/sign-in" element={<SignIn />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/sign-up2" element={<SignUp2 />} />
                    <Route path="/detail" element={<Detail />} />
                </Routes>
            </div>
        </div>
    </>
}

export default App
