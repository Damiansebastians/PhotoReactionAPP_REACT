import { React } from "react";
import { useDispatch, } from "react-redux";
import ImageListItem from '@mui/material/ImageListItem';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import { removeFavorite } from "../features/favorite/favoriteSlice";
import DownloadIcon from '@mui/icons-material/Download';
import { saveAs } from "file-saver";
import { ModalDescription as Modal } from "./modalDescription";

const FavoritePhoto = ({ item, wasRemoved }) => {

    const dispatch = useDispatch();

    let handleClick = (e) => {
        dispatch(removeFavorite(e))
        wasRemoved()
    }

    let handleDownload = (e) => {
        saveAs(e)
    }

    return (
        <>
            <div style={{ 
                height: '600px', 
                position: 'relative',
                boxShadow: '0 0 10px 5px #ffffff' }}>

                <ImageListItem style={{ 
                    width: '300px', 
                    height: '350px' }}>
                    <img
                        src={item.urls.small_s3}
                        alt={item.description}
                    />

                </ImageListItem>
                <div style={{ 
                    color: '#ffffff',
                    fontFamily: 'Roboto',
                    fontWeight: 'bold',
                    padding: '7px' }} >
                    <p>Likes: {item.likes}</p>
                    <p>Width: {item.width}</p>
                    <p>Height: {item.height}</p>
                    <p>Description: {item.description}</p>
                </div>

                <DeleteSharpIcon style={{ 
                    color: '#F90101', 
                    position: 'absolute', 
                    bottom: '20px', 
                    left: '10px',
                    cursor: 'pointer' }} 
                    onClick={() => handleClick(item)} />

                <DownloadIcon style={{ 
                    color: '#02D312', 
                    position: 'absolute',
                    bottom: '20px', 
                    left: '260px',
                    cursor: 'pointer' }} 
                    onClick={() => handleDownload(item.urls.regular)} />

                <div style={{ 
                    position: 'absolute', 
                    left: '115px', 
                    bottom: '15px' }}>
                    <Modal id={item.id} auxDescription={item.auxDescription} />
                </div>
            </div>
        </>
    )
};

export default FavoritePhoto