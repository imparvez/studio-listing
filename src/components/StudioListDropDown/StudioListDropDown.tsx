import { useEffect } from 'react';
import Box from '@mui/material/Box';

import { StudioListDropDownProps } from '../../interface';

const StudioListDropDown: React.FC<StudioListDropDownProps> = ({ dropdownList, setSelectedStudio }) => {
  const handleChange = (event: any) => {
    setSelectedStudio(event.target.value);
  };

  useEffect(() => {
    if(dropdownList) {
      setSelectedStudio(dropdownList[0].title)
    }
  }, [dropdownList]);

  return (
    <Box sx={{ minWidth: 120 }}>
      {
        dropdownList ? (
          <label>
            Pick a studio:
            <select name="studioList" onChange={handleChange}>
              {
                    dropdownList?.map(({ id, title }: any) => {
                        return (
                            <option key={id} value={id}>{title}</option>
                        )
                    })
                }
            </select>
          </label>
        ): null
      }
    </Box>
  );
}

export { StudioListDropDown }
