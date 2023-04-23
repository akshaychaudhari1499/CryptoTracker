export const convertDate=(rawDate)=>{

    const date=new Date(rawDate)
    
    console.log(date)
    return date.getDate()+"/"+(date.getMonth()+1)
}