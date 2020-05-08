import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectedCar } from '../actions';
import Navbar from './Navbar';
 
class CarList extends Component {
    renderCarList() {
        return this.props.cars.map((car) => {
            return(
                <div className="container" style={{padding: "20px"}} >
                    <div className="col-sm-1"></div>
                    <div className="col-sm-10">
                        <div className="card mb-3" style={{maxWidth: "1000px", maxHeight: "86px", border: "1px solid lightblue", borderRadius:"5px"}} key={car.vehicleNo}>
                            <div className="row" style={{paddingRight: "100px"}}>
                                <div className="col-sm-3">
                                    <img src={require(`../images/${car.image}`)} className="card-img img-responsive" alt="car" />
                                </div>
                                <div className="col-sm-6">
                                    <div className="card-body" >
                                        <h5 className="card-title" style={{paddingTop: "1px"}}><strong>{car.name}</strong></h5>
                                        <div className="row" style={{paddingTop: "10px"}}> 
                                            <div className="col-sm-6" style={{paddingLeft:"0px", paddingRight:"0"}}>
                                                <i class="fa fa-eyedropper"></i>
                                                <p className="card-text " style={{display: "inline", paddingLeft: "10px"}}>{car.colour}</p>
                                            </div>
                                            <div className="col-sm-6" style={{paddingLeft:"0px", paddingRight:"0"}}>
                                                <i className="fa fa-wheelchair"></i>
                                                <p className="card-text" style={{display: "inline", paddingLeft: "10px"}}>{car.maxSeats} seater</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3" style={{position: "centre", paddingTop: "30px"}}>
                                    <div className="row">
                                        <div className="col-sm-4" style={{paddingTop: "8px"}}>
                                            <p className="card-text" ><i class="fa fa-inr"> {car.rent}</i></p>
                                        </div>
                                        <div className="col-sm-4">
                                            <Link to="/bookCar">
                                                <button 
                                                    type="button" 
                                                    class="btn btn-info btn-sm"
                                                    disabled={!car.status}
                                                    onClick={() => this.props.selectedCar(car)}
                                                >
                                                    Book Now
                                                </button>
                                            </Link>
                                        </div>
                                        <div className="col-sm-4" style={{paddingLeft: "50px"}}>
                                            <Link to="/car/details"> 
                                                <button 
                                                    type="button" 
                                                    class="btn btn-light btn-sm"
                                                    onClick={() => this.props.selectedCar(car)}
                                                >
                                                    Details
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-1"></div>
                </div>
                
                    
            );
        });
    }

    render() {
        return (
            <div className="container">
                <Navbar />
                <div className="container">
                    <h2 style={{paddingLeft: "60px", paddingTop: "20px"}}>Cars for Rent</h2>
                    <hr></hr>
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-4" style={{paddingLeft: "40px"}}>Car Details</div>
                        <div className="col-md-3" style={{paddingLeft: "40px"}}>Rent Per Day</div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
                <div>{this.renderCarList()}</div>
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
        );
    }
}

const mapStateToProps = (state) => {
    // console.log(state);
    return { cars: state.cars };
};

export default connect(mapStateToProps, { selectedCar })(CarList);