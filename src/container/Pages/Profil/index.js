//Libraries
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {getDataProfilAPI} from "../../redux/action";

class Profil extends Component {

 componentDidMount(){
   const userData=JSON.parse(localStorage.getItem("userData"));
   console.log("userData ", JSON.stringify(userData));
   this.props.getProfil(userData.token);
 }

   render(){

     const {profiles}= this.props;
     return (

               <div>
                  <img src={profiles.img} alt="gambar profil" />
                   <p >role_label</p>
                    <input type="text" value={profiles.role_label}/>
                   <p >email</p>
                    <input type="text" value={profiles.email}/>
                   <p >account_type</p>
                    <input type="text" value={profiles.account_type}/>
                    <p >first_name</p>
                     <input type="text" value={profiles.first_name}/>
                    <p >last_name</p>
                     <input type="text" value={profiles.last_name}/>
                    <p >company</p>
                     <input type="text" value={profiles.company}/>
                    <p >company_department</p>
                     <input type="text" value={profiles.company_department}/>
                     <p >job_title</p>
                      <input type="text" value={profiles.job_title}/>
                     <p >employee_number</p>
                      <input type="text" value={profiles.employee_number}/>
                     <p >phone_number</p>
                      <input type="text" value={profiles.phone_number}/>
                      <br/>
                      <br/>
                      <button>save</button>
               </div>
     )
   }
}
const reduxState=(state)=>({
  userData:state.user,
  profiles : state.profiles
})
const reduxDispatch=(dispatch)=>({
  getProfil: (data) => dispatch(getDataProfilAPI(data))
})

export  default connect(reduxState,reduxDispatch)(Profil);
