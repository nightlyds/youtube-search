/* eslint-disable func-names */
type MapStateToPropsTypes = {
    videosReducer?: Array<Object>;
    videoDetailReducer?: Array<Object>;
    favouritesReducer?: Array<string>;
    loadingReducer?: boolean;
    errorReducer?: boolean;
};

function mapStateToProps(component: string) {
    switch (component) {
        case "YOUTUBE_SEARCH":
            return function (state: MapStateToPropsTypes) {
                return {
                    videos: state.videosReducer,
                    loading: state.loadingReducer,
                    error: state.errorReducer,
                };
            };
        case "VIDEO_DETAIL":
            return function (state: MapStateToPropsTypes) {
                return {
                    videoDetail: state.videoDetailReducer,
                    favourites: state.favouritesReducer,
                    loading: state.loadingReducer,
                    error: state.errorReducer,
                };
            };
        default:
            return undefined;
    }
}

export default mapStateToProps;
