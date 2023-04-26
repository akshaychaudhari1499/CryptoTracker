import { convertDate } from "./convertDate"



export const settingChartData=(setChartData,prices1,days) =>{
  let mydata1=prices1?.map(item=>item[1])

  // if(prices2){
  //   let mydata2=prices2?.map(item=>item[1])
  //   setChartData({
  //     labels:prices1?.map(item=>item[0]),
  //     datasets:[{
  //       label:'coin1',
  //       data:mydata1,
  //       borderColor:'#FF6000',
  //       borderWidth:2,        
  //       tension:0.25,     
  //       pointRadius:0,
  //       yAxisId:'coin1'
  //     },
  //     {
  //       label:'coin2',
  //       data:mydata2,
  //       borderColor:'green',
  //       borderWidth:2   ,
       
  //       tension:0.25,

  //       pointRadius:0,
  //       yAxisId:'coin2 '

  //     }
  //   ]
  //   })
  // }
  // else{
    setChartData({
      labels:prices1?.map(item=>convertDate(item[0],days)),
      datasets:[{
        data:mydata1,
        borderColor:'#FF6000',
        borderWidth:2   ,
        fill:true,
        tension:0.25,
        backgroundColor:'rgba(255, 96, 0,0.03)',
        pointRadius:0,
        yAxisId:'coin1'

      }]
    })
  }
      
    
  
    
