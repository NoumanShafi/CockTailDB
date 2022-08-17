import React, { useContext, createContext } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
const Url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = createContext()

const AppProvider = ({ children }) => {
    const [loding, setloding] = useState(true)
    const [SearchTrem, setSearchTream] = useState('j')
    const [cockTails, setcockTails] = useState([])
    
    const fetchDrink =useCallback( async () => {
        setloding(true)
        try {
            const response = await fetch(`${Url}${SearchTrem}`)
            const data = await response.json()
            const { drinks } = data
            if (drinks) {
                const newcocktails = drinks.map((items) => {
                    const {
                        idDrink,
                        strDrink,
                        strDrinkThumb,
                        strAlcoholic,
                        strGlass } = items
                        return {
                            id : idDrink,
                            image : strDrinkThumb,
                            name: strDrink,
                            glass : strGlass,
                            info: strAlcoholic

                        }
                })

                setcockTails(newcocktails)

            }
            else {
                setcockTails([])
            }
            setloding(false)
        } catch (error) {

            console.log(error)
            setloding(false)
        }
    },[SearchTrem])
    useEffect(() => {
        fetchDrink()

    }, [SearchTrem,fetchDrink])
    return (
        <AppContext.Provider value={{
            loding,
            cockTails,
            setSearchTream,

        }}>
            {children}
        </AppContext.Provider>
    )
}

const useGlobleContext = () => {
    return useContext(AppContext)
}
export { AppProvider, AppContext, useGlobleContext }
