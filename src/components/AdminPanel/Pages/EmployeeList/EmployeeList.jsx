import React from 'react';
import Axios from "axios";

class EmployeeList extends React.Component {
    componentDidMount() {
        this.loadData();
    }

    constructor(props) {
        super(props);
        this.state = { allEmployeeList: [] };
        if(!window.location.hash) {
            window.location = window.location + '#loaded';
            window.location.reload();
        }
    }

    loadData() {
        Axios.get("http://localhost:5000/api/get").then((response) => {
            this.setState({ allEmployeeList: response.data })
        })
        console.log("data", this.state.allEmployeeList)
    }

    render() {
        return (
            <section className="md:ml-64">
                <div className="md:py-20 md:bg-gray-200 flex items-center justify-center">
                    <div className="w-full">
                        <h1 className="text-center text-4xl mb-5 text-green-300 font-serif font-semibold">Employee List</h1>
                        <table id="example" className="example">
                            <thead>
                                <tr>
                                    <th className="px-4 py-3">First Name</th>
                                    <th className="px-4 py-3">Last Name</th>
                                    <th className="px-4 py-3">Email</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {this.state.allEmployeeList.map((employeeList) => {
                                    return (
                                        <tr className="text-gray-700 text-center">
                                            <td className="px-4 py-3 text-md font-semibold border">{employeeList.firstName}</td>
                                            <td className="px-4 py-3 text-md font-semibold border">{employeeList.lastName}</td>
                                            <td className="px-4 py-3 text-md font-semibold border">{employeeList.email}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        );
    }
};

export default EmployeeList;