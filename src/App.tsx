// import { useState } from 'react'
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
import { ForgetPassword } from "./pages/ForgetPassword.tsx";
import { ForgetPasswordOTP } from "./pages/ForgetPasswordOTP.tsx";
import { ForgetPasswordChange } from "./pages/ForgetPasswordChange.tsx";
import { ForgetPasswordChanged } from "./pages/ForgetPasswordChanged.tsx";
import CopyrightNotice from "./components/CopyrightNotice.tsx";

function App() {
    // const [count] = useState(1)

    return <>
        <div className="flex flex-col">
            {sessionStorage.token && <SideBar />}
            <div className={sessionStorage.token ? "flex-1 overflow-hidden px-10 ml-64 h-screen max-h-full" : "flex-1 w-full overflow-hidden mx-auto h-screen max-h-full"} >
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
                {sessionStorage.token && <CopyrightNotice/>}
            </div>
        </div>
    </>
}

export default App
