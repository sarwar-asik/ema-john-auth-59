import React, { createContext } from 'react';



export const AuthContext  = createContext();

const UserContext = ({children}) => {

    const user = {email: 'abcdefgh'}
    const authInfo = {user};

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;