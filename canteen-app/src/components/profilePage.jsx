import React, { Component } from 'react';
import { getCustomerByEmailAction } from "../actions/loginactions";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class ProfilePage extends Component {
    state = {
    customer:{},
    login:{}
  };

  componentDidMount() {
    this.props.getCustomerByEmailAction(this.props.login.email);
}

    render() {
        const {cus}=this.state.customer;
        console.log(this.props.customer); 
        console.log(this.props.login);

        return (
            <div>
      <div className="container mt-5">
        <div className="card w-50 mx-auto">
          <div className="d-flex justify-content-between card-header">
            <h5>Personal Details</h5>
            <h5>
               <Link to="#">
              <i className="bi bi-pencil-square"></i>
              </Link>
            </h5>
          </div>

          <div className="card-body">
            <table>
              <tbody>
                <tr>
                  <td>
                    <b>Name: </b>
                  </td>
                  <td className="ps-3">{cus.cusName}</td>
                </tr>
                <tr>
                  <td>
                    <b>Contact Number: </b>
                  </td>
                  <td className="ps-3">{cus.cusContactNo}</td>
                </tr>
                <tr>
                  <td>
                    <b>Email Address: </b>
                  </td>
                  <td className="ps-3"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        {/* {cus.address.length!=0 &&  */}
        <div className="card w-50 mx-auto mt-3">
          <div className="d-flex justify-content-between card-header">
            <h5>Address<i class="bi bi-house-heart-fill"></i></h5>
            <h5>
              <Link to="#">
                <i className="bi bi-pencil-square"></i>
              </Link>
              <i className="bi bi-trash3 ms-2" type="button"></i>
            </h5>
          </div>
           <div className="card-body">
            {cus.address.map((addr)=>(
            <table>
              <tbody>
                <tr>
                  <td>
                    <b>House Number: </b>
                  </td>
                  <td className="ps-3">{addr.houseNo}</td>
                </tr>
                <tr>
                  <td>
                    <b>Street:</b>
                  </td>
                  <td className="ps-3">{addr.street}</td>
                </tr>
                <tr>
                  <td>
                    <b>City: </b>
                  </td>
                  <td className="ps-3">{addr.city}</td>
                </tr>
                <tr>
                  <td>
                    <b>State: </b>
                  </td>
                  <td className="ps-3">{addr.state}</td>
                </tr>
                <tr>
                  <td>
                    <b>Pin Code: </b>
                  </td>
                  <td className="ps-3">{addr.pinCode}</td>
                </tr>
                <tr>
                  <td>
                    <hr />
                  </td>
                  <td >
                    <hr />
                  </td>
                </tr>
              </tbody>
            </table>
            ))}
          </div>
          
        </div>   
        
      </div>
    </div> 
        );
    }
}
 
// funtion to get updates from store
const mapStateToProps = (state) => {
  
  return {
    login: state.custstore.login,
    customer: state.custstore.customer,
  };
};

// function to dispatch actions
// const mapDispatchToProps = (dispatch) => {
//   return {
//     getCustomerByEmailAction:(login)=> getCustomerByEmailAction(login.email),
//   };
// };
// function to dispatch actions
// const mapDispatchToProps = (dispatch) => {
//   return {
//     getCustomerByEmailAction,
//   };
// };

// function to dispatch actions
const mapDispatchToProps = (dispatch) => {
  return {
    getCustomerByEmailAction:(email)=>{dispatch(getCustomerByEmailAction(email))}
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(ProfilePage); // connect component to store