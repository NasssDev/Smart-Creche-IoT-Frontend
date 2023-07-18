import { Card } from 'antd';

const GeneralInformations = () => {
    return (
            <Card className="w-400 rounded-3xl shadow-lg">
                <h2 className="text-3xl">General Information</h2>

                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
                    <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-full px-3">
                            <label className="block uppercase tracking-wide text-black-700 text-xs font-bold mb-2" htmlFor="grid-email">
                                Email
                            </label>
                            <input
                                className="appearance-none block w-full bg-blue-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3"
                                id="grid-password"
                                type="email"
                                placeholder="username@example.com"
                            />
                        </div>
                    </div>

                    <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-black-700 text-xs font-bold mb-2" htmlFor="grid-first-name" >
                                First Name
                            </label>
                            <input
                                className="appearance-none block w-full bg-blue-200 text-gray-700 border border-gray-200 rounded py-3 px-4"
                                id="grid-last-name"
                                type="text"
                                placeholder="Adela"
                            />
                        </div>
                        <div className="md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-black-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Last Name
                            </label>
                            <input
                                className="appearance-none block w-full bg-blue-200 text-gray-700 border border-gray-200 rounded py-3 px-4"
                                id="grid-last-name"
                                type="text"
                                placeholder="Parkson"
                            />
                        </div>
                    </div>
                    <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-full px-3">
                            <label className="block uppercase tracking-wide text-black-700 text-xs font-bold mb-2" htmlFor="grid-positionheld">
                                Position held
                            </label>
                            <input
                                className="appearance-none block w-full bg-blue-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3"
                                id="grid-positionheld"
                                type="text"
                                placeholder="Directrice"
                            />
                        </div>
                    </div>
                    <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-full px-3">
                            <label className="block uppercase tracking-wide text-black-700 text-xs font-bold mb-2" htmlFor="grid-collectivecrech">
                                Siret the collective crech
                            </label>
                            <input
                                className="appearance-none block w-full bg-blue-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3"
                                id="grid-collectivecrech"
                                type="number"
                                placeholder="49336137200011"
                            />
                        </div>
                    </div>
                    <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-full px-3">
                            <label className="block uppercase tracking-wide text-black-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                Password
                            </label>
                            <input
                                className="appearance-none block w-full bg-blue-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3"
                                id="grid-password"
                                type="password"
                                placeholder="***************"
                            />
                        </div>
                    </div>
                </div>
            </Card>
    );
};

export default GeneralInformations;
