import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteUser } from '../UserReducer';

const Home = () => {
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch()


    const [searchQuery, setSearchQuery] = useState()

    const [searchResults, setSearchResults] = useState([]);

    const handleDelete = (id) => {
        dispatch(deleteUser({ id: id }))
    }

    const handleSearch = () => {
        const filteredUsers = users.filter((item) => {
            return (item.firstName.toUpperCase().includes(searchQuery.toUpperCase()) || item.lastName.toUpperCase().includes(searchQuery.toUpperCase()))
        })
        setSearchResults(filteredUsers);
    }

    // console.log(users);
    return (
        <div>
            <h2>Crud with Redux</h2>
            <Link to='/create'><button className='create'>Create User</button> </Link >
            <div className='search'>
                <input type='search' placeholder='search here' onChange={(e) => setSearchQuery(e.target.value)} />
                <button onClick={handleSearch}>Search</button>
            </div>
            <div className='data-table'>
                <table>
                    <thead>
                        <tr>

                            <th>firstName</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Mobile Number</th>
                            <th>Designation</th>
                            <th>Gender</th>
                            <th>Address</th>
                            <th>town</th>
                            <th>State</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                    {searchResults.length > 0 ? (
                        searchResults.map((value, i) => {
                            return (
                                <tr key={i}>
                                    <td>{value.firstName}</td>
                                    <td>{value.lastName}</td>
                                    <td>{value.email}</td>
                                    <td>{value.mobile}</td>
                                    <td>{value.designation}</td>
                                    <td>{value.gender}</td>
                                    <td>{value.address}</td>
                                    <td>{value.town}</td>
                                    <td>{value.state}</td>
                                    <td>
                                        <Link to={`/edit/${value.id}`}>
                                            <button className="edit-button">EDIT</button>
                                        </Link>
                                        <button
                                            className="delete-button"
                                            onClick={() => handleDelete(value.id)}
                                        >
                                            DELETE
                                        </button>
                                    </td>
                                </tr>
                            );
                        })
                    ) : (
                        users.map((value, i) => {
                            return (
                                <tr key={i}>
                                    <td>{value.firstName}</td>
                                    <td>{value.lastName}</td>
                                    <td>{value.email}</td>
                                    <td>{value.mobile}</td>
                                    <td>{value.designation}</td>
                                    <td>{value.gender}</td>
                                    <td>{value.address}</td>
                                    <td>{value.town}</td>
                                    <td>{value.state}</td>
                                    <td>
                                        <Link to={`/edit/${value.id}`}>
                                            <button className="edit-button">EDIT</button>
                                        </Link>
                                        <button
                                            className="delete-button"
                                            onClick={() => handleDelete(value.id)}
                                        >
                                            DELETE
                                        </button>
                                    </td>
                                </tr>
                            );
                        })
                    )}
                    
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home