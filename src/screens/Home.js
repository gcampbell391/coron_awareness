import React, { useState, useEffect } from 'react'
import CoronaMap from '../components/CoronaMap'
import Blink from 'react-blink-text';



const Home = () => {

    const [chartData, setChartData] = useState([['Country', 'New Confirmed Cases']])
    const [updateDate, setUpdateDate] = useState('')
    const [globalData, setGlobalData] = useState('')

    useEffect(() => {
        fetch('https://api.covid19api.com/summary')
            .then(resp => resp.json())
            .then(data => {
                setGlobalData(data.Global)
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
            <p id='home-total-new-title'>Total New Cases Confirmed: </p>
            <p id='home-total-new-title-numbers'><Blink color='red' text={globalData.NewConfirmed} fontSize='35'>Total Cases</Blink></p>
            <CoronaMap data={chartData} />
            <p id='home-update-title'>Last Updated: {updateDate}</p>
        </div>
    )
}

export default Home