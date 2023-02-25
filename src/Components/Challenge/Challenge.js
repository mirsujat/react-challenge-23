import React, {useState, useEffect} from 'react';


const Challenge = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [ result, setResult ] = useState({});
    const [ loading, setLoading ] = useState(true);
    const [ errorMsg, setErrorMsg ] = useState("");
    const [ focus, setFocus ] = useState(false);



    useEffect(() =>{
        fetchIp(searchTerm || "me");
    }, [ searchTerm ])


    let content;
    let errorContent;
    

    const fetchIp = (param) =>{
        const IPREGEX = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        if(IPREGEX.test(param) || param === "me"){
            fetch(`https://ip.nf/${param}.json`)
            .then(res => res.json())
            .then(res => res.ip)
            .then(data =>{
                setResult(data);
                setLoading(false);
                setErrorMsg("");
               
            })
        }else{
            setErrorMsg("Invalid IP Address!!")
        }
    }

    const onFocusHandler = () =>{
       setFocus(true);
      return errorContent = null;
    }
    const onBlurHandler = () =>{
        setFocus(false);
        if( errorMsg.length > 1 && !focus ){
            errorContent = <span className="red">{errorMsg}</span>  
        }
    
    }




    if(loading){
        content = <span>Loading.....</span>
    }
    if(!loading){
        content = <span>{result.ip}</span>
    }

    








    return(
        <div>
            <h1>Find Your IP Address: </h1>

            <input 
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={onFocusHandler}
                onBlur={onBlurHandler}
            />
            <div>{errorContent}</div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h3>Your IP Address is : {content}</h3>
        </div>
    )
};

export default Challenge;