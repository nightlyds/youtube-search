/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowLeft,
    faHeart,
    faThumbsUp,
    faThumbsDown,
    faComments,
    faEye,
} from "@fortawesome/free-solid-svg-icons";
import { VideosTypes } from "../YoutubeSearch";
import Loading from "./Loading";
import Error from "./Error";

type RouteIDType = {
    id: string;
};

export interface VideoDetailProps extends RouteComponentProps<RouteIDType> {
    loadVideoDetail: (id: string) => void;
    addToFavourites: (favourites: Array<string>) => void;
    favourites: Array<string>;
    videoDetail: VideosTypes;
    loading: boolean;
    error: boolean;
}

const VideoDetail = (props: VideoDetailProps) => {
    const {
        match,
        loadVideoDetail,
        videoDetail,
        addToFavourites,
        favourites,
        loading,
        error,
    } = props;
    const [iconFavorite, setIconFavorite] = useState<boolean>(
        favourites.includes(`${match.params.id}`)
    ); // Default value of the video favourite

    useEffect(() => {
        loadVideoDetail(`${match.params.id}`); // Load data for the video
    }, []);

    function addToFavouriteVideo(id: string) {
        setIconFavorite(!iconFavorite);
        // If value is in the array we delete it, else we add it
        if (favourites.includes(id)) {
            const newArray = favourites;
            newArray.splice(newArray.indexOf(id), 1);
            addToFavourites(newArray);
            localStorage.removeItem(`${id}`);
            localStorage.setItem("favourites", JSON.stringify(newArray));
        } else {
            addToFavourites([...favourites, id]);
            localStorage.setItem(
                "favourites",
                JSON.stringify([...favourites, id])
            );
        }
    }
    return (
        <div className="video-detail">
            <div className="video-detail-back-box">
                <a href="/">
                    {" "}
                    <FontAwesomeIcon
                        icon={faArrowLeft}
                        className="video-detail-back-icon"
                    />{" "}
                    Back to Home
                </a>
            </div>
            {loading &&
                !error &&
                videoDetail &&
                videoDetail.data.items.map((item: any) => (
                    <div
                        className="video-detail-content"
                        key={
                            `${item.id}}` // Unique key with the item ID and index of the item
                        }
                    >
                        <div className="video-detail-content-videobox">
                            <iframe
                                src={`https://www.youtube.com/embed/${item.id}`}
                                className="video-detail-content-video"
                                title="Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                        <div className="video-detail-content-video-description-box">
                            <h3 className="video-detail-content-video-description-title">
                                {item.snippet.title}
                            </h3>
                            <span className="video-detail-content-video-description-channel-title">
                                {item.snippet.channelTitle}
                            </span>
                            {item.statistics && (
                                <div className="youtube-search-content-video-description-statistics">
                                    <span className="youtube-search-content-video-description-viewers">
                                        <FontAwesomeIcon
                                            icon={faEye}
                                            className="youtube-search-content-video-description-icon"
                                        />
                                        {item.statistics.viewCount}
                                    </span>
                                    <span className="youtube-search-content-video-description-likes">
                                        <FontAwesomeIcon
                                            icon={faThumbsUp}
                                            className="youtube-search-content-video-description-icon"
                                        />
                                        {item.statistics.likeCount}
                                    </span>
                                    <span className="youtube-search-content-video-description-dislikes">
                                        <FontAwesomeIcon
                                            icon={faThumbsDown}
                                            className="youtube-search-content-video-description-icon"
                                        />
                                        {item.statistics.dislikeCount}
                                    </span>
                                    <span className="youtube-search-content-video-description-comments">
                                        <FontAwesomeIcon
                                            icon={faComments}
                                            className="youtube-search-content-video-description-icon"
                                        />
                                        {item.statistics.commentCount}
                                    </span>
                                </div>
                            )}
                            <div className="video-detail-add-to-favourite-box">
                                <span
                                    className="video-detail-add-to-favourite"
                                    onClick={() => addToFavouriteVideo(item.id)}
                                >
                                    Add to Favourite{" "}
                                    <FontAwesomeIcon
                                        icon={faHeart}
                                        className={`video-detail-add-to-favourite-icon ${
                                            iconFavorite
                                                ? "video-detail-add-to-favourite-icon-favorite"
                                                : ""
                                        }`}
                                    />
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            {!loading && <Loading />}
            {loading && error && <Error />}
        </div>
    );
};

export default VideoDetail;
