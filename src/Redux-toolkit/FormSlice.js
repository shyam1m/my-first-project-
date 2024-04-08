import {createSlice} from '@reduxjs/toolkit'


const FormSlice = createSlice({
    name:'form',
    initialState:{
      form:{
        studentsName:{
            firstName:"",
            middleName:"",
            lastName:"",
        },
        BirthDate:{
            month:"",
            day:"",
            year:""
        },
        gender:"",
        address:{
            streetAddress1:"",
            streetAddress2:"",
            city:"",
            state:"",
            zipCode:"",
        },
        studentEmail:"",
        mobileNumber:"",
        phoneNo:"",
        workNumber:"",
        company:"",
        courses:"",
        addComments:"",
      }
    },
    reducers:{
        studentName:(state,action)=>{
            let obj = action.payload
            state.form.studentsName[obj.id] = obj.value
        },
        birthDate:(state,action)=>{
            let obj = action.payload
            state.form.BirthDate[obj.id] = obj.value
        },
        address:(state,action)=>{
            let obj = action.payload
            state.form.address[obj.id] = obj.value
        },
        commonInput:(state,action)=>{
            let obj = action.payload
            state.form[obj.id] = obj.value
        }

    }
})

export default FormSlice.reducer

export const {studentName,birthDate,address,commonInput} = FormSlice.actions

 