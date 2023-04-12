import  React,{useState} from 'react';

import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { createTheme ,ThemeProvider} from '@mui/material';

export default function TabsComponent() {
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
  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>       
          <TabList onChange={handleChange} variant='fullWidth' aria-label="lab API tabs example">
            <Tab label="Grid View" value="grid"  sx={style}/>
            <Tab label="List View" value="list" sx={style} />           
          </TabList>      
        <TabPanel value="grid">Grid View</TabPanel>
        <TabPanel value="list">List View</TabPanel>     
      </TabContext>
      </ThemeProvider>
  );
}