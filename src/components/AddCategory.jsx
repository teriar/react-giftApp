import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setinputValue] = useState()

    const onInputChange = (event) => {

        setinputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;

        // setCategories( cat=>[inputValue, ...cat]);
        onNewCategory(inputValue.trim());
        setinputValue('');
    }



    return (
        <form onSubmit={onSubmit}>

            <input
                type="text"
                placeholder="BUscar gifts"
                value={inputValue || ""}
                onChange={onInputChange} />
        </form>

    )
}
