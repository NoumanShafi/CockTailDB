import React from "react";
import { useEffect } from "react";
import Loding from "./Loding"
import { Link } from "react-router-dom"
import { useState } from "react";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="
export default function SingleCocktail({ id }) {
    const [loding, setloding] = useState(true)
    const [cockTail, setcockTail] = useState([])

    useEffect(() => {
        const FetchData = async () => {
            try {
                const response = await fetch(`${url}${id}`)
                const data = await response.json()
                const { drinks } = data
                if (drinks) {
    
                    const newcoccktail = drinks.map((items) => {
                        const {
                            idDrink,
                            strDrink,
                            strDrinkThumb,
                            strAlcoholic,
                            strGlass,
                            strCategory,
                            strInstructions,
                            strIngredient0,
                            strIngredient1,
                            strIngredient2
    
                        } = items
                        const ingredients = [
                            strIngredient0,
                            strIngredient1,
                            strIngredient2,
                        ]
                        return {
                            id: idDrink,
                            image: strDrinkThumb,
                            name: strDrink,
                            glass: strGlass,
                            info: strAlcoholic,
                            category: strCategory,
                            instrruction: strInstructions,
                            ingredients
                        }
                    })
                    setcockTail(newcoccktail)
                    setloding(false)
                }
                else {
                    setcockTail([])
                }
    
            }
            catch (error) {
                console.log(error)
                setloding(false)
            }
        }
        FetchData()
    }, [id])
    if (loding) {
        return <Loding />
    }
    console.log(cockTail)


    return (

        <main>
            {
                cockTail.map((items) => {
                    const {
                        image,
                        name,
                        glass,
                        info,
                        category,
                        instrruction,
                        ingredients } = items
                    return (
                        <section className="singleCocktail" >

                            <div className="container">
                                <Link to="/" className="back-btn">BACK HOME</Link>
                                <h1>{name}</h1>
                                <div className="single-coctail-container">
                                    <div className="single-cocktail-image">

                                        <img src={image} alt="coctail" className="single-image" />
                                    </div>

                                    <div className="info">
                                        <h3><span>Name:</span>{name}</h3>
                                        <h3><span>Category:</span>{category}</h3>
                                        <h3><span>Info:</span>{info}</h3>
                                        <h3><span>Glass:</span>{glass}</h3>
                                        <h3><span>instructons:</span>{instrruction}</h3>
                                        <h3><span>ingredients:</span>{ingredients}</h3>
                                    </div>

                                </div>

                            </div>
                        </section>
                    )
                })
            }
        </main>


    )
}