import React, { useState, useEffect } from 'react'
import CoronaMap from '../components/CoronaMap'
import Blink from 'react-blink-text';
import CountryDetailsModal from '../components/CountryDetailsModal';





const Home = () => {

    const [chartData, setChartData] = useState([['Country', 'New Cases']])
    const [countries, setCountries] = useState([])
    const [updateDate, setUpdateDate] = useState('')
    const [globalData, setGlobalData] = useState('')
    const [cDModalOpen, setCDModalOpen] = useState(false)
    const [selectedCountry, setSelectedCountry] = useState('')

    useEffect(() => {
        fetch('https://api.covid19api.com/summary')
            .then(resp => resp.json())
            .then(data => {
                setGlobalData(data.Global)
                setCountries(data.Countries)
                setUpdateDate(`${data.Date.split('-')[1]}/${data.Date.split('-')[2].split('T')[0]}/${data.Date.split('-')[0]}`)
                data.Countries.forEach(country => {
                    setChartData(chartData => [...chartData, [country.CountryCode, country.NewConfirmed]])
                })
            })
    }, [])


    //Show Modal with Country Details 
    const showCountryDetails = (countryInitials) => {
        const selectedCountry = countries.filter(country => {
            return country.CountryCode === countryInitials
        })
        setSelectedCountry(selectedCountry[0])
        setCDModalOpen(true)
    }

    return (
        <div className='home'>
            <h1 id='home-title'>CORON-AWARENESS</h1>
            <p id='home-total-new-title'>Total New Cases Confirmed: </p>
            <p id='home-total-new-title-numbers'><Blink color='red' text={globalData.NewConfirmed} fontSize='35'>Total Cases</Blink></p>
            <CoronaMap data={chartData} showCountryDetails={showCountryDetails} />
            <p id='home-update-title'>Last Updated: {updateDate}</p>
            <CountryDetailsModal open={cDModalOpen} handleClose={() => setCDModalOpen(false)} country={selectedCountry} />
        </div>
    )
}

export default Home