import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../Services/EmployeeService";

export const UpdateEmployee = () => {
    const [newFirstName, setNewFirstName] = useState("");
    const [newLastName, setNewLastName] = useState("");
    const [newEmail, setNewEmail] = useState("");

    const navigate = useNavigate();

    const {id} = useParams();

    const saveEmployee = () => {
        let employee = {
            firstName : newFirstName,
            lastName : newLastName,
            emailID : newEmail
        }

        EmployeeService.updateEmployee(employee, id);
        navigate('/');
    }

    const cancel = () => {
        navigate('/');
    }

    useEffect(() => {
        const fetchEmployeeById = async () => {
            let employeeById = await EmployeeService.getEmployeeById(id);
            console.log(employeeById);
            setNewFirstName(employeeById.data.firstName);
            setNewLastName(employeeById.data.lastName);
            setNewEmail(employeeById.data.emailID);
        }
        
        fetchEmployeeById();
    }, []);

    return (
        <div>
            <h1>Update Employee</h1>
            <form action="">
                <label>First Name:</label><br />
                <input type="text" onChange={(event) => setNewFirstName(event.target.value)} value={newFirstName}/><br />
                <label>Last Name:</label><br />
                <input type="text" onChange={(event) => setNewLastName(event.target.value)} value={newLastName}/><br />
                <label>Email:</label><br />
                <input type="email" onChange={(event) => setNewEmail(event.target.value)} value={newEmail}/><br /><br />
                <button style={{backgroundColor:"green", color:"white"}} onClick={saveEmployee}>Update</button>
                <button style={{backgroundColor:"red", color:"white"}} onClick={cancel}>Cancel</button>
            </form>
        </div>
    )
}