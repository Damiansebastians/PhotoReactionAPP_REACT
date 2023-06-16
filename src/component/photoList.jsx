import { useSelector, useDispatch } from "react-redux"
import { React, useEffect, useState } from "react";
import { searchPhoto } from "../features/search/searchSlice";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import ImageListItem from '@mui/material/ImageListItem';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { addFavorite } from "../features/favorite/favoriteSlice";
import Pagination from '@mui/material/Pagination';
import Proof from "./base";
import SearchOrder from "./searchOrder";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


export function PhotoList() {

    let dispatch = useDispatch()
    let photos = useSelector(store => store.search.list)
    let favorite = useSelector(store => store.favorite.list)
    let [page, setPage] = useState(1)
    let [styleAddPhoto, setStyleAddPhoto] = useState({ display: 'none' })
    let time;


    useEffect(() => {
        dispatch(searchPhoto({ page }))
    }, [page]
    )


    let handleClick = (e) => {
        dispatch(addFavorite(e))
        setStyleAddPhoto({
            backgroundColor: '#38D302',
            width: '200px',
            height: '150px',
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            color: '#000000',
            fontSize: '26px',
            fontFamily: 'Roboto',
            fontWeight: 'bold',
            borderRadius: '10px',
            boxShadow: '0 0 20px rgba(0, 0, 0, 0.9)',
        })
        time = setTimeout(() => {
            setStyleAddPhoto({ display: 'none' })
        }, 1500);
    }

    let handleChange = (e, p) => {
        setPage(p)
    }

    return (
        <>
            <Proof />
            <SearchOrder />
            <CssBaseline />
            <Container style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                justifyContent: 'space-around' }}>
                {photos.map((index, i) => {
                    return (<ImageListItem key={photos[i].id} style={{ 
                        height: '300px', 
                        width: '300px', 
                        margin: '10px 0' }} >

                        <img
                            src={photos[i].urls.small_s3}
                            alt={photos[i].alt_description}
                        />

                        {favorite.some(item => item.id === photos[i].id) ?
                            <FavoriteIcon style={{ 
                                color: 'red', 
                                position: 'relative', 
                                top: '-35px', 
                                left: '10px', 
                                fontSize: '30px' }} /> :

                            <FavoriteBorderIcon style={{ 
                                color: 'red', 
                                position: 'relative', 
                                top: '-35px', 
                                left: '10px', 
                                fontSize: '30px' }} 
                                onClick={() => handleClick({
                                id: photos[i].id,
                                width: photos[i].width,
                                height: photos[i].height,
                                likes: photos[i].likes,
                                urls: photos[i].urls,
                                description: photos[i].alt_description,
                                auxDescription: photos[i].alt_description,
                                date: new Date()
                            })} />}

                    </ImageListItem>
                    )})}

            </Container>
            <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                margin: '15px' }}>

                <Pagination
                    count={10}
                    page={page}
                    onChange={handleChange}
                />
            </div>
            <div style={styleAddPhoto}>
                <p>Photo add FAVORITE</p>
            </div>
        </>
    )
};

