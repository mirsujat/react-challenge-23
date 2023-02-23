import React, {useState, useEffect} from 'react';


const Challenge = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [result, setResult] = useState({ });
    const [loading, setLoading] = useState(true);


    useEffect(() =>{
        const fetchIp = (searchTerm) =>{
            fetch(`https://ip.nf/${searchTerm}.json`)
                .then(res => res.json())
                .then(res => res.ip)
                .then(data => {
                    setResult(data)
                    setLoading(false)
                })
        }



        fetchIp("me" || searchTerm );

    }, [searchTerm])



    let content;
    if(loading){
        content = <span>Loading....</span>;
    } 
    if(!loading){
        content = <span>{result.ip}</span>;
    } 

    return(
        <div>
            <h1>Find Your IP Address:</h1>
            <input 
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h2>Your IP Address: {content}</h2>
        </div>
    )
};

export default Challenge;