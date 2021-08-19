import React, { Component } from 'react';
import './MultipleEmployee.css'

class MultipleEmployee extends Component {

    uploadAction() {
        var data = new FormData();
        var imagedata = document.querySelector('input[type="file"]').files[0];
        data.append("file", imagedata);
        console.log(imagedata);

        fetch("http://localhost:5000/api/file-upload", {
            method: "POST",
            headers: {
                "Data-Type": "application/json",
                "Accept": "multipart/form-data",
                "type": "formData",
            },
            body: data
        }).then(async function (res) {
            const response = await res.json()
            console.log(response);
            if (res.ok) {
                alert(response.message);
            } else if (res.status === 401) {
                alert("Oops! ");
            }
        }, function (e) {
            alert("Error submitting form!");
        });
    }
    render() {
        return (
            <section className="md:ml-64">
                <div className="md:py-20 md:bg-gray-200 flex items-center justify-center">
                    <div className="mt-10 md:mt-0 rounded-xl py-10 md:w-3/5 bg-gray-100 flex flex-col items-center justify-evenly">
                        <h1 className="text-center text-4xl text-green-300 font-bold font-serif">Add Multiple Employee</h1>
                        <form className="w-full flex items-center flex-col mt-5 md:mt-10" encType="multipart/form-data" action="">
                            <input
                                className="w-10/12 md:w-4/6 py-1 px-1 outline-none bg-transparent placeholder-black border-b-2 border-black"
                                type="file" name="file"
                            ></input>
                            <br />
                            <button
                                className="w-4/6 mt-5 bg-black rounded-lg py-2 text-white text-lg font-bold submitBtn"
                                type="button"
                                onClick={this.uploadAction.bind(this)}>SUBMIT</button>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
};

export default MultipleEmployee;