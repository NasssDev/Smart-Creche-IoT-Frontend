import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import { useLocation } from 'react-router-dom';

import { Home } from "./pages/Home";
import { SideBar } from "./components/SideBar.tsx";
import { Dashboard } from "./pages/Dashboard.tsx";
import { Events } from "./pages/Events.tsx";
import { Profile } from "./pages/Profile.tsx";
import { Logout } from "./pages/logout.tsx";
import { SignIn } from "./pages/SignIn.tsx";
import { SignUp } from "./pages/SignUp.tsx";
import { SignUp2 } from "./pages/SignUp2.tsx";
import { ForgetPassword } from "./pages/ForgetPassword.tsx";
import { ForgetPasswordOTP } from "./pages/ForgetPasswordOTP.tsx";
import { ForgetPasswordChange } from "./pages/ForgetPasswordChange.tsx";
import { ForgetPasswordChanged } from "./pages/ForgetPasswordChanged.tsx";
import CopyrightNotice from "./components/CopyrightNotice.tsx";

function App() {
    const [count] = useState(1)
    const location = useLocation();

    return <>
        <div className="flex flex-col">
            {location.pathname !== '/sign-in' && <SideBar />}
            {location.pathname !== '/sign-up' && <SideBar />}
            {location.pathname !== '/sign-up2' && <SideBar />}
            {location.pathname !== '/ForgetPassword' && <SideBar />}
            {location.pathname !== '/ForgetPasswordChange' && <SideBar />}
            {location.pathname !== '/ForgetPasswordChanged' && <SideBar />}
            {location.pathname !== '/ForgetPasswordOTP' && <SideBar />}
            <div className={count === 1 ? "flex-1 overflow-hidden ml-64 px-10 h-screen max-h-full" : "flex-1 w-full overflow-hidden mx-auto px-10 h-screen max-h-full"} >
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/sign-in" element={<SignIn />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/sign-up2" element={<SignUp2 />} />
                    <Route path="/ForgetPassword" element={<ForgetPassword />} />
                    <Route path="/ForgetPasswordOTP" element={<ForgetPasswordOTP />} />
                    <Route path="/ForgetPasswordChange" element={<ForgetPasswordChange />} />
                    <Route path="/ForgetPasswordChanged" element={<ForgetPasswordChanged />} />
                </Routes>
                <CopyrightNotice />
            </div>
        </div>
    </>
}

export default App
