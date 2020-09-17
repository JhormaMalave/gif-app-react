import React, {useState} from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('Hola Mundo');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length >= 2){
            setCategories(categories => [inputValue, ...categories]);
        }
    }

    return (
        
        <form onSubmit={ handleSubmit }>
            <input
                className="input-search"
                type="text"
                value={inputValue}
                onChange={handleChange}
            />
        </form>
    );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;

