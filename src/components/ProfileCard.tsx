import { Avatar, Card } from 'antd';

const { Meta } = Card;

const ProfileCard: React.FC = () => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'auto' }}>
        <Card style={{ width: 450 , borderRadius: 30}}>
            <div style={{ position: 'relative', height: '100%' }}>
                <img
                    alt="example"
                    src="https://walter-strapi.s3.eu-west-3.amazonaws.com/richard_horvath_n_Wae_TF_6qo0_unsplash_dd9b01bde4_b623ba882a.webp"
                    style={{ width: '100%', height: 'auto', borderRadius: '12px 12px 12px 12px' }}
                />
                <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', marginBottom: -20 }}>
                    <Avatar src="https://i.ibb.co/NxhbqPk/chrome-3-Mw-FBe-Unn-U.png" size={120} />
                </div>
            </div>
            <div style={{ padding: '18px' }}>
                <Meta
                    title={<div style={{ textAlign: 'center', fontSize: '24px', fontWeight: 'bold' }}>Adela Parkson</div>}
                    description={<div style={{ textAlign: 'center', fontSize: '18px' }}>Manager</div>}
                />
            </div>
        </Card>
    </div>
);

export default ProfileCard;
