import Navigation from "./Navigation"
import { useState, useEffect } from 'react'
import '../Styles/result.css'

const Result = () => {
    const [winners, setWinners] = useState([
        {
            id: 123,
            rank: 1,
            name: 'Nayan Bari',
            votesGet: 15834,
            totalVotes: 200000,
        },
        {
            id: 234,
            rank: 2,
            name: 'Bhavesh Badre',
            votesGet: 210,
            totalVotes: 200000,
        },
        {
            id: 345,
            rank: 3,
            name: 'Nayan Bari',
            votesGet: 15834,
            totalVotes: 200000,
        },
        {
            id: 456,
            rank: 4,
            name: 'Nayan Bari',
            votesGet: 15834,
            totalVotes: 200000,
        },
        {
            id: 567,
            rank: 5,
            name: 'Nayan Bari',
            votesGet: 15834,
            totalVotes: 200000,
        },
])
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
                        <h3 className="total">Total Vote</h3>
                    </li>
                    {
                        winners.map((winner) => (
                            <li className="row" key={winner.id}>
                                <h3 className="sr-no">{winner.rank}</h3>
                                <h3 className="name">{winner.name}</h3>
                                <h3 className="vote-gain">{winner.votesGet}</h3>
                                <h3 className="total">{winner.totalVotes}</h3>
                            </li>
                        ))
                    }
                </ul> 
            </div>
            
        </div>
    )
}

export default Result
