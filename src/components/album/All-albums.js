import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import './All-Album-Styles.css';
import {getAlbums} from "../../services/album-service";
import Loader from "../loader/Loader";
import {useSelector} from "react-redux";
import Card from "../card/Card";

/* This is a functional component that renders a list of albums */

function AllAlbums() {

    const navigate = useNavigate();

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const order = useSelector((state) => state.order);

    useEffect(() => {
        // Calling this function to retrieve all album details
        getAlbums(order)
            .then(response => {
                setData(response);
                setLoading(false);
            });
    }, [order]);

    const navigateAlbum = (albumId) => {
        navigate(`/photos/${albumId}`);
    }

    //loader component
    if (loading) {
        return (<Loader/>);
    }

    return (
        <div className="grid-container">
            {
                data.map((item, key) => (
                    <div className="grid-item" key={key} onClick={() => navigateAlbum(item.id)}>
                        <Card
                            title={item.title}
                            count={data.count}
                            image={data.url}
                        />
                    </div>
                ))
            }
        </div>
    );
}

export default AllAlbums;