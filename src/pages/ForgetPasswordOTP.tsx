import { FormEvent, useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';


export const ForgetPasswordOTP = () => {

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('a')
        fetch('https://iot-backend-ym14.onrender.com/api', {
            method: 'POST',
            mode: "cors",
            body: JSON.stringify(ForgetPasswordOTP),
            credentials: "include",
            headers: new Headers({
                "Content-type": "application/x-www-form-urlencoded",
            })
        })
            .then(response => response.json()).then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error('Error', error);
            });
    };

    const [ForgetPasswordOTP, setForgetPasswordOTP] = useState({});

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setForgetPasswordOTP(prevState => {
            return {
                ...prevState,
                [event.target.name]: event.target.value,
            }
        }
        );

        setForgetPasswordOTP(prevState => {
            console.log(prevState);
            return prevState;
        })
    }

    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                    <div className="mb-4 text-40">
                        OTP Verification
                    </div>
                    <div className="mb-4 text-gray-500">
                        <p>We sent a 6 digits one time password.</p>
                    </div>
                    <div className="mb-4">
                        <label className="text-black" htmlFor="otpcode">OTP Code</label>
                        <input className="appearance-none border rounded w-full py-2 px-3 text-gray-400 focus:outline-none focus:shadow-outline h-10" id="" type="number" placeholder="XXXXXX" onChange={handleChange} required />
                    </div>
                    <div className="mb-4 text-gray-500">
                        <p>You can resend OTP after 02:30 minutes. Resend. </p>
                    </div>
                    <div className="mb-4">
                        <button className="rounded-md py-2 px-6 text-md inline-table w-full items-center text-center bg-crech-blue text-white" type="submit">Reset Password</button>
                    </div>
                    <div className="mb-4">
                        <button className="rounded-md py-2 px-6 text-md inline-table w-full items-center text-center bg-gray-500 text-white" type="submit">Cancel</button>
                    </div>
                    <div className="flex items-center">
                        <label htmlFor="KeepMeLoggedIn" className="text-gray">
                            Not registered yet?
                        </label>
                        <Link to="/sign-up" className="text-crech-blue">Create an Account</Link>
                    </div>
                    <footer className="mb-4 flex justify-center items-center absolute bottom-0">
                        <div className="text-gray-400">
                            © 2022 Smart’Creche. All Rights Reserved. Made with love HETIC students!
                        </div>
                    </footer>
                </form>
                <div className="relative w-1/2 h-screen">
                    <div className="bg-crech-blue rounded-bl-170">
                        <div className="flex justify-center items-center min-h-screen">
                            <svg width="359" height="359" viewBox="0 0 359 359" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26.9502 66.1256C26.9502 76.5155 31.0776 86.4799 38.4244 93.8267C45.7711 101.173 55.7355 105.301 66.1254 105.301C76.5154 105.301 86.4797 101.173 93.8265 93.8267C101.173 86.4799 105.301 76.5155 105.301 66.1256C105.301 55.7357 101.173 45.7713 93.8265 38.4245C86.4797 31.0778 76.5154 26.9504 66.1254 26.9504C55.7355 26.9504 45.7711 31.0778 38.4244 38.4245C31.0776 45.7713 26.9502 55.7357 26.9502 66.1256Z" fill="#F4F7FE" />
                                <path d="M149.046 66.1256C149.046 76.5155 153.173 86.4799 160.52 93.8267C167.867 101.173 177.831 105.301 188.221 105.301C198.611 105.301 208.575 101.173 215.922 93.8267C223.269 86.4799 227.396 76.5155 227.396 66.1256C227.396 55.7357 223.269 45.7713 215.922 38.4245C208.575 31.0778 198.611 26.9504 188.221 26.9504C177.831 26.9504 167.867 31.0778 160.52 38.4245C153.173 45.7713 149.046 55.7357 149.046 66.1256Z" fill="#F4F7FE" />
                                <path d="M253.699 66.1256C253.699 76.5155 257.827 86.4799 265.173 93.8267C272.52 101.173 282.485 105.301 292.874 105.301C303.264 105.301 313.229 101.173 320.576 93.8267C327.922 86.4799 332.05 76.5155 332.05 66.1256C332.05 55.7357 327.922 45.7713 320.576 38.4245C313.229 31.0778 303.264 26.9504 292.874 26.9504C282.485 26.9504 272.52 31.0778 265.173 38.4245C257.827 45.7713 253.699 55.7357 253.699 66.1256Z" fill="#F4F7FE" />
                                <path d="M26.9502 170.779C26.9502 181.169 31.0776 191.133 38.4244 198.48C45.7711 205.827 55.7355 209.954 66.1254 209.954C76.5154 209.954 86.4797 205.827 93.8265 198.48C101.173 191.133 105.301 181.169 105.301 170.779C105.301 160.389 101.173 150.425 93.8265 143.078C86.4797 135.731 76.5154 131.604 66.1254 131.604C55.7355 131.604 45.7711 135.731 38.4244 143.078C31.0776 150.425 26.9502 160.389 26.9502 170.779Z" fill="#F4F7FE" />
                                <path d="M149.046 170.779C149.046 181.169 153.173 191.133 160.52 198.48C167.867 205.827 177.831 209.954 188.221 209.954C198.611 209.954 208.575 205.827 215.922 198.48C223.269 191.133 227.396 181.169 227.396 170.779C227.396 160.389 223.269 150.425 215.922 143.078C208.575 135.731 198.611 131.604 188.221 131.604C177.831 131.604 167.867 135.731 160.52 143.078C153.173 150.425 149.046 160.389 149.046 170.779Z" fill="#F4F7FE" />
                                <path d="M253.699 170.779C253.699 181.169 257.827 191.133 265.173 198.48C272.52 205.827 282.485 209.954 292.874 209.954C303.264 209.954 313.229 205.827 320.576 198.48C327.922 191.133 332.05 181.169 332.05 170.779C332.05 160.389 327.922 150.425 320.576 143.078C313.229 135.731 303.264 131.604 292.874 131.604C282.485 131.604 272.52 135.731 265.173 143.078C257.827 150.425 253.699 160.389 253.699 170.779Z" fill="#F4F7FE" />
                                <path d="M26.9502 292.874C26.9502 303.264 31.0776 313.229 38.4244 320.575C45.7711 327.922 55.7355 332.05 66.1254 332.05C76.5154 332.05 86.4797 327.922 93.8265 320.575C101.173 313.229 105.301 303.264 105.301 292.874C105.301 282.484 101.173 272.52 93.8265 265.173C86.4797 257.827 76.5154 253.699 66.1254 253.699C55.7355 253.699 45.7711 257.827 38.4244 265.173C31.0776 272.52 26.9502 282.484 26.9502 292.874Z" fill="#F4F7FE" />
                                <path d="M327.706 288.078C327.706 266.589 310.386 249.165 288.932 248.937V248.902H179.849V248.92C158.307 249.007 140.848 266.502 140.848 288.078C140.848 309.654 158.307 327.148 179.849 327.235V327.253H288.932V327.201C310.386 326.992 327.706 309.567 327.706 288.078Z" fill="#F4F7FE" />
                            </svg>

                            <footer className="mb-4 flex justify-center items-center absolute bottom-0 w-full">
                                <div className="flex justify-center items-center h-full space-x-8">
                                    <a href="#" className="text-white">About</a>
                                    <a href="#" className="text-white">License</a>
                                    <a href="#" className="text-white">Terms of Use</a>
                                    <a href="#" className="text-white">Support</a>
                                </div>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}