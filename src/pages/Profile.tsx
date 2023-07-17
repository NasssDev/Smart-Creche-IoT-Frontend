import React from 'react';
import { LabelPage } from '../components/LabelPage.tsx';
import ProfileCard from '../components/ProfileCard';
import CopyrightNotice from '../components/CopyrightNotice';
import Notifications from '../components/Notifications';
import GeneralInformations from '../components/GeneralInformations';

export const Profile = () => {
    return (
        <>
            <div className='mb-20'>
            <LabelPage label={'Profile'} />
            <ProfileCard />
            </div>
            <div className="grid grid-cols-2">
                <Notifications/>
                <GeneralInformations />
            </div>
        </>
    );
};
