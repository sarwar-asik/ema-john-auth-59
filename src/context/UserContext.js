import React, { createContext, useState } from 'react';
import app from '../firebase/config';
import {getAuth} from 'firebase/auth';



export const AuthContext  = createContext();

const auth = getAuth(app);

const UserContext = ({children}) => {

    const [user,setUser] = useState(null)

  
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