import React from 'react';
import {Card} from "antd";

const GeneralInformations = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div style={{width: 400 }}>
            <Card style={{ width: 500 , borderRadius: 30}}> {/* Adjust the value of the width property here */}
                <h2 style={{ fontSize: '30px' }}>General Information</h2>
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
                    <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-full px-3">
                            <label className="block uppercase tracking-wide text-black-700 text-xs font-bold mb-2" htmlFor="grid-email">
                                Email
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3" id="grid-password" type="password" placeholder="username@example.com" />
                        </div>
                    </div>

                    <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-black-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                First Name
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Adela" />
                        </div>
                        <div className="md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-black-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Last Name
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4" id="grid-last-name" type="text" placeholder="Parkson" />
                        </div>
                    </div>
                    <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-full px-3">
                            <label className="block uppercase tracking-wide text-black-700 text-xs font-bold mb-2" htmlFor="grid-positionheld">
                                Position held
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3" id="grid-positionheld" type="password" placeholder="Directrice" />
                        </div>
                    </div>
                    <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-full px-3">
                            <label className="block uppercase tracking-wide text-black-700 text-xs font-bold mb-2" htmlFor="grid-collectivecrech">
                                Siret the collective crech
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3" id="grid-collectivecrech" type="password" placeholder="49336137200011" />
                        </div>
                    </div>
                    <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-full px-3">
                            <label className="block uppercase tracking-wide text-black-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                Siret the collective crech
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3" id="grid-password" type="password" placeholder="49336137200011" />
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default GeneralInformations;
