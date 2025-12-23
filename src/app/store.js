import { configureStore } from "@reduxjs/toolkit";
import videosReducer from "../features/videos/videosSlice";
import tagReducer from "../features/tags/tagSlice";
import videoReducer from "../features/video/videoSlice";
import realdedVideoReducer from "../features/relatedVideos/relatedVideosSlice";
import filterReducer from "../features/filter/filterSlice"

const store = configureStore({
    reducer: {
        videos: videosReducer,
        tags: tagReducer,
        video: videoReducer,
        reladedVideo: realdedVideoReducer,
        filter: filterReducer,
    }
});

export default store;