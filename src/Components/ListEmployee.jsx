import { useEffect, useState } from "react"
import EmployeeService from "../Services/EmployeeService";
import { useNavigate } from "react-router-dom";
import "../Styles/ListEmployee.css";

export const ListEmployee = () => {
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEmployees = async () => {
            const data = await EmployeeService.getEmployees();
            setEmployees(data.data);
        }

        fetchEmployees();
    },[]);

    const addEmployee = () => {
        navigate('/add-employee');
    }

    const updateEmployee = (id) => {
        navigate(`/update-employee/${id}`);
    }

    const deleteEmployee = (id) => {
        EmployeeService.deleteEmployee(id);
        setEmployees((prev) => prev.filter((emp) => emp.id !== id));
        navigate('/');
    }
    

    return (
        <div>
            <h2>Employee List</h2>
            <button className="add-button" onClick={addEmployee}>Add Employee</button><br /><br />
            <div className="table-container">
                <table className="table">
                    <thead>
                        <tr>
                            <th className="th-with-border-right">Employee First Name</th>
                            <th className="th-with-border-right">Employee Last Name</th>
                            <th className="th-with-border-right">Employee Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {employees.map((employee) => {
                            return (
                                <tr key={employee.id}>
                                <td className="td-with-border-right">{employee.firstName}</td>
                                <td className="td-with-border-right">{employee.lastName}</td>
                                <td className="td-with-border-right">{employee.emailID}</td>
                                <td>
                                    <button onClick={() => updateEmployee(employee.id)}>Update</button>
                                    <button onClick={() => deleteEmployee(employee.id)}>Delete</button>
                                </td>
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}