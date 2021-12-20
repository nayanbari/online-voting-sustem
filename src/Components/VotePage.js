import Navigation from "./Navigation"
import '../Styles/vote_page.css'
import {useNavigate} from 'react-router-dom';
import { useParams } from "react-router"
import { useEffect } from "react"

const VotePage = () => {

    let navigate = useNavigate();

    const {id} = useParams()
    // const candidates = ['nayan', 'hemant', 'akash', 'pooja', 'nikhil', 'anurag', 'nayja']
    console.log(id.split(','))
    const candidatesName = id.split(',')

    const callVotePage = async () => {
        try{
            const res = await fetch('/vote/:id', {
                method:"GET",
                headers: {
                    Accept:"application/json",
                    "Content-Type" : "application/json"
                },
                credentials:"include"
            });

            const data = await res.json();

            if(!res.status === 401 || !data){
                const error = new Error(res.error);
                console.log(error);
                throw error;
            }

        }catch (err) {
            console.log(err);
            navigate("/signin");
        }
    }

    useEffect(() => {
        callVotePage();
        
    });

    const SendData = async (e) => {
        e.preventDefault();

        const res = await fetch("/vote/:id", {method:"POST", headers:{"Content-Type" : "application/json"}, 
        body:JSON.stringify({
            "name":`${document.getElementById('candidates-select').options[document.getElementById('candidates-select').selectedIndex].text}`, "votes":1
        })
        });

        const data = await res.json();

        if(res.status === 420 || !data){
            window.alert ("Voting Failed!");
            console.log("Voting Failed!");
        }else if(res.status === 421){
            window.alert ("Already Voted!");
            console.log("Already Voted!");
        }else{
            navigate("/");
            window.alert ("Voting Successful");
            console.log("Voting Successful");
        }

    }

    return (
        <div>
            <Navigation />
            <div className="vote-page">
                <form method="GET">
                <h1 className="heading-title">Vote Now</h1>
                <div className="vote-form">
                    <div className="input_container">
                        <label htmlFor="Password">Choose Your Candidate</label>
                        <select name="candidates" id="candidates-select" className="input">
                            {/* <option value="">--Please choose a candidate--</option> */}
                            {candidatesName.map((candidate) => (
                            <option value={candidate}>{candidate}</option>
                            ))}
                        </select>
                    </div>
                    <div className="btn-container">
                        <div className="btn" onClick={SendData}>Vote</div>
                    </div>
                </div>
                </form>
            </div>
        </div>
    )
}

export default VotePage
