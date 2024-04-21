import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../Services/EmployeeService";


export const CreateEmployee = () => {
    const [newFirstName, setNewFirstName] = useState("");
    const [newLastName, setNewLastName] = useState("");
    const [newEmail, setNewEmail] = useState("");

    const navigate = useNavigate();

    const saveEmployee = () => {
        let employee = {
            firstName : newFirstName,
            lastName : newLastName,
            emailID : newEmail
        }

        EmployeeService.createEmployee(employee);
        navigate('/');
    }

    const cancel = () => {
        navigate('/');
    }
    return (
        <div>
            <h1>Add Employee</h1>
            <form action="">
                <label>First Name:</label><br />
                <input type="text" onChange={(event) => setNewFirstName(event.target.value)}/><br />
                <label>Last Name:</label><br />
                <input type="text" onChange={(event) => setNewLastName(event.target.value)}/><br />
                <label>Email:</label><br />
                <input type="email" onChange={(event) => setNewEmail(event.target.value)}/><br /><br />
                <button style={{backgroundColor:"green", color:"white"}} onClick={saveEmployee}>Save</button>
                <button style={{backgroundColor:"red", color:"white"}} onClick={cancel}>Cancel</button>
            </form>
        </div>
    )
}