export const convertDate=(rawDate,days)=>{
 
    const date=new Date(rawDate)
   
    if(days <365){
        return date.getDate()+"/"+(date.getMonth()+1)
    }  
    else return (date.getMonth()+1)+"/"+date.getFullYear()
}