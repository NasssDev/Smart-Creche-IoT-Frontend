import React, { useState, useEffect } from 'react';
import { Card, Input, Button } from 'antd';

export const API_URL = "https://iot-backend-ym14.onrender.com/api";

const GeneralInformations = () => {
    const [generalInfo, setGeneralInfo] = useState({
        email: '',
        firstName: '',
        lastName: '',
        positionHeld: '',
        siret: '',
        password: '',
    });

    useEffect(() => {
        // Fetch user's general information from the API
        fetchGeneralInfo();
    }, []);

    const fetchGeneralInfo = async () => {
        try {
            const response = await fetch(`${API_URL}/general-info`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
            });

            if (response.ok) {
                const data = await response.json();
                // Update general info state with the data obtained from the API
                setGeneralInfo(data);
            } else {
                console.error('Error fetching general information');
            }
        } catch (error) {
            console.error('Error fetching general information:', error);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Perform form submission logic here
        try {
            const response = await fetch(`${API_URL}/update-general-info`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(generalInfo),
            });

            if (response.ok) {
                console.log('General information updated successfully');
            } else {
                console.error('Error updating general information');
            }
        } catch (error) {
            console.error('Error updating general information:', error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setGeneralInfo({
            ...generalInfo,
            [name]: value,
        });
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
                        name="email"
                        value={generalInfo.email}
                        onChange={handleChange}
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
                        name="firstName"
                        value={generalInfo.firstName}
                        onChange={handleChange}
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
                        name="lastName"
                        value={generalInfo.lastName}
                        onChange={handleChange}
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
                        name="positionHeld"
                        value={generalInfo.positionHeld}
                        onChange={handleChange}
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
                        name="siret"
                        value={generalInfo.siret}
                        onChange={handleChange}
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
                        name="password"
                        value={generalInfo.password}
                        onChange={handleChange}
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
