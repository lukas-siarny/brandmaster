import React, { useState, useRef } from 'react';
import SelectMenuItem from "./SelectMenuItem";

const defaultValue = "Default";

const SelectMenu = ({zIndex}) => {
    const [selectedValue, setSelectedValue] = useState(defaultValue);
    const [active, setActive] = useState(false);

    const ulRef = useRef(null);

    const options = {
        sth1: "Something 1",
        sth2: "Something 2",
        sth3: "Something 3",
    }

    const handleSelectedValueChange = (value, key) => {
        if(options[key] === selectedValue){
            setSelectedValue(defaultValue)
            return;
        }

        setSelectedValue(value);
    }

    const handleVisibilityChange = () => {
        setActive(!active);
    }

    return (
        <div className="select-menu__wrapper" style={{ zIndex: `${zIndex}` }}>
            <div className="select-menu__selected" onClick={handleVisibilityChange}>
                {selectedValue}
            </div>
            <div className={`select-menu__options ${active ? "select-menu--is-open" : ""}` } ref={ulRef}>
                {Object.entries(options).map(([key,value]) => (
                    <SelectMenuItem 
                        key={key}
                        handleSelectedValueChange={handleSelectedValueChange}
                        selectedValue={selectedValue}
                        value={value}   
                        id={key}
                    />
                ))}
            </div>
        </div>

    )
}

export default SelectMenu;