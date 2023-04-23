import React from 'react'
import {Chart as ChartJS} from 'chart.js/auto'
import { Line } from 'react-chartjs-2'

function LineChart({chartData,priceType,multiAxis}) {
const options = {
    plugins:{
        legend:{
            display:multiAxis?true:false,
        },
    },
    responsive:true,
    interaction:{
        mode:"index",
        intersect:false,
    },
    
}
  return (
    <Line data={chartData} options={options}/>
  )
}

export default LineChart