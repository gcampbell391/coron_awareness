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
                mapsApiKey='YOUR_KEY'
                rootProps={{ 'data-testid': '1' }}
                options={{
                    colorAxis: { colors: ['#66CC66', '#FFFF66', '#FFCC66', '#CC3366'] },
                    datalessRegionColor: '#E0E0E0',
                    backgroundColor: '#66FFFF'
                }}
                chartEvents={[
                    {
                        eventName: 'select',
                        callback: ({ chartWrapper }) => {
                            const chart = chartWrapper.getChart()
                            const selection = chart.getSelection()
                            const countryInitials = props.data[selection[0].row + 1][0]
                            props.showCountryDetails(countryInitials)
                        },
                    },
                ]}
            />
        </div>
    )
}


export default CoronaMap