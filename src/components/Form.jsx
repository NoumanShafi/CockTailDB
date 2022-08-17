import React, { useRef } from "react";
import { useEffect } from "react";
import { useGlobleContext } from "../Context";
export default function Form() {
    const { setSearchTream } = useGlobleContext()
    const inputRef = useRef()

    const InputVAlue = () => {
        setSearchTream(inputRef.current.value)
    }
    const handleclick = (e) => {
        e.preventDefault()
    }
    useEffect(() => {
        inputRef.current.focus()
    }, [])




    return (
        <section className="search">

            <div className="search-container">
                <form className="form" onSubmit={handleclick}>
                    <label className="lable">search your favorite cocktail</label>
                    <input type="text" className="input" onChange={InputVAlue} ref={inputRef} />
                </form>

            </div>
        </section>

    )
}