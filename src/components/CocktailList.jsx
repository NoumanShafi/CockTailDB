import React from "react";
import Loding from "./Loding"
import { useGlobleContext } from "../Context"
import Details from "./Details";
export default function CocktailList() {
    const { loding, cockTails } = useGlobleContext()
    console.log(cockTails)
    if (loding) {
        return <Loding />
    }
    if(cockTails.length < 1){
       return <h1 className="serach-heading">no cocktails matched your search criteria</h1>
    }
    return (
        <section>
            <h1 className="heading" >Cocktails</h1>
            <div className="card-container">
                {
                    cockTails.map((items) => {
                        return(
                        <Details key={items.id} {...items}/>
                        )
                    })
                }
            </div>
        </section>
    )
}