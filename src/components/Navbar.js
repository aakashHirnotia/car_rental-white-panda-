import React, {Component} from 'react';

class Navbar extends Component {
    render() {
        return(
            <div className="container" style={{padding: "30px", paddingBottom: "75px"}}>
                <a class="brand" style={{ float: "none", textAlign:"center"}} href="#" >
                    <center>
                        <img src={require('../images/rentVroom.png')} height="30" alt="logo"/>
                    </center>
                </a>
            </div>
        );
    }
}

export default Navbar;