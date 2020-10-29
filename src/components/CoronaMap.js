import React from 'react'
import Chart from "react-google-charts";


const CoronaMap = (props) => {

    return (
        <div>
            <Chart
                className='geo-chart'
                height={'500px'}
                chartType="GeoChart"
                data={props.data}
                // Note: you will need to get a mapsApiKey for your project.
                // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
                mapsApiKey="YOUR_KEY_HERE"
                rootProps={{ 'data-testid': '1' }}
                options={{
                    colorAxis: { colors: ['#66CC66', '#FFFF66', '#FFCC66', '#FF0033'] },
                    datalessRegionColor: '#E0E0E0',
                    backgroundColor: '#66FFFF'
                }}
            />
        </div>
    )
}


export default CoronaMap