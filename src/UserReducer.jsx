import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./data";

const userSlice = createSlice({
    name: "users",
    initialState: userList,
    reducers: {
        addUser: (state, action) => {
            console.log(action);
            state.push(action.payload)
        },
        updateUser: (state, action) => {
            const { id, firstName, middleName, lastName, SSN, mobile, email, gender, DOB, designation, address, town, zipCode } = action.payload
            const uUser = state.find((item) => item.id == id);

            if (uUser) {
                uUser.firstName = firstName;
                uUser.middleName = middleName;
                uUser.lastName = lastName;
                uUser.SSN = SSN;
                uUser.mobile = mobile;
                uUser.email = email;
                uUser.gender = gender;
                uUser.DOB = DOB;
                uUser.designation = designation;
                uUser.address = addUser;
                uUser.town = town;
                uUser.zipCode = zipCode;
            }
        },
        deleteUser: (state, action) => {
            const { id } = action.payload;
            const dUser = state.find((item) => item.id == id);
            if (dUser) {
                return state.filter(f => f.id !== id)
            }
        },
        
    }
})

export const { addUser, updateUser, deleteUser } = userSlice.actions

export default userSlice.reducer