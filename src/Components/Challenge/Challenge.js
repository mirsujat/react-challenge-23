import React, {useState, useEffect} from 'react';

const Challenge = () => {
    const [ searchTerm, setSearchTerm ] = useState("");
    const [result, setResult] = useState({});
    const [loading, setLoading] = useState(true);
    const [ errMsg, setErrMsg] = useState("");

    
   

    useEffect(() =>{
        const IPREGEX = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        const fetchIp = (param) =>{
            if(IPREGEX.test(param) || param === "me"){
               return fetch(`https://ip.nf/${param}.json`)
               .then(res => res.json())
               .then(res =>  res.ip)
               .then(data => {
                    setResult(data)
                    setLoading(false)
               }) 
            }else{
                setErrMsg("Invalid IP Address!!")
            }
              
        }

        fetchIp(searchTerm || "me");
    }, [ searchTerm ])


    let content;
    if(loading){
        content = <span>Loading......</span>
    }
    if(!loading){
        content = <span>{result.ip}</span>
    }

    let errorMsg;
    if(errMsg.length > 1) {
        errorMsg = <div className='red'>{errMsg}</div>
    }

    return(
        <div>
            <h1>Find Your IP Address:</h1>
            <input 
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            {errorMsg}
            <br></br>
            <br></br> 
            <br></br>
            <br></br>
            <h3>Your IP Address is: {content}</h3>
        </div>
    )
};

export default Challenge;