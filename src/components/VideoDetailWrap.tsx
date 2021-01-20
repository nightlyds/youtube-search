import { connect } from "react-redux";
import VideoDetail from "./VideoDetail";
import mapStateToProps from "../store/mapStateToProps";
import mapDispatchToProps from "../store/mapDispatchToProps";

const VideoDetailWrap = connect<any, any, any>(
    mapStateToProps("VIDEO_DETAIL"),
    mapDispatchToProps("VIDEO_DETAIL")
)(VideoDetail);

export default VideoDetailWrap;
