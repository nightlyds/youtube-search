export interface MostPopularTypes {
    type: string;
}

export interface LoadUpTypes {
    type: string;
    keyword: string;
}

export interface LoadUpVideoTypes {
    type: string;
    id: string;
}

export interface VideosTypes {
    type: string;
    videos: Array<Object>;
}

export interface VideoDetailTypes {
    type: string;
    videoDetail: Array<Object>;
}

export interface LoadingTypes {
    type: string;
    loading: boolean;
}

export interface ErrorTypes {
    type: string;
    error: boolean;
}

export interface AddToFavouriteTypes {
    type: string;
    id: string;
}

export interface FavouritesTypes {
    type: string;
    favourites: Array<string>;
}
