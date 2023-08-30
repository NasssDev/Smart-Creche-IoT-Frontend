import { Link } from 'react-router-dom';

export const ErrorPage = () => {
    return (
        <div className="h-full min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-10">
            <h1 className="text-4xl text-sky-700 mb-2">Oops! Error 404</h1>
            <div className="text-center">
                <p className="text-2xl text-gray-600 mb-4">The page you're looking for was not found.</p>
                <Link to="/" className="text-sky-700 hover:underline">Go back to the homepage</Link>
            </div>
            <p className={"font-bold text-5xl md:text-8xl"} >😞 404 😞</p>
        </div>
    );
};