import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { EmployeeCard } from "./EmployeeCard"
import "./Employee.css"
import { useHistory } from "react-router-dom"

export const EmployeeList = () => {
  const history = useHistory()
   // This state changes when `getEmployees()` is invoked below
    const { employees, getEmployees } = useContext(EmployeeContext)

	//useEffect - reach out to the world for something
    useEffect(() => {
		console.log("LocationList: useEffect - getEmployees")
		getEmployees()
    }, [])


   
    return (
    <>
    <h2>Employees</h2>   
    <button onClick={() => {history.push("/employees/create")}}>
        Add Employee
    </button>
		{console.log("EmployeeList: Render")}
    <div className="employees">
      {
      employees.map(employee => {
        return <EmployeeCard key={employee.id} name={employee.name} location={employee.location} />
			})
      }
      </div>
    </>
    )
}



{/* <>   	
<div className="employees">
  <div className="addEmployeeArea">
    <h2>Employees</h2>
    <button onClick={() => {history.push("/employees/create")}}>
      Add Employee
    </button>
  </div>
    
  {console.log("EmployeeList: Render")}
  {
  employees.map(employee => {
    return <EmployeeCard key={employee.id} name={employee.name} location={employee.location} />
  })
  }
  </div>
</> */}