import {FormEvent, useState, ChangeEvent, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {API_URL} from "../constants/constants.tsx";
import {ModalForVisitor} from "../components/ModalForVisitor.tsx";
import {ErrorPop} from "../components/responsePopUp/ErrorPop.tsx";


export const SignIn = ({setIsConnected, isError, setIsError}: {
    setIsConnected: React.Dispatch<React.SetStateAction<boolean>>,
    isError: boolean,
    setIsError: React.Dispatch<React.SetStateAction<boolean>>
}) => {

    useEffect(() => {
        void fetch(API_URL + '/role')
            .then(response => response.json())
            .then((data:{code:number}) => {
                    if (data?.code === 900) {
                        console.log(900);
                    }
                }
            )
    }, []);

    const navigateTo = useNavigate();
    const [SignInFormData, setSignInFormData] = useState({email: '', password: '',});

    const [isModalForVisitorOpen, setIsModalForVisitorOpen] = useState(false)

    const handleOpenModal = () => {
        setIsModalForVisitorOpen(true);
    }

    const handleCloseModal = () => {
        setIsModalForVisitorOpen(false);
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetch(API_URL + '/signin', {
            method: 'POST',
            headers: new Headers({
                "Content-type": "application/json"
            }),
            body: JSON.stringify(SignInFormData),
        })
            .then(response => response.json())
            .then((data) => {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                if (data.code !== 200) {
                    setIsError(true);
                }
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                if (data.payload && data.payload.token) {
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument,@typescript-eslint/no-unsafe-member-access
                    sessionStorage.setItem("token", data.payload.token);
                    setIsConnected(true)
                    navigateTo('/');
                }
            })
            .catch(error => {
                console.error('Error', error);
            });
    };


    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setSignInFormData(prevState => {
                return {
                    ...prevState,
                    [event.target.name]: event.target.value,
                }
            }
        );
    }

    const closeErrorPop = () => {
        setIsError(false);
    };

    return (
        <>
            <button
                type="button"
                className="inline-block fixed mt-12 rounded-br-xl rounded-tr-xl bg-yellow-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                onClick={handleOpenModal}
            >
                Click for test
            </button>
            <div className="flex justify-center items-center h-screen">
                <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                    <div className="mb-4 text-40 text-crech-blue font-semibold">
                        Sign In
                    </div>
                    <div className="mb-4 text-gray-500">
                        <p>Welcome Back, enter below login details and access your Smart’Creche account.</p>
                    </div>
                    <div className="mb-4">
                        <label className="text-black" htmlFor="email">Email*</label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:border-blue-500 focus:shadow-outline h-10"
                            id="email" type="text" name="email" placeholder="username@example.com"
                            onChange={handleChange} value={SignInFormData.email}/>
                    </div>
                    <div className="mb-4">
                        <label className="text-black" htmlFor="password">Password*</label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline h-10"
                            id="password" type="password" name="password" placeholder="Min. 8 characters"
                            onChange={handleChange} value={SignInFormData.password}/>
                    </div>
                    <div className="mb-4 flex items-center justify-between">
                        <div className="flex items-center">
                            <input type="checkbox"
                                   className="h-4 w-4 text-blue-200 focus:ring-blue border-gray-200 rounded"
                                   id="KeepMeLoggedIn"/>
                            <label htmlFor="KeepMeLoggedIn" className="ml-2 block text-sm text-gray-600">
                                Keep me logged in
                            </label>
                        </div>
                        {/* <Link to="/forget-password" className="text-crech-blue">Forget password?</Link> */}
                        <Link to="/sign-in" className="text-crech-blue font-semibold">Forget password?</Link>
                    </div>
                    <div className="mb-4">
                        <button
                            className="rounded-md py-2 px-6 text-md inline-table w-full items-center text-center bg-crech-blue text-white transition duration-300 ease-in-out transform hover:bg-blue-600 active:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-300">Got
                            It
                        </button>
                    </div>
                    <div className="flex items-center">
                        <label htmlFor="KeepMeLoggedIn" className="text-gray">
                            Not registered yet?
                        </label>
                        <Link to="/sign-up" className="ml-2 font-semibold text-crech-blue">Create an Account</Link>
                    </div>
                    <footer className="mb-4 flex justify-center items-center absolute bottom-0">
                        <div className="text-gray-400">
                            © 2022 Smart’Creche. All Rights Reserved. Made with love by HETIC students!
                        </div>
                    </footer>
                </form>
                <div className="relative w-1/2 h-screen">
                    <div className="bg-crech-blue rounded-bl-170">
                        <div className="flex justify-center items-center min-h-screen">
                            <svg width="403" height="403" viewBox="0 0 403 403" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M138.827 128.02C141.118 125.73 144.223 124.444 147.461 124.444C150.7 124.444 153.805 125.73 156.095 128.02L220.185 192.133C222.474 194.423 223.76 197.529 223.76 200.767C223.76 204.005 222.474 207.111 220.185 209.401L156.095 273.515C154.962 274.65 153.615 275.55 152.134 276.164C150.652 276.778 149.064 277.095 147.46 277.096C145.856 277.096 144.267 276.781 142.785 276.167C141.303 275.554 139.956 274.655 138.821 273.521C137.687 272.387 136.787 271.041 136.172 269.559C135.558 268.077 135.241 266.489 135.241 264.885C135.24 263.281 135.556 261.693 136.169 260.211C136.782 258.728 137.681 257.382 138.815 256.247L194.283 200.767L138.815 145.288C136.526 142.997 135.24 139.892 135.24 136.654C135.24 133.415 136.526 130.31 138.815 128.02H138.827Z"
                                    fill="#F4F7FE"/>
                                <path
                                    d="M28.3687 200.767C28.3687 197.528 29.6553 194.422 31.9455 192.132C34.2357 189.842 37.3419 188.555 40.5808 188.555H211.514C214.753 188.555 217.859 189.842 220.149 192.132C222.439 194.422 223.726 197.528 223.726 200.767C223.726 204.006 222.439 207.112 220.149 209.403C217.859 211.693 214.753 212.979 211.514 212.979H40.5808C37.3419 212.979 34.2357 211.693 31.9455 209.403C29.6553 207.112 28.3687 204.006 28.3687 200.767Z"
                                    fill="#F4F7FE"/>
                                <path
                                    d="M199.338 66.4339C199.338 63.1951 200.625 60.0889 202.915 57.7987C205.205 55.5084 208.312 54.2218 211.551 54.2218H297.035C300.243 54.2218 303.419 54.8536 306.382 56.081C309.345 57.3084 312.038 59.1075 314.306 61.3755C316.574 63.6435 318.373 66.336 319.6 69.2993C320.828 72.2626 321.46 75.4386 321.46 78.6461V322.889C321.46 329.366 318.886 335.579 314.306 340.159C309.725 344.739 303.513 347.313 297.035 347.313H211.551C208.312 347.313 205.205 346.026 202.915 343.736C200.625 341.446 199.338 338.339 199.338 335.101C199.338 331.862 200.625 328.756 202.915 326.465C205.205 324.175 208.312 322.889 211.551 322.889H297.035V78.6461H211.551C209.947 78.6461 208.359 78.3302 206.877 77.7165C205.395 77.1027 204.049 76.2032 202.915 75.0692C201.781 73.9352 200.882 72.589 200.268 71.1073C199.654 69.6257 199.338 68.0377 199.338 66.4339Z"
                                    fill="#F4F7FE"/>
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
            {isModalForVisitorOpen && <ModalForVisitor onClose={handleCloseModal}/>}
            {isError && <div onClick={closeErrorPop}
                             className="fixed inset-0 flex justify-center items-center z-[1055] bg-black bg-opacity-50">
                <div className="bg-white rounded-lg shadow-lg"><ErrorPop message="An error occured during sign in!"/>
                </div>
            </div>}
        </>
    )
}

