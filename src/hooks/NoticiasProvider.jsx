import { useState, useEffect, createContext } from "react";

const NoticiasContext  = createContext()

const NoticiasProvider = ({children}) =>{

    return (
        <NoticiasContext.Provider
            value={{

            }}
        >

        </NoticiasContext.Provider>
    )
}

export {
    NoticiasProvider
}

export default NoticiasContext