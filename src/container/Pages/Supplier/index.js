//Libraries
import React,{Component,Fragment} from 'react';
import ReactDOM from "react-dom";
import Pagination from "react-js-pagination";
import {connect} from 'react-redux';
import {getDataSupplierAPI} from "../../redux/action";
import  "./supplier.css";

class Supplier extends Component {
  constructor(props) {
   super(props);
   this.state = {
     activePage: 1
   };
 }
 refreshHalaman=(page)=> {
   const userData=JSON.parse(localStorage.getItem("userData"));
   const dataParams ={
     email: userData.email,
     token : userData.token,
     activePage: (page==undefined?this.state.activePage:page),
     limitPage : this.props.limitPage
   }
   console.log("page ", page);
   console.log("userData ", JSON.stringify(userData));
   this.props.getSupplier(dataParams);
  }
 componentDidMount(){
   this.refreshHalaman();
 }
 handlePageChange=(pageNumber) =>{
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
    this.refreshHalaman(pageNumber);
  }

   render(){
     const {supplier,activePage}= this.props;
     return (
       <div className="app-container">
        <table>
        <thead>
        <tr>
          <th>View </th>
          <th>Supplier name</th>
          <th>Contact Person  </th>
          <th>Contact Number</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        </thead>
        <tbody>
        {
          supplier.length>0 ? (
            <Fragment>
            {
              supplier.map(datasup=>{
                return (
                  <tr>
                    <td><div className="action-btn" >View</div> </td>
                    <td>{datasup.name}</td>
                    <td>{datasup.contact_person}</td>
                    <td>{datasup.contact_number}</td>
                    <td><div className="action-btn" >edit</div></td>
                    <td><div className="action-btn">X</div></td>
                  </tr>
                )
              })
            }
            </Fragment>
          ) : null
        }
        </tbody>
        </table>
        <Pagination
          hideFirstLastPages={true}
          activePage={this.state.activePage}
          itemsCountPerPage={10}
          totalItemsCount={450}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange.bind(this)}
          innerClass={'pagination'}
          itemClass={'page-item'}
          linkClass={'page-link'}
        />
        </div>
     )
   }
}
const reduxState=(state)=>({
  userData:state.user,
  supplier : state.supplier,
  limitPage : state.limitPage
})
const reduxDispatch=(dispatch)=>({
  getSupplier: (data) => dispatch(getDataSupplierAPI(data))
})

export  default connect(reduxState,reduxDispatch)(Supplier);
