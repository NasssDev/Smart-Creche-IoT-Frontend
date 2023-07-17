import React from 'react';

const CopyrightNotice: React.FC = () => {
    return (
        <footer style={{ fontSize: '14px', color: 'gray' }}>
            © {new Date().getFullYear()} Smart’Creche. All Rights Reserved. Made with love by HETIC students!
        </footer>
    );
};

export default CopyrightNotice;
