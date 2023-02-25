import React, {useState, useEffect} from 'react';


const Challenge = () => {
    const [ searchTerm, setSearchTerm ] = useState("");
    const [ result, setResult ] = useState({});
    const [ loading, setLoading ] = useState({loading: true});
    const [ errMsg, setErrMsg ] = useState("");
    const [ focus, setFocus ] = useState(false);



    let content;
    let error;
    

    useEffect(() =>{
        fetchIp(searchTerm || "me");
    }, [ searchTerm ])


    const fetchIp = (param) =>{
        const IPREGEX = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        if(IPREGEX.test(param) || param === "me"){
            fetch(`https://ip.nf/${param}.json`)
            .then(res => res.json())
            .then(res => res.ip)
            .then(data =>{
                setResult({ data: data });
                setLoading({loading: false});
                setErrMsg("");
            })
        }else{
            setErrMsg("Invalid IP Address!! Make Sure You Typed Correct IP Address.")
        }
    }


    const onFocusHandler  = () =>{
        setFocus(true);
    }

    const onBlurHandler = () =>{
        setFocus(false);
    }
    

    if(loading.loading){
        content = <span>Loading.....</span>
    }
    if(!loading.loading){
        content = <span>{result.data.ip}</span>
    }

    if(errMsg.length > 1 && !focus){
        error = <span className="red">{errMsg}</span>
    }


    return (
        <div>
            <h1>Find Your IP Address:</h1>
            <div>
                <input 
                    type="search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onFocus={onFocusHandler}
                    onBlur={onBlurHandler}
                />
                <div>{error}</div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h3>This is IP Address: {content}</h3>
        </div>
    );
}

export default Challenge;