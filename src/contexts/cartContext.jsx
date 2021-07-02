import { createContext, useState } from "react";

export const cartContext = createContext([])

export const CartContextProvider = ({children}) => {

    const [user, setUser] = useState()

    return(
     <cartContext.Provider value={user, setUser}>
         {children}
     </cartContext.Provider>
    )
}
