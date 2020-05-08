import React, {Component} from 'react'
import { Modal, Button, Row, Col, Form} from 'react-bootstrap'


export default class PopUp extends Component{ 
    constructor(props){
        super(props);
        this.state= {
            status: false
        }
    }

    render(){
        return(
            <div>
                <Modal show={true} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>title</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Hello World</p>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick='..'>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}