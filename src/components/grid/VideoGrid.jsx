import { useDispatch, useSelector } from "react-redux";
import VideoGridItem from "./VideoGridItem";
import { useEffect } from "react";
import { fetchVideo } from "../../features/videos/videosSlice";
import { Link } from "react-router-dom";

const VideoGrid = () => {
    const {isLoading, videos } = useSelector((state) => state.videos);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchVideo());
    }, [dispatch]);

    if (isLoading) {
        return <div className="flex justify-center items-center h-screen">
            <div className="border-t-4 border-blue-500 border-solid w-16 h-16 rounded-full animate-spin"></div>
        </div>
    }

    if (videos.length === 0) {
        return <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
            <h1 className="text-6xl font-bold text-red-500">404</h1>
            <p className="text-xl text-gray-700 mt-4">Oops! The page you are looking for does not exist.</p>
            <Link to="/" className="mt-6 text-lg text-blue-500 hover:underline">
                Go back to the Homepage
            </Link>
        </div>
    }

    return (
        <section className="pt-12">
            <section className="pt-12">
                <div
                    className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]"
                >
                    {
                        videos.map(video => <VideoGridItem
                            key={video.id}
                            video={video}
                        />)
                    }

                    {/* error section */}
                    <div className="col-span-12">some error happened</div>
                </div>
            </section>
        </section>
    );
};

export default VideoGrid;