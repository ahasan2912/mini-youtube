import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRelatedVideo } from '../../features/relatedVideos/relatedVideosSlice';
import RelatedVideoList from './RelatedVideoList';

const RelatedVideo = ({ currentId, tags }) => {

    const { videos } = useSelector((state) => state.reladedVideo);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchRelatedVideo({ tags, currentId }))
    }, [dispatch, tags, currentId]);

    return (
        <div>
            {
                videos.map((video, idx) => <RelatedVideoList key={idx} video={video} />)
            }
        </div>
    );
};

export default RelatedVideo;