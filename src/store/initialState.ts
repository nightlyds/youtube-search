export type InitialStateTypes = {
    videos: Array<Object>;
    videoDetail: Array<Object>;
    favourites: Array<string>;
    loading: boolean;
    error: boolean;
};

localStorage.clear(); // For clear all LocalStorage

export const localStorageGet: Array<string> =
    JSON.parse(localStorage.getItem("favourites")!) !== null
        ? JSON.parse(localStorage.getItem("favourites")!)
        : []; // Check LocalStorage for default initialState to favourites

const initialState: InitialStateTypes = {
    videos: [{}],
    videoDetail: [{}],
    favourites: localStorageGet,
    loading: false,
    error: false,
};

export default initialState;
