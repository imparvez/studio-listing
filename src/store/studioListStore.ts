import { create } from 'zustand';
import axios from 'axios';

import { studioListStoreState } from '../interface';

const studioListAPIStore = create<studioListStoreState>((set) => ({
    listData: null,
    listLoading: false,
    listError: null,
    fetchListData: async (url: string) => {
        set({ listLoading: true, listError: null });
        try {
            const response = await axios.get(url);
            set({ listData: response.data, listLoading: false });
        } catch (error: any) {
            set({ listError: error.message, listLoading: false });
        }
    },
}));

export default studioListAPIStore;