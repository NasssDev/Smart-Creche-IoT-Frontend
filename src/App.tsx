// import { useState } from 'react'
import {Routes, Route} from "react-router-dom";

import {Home} from "./pages/Home";
import {SideBar} from "./components/SideBar.tsx";
import {Dashboard} from "./pages/Dashboard.tsx";
import {Events} from "./pages/Events.tsx";
import {Profile} from "./pages/Profile.tsx";
import {Logout} from "./pages/logout.tsx";

function App() {
    // const [count, setCount] = useState(0)

    return <>
        <div className="flex">
            <SideBar/>
            <div className="flex-1 max-w-full" >
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path="/events" element={<Events/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/logout" element={<Logout/>}/>
                </Routes>
            </div>
        </div>
    </>
}

export default App
