import  React,{useState} from 'react';

import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { createTheme ,ThemeProvider} from '@mui/material';
import Grid from '../Grid';
import List from '../List';
import './styles.css'
export default function TabsComponent({coins}) {
  const [value, setValue] = useState('grid');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style={
    color:'var(--white)',
    fontSize:'1.2rem',
    fontWeight:'600',
    textTransform:'capitalize'
  }

  const theme=createTheme({
palette:{
    primary:{
        main:"#FF6000"
    }
    }
  })

  console.log(coins)
  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>       
          <TabList onChange={handleChange} variant='fullWidth' aria-label="lab API tabs example">
            <Tab label="Grid View" value="grid"  sx={style}/>
            <Tab label="List View" value="list" sx={style} />           
          </TabList>      
        <TabPanel value="grid" >
        <div className='grid-flex'>  {coins.map((coin,i)=>{
               return <Grid coin={coin} key={i}/>;
                  })}</div>
               


        </TabPanel>
        <TabPanel value="list"><div className='list-flex'>  {coins.map((coin,i)=>{
               return <List coin={coin} key={i}/>;
                  })}</div></TabPanel>     
      </TabContext>
      </ThemeProvider>
  );
}