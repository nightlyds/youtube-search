import { connect } from "react-redux";
import YoutubeSearch, { YoutubeSearchProps } from "./YoutubeSearch";
import mapStateToProps from "./store/mapStateToProps";
import mapDispatchToProps from "./store/mapDispatchToProps";

const YoutubeSearchWrap = connect<any, any, YoutubeSearchProps>(
    mapStateToProps("YOUTUBE_SEARCH"),
    mapDispatchToProps("YOUTUBE_SEARCH")
)(YoutubeSearch);

export default YoutubeSearchWrap;
