import { create } from 'zustand';
import axios from 'axios';

import { studioDetailState } from '../interface';

const studioDetailAPIStore = create<studioDetailState>((set) => ({
    detail: null,
    detailLoading: false,
    detailError: null,
    selectID: '',
    setSelectedId: (id) => set({ selectID: id }),
    fetchDetailData: async (url: string) => {
        set({ detailLoading: true, detailError: null });
        try {
            const response = await axios.get(url);
            set({ detail: response.data, detailLoading: false });
        } catch (error: any) {
            set({ detailError: error.message, detailLoading: false });
        }
    },
}));

export default studioDetailAPIStore;