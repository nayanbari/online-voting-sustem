import Navigation from "./Navigation"
import { useState, useEffect } from 'react'
import '../Styles/result.css'

const Result = () => {
    const [data, setData] = useState([])
    const callVotePage = async () => {
        try{
            const res = await fetch('/result', {
                method:"GET",
                headers: {
                    Accept:"application/json",
                    "Content-Type" : "application/json"
                }
            });

            const data = await res.json();
            // let total = 0;
            console.log(data);
            setData(data)
            for (const key in data){
                console.log(`${data[key].name} : ${data[key].votes}`);
                // total += data[key].votes
            }

            if(!res.status === 401 || !data){
                const error = new Error(res.error);
                console.log(error);
                throw error;
            }

        }catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        callVotePage();
        console.log('data',data)
    });

    let srno=0;

    return (
        <div>
            <Navigation />
            <div className="result">
                <h1 className="heading">Result</h1>
                <ul className="list">
                    <li className="row">
                        <h3 className="sr-no">SR NO</h3>
                        <h3 className="name">Candidate Name</h3>
                        <h3 className="vote-gain">Vote Gain</h3>
                    </li>
                    {
                        data.map((candidate) => (
                            <li className="row" key={candidate._id}>
                                <h3 className="sr-no">{srno+=1}</h3>
                                <h3 className="name">{candidate.name}</h3>
                                <h3 className="vote-gain">{candidate.votes}</h3>
                            </li>
                            
                        ))
                    }
                </ul> 
            </div>
            
        </div>
    )
}

export default Result