import React,{Component,Fragment} from 'react';
import {connect} from 'react-redux';
import {loginUserAPI} from "../../redux/action";
import './Login.css';

class Login  extends Component {
  // changeUser = () =>{
  //   this.props.changeUserName();
  // }
  state ={
    email : "",
    password : ""
  }
  handleChangeText = (e) =>{
    console.log(this.state);
    this.setState({
      [e.target.id]:e.target.value
    })
  }
  handleLoginSubmit = async () => {
    const {email,password} = this.state;
    const {history} =this.props;
    //this.props.registerAPI({email : email, password: password});
    //karena nama object sama dg nama variabel isi maka bisa diubah yg atas spt dibawah :
    const res=await this.props.loginAPI({ email,  password}).catch(err=>err);
    if(res)//hasil resolve true
    {
      console.log("login success", JSON.stringify(res))
      localStorage.setItem("userData", JSON.stringify(res));
      this.setState({
        email : "",
        password : ""
      })
      history.push('/profil');
    }
    else{
      alert("login fail");
      console.log("login fail")
    }

  }


  render() {
    return(
        <Fragment>
          <div className="auth-container">
            <div className="auth-card">
              <p className="auth-title">AssetData.io</p>
              <input className="input" id="email" placeholder="email" type="text" onChange={this.handleChangeText} value={this.state.email}/>
              <input className="input" id="password" placeholder="password" type="password" onChange={this.handleChangeText} value={this.state.password} />
              <button className="btn"  onClick={this.handleLoginSubmit} > Login </button>
            </div>

          </div>
        </Fragment>
    )
  }
}

//sama sperti di atas
// const actionUserName =()=>{
//   return(dispatch) =>{
//     setTimeout(()=>{
//       return dispatch({type:'CHANGE_USER', value:"Prawito Hudoro"})
//     },2000)
//   }
// }
//belajar pake redux utk username
// const reduxState= (state)=>({
//   popupProps : state.popup,
//   userName : state.user
// })
//
// const reduxDispatch = (dispatch)=>({
//   changeUserName:()=>dispatch(actionUserName())
// })

const reduxState=(state)=>({
  //isLoading : state.isLoading
})
// const reduxDispatch=(dispatch)=>({
//   loginAPI: (data) => dispatch(loginUserAPI(data))
// })

const reduxDispatch=(dispatch)=>({
  loginAPI: (data) => dispatch(loginUserAPI(data))
})

export  default connect(reduxState,reduxDispatch)(Login);
