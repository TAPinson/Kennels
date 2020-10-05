import React, { useContext, useEffect } from "react"
import { CustomerContext } from "./CustomerProvider"
import { CustomerCard } from "./CustomerCard"
import "./Customer.css"

export const CustomerList = () => {
   // This state changes when `getCustomers()` is invoked below
    const { customers, getCustomers } = useContext(CustomerContext)
	//useEffect - reach out to the world for something
    useEffect(() => {
		console.log("CusotmerList: useEffect - getCustomers")
		getCustomers()
    }, [])


    return (	
		<div className="customers">
		    {console.log("CusotmerList: Render")}
        {
			customers.map(customer => {
				return <CustomerCard key={customer.id} name={customer.name} location={customer.address} />
			})
        }
        </div>
    )
}