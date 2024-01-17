import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import axios from 'axios';

import { API } from '../../constants/api';

interface Studio {
    id: string;
    title: string;
}

function StudioList() {
  const [selectedStudio, setSelectedStudio] = useState('');
  const [studioList, setStudioList] = useState<Studio[]>([]);

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedStudio(event.target.value);
  };

  const getStudioList = () => {
    axios.get(API.studioList).then((data) => {
        setStudioList(data?.data);
      });
  }

  useEffect(() => {
    getStudioList();
  }, []);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Studio</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedStudio}
          label="Select Studio"
          onChange={handleChange}
        >
            {
                studioList?.map(({ id, title }: any) => {
                    return (
                        <MenuItem key={id} value={id}>{title}</MenuItem>
                    )
                })
            }
        </Select>
      </FormControl>
    </Box>
  );
}

export { StudioList }
