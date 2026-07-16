import React, { useState } from "react";
import UserContext from "./UserContext";


const UserContextProvider = ({children}) => {

    const [User, setUser] = useState(null)

    return(
        <>
            <UserContext.Provider value = {{User, setUser}}>
                {children}
            </UserContext.Provider>
        </>
    )
}

export default UserContextProvider