import logo from './logo.svg';
import './App.css';
import Grid from '@mui/material/Grid';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import TicketsCharts from './Components/TicketsChart/TicketsCharts';
import ResponseChart from './Components/ResponseChart/ResponseChart';






function App() {

  return (
    
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
           <Header></Header> 
        </Grid>
        <Grid item xs={12} md={12}>
          <Hero></Hero>
        </Grid>
        <Grid item xs={12} md={6}>
          <TicketsCharts></TicketsCharts>
        </Grid>
        <Grid item xs={12} md={6} >
          <ResponseChart></ResponseChart>
          
        </Grid>


      </Grid>
   
  );
}

export default App;
