import { Card, Input } from 'antd';
import {FormEvent} from "react";


const GeneralInformations = () => {
    const handleSubmit = (event:FormEvent) => {
        event.preventDefault();
        // Handle form submission logic here
    };

    return (
        <Card className="w-400 rounded-3xl shadow-lg">
            <h2 className="text-3xl">General Information</h2>
            &nbsp;
            &nbsp;
            <form onSubmit={handleSubmit}>
                <div className="mb-2">
                    <label
                        className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
                        htmlFor="grid-email"
                    >
                        Email
                    </label>
                    <Input
                        size="small"
                        className="text-gray-700 rounded py-1 px-3"
                        id="grid-email"
                        type="email"
                        placeholder="username@example.com"
                    />
                </div>

                <div className="mb-2">
                    <label
                        className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
                        htmlFor="grid-first-name"
                    >
                        First Name
                    </label>
                    <Input
                        size="small"
                        className="text-gray-700 rounded py-1 px-3"
                        id="grid-first-name"
                        type="text"
                        placeholder="Adela"
                    />
                </div>

                <div className="mb-2">
                    <label
                        className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
                        htmlFor="grid-last-name"
                    >
                        Last Name
                    </label>
                    <Input
                        size="small"
                        className="text-gray-700 rounded py-1 px-3"
                        id="grid-last-name"
                        type="text"
                        placeholder="Parkson"
                    />
                </div>

                <div className="mb-2">
                    <label
                        className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
                        htmlFor="grid-positionheld"
                    >
                        Position held
                    </label>
                    <Input
                        size="small"
                        className="text-gray-700 rounded py-1 px-3"
                        id="grid-positionheld"
                        type="text"
                        placeholder="Directrice"
                    />
                </div>

                <div className="mb-2">
                    <label
                        className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
                        htmlFor="grid-collectivecrech"
                    >
                        Siret the collective crech
                    </label>

                    <Input
                        size="small"
                        className="text-gray-700 rounded py-1 px-3"
                        id="grid-collectivecrech"
                        type="number"
                        placeholder="49336137200011"
                    />
                </div>

                <div className="mb-2">
                    <label
                        className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
                        htmlFor="grid-password"
                    >
                        Password
                    </label>
                    <Input.Password
                        size="small"
                        className="text-gray-700 rounded py-1 px-3"
                        id="grid-password"
                        placeholder="***************"
                    />
                </div>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
                    type="submit"
                >
                    Modify
                </button>

            </form>
        </Card>
    );
};

export default GeneralInformations;
