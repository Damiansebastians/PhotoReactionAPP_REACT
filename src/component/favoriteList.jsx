import { React, useState } from "react";
import { useSelector } from "react-redux";
import Container from '@mui/material/Container';
import SearchOrder from "./searchOrder";
import FavoritePhoto from "./favoritePhoto";
import { Link } from "react-router-dom";
import Base from "./base";

function FavoriteList() {

    let myFavorite = useSelector(store => store.favorite.list)
    let [styleRemovePhoto, setStyleRemovePhoto] = useState({ display: 'none' })

    let wasRemoved = () => {
        setStyleRemovePhoto(
                {
                    backgroundColor: '#F90101',
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
                    boxShadow: '0 0 20px rgba(0, 0, 0, 0.9)'
                    })
                let time = setTimeout(() => {
                    setStyleRemovePhoto({ display: 'none' })
                }, 1500)
            }

    return (
        <>
            <Base />
            <SearchOrder />
            <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                justifyContent: 'space-around',
                backgroundColor: '#000000' }}>

                {myFavorite.length === 0 ? 

                    <Link to='/favorite' style={{ 
                        textDecoration: 'none', 
                        color: '#ffffff' }} >
                    </Link>

                    :
                    myFavorite.map((item) => {
                        return (
                            <Container style={{ 
                                height: '600px', 
                                width: '300px', 
                                margin: '20px 20px', 
                                padding: '0px', 
                                textAlign: 'center',
                                backgroundColor: '#000000' }}>

                                <FavoritePhoto item={item} key={item.id} wasRemoved={wasRemoved}  />
                            </Container>
                        )
                    })}
            </div>
            <div style={styleRemovePhoto}>
                <p>Photo was REMOVED</p>
            </div>
        </>
    )
}

export default FavoriteList