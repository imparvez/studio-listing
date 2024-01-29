import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import StudioListDropDown from '../components/StudioListDropDown';
import StudioList from '../components/StudioList';
import StudioDetail from '../components/StudioDetail';

import { API } from '../constants/api';
import studioDropDownAPIStore from '../store/studiosDropDownStore';
import studioListAPIStore from '../store/studioListStore';
import studioDetailAPIStore from '../store/studioDetailStore';


const FrontPage = () => {
  const {
    dropDownData,
    dropDownLoading,
    fetchDropDownData,
    selectedStudio,
    setSelectedStudio
  } = studioDropDownAPIStore();

  const {
    listData,
    listLoading,
    listError,
    fetchListData
} = studioListAPIStore()

  const {
    detail,
    detailLoading,
    detailError,
    selectID,
    setSelectedId,
    fetchDetailData
  } = studioDetailAPIStore();

  useEffect(() => {
    fetchDropDownData(API.studioListDropDown);
  }, []);

  useEffect(() => {
    if (selectedStudio) {
      fetchListData(`${API.studioList}=${selectedStudio.toLowerCase()}`);
    }
  }, [selectedStudio]);

  useEffect(() => {
    if (listData) {
      setSelectedId(listData[0].id)
    }
  }, [listData]);

  useEffect(() => {
    if (selectID) {
      fetchDetailData(`${API.studioDetail}${selectID}`)
    }
  }, [selectID])

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {dropDownLoading ? <div>Loading...</div> : <header>
              <StudioListDropDown
                dropdownList={dropDownData}
                selectedStudio={selectedStudio}
                setSelectedStudio={setSelectedStudio}
              />  
            </header>}
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <StudioList
              list={listData}
              loading={listLoading}
              error={listError}
            />
          </Grid>
            <Grid item xs={6}>
              <StudioDetail
                detail={detail}
                loading={detailLoading}
                error={detailError}
              />
            </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default FrontPage