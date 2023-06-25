import React, { useState } from 'react'
import { addUser } from '../UserReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Create = () => {

    const [dragOver, setDragOver] = useState(false);


    const [firstName, setFirstName] = useState("")
    const [middleName, setMiddleName] = useState("")
    const [lastName, setLastName] = useState("")
    const [SSN, setssn] = useState("")
    const [mobile, setMobile] = useState("")
    const [email, setEmail] = useState("")
    const [gender, setGender] = useState("")
    const [DOB, setdob] = useState("")
    const [designation, setDesignation] = useState("")
    const [address, setAddress] = useState("")
    const [town, setTown] = useState("")
    const [state, setState] = useState("")
    const [zipCode, setZip] = useState("")

    const users = useSelector((state) => state.users);
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleDragOver = (e) => {
        e.preventDefault();
        setDragOver(true);
    };

    const handleDragLeave = () => {
        setDragOver(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setDragOver(false);
        const files = e.dataTransfer.files;
        handleFiles(files);
    };

    const handleFileChange = (e) => {
        const files = e.target.files;
        handleFiles(files);
    };

    const handleFiles = (files) => {
        for (const file of files) {
            console.log('Uploaded file:', file);
            // Perform necessary actions with the uploaded file
        }
    };

    const handleSubmit = (e)=> {
        e.preventDefault();
        dispatch(addUser({id: users[users.length - 1].id + 1, SSN, firstName, middleName, lastName,  mobile, email, gender, DOB, designation, address, town, state, zipCode }))
        navigate("/")
    }


    return (
        <div className='create_container'>
            <form onSubmit={handleSubmit}>
                <h2>Create User</h2>
                <div
                    className={`drop-zone ${dragOver ? 'drag-over' : ''}`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={() => document.getElementById('fileInput').click()}
                >
                    <p>Drag and drop files here</p>
                    <p>(or click to select files)</p>
                </div>
                <input type="file" id="fileInput" multiple style={{ display: 'none' }} onChange={handleFileChange} />

                <div className='form_row_box'>
                    <div class="form-row">
                        <label htmlFor="firstname">Firstname:</label>
                        <input type="text" id="firstname" name="firstname" onChange={(e) => setFirstName(e.target.value)} required/>
                    </div>

                    <div class="form-row">
                        <label htmlFor="middlename">Middle Name:</label>
                        <input type="text" id="middlename" name="middlename" onChange={(e) => setMiddleName(e.target.value)} required/>
                    </div>

                    <div class="form-row">
                        <label htmlFor="lastname">Last Name:</label>
                        <input type="text" id="lastname" name="lastname" onChange={(e) => setLastName(e.target.value)} required/>
                    </div>
                </div>
                <div className='form_row_box'>
                    <div className="form-row">
                        <label htmlFor="firstname">SSN:</label>
                        <input type="text" id="ssn" name="ssn" onChange={(e) => setssn(e.target.value)} required/>
                    </div>

                    <div className="form-row">
                        <label htmlFor="mobile">Mobile:</label>
                        <input type="text" id="mobile" name="mobile" onChange={(e) => setMobile(e.target.value)} required/>
                    </div>

                    <div className="form-row">
                        <label htmlFor="email">Email:</label>
                        <input type="text" id="email" name="email" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                </div>

                <div className='form_row_box'>
                    Gender
                    <div className="form-row radio_box">
                        <div>
                            <input type="radio" id="male" name="male" value="male" onChange={() => setGender("male")} />
                            <label htmlFor="male">Male</label>
                        </div>

                        <div>
                            <input type="radio" id="female" name="male" value="female" onChange={() => setGender("female")} />
                            <label htmlFor="female">Female</label>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="dob">Date of Birth:</label>
                        <input type="text" id="dob" name="dob" onChange={(e) => setdob(e.target.value)} />
                    </div>

                    <div className="form-row">
                        <label htmlFor="designation">Designation:</label>
                        <input type="text" id="designation" name="designation" onChange={(e) => setDesignation(e.target.value)} />
                    </div>
                </div>

                <div className='form_row_box'>
                    <div className="form-row address">
                        <label htmlFor="address">Address:</label>
                        <input type="text" id="address" name="address" onChange={(e) => setAddress(e.target.value)} />
                    </div>
                </div>

                <div className='form_row_box'>
                    <div class="form-row">
                        <label htmlFor="town">Town:</label>
                        <input type="text" id="town" name="town" onChange={(e) => setTown(e.target.value)} required/>
                    </div>

                    <div class="form-row">
                        <label htmlFor="state">State:</label>
                        <input type="text" id="state" name="state" onChange={(e) => setState(e.target.value)} required/>
                    </div>

                    <div class="form-row">
                        <label htmlFor="zipcode">ZipCode:</label>
                        <input type="text" id="zipcode" name="zipcode" onChange={(e) => setZip(e.target.value)} required/>
                    </div>
                </div>

                <div className='buttons'>
                    <button type='submit'>Save</button>
                </div>

            </form>
        </div>
    )
}

export default Create