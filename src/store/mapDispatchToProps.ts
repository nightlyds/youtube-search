/* eslint-disable func-names */
import { AnyAction, bindActionCreators, Dispatch } from "redux";
import favouritesAction from "./actionCreators/favouritesAction";
import loadUpAction from "./actionCreators/loadUpAction";
import loadUpVideoDetailAction from "./actionCreators/loadUpVideoDetailAction";
import mostPopularAction from "./actionCreators/mostPopularAction";

function mapDispatchToProps(component: string) {
    switch (component) {
        case "YOUTUBE_SEARCH":
            return function (dispatch: Dispatch<AnyAction>) {
                return {
                    mostPopular: bindActionCreators(
                        mostPopularAction,
                        dispatch
                    ),
                    loadVideoDetail: bindActionCreators(
                        loadUpVideoDetailAction,
                        dispatch
                    ),
                    changeKeyword: bindActionCreators(loadUpAction, dispatch),
                };
            };
        case "VIDEO_DETAIL":
            return function (dispatch: Dispatch<AnyAction>) {
                return {
                    loadVideoDetail: bindActionCreators(
                        loadUpVideoDetailAction,
                        dispatch
                    ),
                    addToFavourites: bindActionCreators(
                        favouritesAction,
                        dispatch
                    ),
                };
            };
        default:
            return undefined;
    }
}

export default mapDispatchToProps;
