import React, { useState } from 'react';
import SelectMenu from "./SelectMenu";
import { formatBytes } from "../helpers";

const CustomerOverviewTable = ({data}) => {
    // i guess there would be some pagination so z-index would reset on every page
    let zIndex = 888;

    return (
        <div className="customers-table__wrapper">
            <table className="customers-table">
                <colgroup className="customers-table__colgroup">
                    <col className="customers-table__col-2" />
                    <col className="customers-table__col-3" />
                    <col className="customers-table__col-1" />
                    <col className="customers-table__col-1" />
                    <col className="customers-table__col-1" />
                    <col className="customers-table__col-1" />
                </colgroup>
                <thead className="customers-table__head">
                    <tr>
                        <th>Customers</th>
                        <th></th>
                        <th>COM ID</th>
                        <th>LOG ID</th>
                        <th><span className="th-size">SIZE</span></th>
                        <th>STATUS</th>
                    </tr>
                </thead>
                <tbody className="customers-table__body">
                    
                    {data.length !== 0 && data.map(customer => {
                        zIndex--; 
                        return(
                            <tr key={customer.id}>
                                <td>
                                    <span className="th-customer-logo" dangerouslySetInnerHTML={ {__html: customer.logo} } />
                                    {customer.name}
                                </td>
                                <td><SelectMenu zIndex={zIndex} /></td>
                                <td>{customer.com_id}</td>
                                <td>{customer.log_id}</td>
                                <td>{formatBytes(customer.size)}</td>
                                <td>
                                    <span className="th-customer-active">Active</span>
                                </td>
                            </tr>
                            )    
                        })}

                </tbody>
            </table>
        </div>    
    )
}

export default CustomerOverviewTable;