import Footer from "../components/footer/Footer";
import VideoGrid from "../components/grid/VideoGrid";
import Navbar from "../components/navbar/Navbar";
import Tags from "../components/tags/Tags";
import Pagenation from "../components/ui/Pagenation";

const Home = () => {
    return (
        <div>
            <Tags />
            <VideoGrid />
            <Pagenation />
        </div>
    );
};

export default Home;