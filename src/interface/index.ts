export interface StudioListProps {
    id: string;
    title: string;
    score: number;
    released: string;
    poster: string;
    studioId: string;
}
export interface StudioListState {
    list: StudioListProps[] | null;
    loading: boolean;
    error: string | null;
}

export interface StudioListDropDownProps {
    dropdownList: { id: string; title: string }[] | null;
    selectedStudio: string | undefined;
    setSelectedStudio: (id: string) => void;
}

export interface StudioDetailProps {
    id: string;
    score: number;
    votes: number;
    title: string;
    rated: string;
    released: string;
    runtime: number;
    genres: String[];
    plot: string;
    poster: string;
}

export interface StudioDetailState {
    detail: StudioDetailProps | null;
    loading: boolean;
    error: string | null;
}

export interface studioListStoreState {
    listData: StudioListProps[] | null;
    listLoading: boolean;
    listError: string | null;
    fetchListData: (url: string) => Promise<void>;
}

export interface studioDropDownState {
    dropDownData: any[] | null;
    dropDownLoading: boolean;
    dropDownError: string | null;
    fetchDropDownData: (url: string) => Promise<void>;
    selectedStudio: string;
    setSelectedStudio: ((data: string) => void);
}

export interface studioDetailState {
    detail: StudioDetailProps | null;
    detailLoading: boolean;
    detailError: string | null;
    fetchDetailData: (url: string) => Promise<void>;
    selectID: string;
    setSelectedId: (id: string) => void;
}