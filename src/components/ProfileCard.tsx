import { Avatar, Card } from 'antd';
import React from "react";
const { Meta } = Card;

const ProfileCard: React.FC = () => (
    <div className="flex justify-center items-center h-auto pb-14">
        <Card className="w-2/4 rounded-3xl">

        <div className="relative h-full rounded-2xl">
                <img
                    alt="example"
                    src="https://walter-strapi.s3.eu-west-3.amazonaws.com/richard_horvath_n_Wae_TF_6qo0_unsplash_dd9b01bde4_b623ba882a.webp"
                    className="w-full h-auto rounded-xl"
                />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-[-20px]">
                    <Avatar src="/adelParkson.jpg" size={120} />
                </div>
            </div>
            <div className="p-6">
                <Meta
                    title={<div className="text-center text-2xl font-bold" >Adel Parkson</div>}
                    description={<div className="text-center text-lg">Manager</div>}
                />
            </div>
        </Card>
    </div>
);

export default ProfileCard;
