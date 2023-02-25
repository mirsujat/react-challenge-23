import React, {useState, useEffect, useRef} from 'react';

const Challenge = () => {
    const [ searchTerm, setSearchTerm ] = useState("");
    const [ result, setResult ] = useState({});
    const [ loading, setLoading ] = useState(true);
    const [ errMsg, setErrMsg ] = useState("");
    const [ focus, setFocus ] = useState(false);
    const inputRef = useRef();




    useEffect(() =>{
        
        fetchIp(searchTerm || "me");

    }, [ searchTerm])





const fetchIp = (param) =>{
            const IPREGEX = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
            if(IPREGEX.test(param) || param === "me"){
            return fetch(`https://ip.nf/${param}.json`)
            .then(res => res.json())
            .then(res =>  res.ip)
            .then(data => {
                setResult(data)
                setLoading(false)
                setErrMsg("")
            }) 
            }else{
                setErrMsg("Invalid IP Address!!"); 
            }   
        }



let errorMsg;


const focusHandler = () =>{
    setFocus(true);
}

const blurHandler = () =>{
    setFocus(false);
}


if(errMsg.length > 1 && !focus){
    errorMsg = <span className="red">{errMsg}</span>
}

    let content;
    if(loading){
        content = <span>Loading......</span>
    }
    if(!loading){
        content = <span>{result.ip}</span>
    }



    return(
        <div>
            <h1>Find Your IP Address:</h1>

            <input 
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={focusHandler}
                onBlur={blurHandler}
                ref={inputRef}
            
            />
            <div>{ errorMsg }</div>
            
            <br></br>
            <br></br> 
            <br></br>
            <br></br>
            <h3>Your IP Address is: {content}</h3>
        </div>
    )
};

export default Challenge;