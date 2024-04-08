import {connect} from 'react-redux'


function Details(props){
    console.log(props.formRedux.form)
    const {address,BirthDate,studentsName} = props.formRedux.form

    const {gender, studentEmail, mobileNumber, phoneNo, workNumber, company, courses, addComments} = props.formRedux.form;
    return(
        <div>
            <h2>Student Name</h2>
            <ul>
                <li>First Name: {studentsName.firstName}</li>
                <li>Middle Name: {studentsName.middleName}</li>
                <li>Last Name: {studentsName.lastName}</li>
            </ul>
            <h2>Birth Date</h2>
            <ul>
                <li>Month:  {BirthDate.month}</li>
                <li>Day:  {BirthDate.day}</li>
                <li>Year:  {BirthDate.year}</li>
            </ul>
            <ul>
                <li>Gender: {gender}</li>
            </ul>
            <h2>Address</h2>
            <ul>
                <li>
                    Street Address 1: {address.streetAddress1}
                </li>
                <li>
                    Street Address 1: {address.streetAddress2}
                </li>
                <li>City: {address.city}</li>
                <li>State: {address.state}</li>
                <li>Zip Code: {address.zipCode}</li>
                <br />

                <h4>Student Email: {studentEmail}</h4>
                <h4>Mobile Number: {mobileNumber}</h4>
                <h4>Phone Number: {phoneNo}</h4>
                <h4>Work Number: {workNumber}</h4>
                <h4>Company: {company}</h4>
                <h4>Courses: {courses}</h4>
                <h4>Additional Comment: {addComments}</h4>
            </ul>
        </div>
    )
}


const mapStateToProps = (state)=>{
    return state
  }


export default connect(mapStateToProps) (Details);