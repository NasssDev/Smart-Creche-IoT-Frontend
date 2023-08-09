// import { createContext, useContext, useState } from 'react';
//
// const AuthContext = createContext<{
//     isConnected: boolean;
//     setIsConnected: (value: boolean) => void;
// } | undefined>(undefined);
//
// export const AuthProvider: React.FC = ({ children }) => {
//     const [isConnected, setIsConnected] = useState<boolean>(false);
//
//     return (
//         <AuthContext.Provider value={{ isConnected, setIsConnected }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };
//
// // Un hook personnalisé pour utiliser le contexte
// export const useAuth = () => {
//     const context = useContext(AuthContext);
//     if (context === undefined) {
//         throw new Error("useAuth doit être utilisé à l'intérieur d'un AuthProvider");
//     }
//     return context;
// };
