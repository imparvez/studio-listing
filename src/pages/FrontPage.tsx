import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import StudioListDropDown from '../components/StudioListDropDown';
import StudioList from '../components/StudioList';
import StudioDetail from '../components/StudioDetail';


const FrontPage = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <header>
              <StudioListDropDown />  
            </header>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6}>
              <StudioList />
            </Grid>
            <Grid item xs={6}>
              <StudioDetail />
            </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default FrontPage