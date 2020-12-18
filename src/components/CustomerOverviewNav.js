import React, { useState } from 'react';
import CustomerOverviewAdd from "./CustomerOverviewAdd";

const CustomerOverviewNav = ({addNewCustomer}) => {
    const [inputValue, setInputValue] = useState("");
    const [modalVisibility, setModalVisibility] = useState(false);
    
    const handleOnInputChange = e => {
        setInputValue(e.target.value)
    }

    const handleSubmit = e => {
        if(e.which === 13){
            console.log(e.target.value)
        }
    }

    const handleModalOpen = () => {
        setModalVisibility(true); 
    }

    const onModalClose = () => {
        setModalVisibility(false); 
    }

    return (
        <>
            <div className="customers-navbar">
                <div className="customers-navbar__form">
                    <i className="fas fa-search customers-navbar__search-icon"></i>
                    <input 
                        className="customers-navbar__input"
                        type="text"
                        placeholder="Customer or ID..."
                        value={inputValue}
                        onChange={handleOnInputChange}
                        onKeyDown={handleSubmit}
                    />
                </div>
                
                <button 
                    className="button-add"
                    onClick={handleModalOpen}
                >
                    <i className="fas fa-plus"></i>
                </button>
            </div>
        
            {modalVisibility &&
                <CustomerOverviewAdd 
                    onModalClose={onModalClose} 
                    addNewCustomer={addNewCustomer}
                />  
            }
        </>    
    )
}

export default CustomerOverviewNav;