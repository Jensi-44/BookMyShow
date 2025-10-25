import { children, createContext, useContext, useState } from "react";



export const AppContext = createContext()

export const AppProvider = ({children})=>{

    const[user, setUser] = useState({ name: "Jensi", email: "jensi@example.com" })

    const [selectedCity, setSelectedCity] = useState("Rajkot");

    return(
        <AppContext.Provider value={{user, setUser, selectedCity, setSelectedCity}}>
            {children}
        </AppContext.Provider>
    )
}