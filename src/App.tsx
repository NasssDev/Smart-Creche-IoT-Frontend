import {Routes, Route} from "react-router-dom";
import {Home} from "./pages/Home";
import {SideBar} from "./components/SideBar.tsx";
import {Dashboard} from "./pages/Dashboard.tsx";
import {Events} from "./pages/Events.tsx";
import {Profile} from "./pages/Profile.tsx";
import {SignIn} from "./pages/SignIn.tsx";
import {SignUp} from "./pages/SignUp.tsx";
import {SignUp2} from "./pages/SignUp2.tsx";
import {ForgetPassword} from "./pages/ForgetPassword.tsx";
import {ForgetPasswordOTP} from "./pages/ForgetPasswordOTP.tsx";
import {ForgetPasswordChange} from "./pages/ForgetPasswordChange.tsx";
import {ForgetPasswordChanged} from "./pages/ForgetPasswordChanged.tsx";
import CopyrightNotice from "./components/CopyrightNotice.tsx";
import {useState} from "react";
import ProtectedRoute from "./route/ProtectedRoute.tsx"
import {ErrorPage} from "./pages/ErrorPage.tsx";
// import {AuthProvider} from "./context/AuthContext.tsx"

function App() {

    const [isConnected, setIsConnected] = useState(sessionStorage.token != null)

    const [isError, setIsError] = useState(false);


    return <>
        {/*<AuthProvider>*/}
            <div className="flex flex-col">
                {isConnected && <SideBar/>}
                <div
                    className={isConnected ? "flex-1 overflow-hidden px-10 ml-64 h-screen max-h-full" : "flex-1 w-full overflow-hidden mx-auto h-screen max-h-full"}>
                    <Routes>
                        <Route path="/" element={
                            <ProtectedRoute>
                                <Home/>
                            </ProtectedRoute>
                        }/>
                        <Route path="/dashboard" element={
                            <ProtectedRoute>
                                <Dashboard/>
                            </ProtectedRoute>
                        }/>
                        <Route path="/events" element={
                            <ProtectedRoute>
                                <Events/>
                            </ProtectedRoute>
                        }/>
                        <Route path="/profile" element={
                            <ProtectedRoute>
                                <Profile/>
                            </ProtectedRoute>
                        }/>
                        <Route path="/sign-in" element={<SignIn setIsConnected={setIsConnected} isError={isError}
                                                                setIsError={setIsError}/>}/>
                        <Route path="/sign-up" element={<SignUp isError={isError} setIsError={setIsError}/>}/>
                        <Route path="/sign-up2" element={<SignUp2/>}/>
                        <Route path="/ForgetPassword" element={<ForgetPassword/>}/>
                        <Route path="/ForgetPasswordOTP" element={<ForgetPasswordOTP/>}/>
                        <Route path="/ForgetPasswordChange" element={<ForgetPasswordChange/>}/>
                        <Route path="/ForgetPasswordChanged" element={<ForgetPasswordChanged/>}/>

                        <Route path="*" element={<ErrorPage />}/>
                    </Routes>
                    {isConnected && <CopyrightNotice/>}
                </div>
            </div>
        {/*</AuthProvider>*/}
    </>
}

export default App
