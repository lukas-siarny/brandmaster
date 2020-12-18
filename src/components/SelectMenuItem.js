import React from 'react';

const SelectMenuItem = ({selectedValue, value, handleSelectedValueChange, id}) => {

    return (
        <li  
            onClick={() => handleSelectedValueChange(value, id)} 
            className={`${selectedValue === value ? "select-menu__li--selected" : "select-menu__li"}`} 
        >
            {value}
        </li>

    )
}

export default SelectMenuItem;