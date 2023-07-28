import {FormEvent, useState, ChangeEvent} from 'react';
import {Link} from 'react-router-dom';
import {API_URL} from "../constants/constants.tsx";
import {ErrorPop} from "../components/responsePopUp/ErrorPop.tsx";
import {SuccessPop} from "../components/responsePopUp/SuccessPop.tsx";

export const SignUp = ({isError,setIsError}:{isError:boolean, setIsError:React.Dispatch<React.SetStateAction<boolean>>}) => {

    const [SignUpFormData, setSignUpFormData] = useState({
        siret: '',
        email: '',
        firstName: '',
        lastName: '',
        positionHeld: '',
        password: ''
    });

    const [isSuccess, setIsSuccess] = useState(false);


    const [userInfos, setUserInfos] = useState([])
    console.log(userInfos);
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetch(API_URL + '/signup', {
            method: 'POST',
            body: JSON.stringify(SignUpFormData),
            headers: new Headers({
                "Content-type": "application/json"
            })
        })
            .then(response => response.json())
            .then(data => {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                if(data.code !== 200){
                   setIsError(true);
                }
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                if (data.payload && data.payload.user) {
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument,@typescript-eslint/no-unsafe-member-access
                    setUserInfos(data.payload.user._id);
                    setIsSuccess(true);
                }
            })
            .catch(error => {
                console.error('Error', error);
            });
    };


    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setSignUpFormData(prevState => {
                return {
                    ...prevState,
                    [event.target.name]: event.target.value,
                }
            }
        );
    }

    return (
        <>
            {isError && <ErrorPop message="An error occured during sign up !" />}
            {isSuccess && <SuccessPop message="Signed up Successfully" />}
            <div className="flex flex-row h-full w-full overflow-x-hidden overflow-y-auto">
                <div className="w-2/4 h-full">
                    <form className="pb-4 px-36  w-full mx-auto" onSubmit={handleSubmit}>
                        <div className="mb-4 text-40 text-crech-blue font-semibold">
                            Sign Up
                        </div>
                        <div className="mb-4 text-gray-500">
                            <p>Register on Smart’Creche, and let’s manage your collective crib better.</p>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email*</label>
                            <input
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline h-10"
                                id="username" type="text" required name="email" placeholder="username@example.com"
                                onChange={handleChange} value={SignUpFormData.email}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">First Name*</label>
                            <input
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline h-10"
                                id="firstName" type="text" required name="firstName" placeholder="Joe"
                                onChange={handleChange} value={SignUpFormData.firstName}/>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Last Name*</label>
                            <input
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline h-10"
                                id="lastName" type="text" required name="lastName" placeholder="Doe"
                                onChange={handleChange} value={SignUpFormData.lastName}/>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">position held*</label>
                            <input
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline h-10"
                                id="positionHeld" type="text" required name="positionHeld" placeholder="manager"
                                onChange={handleChange} value={SignUpFormData.positionHeld}/>

                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Siret of the collective
                                crech*</label>
                            <input
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline h-10"
                                id="siret" type="text" required name="siret" placeholder="49336137200011"
                                onChange={handleChange} value={SignUpFormData.siret}/>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Password*</label>
                            <input
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline h-10"
                                id="password" type="password" required name="password" placeholder="Min. 8 characters"
                                onChange={handleChange} value={SignUpFormData.password}/>
                        </div>
                        <div className="mb-2">
                            <button
                                className="rounded-md py-2 px-6 text-md inline-table w-full items-center text-center bg-crech-blue text-white">Got
                                It
                            </button>
                        </div>
                        <div className="flex items-center">
                            <label htmlFor="KeepMeLoggedIn" className="text-gray-900">
                                Already resgitrated?
                            </label>
                            <Link to="/sign-in" className="text-crech-blue font-semibold ml-2">Sign-in</Link>
                        </div>
                    </form>
                    <footer className="py-2 flex justify-center items-center bottom-0">
                        <div className="text-gray-400">
                            © 2022 Smart’Creche. All Rights Reserved. Made with love HETIC students!
                        </div>
                    </footer>
                </div>
                <div className=" w-1/2 flex-shrink-0">
                    <div className="flex justify-center items-center h-full bg-crech-blue rounded-bl-170">
                        <svg width="216" height="234" viewBox="0 0 216 234" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path id="Vector"
                                  d="M138.114 143.265C141.687 144.662 145.178 146.26 148.571 148.052C152.775 150.273 154.384 155.482 152.163 159.687C149.942 163.892 144.733 165.5 140.528 163.279C128.433 156.891 114.939 153.506 100.938 153.506C60.1015 153.506 25.267 182.549 17.626 222.128C16.7246 226.797 12.2087 229.851 7.53973 228.95C2.87048 228.048 -0.18364 223.532 0.717774 218.863C7.47139 183.882 31.8512 155.753 63.777 143.272C40.5376 130.253 24.8312 105.4 24.8312 76.8803C24.8312 34.8722 58.907 0.820465 100.939 0.820465C142.97 0.820465 177.046 34.8725 177.046 76.8803C177.046 105.395 161.345 130.243 138.114 143.265ZM159.825 76.8803C159.825 44.3857 133.462 18.0409 100.939 18.0409C68.4149 18.0409 42.0516 44.3854 42.0516 76.8803C42.0516 109.375 68.4149 135.719 100.939 135.719C133.462 135.719 159.825 109.375 159.825 76.8803ZM163.681 182.198V156.375C163.678 154.846 164.084 153.344 164.856 152.025C165.604 150.747 166.668 149.683 167.946 148.935C169.266 148.163 170.768 147.757 172.297 147.759C173.825 147.757 175.327 148.163 176.647 148.935C177.924 149.683 178.988 150.747 179.737 152.025C180.509 153.344 180.915 154.846 180.912 156.375V182.198H206.478C211.233 182.198 215.088 186.053 215.088 190.808C215.088 195.563 211.233 199.418 206.478 199.418H180.912V224.954C180.915 226.483 180.509 227.984 179.737 229.304C178.988 230.582 177.924 231.646 176.647 232.394C175.327 233.166 173.825 233.572 172.297 233.569C170.768 233.572 169.266 233.166 167.946 232.394C166.668 231.646 165.604 230.582 164.856 229.304C164.084 227.984 163.678 226.483 163.681 224.954V199.418H137.827C133.073 199.418 129.218 195.563 129.218 190.808C129.218 186.053 133.073 182.198 137.827 182.198H163.681Z"
                                  fill="#F4F7FE"/>
                        </svg>
                        <footer className="py-2 flex justify-center items-center fixed bottom-0 w-full">
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
        </>
    )
}





