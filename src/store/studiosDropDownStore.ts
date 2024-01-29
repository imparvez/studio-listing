import { create } from 'zustand';
import axios from 'axios';

import { studioDropDownState } from '../interface';

const studioDropDownAPIStore = create<studioDropDownState>((set) => ({
  dropDownData: null,
  dropDownLoading: false,
  dropDownError: null,
  selectedStudio: '',
  setSelectedStudio: (data: string) => set({ selectedStudio: data }),
  fetchDropDownData: async (url: string) => {
    set({ dropDownLoading: true, dropDownError: null });
    try {
      const response = await axios.get(url);
      set({ dropDownData: response.data, dropDownLoading: false });
    } catch (error: any) {
      set({ dropDownError: error.message, dropDownLoading: false });
    }
  },
}));

export default studioDropDownAPIStore;