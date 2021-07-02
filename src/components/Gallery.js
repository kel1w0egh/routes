import { useParams } from "react-router-dom";

export default function Gallery(props) {
    const { id } = useParams();
    return (
        <div>
            <p>{id ? 'Page ID: ' + id : ''}</p>
            <h1>Галерея Кривого Рога</h1>
            <img src="https://wikiway.com/upload/resize_cache/hl-photo/862/f20/720_400_1/krivoy-rog_47.jpg" alt=""/>
            <img src="https://wikiway.com/upload/resize_cache/hl-photo/780/6e1/720_400_1/krivoy-rog_46.jpg" alt=""/>
            <img src="https://wikiway.com/upload/resize_cache/hl-photo/8e7/37c/720_400_1/krivoy-rog_36.jpg" alt=""/>
            <img src="https://wikiway.com/upload/resize_cache/hl-photo/daf/007/720_400_1/krivoy-rog_15.jpg" alt=""/>
            <img src="https://wikiway.com/upload/resize_cache/hl-photo/3c8/091/720_400_1/krivoy-rog_1.jpg" alt=""/>
        </div>
    );
}