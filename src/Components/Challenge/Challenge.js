import React, { Component } from 'react';
import Modal from "../Modal/Modal";



class Challenge extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isOpen: false
         };
    }

    openModal = () => {
    this.setState({isOpen: true});
    }
    closeModal = () =>{
        this.setState({ isOpen: false });
    }



    render() {
        return (
            <div>
                <button onClick={this.openModal} >Show Modal</button>
                <Modal
                isOpen={this.state.isOpen}
                onClose={this.closeModal}
                >
                    <h1>Helo From Modal</h1>
                    <button onClick={this.closeModal}>close</button>
                </Modal>
            </div>
        );
    }
}

export default Challenge;
