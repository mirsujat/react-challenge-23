import React, { Component } from 'react';
import ReactDOM from 'react-dom';

let body = document.body;
let modalRoot = document.getElementById('modal-root');
if(!modalRoot){
    modalRoot = document.createElement('div');
    modalRoot.setAttribute('id', 'modal-root');
    body.appendChild(modalRoot);
}

class Portal extends Component{
    constructor(props){
        super(props);
        this.container = document.createElement('div');
    }

    componentDidMount() {
        modalRoot.appendChild(this.container);
    }
    componentWillUnmount(){
        modalRoot.removeChild(this.container);
    }

    render(){
        return ReactDOM.createPortal(this.props.children, this.container);
    }
}

//backdrop
const Backdrop = props => <div className={props.className} {...props} />


//Modal
class Modal extends Component{
    constructor(props){
        super(props);

        //first focusable element inside modal
        this.firstFocus = React.createRef();


        this.focusAfterClose = null;
        if(this.props.focusAfterClose){
            this.focusAfterClose = window.document.getElementsByClassName('focusAfterClose');
        }

        this.state = {
            focus: false
        }
    }

    componentDidUpdate() {
        this.setFocus();
    }

    setFocus = () =>{
        if(!this.props.isOpen) return;
        if(this.props.isOpen){
            this.firstFocus.current.focus();
        }
    }

    onFocus = () =>{
        this.setState({ focus: true });
    }
    onBlur = () =>{
        this.setFocus({ focus: false });
    }


    handleClose = () =>{
        if(this.props.focusAfterClose){
            this.props.onClose();
            this.focusAfterClose[0].focus();
        }

        this.props.onClose();
    }


    render(){

        let content = null;
        let backdropClass = 'dialog-backdrop';
        let modalClass = 'hidden'
        if(!this.props.isOpen){
            body.classList.remove('has-dialol');
        }
        if(this.props.isOpen){
            backdropClass = 'dialog-backdrop active';
            modalClass = 'no-scroll';
            body.classList.add('has-dialog');

            content = (
                <>
                <Backdrop className={backdropClass} onClick={this.handleClose} ></Backdrop>
                <div
                role='dialog'
                className={modalClass}
                open={this.props.isOpen}

                >
                <div>
                    <span
                        ref={this.firstFocus}
                        tabIndex='0'
                        onFocus={this.onFocus}
                        onBlur={this.onBlur}
                        onClick={this.setFocus}

                    >
                        {this.props.label}
                    </span>
                </div>
                    {this.props.children}
                </div>
                </>
            )
        }

        return(
            <Portal>
                <>{content}</>
            </Portal>
        )
    }
}

export default Modal;