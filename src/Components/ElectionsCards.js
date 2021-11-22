import '../Styles/election_card.css'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

const ElectionsCards = () => {
    const [routeStatus, setRouteStatus] = useState('/elections')
    const [ data, setData ] = useState([
        {
            id: 1,
            title: 'Pune',
            type: 'General Election',
            date: '12/12/2021',
            numberOfCandidates: 7,
            candidates: ['nayan', 'hemant', 'akash', 'pooja', 'nikhil', 'anurag', 'nayja']
        },
        {
            id: 2,
            title: 'Jalgaon',
            type: 'General Election',
            date: '31/12/2022',
            numberOfCandidates: 2,
            candidates: ['nayan', 'hemant']
        },
        {
            id: 3,
            title: 'Mumbai',
            type: 'General Election',
            date: '22/11/2021',
            numberOfCandidates: 5,
            candidates: ['nayan', 'hemant', 'akash', 'pooja', 'nikhil']
        },
    ])

    const redirect = (candidates) => {
        console.log(candidates)
        setRouteStatus(`/vote/${candidates}`)
        console.log(routeStatus)
    }

    return (
        <div className="elections">
            <h1 className="heading-title">Active Elections</h1>
            <div className="cards">
                {data.map((card) => {
                    let currentDate = new Date();
                    let currentDay = currentDate.getDate();
                    let currentMonth = currentDate.getMonth() + 1;
                    let currentYear = currentDate.getFullYear();
                    let today = `${currentDay}/${currentMonth}/${currentYear}`
                    let show
                    let showText
                    let btnStatus
                    if(today === card.date){
                        show = '#23FB00'
                        showText = 'Ongoing'
                        btnStatus = 'btn-on'
                    }
                    else {
                        show = '#006BFB'
                        showText = 'Coming'
                        btnStatus = 'btn-disable'
                    }
                    return(
                        <div className="card" key={card.id}>
                            <div className="heading">
                                <h3 className="card-title">{card.title}</h3>
                                <p className="type">{card.type}</p>
                            </div>
                            <div className="status">
                                <div className="date">{card.date}</div>
                                <div className="show" style={{backgroundColor:`${show}`}}>{showText}</div>
                            </div>
                            <p className="number">Number of cnadidates: {card.numberOfCandidates}</p>
                            <div className="btn-container">
                                <button onClick={() => redirect(card.candidates)} className={btnStatus}>
                                    <Link style={{textDecoration: 'none', color: '#fff'}} to={routeStatus}>
                                        <h4>Vote</h4>
                                    </Link>
                                </button>
                            </div>
                            {/* <div className="btn-container">
                                <div className={btnStatus} candidates={card.candidates} >Vote</div>
                            </div> */}
                        </div>  
                    )
                  
                })}
                
            </div>
        </div>
    )
}

export default ElectionsCards
