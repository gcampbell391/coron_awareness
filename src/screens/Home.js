import React, { useState, useEffect } from 'react'
import CoronaMap from '../components/CoronaMap'


const Home = () => {

    const [chartData, setChartData] = useState([['Country', 'New Confirmed Cases']])
    const [updateDate, setUpdateDate] = useState('')

    useEffect(() => {
        fetch('https://api.covid19api.com/summary')
            .then(resp => resp.json())
            .then(data => {
                setUpdateDate(`${data.Date.split('-')[1]}/${data.Date.split('-')[2].split('T')[0]}/${data.Date.split('-')[0]}`)
                data.Countries.forEach(country => {
                    console.log(country)
                    setChartData(chartData => [...chartData, [country.Country, country.NewConfirmed]])
                })
            })
    }, [])

    return (
        <div className='home'>
            <h1 id='home-title'>CORON-AWARENESS</h1>
            <p id='home-update-title'>Last Updated: {updateDate}</p>
            <CoronaMap data={chartData} />
        </div>
    )
}

export default Home