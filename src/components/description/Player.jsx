import { useParams } from "react-router-dom";
import RelatedVideo from "./RelatedVideo";
import VideoDescription from "./VideoDescription";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchVideo } from "../../features/video/videoSlice";

const Player = () => {
    const { videoId } = useParams();
    const dispatch = useDispatch();
    const { video } = useSelector((state) => state.video);

    useEffect(() => {
        dispatch(fetchVideo(videoId))
    }, [dispatch, videoId]);

    const {id, title, link, tags } = video;
    return (
        <section className="pt-6 pb-20">
            <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
                <div className="grid grid-cols-3 gap-2 lg:gap-8">
                    <div className="col-span-full w-full space-y-8 lg:col-span-2">
                        {/* video player */}
                        <iframe
                            width="100%"
                            className="aspect-video"
                            src={link}
                            title={title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <VideoDescription video={video} />
                    </div>

                    {/* related videos */}
                    <RelatedVideo currentId={id} tags={tags}/>
                </div>
            </div>
        </section>
    );
};

export default Player;