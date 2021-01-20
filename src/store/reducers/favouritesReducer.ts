import initialState from "../initialState";
import { FavouritesTypes } from "../types";

const favouritesReducer = (
    state = initialState.favourites,
    action: FavouritesTypes
) => {
    switch (action.type) {
        case "FAVOURITES":
            return action.favourites;
        default:
            return state;
    }
};

export default favouritesReducer;
