import { convertDate } from "./convertDate"



export const settingChartData=(setChartData,prices,days) =>{
  let mydata=prices.map(item=>item[1])
    
    setChartData({
        labels:prices.map(item=>convertDate(item[0],days)),
        datasets:[{
          data:mydata,
          borderColor:'#FF6000',
          borderWidth:2   ,
          fill:true,
          tension:0.25,
          backgroundColor:'rgba(255, 96, 0,0.03)',
          pointRadius:0

        }]
      })
}