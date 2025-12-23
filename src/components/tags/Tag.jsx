import { useDispatch, useSelector } from "react-redux";
import { removedTags, selectedTags } from "../../features/filter/filterSlice";

const Tag = ({ tag }) => {
    const { title } = tag;
    const dispatch = useDispatch();
    const { tags: selected } = useSelector((state) => state.filter);
    const isSelected = selected.includes(title) ? true : false;

    const handleSelected = () => {
        if (isSelected) {
            dispatch(removedTags(title))
        } else {
            dispatch(selectedTags(title))
        }
    }

    return (
        <div>
            <div onClick={handleSelected}
                className={isSelected ? `bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer` : `bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer`}>
                {title}
            </div>
        </div>
    );
};

export default Tag;