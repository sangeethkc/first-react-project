import React, { useEffect, useState } from "react"
// import CountButton from "./CountButton/CountButton"
import SearchBar from "./SearchBar/SearchBar"
// import Button from "./CountButton/Button"

// const products = ['tooth paste', 'tooth brush', 'mouthwash', 'dental floss']

const App = () => {

    const [productState, setProductState] = useState([])

    useEffect(() => {

        fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then((productsArray) => {
                const newProductsState = productsArray.map((product) => {
                    return product.title
                })
                setProductState(newProductsState)
            })
            
    })

    const hasProducts = productState.length > 0
    
    return (
        <div>
            {/* <Button>Hello There</Button> */}
            {/* <CountButton incrementBy = {1} /> */}

            {/* <CountButton incrementBy = {5} buttonColor = {"green"} /> */}

            {/* if has products is true then show show products else show "Loading" */}
            { hasProducts ? <SearchBar products = {productState} /> : "Loading" }
        
        </div>
    )
}

export default App