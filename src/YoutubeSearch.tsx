/* eslint-disable react/jsx-curly-newline */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTimesCircle,
    faThumbsUp,
    faThumbsDown,
    faComments,
    faEye,
} from "@fortawesome/free-solid-svg-icons";
import Loading from "./components/Loading";
import Error from "./components/Error";
import Footer from "./components/Footer";

export type VideosTypes = {
    [key: string]: any;
}; // Types for the Video Object

export type YoutubeSearchProps = {
    mostPopular: () => void;
    videos: VideosTypes;
    loading: boolean;
    error: boolean;
    changeKeyword: (keyword: string | undefined) => void;
}; // Types for props

const YoutubeSearch = ({
    mostPopular,
    videos,
    loading,
    error,
    changeKeyword,
}: YoutubeSearchProps) => {
    const [keyword, setKeyword] = useState<string>("");

    useEffect(() => {
        mostPopular();
    }, []); // Load videos before the component did mount

    function clearField(): void {
        setKeyword(""); // Clear input field
        mostPopular(); // Load the Most Popular videos
    }

    return (
        <div className="youtube-search-container">
            <div className="youtube-search-bar">
                <div className="youtube-search-field-box">
                    <input
                        type="text"
                        className="youtube-search-field"
                        value={keyword}
                        onChange={event => {
                            setKeyword(event.target.value);
                        }}
                    />
                    <FontAwesomeIcon
                        icon={faTimesCircle}
                        className="youtube-search-field-icon"
                        onClick={() => clearField()}
                    />
                </div>
                <div className="youtube-search-button-box">
                    <span
                        className="youtube-search-button"
                        onClick={() => changeKeyword(keyword)}
                    >
                        Search
                    </span>
                </div>
            </div>
            <div className="youtube-search-content">
                {loading &&
                    !error &&
                    videos &&
                    videos.data.items.map(
                        (item: VideosTypes, index: number) => (
                            <div
                                className="youtube-search-content-video"
                                key={
                                    item.id.videoId
                                        ? `${item.id.videoId}${index}_`
                                        : `${item.id}_${index}`
                                } // Unique key with the item ID and index of the item
                            >
                                <a
                                    href={`/videos/${`${
                                        item.id.videoId
                                            ? item.id.videoId
                                            : item.id
                                    }`}`}
                                >
                                    <div className="youtube-search-content-video-image-box">
                                        <img
                                            src={
                                                item.snippet.thumbnails.high.url
                                            }
                                            className="youtube-search-content-video-image"
                                            alt="Video cover"
                                        />
                                    </div>
                                    <div className="youtube-search-content-video-description-box">
                                        <h3 className="youtube-search-content-video-description-title">
                                            {item.snippet.title}
                                        </h3>
                                        <span className="youtube-search-content-video-description-channel-title">
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
                                                    {
                                                        item.statistics
                                                            .dislikeCount
                                                    }
                                                </span>
                                                <span className="youtube-search-content-video-description-comments">
                                                    <FontAwesomeIcon
                                                        icon={faComments}
                                                        className="youtube-search-content-video-description-icon"
                                                    />
                                                    {
                                                        item.statistics
                                                            .commentCount
                                                    }
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </a>
                            </div>
                        )
                    )}
                {!loading && <Loading />}
                {loading && error && <Error />}
            </div>
            <Footer />
        </div>
    );
};

export default YoutubeSearch;
