import React from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { Table } from "reactstrap";

class CarDetails extends React.Component {
    state={
        car: this.props.car
    }
    componentDidMount() {
        console.log(this.props.car)
        this.setState( {car: this.props.car})
    }
    componentWillReceiveProps(nP) {
        this.setState({car: nP.car})
    }
    render() {
    return (
        <div>
            <div className="container">
                <Navbar />
                <div className="container">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <div className="card mb-3" style={{maxWidth: "1000px",paddingLeft:"15px", maxHeight: "600px",border: "1px solid lightgrey", borderRadius:"5px"}} key={this.state.car.vehicleNo}>
                                <div className="row no-gutters">
                                    <div className="col-md-6">
                                        <img src={require(`../images/1${this.state.car.image}`)} className="card-img img-responsive" alt="car" />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card-body">
                                            <h3 className="card-title"><strong>{this.state.car.name}</strong></h3>
                                            <i className="fa fa-eyedropper"> {this.state.car.colour}</i>
                                            <i className="fa fa-wheelchair" style={{paddingLeft: "20px"}}> {this.state.car.maxSeats} seater</i>
                                            <h6>Rent per Day: <h5 style={{display: "inline"}}><i className="fa fa-inr"> {this.state.car.rent}</i></h5></h6>
                                            <Link to="/bookCar">
                                                <button type="button" className="btn btn-info btn-sm" disabled={!this.state.car.status}>Book Now</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                    <div className="row" style={{paddingTop: "30px"}}>
                        <div className="col-md-2"></div>
                        <div classNmae="col-md-8" style={{paddingLeft: "210px", paddingRight: "210px"}}>
                            <div className="card mb-4" style={{maxWidth: "800px", maxHeight: "200px", borderRadius:"5px"}}></div>
                            <h2 style={{paddingTop: "10px"}}>Car Details</h2>
                            <hr></hr>
                            <div className="card-body">
                                <span class="badge badge-pill badge-success">{this.state.car.status ? "Available" : "Not Available"}</span>
                                <p class="card-text" style={{paddingTop: "20px"}}>Vehicle No : {this.state.car.vehicleNo}</p>
                                <p class="card-text">{this.state.car.type}</p>
                                <p class="card-text">{this.state.car.description}</p>
                                <h2>Current Booking</h2>
                                <hr></hr>
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Phone No.</th>
                                            <th>Issue Date</th>
                                            <th>Return Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{this.state.car.booking.name}</td>
                                            <td>{this.state.car.booking.phone}</td>
                                            <td>{this.state.car.booking.issueDate}</td>
                                            <td>{this.state.car.booking.returnDate}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
            </div>
            <div style={{paddingLeft: "40px"}}>
                <h2>Rent Vroom</h2>
                <br></br>
                <p>Rentvroom Pvt. Ltd.</p>
                <p>No. 296, 3rd Cross Rd, Jakkasandra, 1st Block, Koramangla</p>
                <p>Bengaluru, Karnataka 560034</p>
                <br></br>
                <i class="fa fa-twitter" ></i>
                <i class="fa fa-instagram" style={{paddingLeft: "50px"}}></i>
                <i class="fa fa-linkedin-square" style={{paddingLeft: "50px"}}></i>
                <br></br>
                <br></br>
                <i>Home</i>
                <i style={{paddingLeft: "30px"}}>Contact</i>
                <i style={{paddingLeft: "30px"}}>About</i>
                <i className="pull-right">Private Policy</i>
                <i className="pull-right" style={{paddingRight: "50px"}}>Terms of Services</i>
            </div>
        </div>
    );}
}

const mapStateToProps = (state) => {
    console.log(state);
    return { car: state.selectedCar}
};

export default connect(mapStateToProps)(CarDetails);