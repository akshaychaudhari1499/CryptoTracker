import { convertDate } from "./convertDate"


export const settingChartData=(setChartData,prices1,days,chartData,prices2) =>{

 
  if(prices2){   
    setChartData({
      labels:prices1?.map(item=>convertDate(item[0],days)),
      datasets:[{
        label:'coin1',
        data:prices1?.map(item=>(item[1])),
        borderColor:'#FF6000',
        borderWidth:2,   
        position:'left',     
        tension:0.25,     
        pointRadius:0,
       
      },
      {
        label:'coin2',
        data:prices2?.map(item=>(item[1])),
        position:'right', 
        borderColor:'green',
        borderWidth:2   ,       
        tension:0.25,
        pointRadius:0,
        
      }
    ]
    })
    console.log('if multiaxis===>', chartData)
    return chartData;
  }
  
  else{
    setChartData({
      labels:prices1?.map(item=>convertDate(item[0],days)),
      datasets:[{
        data:prices1?.map(item=>(item[1])),
        borderColor:'#FF6000',
        borderWidth:2   ,
        fill:true,
        tension:0.25,
        backgroundColor:'rgba(255, 96, 0,0.03)',
        pointRadius:0,
        yAxisId:'coin1'

      }]
    })
    console.log('if singleaxis===>',chartData)
      return chartData;
   
  }     
    
  
    
}