import React, { useState, useEffect, useRef } from 'react';
import { validateInput } from "../helpers";
import uuid from "react-uuid";
import { randomInt, getRandomColor } from "../helpers";

const CustomerOverviewAdd = ({onModalClose, addNewCustomer}) => {
    const [title, setTitle] = useState("");
    const [errorMassage, setErrorMassage] = useState(null);

    const windowOffset = window.scrollY;

    const modalRef = useRef(null);

    useEffect(()=>{
        document.body.setAttribute("style", `position: fixed; left: 0; right: 0; top: -${windowOffset}px`);
        modalRef.current.classList.add("modal--is-visible");
        return () => {
            document.body.setAttribute("style", "");
            window.scrollTo(0, windowOffset);
        }
    })

    const handleOnChange = e => {
        setTitle(e.target.value);
    }

    const handleAddNewCustomer = e => {
        e.preventDefault();

        const error = validateInput(title);

        if(error){
            setErrorMassage(error);
            return;
        }

        // there would be POST request to server
        // I just simply add a new customer to an existing array of customers
        const newCustomer = {
            id: uuid(),
            logo: `<i class="fab fa-pied-piper-pp " style="color: ${getRandomColor()}"></i>`,
            name: title,
            com_id: randomInt(50,1000),
            status: "active",
            enabled: true,
            log_id: randomInt(50,5000),
            size: randomInt(10000000000, 100000000000)
        }

        addNewCustomer(newCustomer);

        onModalClose();
    }

    return (
        <div className="modal__background">
            <div className="modal__wrapper" ref={modalRef}>
                <div className="modal">
                    <div className="modal__close" onClick={onModalClose}>
                        <div className="modal__close-btn"></div>
                        <span className="modal__close-text">Close</span>
                    </div>    
                    <h2 className="modal__title">Add new customer</h2>
                    <form className="modal-form" onSubmit={handleAddNewCustomer}>
                        {errorMassage !== null && 
                            <p className="modal-form__error">
                                {errorMassage}
                            </p>
                        }
                        <div className="modal-form__wrapper">
                            <input 
                                className="modal-form__text-input"
                                type="text"
                                name="addNewCustomer"
                                value={title}
                                onChange={handleOnChange}
                                placeholder="Please, fill out the name of a new customer..."
                            />
                            <button className="modal-button" type="submit">
                                <i className="fas fa-plus"></i>
                                Add
                            </button>
                        </div>
                    </form>

                </div>   
            </div>     
        </div>
    )
}

export default CustomerOverviewAdd;
