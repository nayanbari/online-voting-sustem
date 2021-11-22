import Navigation from "./Navigation"
import '../Styles/vote_page.css'
import { useParams } from "react-router"

const VotePage = () => {
    const {id} = useParams()
    const candidates = ['nayan', 'hemant', 'akash', 'pooja', 'nikhil', 'anurag', 'nayja']
    console.log(id.split(','))
    const candidatesName = id.split(',')
    return (
        <div>
            <Navigation />
            <div className="vote-page">
                <h1 className="heading-title">Vote Now</h1>
                <div className="vote-form">
                    <div className="input_container">
                        <label htmlFor="Password">Choose Your Candidate</label>
                        <select name="candidates" id="candidates-select" className="input">
                            <option value="">--Please choose a candidate--</option>
                            {candidatesName.map((candidate) => (
                            <option value={candidate}>{candidate}</option>
                            ))}
                        </select>
                    </div>
                    <div className="btn-container">
                        <div className="btn" >Vote</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VotePage
