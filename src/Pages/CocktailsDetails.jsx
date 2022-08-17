import React from "react";
import { useParams } from "react-router-dom";
import SingleCocktail from "../components/SingleCocktail";
export default function CocktailsDetails (){
    const {id} = useParams()
    return(
       <SingleCocktail id={id}/>
    )
}