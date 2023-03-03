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

//Backdrop
const Backdrop = props => <div className={props.className} {...props} />;


//Modal
class Modal extends Component{
    constructor(props){
        super(props);

        //first focusable element inside modal
        this.firstFocus = React.createRef();
        //previous focusable element outside modal
        this.prevElmRef = React.createRef();

        //next focusable element outside modal
        this.nextElmRef = React.createRef();

        //last focusable element inside modal
        this.lastFocus = React.createRef();


        this.state = { focus: false };

        this.focusAfterClose = null;
        if(this.props.focusAfterClose){
            this.focusAfterClose = window.document.getElementsByClassName('focusAfterClose');
        }


    }

    componentDidUpdate(){
        this.setFocus();
    }

    setFocus = () =>{
        if(this.props.isOpen ){
            this.firstFocus.current.focus();
        }
    }

    onFocus = () => {
        if(this.props.isOpen){
            this.setState({ focus: true });
        }
    }
    onBlur = () =>{
        if(!this.props.isOpen){
            this.setState({ focus: false });
        }
    }

    onKeyUp = (e) =>{
        const rootNode = document.getElementById(`${this.props.id}`);
        if(rootNode.hasChildNodes()){
            if(rootNode.nextSibling.contains(e.target)){
                this.setFocus();
            }
            if(rootNode.previousSibling.contains(e.target)){
                this.lastFocus.current.focus();
            }
        }
        if(e.keyCode === 27){
            this.handleClose();
        }
    }


    handleClose = () =>{
        if(this.props.focusAfterClose){
            this.props.onClose();
            this.focusAfterClose[0].focus();
        }else{
            this.props.onClose();
        }
        
    }




    render(){

        let content = null;
        let backdropClass = 'dialog-backdrop';
        let modalClass = 'hidden';

        if(!this.props.isOpen){
            body.classList.remove('has-dialog');
        }

        if(this.props.isOpen){
            backdropClass = 'dialog-backdrop active';
            modalClass = 'no-scroll';
            body.classList.add('has-dialog');
            content = (
                <>
                    <Backdrop className={backdropClass} onClick={this.handleClose} ></Backdrop>
                    <div tabIndex='0' ref={this.prevElmRef} onKeyUp={(e) => this.onKeyUp(e)} ></div>
                    <div
                        role='dialog'
                        area-modal="true"
                        aria-labelledby={this.props.label}
                        id={this.props.id}
                        open={this.props.isOpen}
                        className={modalClass}
                        onKeyUp={(e) => this.onKeyUp(e)}
                    >
                    <div>
                        <span 
                        tabIndex='0' 
                        ref={this.firstFocus}
                        onFocus={this.onFocus}
                        onBlur={this.onBlur}
                        >
                            {this.props.label}
                        </span>
                    </div>

                        {this.props.children}

                        <button ref={this.lastFocus} >Cancel</button>

                    </div>

                    <div tabIndex='0' ref={this.nextElmRef} onKeyUp={(e) => this.onKeyUp(e)}></div>
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

