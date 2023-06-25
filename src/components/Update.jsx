import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from '../UserReducer'

const Update = () => {

  const { id } = useParams()
  const users = useSelector((state) => state.users);

  const existingUser = users.filter((item) => item.id == id)
  const { firstName, middleName, lastName, SSN, mobile, email, gender, DOB, designation, address, town, state, zipCode } = existingUser[0]

  const [ufirstName, setFirstName] = useState(firstName)
  const [umiddleName, setMiddleName] = useState(middleName)
  const [ulastName, setLastName] = useState(lastName)
  const [uSSN, setssn] = useState(SSN)
  const [umobile, setMobile] = useState(mobile)
  const [uemail, setEmail] = useState(email)
  const [ugender, setGender] = useState(gender)
  const [uDOB, setdob] = useState(DOB)
  const [udesignation, setDesignation] = useState(designation)
  const [uaddress, setAddress] = useState(address)
  const [utown, setTown] = useState(town)
  const [ustate, setState] = useState(state)
  const [uzipCode, setZip] = useState(zipCode)

  const navigate = useNavigate()

  const dispatch = useDispatch();

  const handleUpdate = (e)=> {
    e.preventDefault()
    dispatch(updateUser({
      id:id,
      firstName: ufirstName,
      middleName: umiddleName,
      lastName: ulastName,
      SSN: uSSN,
      mobile: umobile,
      email: uemail,
      gender: ugender,
      DOB: uDOB,
      designation: udesignation,
      address: uaddress,
      town: utown,
      state: ustate,
      zipCode: uzipCode
    }))
    navigate('/')
  }



  return (
    <div className='create_container'>
      <h3>Update User</h3>
      <form onSubmit={handleUpdate}>
        <div className='form_row_box'>
          <div class="form-row">
            <label htmlFor="firstname">Firstname:</label>
            <input type="text" id="firstname" name="firstname" value={ufirstName}  onChange={(e) => setFirstName(e.target.value)}/>
          </div>

          <div class="form-row">
            <label htmlFor="middlename">Middle Name:</label>
            <input type="text" id="middlename" name="middlename" value={umiddleName} onChange={(e) => setMiddleName(e.target.value)}/>
          </div>

          <div class="form-row">
            <label htmlFor="lastname">Last Name:</label>
            <input type="text" id="lastname" name="lastname" value={ulastName}  onChange={(e) => setLastName(e.target.value)}/>
          </div>
        </div>
        <div className='form_row_box'>
          <div className="form-row">
            <label htmlFor="firstname">SSN:</label>
            <input type="text" id="ssn" name="ssn" value={uSSN} onChange={(e) => setssn(e.target.value)}/>
          </div>

          <div className="form-row">
            <label htmlFor="mobile">Mobile:</label>
            <input type="text" id="mobile" name="mobile" value={umobile} onChange={(e) => setMobile(e.target.value)}/>
          </div>

          <div className="form-row">
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email" value={uemail} onChange={(e) => setEmail(e.target.value)}/>
          </div>
        </div>

        <div className='form_row_box'>
          Gender
          <div className="form-row radio_box">
            <div>
              <input type="radio" id="male" name="male" value="male" onChange={() => setGender("male")}/>
              <label htmlFor="male">Male</label>
            </div>

            <div>
              <input type="radio" id="female" name="male" value="female" onChange={() => setGender("female")}/>
              <label htmlFor="female">Female</label>
            </div>
          </div>

          <div className="form-row">
            <label htmlFor="dob">Date of Birth:</label>
            <input type="text" id="dob" name="dob" value={uDOB} onChange={(e) => setdob(e.target.value)} />
          </div>

          <div className="form-row">
            <label htmlFor="designation">Designation:</label>
            <input type="text" id="designation" name="designation" value={udesignation} onChange={(e) => setDesignation(e.target.value)}/>
          </div>
        </div>

        <div className='form_row_box'>
          <div className="form-row address">
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" name="address" value={uaddress} onChange={(e) => setAddress(e.target.value)}/>
          </div>
        </div>

        <div className='form_row_box'>
          <div class="form-row">
            <label htmlFor="town">Town:</label>
            <input type="text" id="town" name="town" value={utown} onChange={(e) => setTown(e.target.value)}/>
          </div>

          <div class="form-row">
            <label htmlFor="state">State:</label>
            <input type="text" id="state" name="state" value={ustate} onChange={(e) => setState(e.target.value)}/>
          </div>

          <div class="form-row">
            <label htmlFor="zipcode">ZipCode:</label>
            <input type="text" id="lastname" name="lastname" value={uzipCode} onChange={(e) => setZip(e.target.value)} />
          </div>
        </div>

        <div className='buttons'>
          <button type='submit'>Update</button>
        </div>
      </form>
    </div>
  )
}

export default Update