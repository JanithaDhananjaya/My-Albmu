import {useEffect, useState} from "react";
import { useParams  } from 'react-router-dom';
import './Album-Styles.css';
import {getSingleAlbum} from "../../services/album-service";
import Loader from "../loader/Loader";
import {useSelector} from "react-redux";

/* This is a functional component that renders single album details */

function Album() {

    const {albumId} = useParams ();

    const [album, setAlbum] = useState([]);
    const [loading, setLoading] = useState(true);

    const order = useSelector((state) => state.order);


    useEffect(() => {
        // Calling this function to retrieve single album details
        getSingleAlbum(albumId, order)
            .then(response => {
                setAlbum(response.data);
                setLoading(false);
            })
    }, [order]);

    //loader component
    if(loading){
        return(<Loader/>);
    }

    return (
        <div className="grid-container">
            {
                album.map((item, key)=> (
                    <div key={key} className='grid-item'>
                        <img src={item.thumbnailUrl} alt=""/>
                    </div>
                ))
            }
        </div>
    );
}

export default Album;