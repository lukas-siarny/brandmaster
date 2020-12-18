import React, { useState, useEffect } from 'react';
import CustomerOverviewNav from "./CustomerOverviewNav";
import CustomerOverviewTable from "./CustomerOverviewTable";
import data from "../data/data.json"

const CustomerOverview = () => {
    const [customerData, setCustomerData] = useState(data);     

    // this is how I would get data from server
    // but since I work with a local JSON file I simply import it 
    /*const getCustomerData = async () => {
        try{
            const response =  await fetch("http://someapi.com/customerData", settings);
            if(response.status === 200) {
                const data = await response.json();
                setCustomerData(data);
                return data;
            } else {
                throw Error(response.statusText)
            }
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(()=> {
        getCustomerData()
    }, [])*/

    const addNewCustomer = payload => {
        setCustomerData(state => (
            [...state, payload]
        ))
    }

    return (
        <>
            <h2 className="main__title">Customer overview</h2>
            <CustomerOverviewNav addNewCustomer={addNewCustomer} />
            <CustomerOverviewTable data={customerData} />
        </>    
    )
}

export default CustomerOverview;