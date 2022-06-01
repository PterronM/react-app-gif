import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ sCategories }) => {

    const [inputValue, sInputValue] = useState(''); // ''

    const handleInputChange = ( e ) => {
        sInputValue( e.target.value );
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if ( inputValue.trim().length > 2 ) {
            sCategories( cats => [ inputValue, ...cats, ] );
            sInputValue('');
        }

    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}


AddCategory.propTypes = {
    sCategories: PropTypes.func.isRequired
}
