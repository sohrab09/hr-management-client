import React from 'react';
import Axios from "axios";
import { Link } from 'react-router-dom';

class EmployeeList extends React.Component {
    componentDidMount() {
        this.loadData();
    }
    emails = []

    constructor(props) {
        super(props);
        this.state = { allEmployeeList: [], emails: [] };
        if (!window.location.hash) {
            window.location = window.location + '#loaded';
            window.location.reload();
        }
    }

    loadData() {
        Axios.get("http://localhost:5000/api/get").then((response) => {
            this.setState({ allEmployeeList: response.data })
        })
    }

    setEmails = () => {
        if (this.state.emails.length) {
            const emailData = this.state.emails.join(',')
            localStorage.setItem('emails', emailData)
        } else {
            alert('no email selected')
        }
    }


    sendMailMultipleEmployee = (id, email) => {
        if (!this.emails.includes(email)) {
            this.emails.push(email);
            this.setState({ emails: this.emails })

        } else {
            this.emails.splice(this.emails.indexOf(email), 1);
            this.setState({ emails: this.emails })
        }
    }

    render() {
        return (
            <section className="md:ml-64">
                <div className="md:py-20 md:bg-gray-200 flex items-center justify-center">
                    <div className="w-full">
                        <h1 className="text-center text-6xl mb-5 text-green-300 font-serif font-semibold">Employee List</h1>
                        <table id="example" className="example">
                            <thead>
                                <tr>
                                    <th>Action</th>
                                    <th className="px-4 py-3">First Name</th>
                                    <th className="px-4 py-3">Last Name</th>
                                    <th className="px-4 py-3">Email</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {this.state.allEmployeeList.map((employeeList) => {
                                    return (
                                        <tr className="text-gray-700 text-center">
                                            <td className="px-4 py-3 text-md font-semibold border">
                                                <input type="checkbox" id={employeeList.id} value={employeeList.email}
                                                    onClick={() => this.sendMailMultipleEmployee(employeeList.id, employeeList.email)} />
                                            </td>
                                            <td className="px-4 py-3 text-md font-semibold border">{employeeList.firstName}</td>
                                            <td className="px-4 py-3 text-md font-semibold border">{employeeList.lastName}</td>
                                            <td className="px-4 py-3 text-md font-semibold border">{employeeList.email}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                        <h1 className="text-center text-4xl mb-5 text-green-600 font-serif font-semibold"><Link to="/admin/sendMail" onClick={this.setEmails}>Send Email To Multiple User</Link></h1>
                        <p className="text-center text-sm mt-5 text-red-800">Before send email, please select employee email via checkbox. then click on <span className="text-lg text-green-600">Send Email To Multiple User</span></p>
                    </div>
                </div>
            </section>
        );
    }
};

export default EmployeeList;