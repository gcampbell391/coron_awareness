import React, { useState, useEffect } from 'react'
import CoronaMap from '../components/CoronaMap'


const Home = () => {

    const [chartData, setChartData] = useState([['Country', 'New Confirmed Cases']])
    const [updateDate, setUpdateDate] = useState('')

    useEffect(() => {
        fetch('https://api.covid19api.com/summary')
            .then(resp => resp.json())
            .then(data => {
                setUpdateDate(data.Date)
                data.Countries.forEach(country => {
                    console.log(country)
                    setChartData(chartData => [...chartData, [country.Country, country.NewConfirmed]])
                })
            })
    }, [])

    return (
        <div>
            <h1>Coron-Awareness</h1>
            <p>Last Updated: {updateDate}</p>
            <CoronaMap data={chartData} />
        </div>
    )
}

export default Home