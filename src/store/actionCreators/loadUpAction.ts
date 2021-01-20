import { LoadUpTypes } from "../types";

const loadUpAction = (keyword: string): LoadUpTypes => ({
    type: "LOAD_UP",
    keyword,
});

export default loadUpAction;
