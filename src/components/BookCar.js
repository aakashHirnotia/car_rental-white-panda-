import React from 'react';
import { connect } from 'react-redux';
import './BookCar.css';
import { Link } from 'react-router-dom';
import PopUp from './PopUp';

import {selectedCar, bookCar} from '../actions/index'

class BookCar extends React.Component {
    state={
        details: {
            vehicleNo: this.props.car.vehicleNo,
            booking: {
                name: "",
                phone: "",
                issueDate: "",
                returnDate: ""
            },
        },
        nameError: "",
        phoneError: "",
        issueDateError: "",
        returnDateError: "",
        showModal: false
    }
    componentDidMount(){
        console.log("hii"+this.props.car.vehicleNo)
    }
    componentWillReceiveProps(nP) {
        this.setState({details: {
            vehicleNo: this.props.car.vehicleNo,
            booking: {}
        }})
    }

    validate = () => {
        let nameError = "";
        let phoneError = "";
        let issueDateError = "";
        let returnDateError = "";
        if (!this.state.details.booking.name) {
          nameError = "Name can't be empty";
        }
        if (!this.state.details.booking.phone) {
          phoneError = "Contact No. can't be empty";
        }
        if (!this.state.details.booking.issueDateError) {
          issueDateError = "Please choose a date.";
        }
        if (!this.state.details.booking.returnDateError) {
          returnDateError = "Please choose a date";
        }
        else if(isNaN(this.state.details.booking.phone) || this.state.details.booking.phone<6000000000){
          phoneError = "Invalid ";
        }
        else if(this.state.details.booking.phone!==10){
          phoneError= "Please Enter a 10 Digit Mobile No";
        }
    
        if (
          nameError ||
          phoneError ||
          issueDateError ||
          returnDateError
        ) {
          this.setState({
            nameError,
            phoneError,
            issueDateError,
            returnDateError
          });
          return false;
        }
        return true;
      };
    

    onChange= (e)=> {
        let booking = this.state.details.booking;
        console.log("hii : "+e.target.value)
        booking[e.target.name] = e.target.value;
        this.setState({ details:{
            vehicleNo:this.state.details.vehicleNo,
            booking
        }});
    }

    onClick=(e) => {
        e.preventDefault();
        console.log("state: "+ this.state.details.booking.name)
        
        const isValid = this.validate();
        console.log("isValid = " + isValid);
        if (isValid) {
            console.log("HEy")
            this.props.bookCar(this.state.details);  
        };
    }

    
render() {
    return(
        <div className="container" >
            <div className="col-md-4">
                <i>
                    <img src={require('../images/images.png')} height="450"  alt="logo"/>
                </i>
            </div>
            <div className="col-md-8">
                <div className="row" style={{paddingTop: "70px"}}>
                    <div className="col-sm-8">
                        <h3 className="title">Booking details</h3>
                    </div>
                    <div className="col-sm-4">
                        <i className="pull-right">
                            <img src={require('../images/rentVroom.png')} height="30" alt="logo"/>
                        </i>
                    </div>
                </div>
                <form className="contact-form row" action={this.onClick} style={{paddingTop: "50px"}}>
                    <div className="form-field col-lg-6">
                        <input 
                            id="name" 
                            className="input-text js-input" 
                            type="text" 
                            name="name"
                            value={this.state.details.booking.name}
                            onChange={this.onChange}
                            required 
                        />
                        <label className="label" for="name">Name</label>
                        <div style={{ fontSize: 10, color: "red" }}>
                          {this.state.nameError}
                        </div>
                    </div>
                    <div className="form-field col-lg-6 ">
                        <input 
                            id="phone" 
                            className="input-text js-input" 
                            type="text"  
                            name="phone"
                            value={this.state.details.booking.phone}
                            onChange={this.onChange}
                            required
                        />
                        <label className="label" for="phone">Contact Number</label>
                        <div style={{ fontSize: 10, color: "red" }}>
                          {this.state.phoneError}
                        </div>
                    </div>
                    <div className="form-field col-lg-6 ">
                        <input 
                            id="issueDate" 
                            className="input-text js-input" 
                            type="date"
                            name="issueDate"
                            min="2020-05-09"
                            value={this.state.details.booking.issueDate}
                            onChange={this.onChange}
                            required
                        />
                        <label className="label" for="date">Issue Date</label>
                        <div style={{ fontSize: 10, color: "red" }}>
                          {this.state.issueDateError}
                        </div>
                    </div>
                    <div className="form-field col-lg-6 ">
                        <input 
                            id="returnDate" 
                            className="input-text js-input" 
                            type="date"
                            name="returnDate"
                            min="2020-05-10"
                            value={this.state.details.booking.returnDate}
                            onChange={this.onChange}
                            required
                        />
                        <label className="label" for="returnDate">Return Date</label>
                        <div style={{ fontSize: 10, color: "red" }}>
                          {this.state.returnDateError}
                        </div>
                    </div>
                    <div className="form-field col-lg-12">
                        <Link to="/" style={{color: "black"}}>Back</Link>
                        <input className="submit-btn pull-right" type="submit" style={{borderRadius: "5px"}} value="Book Car" />
                        {/* <button 
                            className="submit-btn pull-right"
                            type="submit"
                            style={{borderRadius: "5px"}}
                            onClick={this.onClick}
                        >
                            Book Car
                        </button> */}
                    </div>
                    
                </form>
            </div>

        </div>
    ); }
};


const mapStateToProps = (state) => {
    return { car: state.selectedCar}
};

export default connect(mapStateToProps,{bookCar})(BookCar);