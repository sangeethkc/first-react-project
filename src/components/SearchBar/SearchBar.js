import React, { useState } from "react"
import "./SearchBar.css"

const SearchBar = (props) => {
    
    const [SearchValue, setSearchValue] = useState('')
    
    const HandleSearch = (event) => {
        setSearchValue(event.target.value)
    }

    const HandleClear = (event) => {
        setSearchValue("")
    }

    const FilteredProducts = props.products.filter((product) => {
        return product.toLowerCase().includes(SearchValue.toLowerCase())
    })

    const DisplayClearButton = SearchValue.length > 0
    
    return (
        <div><h1>Search Bar</h1>
            <input type="text" value={SearchValue} onChange={HandleSearch} />
            { DisplayClearButton && <button onClick={HandleClear}>Clear</button> }
            
            <ul>
                {FilteredProducts.map((product) => {
                    return <li key={product}>{product}</li>
                })}
            </ul>
        </div>
    )
}

export default SearchBar