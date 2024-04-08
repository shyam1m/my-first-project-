import './Form.css';
import { studentName, birthDate,address,commonInput } from '../../Redux-toolkit/FormSlice';  
import {connect} from 'react-redux'
import {useHistory} from 'react-router-dom'
import { useEffect, useState } from 'react';


function Form(props) {

  const [monthState,setMonthState] = useState(["January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"])
  const [dayState,setDayState] = useState([])
  const [yearState,setYearState] = useState([])



  useEffect(()=>{

    let i = 1;

    let arry = []

    while(i<=30){
     arry.push(i)
      i++;
    }
    setDayState(arry);

    let Y = 1995;
    let arryYear = []
    while(Y<=2024){
      arryYear.unshift(Y)
       Y++;
     }
     setYearState(arryYear);



  },[])

  console.log(dayState)

 
  const history = useHistory();


  const {commonDispatch,addressDispatch,birthNameDispatch,studentNameDispatch, formRedux
  } = props

  const {address,BirthDate,studentsName} = formRedux.form;

 

  const {gender, studentEmail, mobileNumber, phoneNo, workNumber, company, courses, addComments} = formRedux.form;

 function studentNameFun(e){
 
  studentNameDispatch(e)
 }

 function birthDateFun(e){
  birthNameDispatch(e)
 }

 function addressFun(e){
  addressDispatch(e)
 }


 function commonInput(e){
  commonDispatch(e)
}


function handleSubmit(event){
  event.preventDefault();
  if(gender && studentEmail && mobileNumber && phoneNo && workNumber && company && courses && addComments && studentsName.firstName && studentsName.middleName && studentsName.lastName && BirthDate.month && BirthDate.day && BirthDate.year && address.streetAddress1 && address.streetAddress2 && address.city && address.state && address.zipCode){
 // Open a new tab/window with the form's action URL
 const newTab = window.open(event.target.action, '_blank');
  
 newTab.onload = () => {
   // Redirect to '/details' in the current tab/window
   history.push('/details');
 };
  }else{
    alert('Please fill all the Input fields')
  }

 
}
  return (
    <div className="App">
      <div class="containerMain">
        <form onSubmit={handleSubmit}  className='form'>
            <div class="row">
                <div class="col">
                    <h1>Registration Form</h1>
                    <p>Fill out the form carefully for registration</p>
                    <hr />
                    <div class="container text-center">
                    
  <div class="row">
<div><label for="exampleInputEmail1" class="form-label fontWeight" id='studentLabel' style={{marginLeft:'-13px', display:'flex'}} >Student Name</label></div>
    <div class="col">
    
    <input type="text" class="form-control "  style={{marginLeft:"-10px"}}   value={studentsName.firstName} onChange={(e)=>studentNameFun({id:e.target.id,value:e.target.value})} id="firstName" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text form-text1">First Name</div>
    </div>
    <div class="col">
    <input type="text" class="form-control"  value={studentsName.middleName} onChange={(e)=>studentNameFun({id:e.target.id,value:e.target.value})} id="middleName" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text form-text1">Middle Name</div>
    </div>
    <div class="col">
      <input type="text" class="form-control" value={studentsName.lastName} onChange={(e)=>studentNameFun({id:e.target.id,value:e.target.value})} id="lastName" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text form-text1">Last Name</div>
    </div>
  </div>
</div>

<div style={{marginTop:"25px"}}>

<div ><label for="exampleInputEmail1" class="form-label fontWeight" >Birth Date</label></div>

<div class="row">
    <div class="col">
    


    <div class="row">
    <div class="col">
    <select class="form-select" value={BirthDate.month} onChange={(e)=>birthDateFun({id:e.target.id,value:e.target.value})} id='month' aria-label="Default select example">
  <option selected>Please Select</option>
  {monthState.map(e=>(
  <option value={e}>{e}</option>
  ))}
  
</select>
  <div class="form-text form-text1">Month</div>
    </div>
    <div class="col">
    <select class="form-select" value={BirthDate.day} onChange={(e)=>birthDateFun({id:e.target.id,value:e.target.value})} id='day' aria-label="Default select example">
    <option selected>Please Select</option>
    {dayState.map(e=>(
  <option value={e}>{e}</option>
    ))}
</select>
<div id="emailHelp" class="form-text form-text1">Date</div>
    </div>
    <div class="col">
    <select class="form-select" value={BirthDate.year} onChange={(e)=>birthDateFun({id:e.target.id,value:e.target.value})} id='year' aria-label="Default select example">
  <option selected>Open this select menu</option>
  {yearState.map(e=>(
  <option value={e}>{e}</option>
  ))}
 
</select>
<div id="emailHelp" class="form-text form-text1">Year</div>
    </div>
  </div>

    </div>
    
    <div class="col" style={{marginTop:"-32px"}}>
     

      <div><label for="exampleInputEmail1" class="form-label fontWeight" >Gender</label></div>
      <select class="form-select " value={gender} onChange={(e)=>commonInput({id:e.target.id,value:e.target.value})} id='gender' aria-label="Default select example">
  <option selected>Please select menu</option>
  <option value="Male">male</option>
  <option value="Female">Female</option>
  <option value="N/A">N/A</option>
</select>

      


      </div>
   
    </div>
  </div>
  <br />
  <div><label for="exampleInputEmail1" class="form-label fontWeight" >Address</label></div>
  <div>
  <input type="text" class="form-control mt-3" value={address.streetAddress1} onChange={(e)=>addressFun({id:e.target.id,value:e.target.value})}  id="streetAddress1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">Street Address1</div>
  </div>
  <div>
  <input type="text" class="form-control mt-3" value={address.streetAddress2} onChange={(e)=>addressFun({id:e.target.id,value:e.target.value})} id="streetAddress2" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">Street Address2</div>
  </div>

  <div class="row">
    <div class="col">
    <input type="text" class="form-control mt-3" value={address.city} onChange={(e)=>addressFun({id:e.target.id,value:e.target.value})}  id="city" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">City</div>
    </div>
    <div class="col">
    <input type="text" class="form-control mt-3" value={address.state} onChange={(e)=>addressFun({id:e.target.id,value:e.target.value})}  id="state" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">State</div>
    </div>
    </div>

    <div>
  <input type="text" class="form-control mt-3" value={address.zipCode} onChange={(e)=>addressFun({id:e.target.id,value:e.target.value})}  id="zipCode" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">Zip code</div>
  </div>
  <br />


    <div class="row">
    <div class="col">
    <div class="md-12">
    <label for="studentEmail" class="form-label fontWeight">Student Email</label>
    <input type="text" value={studentEmail} onChange={(e)=>commonInput({id:e.target.id,value:e.target.value})}  class="form-control" id="studentEmail" aria-describedby="emailHelp"/>
  </div>
    </div>
    <div class="col">
    <div class="md-12">
    <label for="mobileNumber" class="form-label fontWeight">Mobile Number</label>
    <input type="number" value={mobileNumber} onChange={(e)=>commonInput({id:e.target.id,value:e.target.value})} class="form-control" id="mobileNumber" aria-describedby="emailHelp"/>
  </div>
    </div>
    </div>
<br />

    <div class="row">
    <div class="col">
    <div class="md-12">
    <label for="phoneNo" class="form-label fontWeight">Phone Number</label>
    <input type="number" value={phoneNo} onChange={(e)=>commonInput({id:e.target.id,value:e.target.value})} class="form-control" id="phoneNo" aria-describedby="emailHelp"/>
  </div>
    </div>
    <div class="col">
    <div class="md-12">
    <label for="workNumber" class="form-label fontWeight">Work Number</label>
    <input type="number" value={workNumber} onChange={(e)=>commonInput({id:e.target.id,value:e.target.value})} class="form-control" id="workNumber" aria-describedby="emailHelp"/>
  </div>
    </div>
    </div>
    <br />



    <div class="row">
    <div class="col">
    <div class="md-12">
    <label for="exampleInputEmail1"  class="form-label fontWeight">Company</label>
    <input type="text" value={company} onChange={(e)=>commonInput({id:e.target.id,value:e.target.value})} class="form-control" id="company" aria-describedby="emailHelp"/>
  </div>
    </div>
    <div class="col">
    <div class="md-12">
    <label for="exampleInputEmail1"   class="form-label fontWeight">Courses</label>
    <input type="text" value={courses} onChange={(e)=>commonInput({id:e.target.id,value:e.target.value})} class="form-control" id="courses" aria-describedby="emailHelp"/>
  </div>
    </div>
    </div>
    <br />

<div>
<label for="exampleFormControlTextarea1"  class="form-label fontWeight">Additional Command</label>
  <textarea class="form-control" value={addComments} onChange={(e)=>commonInput({id:e.target.id,value:e.target.value})} id="addComments" rows="3"></textarea>
</div>

            <br />       
            <hr/>
                  
                </div>
              

            </div>
          <div style={{padding:"20px 0px 10px 10px"}}>
            <button >Submit</button>
            </div>
        </form>
    </div>
    </div>
  );
}

const mapStateToProps = (state)=>{
  return state
}


const mapDispatchToProps = (dispatch)=>{
  return{
      // submitDispatch:(data)=>dispatch(submitForm(data)),
      studentNameDispatch:(data)=>dispatch(studentName(data)),
      birthNameDispatch:(data)=>dispatch(birthDate(data)),
      addressDispatch:(data)=>dispatch(address(data)),
      commonDispatch:(data)=>dispatch(commonInput(data))
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (Form);
