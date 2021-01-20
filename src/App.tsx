import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import "normalize.css";
import "./css/style.css";
import "./css/media_style.css";
import "./css/fonts_and_colors.css";
import YoutubeSearchWrap from "./YoutubeSearchWrap";
import VideoDetailWrap from "./components/VideoDetailWrap";
import Error404 from "./components/Error404";

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={YoutubeSearchWrap} />
                        <Route
                            path="/videos/:id"
                            render={props => {
                                // eslint-disable-next-line react/jsx-props-no-spreading
                                return <VideoDetailWrap {...props} />;
                            }}
                        />
                        <Route component={Error404} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;
