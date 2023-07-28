
export const ModalForVisitor: React.FC<{ onClose: () => void }> = ({onClose}) => {

    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center z-50 ">
                <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
                <div className="bg-white rounded-sm shadow-lg p-6 relative rounded-2xl">
                    <h2 className="text-xl font-bold mb-4 text-crech-blue">Your login to test</h2>
                    <p className="text-gray-600"><strong>Email:</strong> adelparkson@gmail.com <br/> <strong>Password:</strong> Admin@123</p>
                    <button
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </>
    );
};