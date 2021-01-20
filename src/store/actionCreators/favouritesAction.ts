import { FavouritesTypes } from "../types";

const favouritesAction = (favourites: Array<string>): FavouritesTypes => ({
    type: "FAVOURITES",
    favourites,
});

export default favouritesAction;
