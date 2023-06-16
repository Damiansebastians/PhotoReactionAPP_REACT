import React from "react";
import backphotos from '../assets/backphotos.jpeg';

const Home = () => {

    return(
        <div style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#000000',
            color: '#000000' }}>

            <div style={{
                marginTop: '35px',
                width: '90%' }}>

                <img src={backphotos} alt="Background" style={{
                    width: '100%',
                    height:'450px',
                    objectFit:"cover",
                    opacity: 0.2 }}/>

                <div style={{
                    position: 'absolute',
                    top: '20%',
                    left: '50%',
                    padding: '15px',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center' }}>

                    <h1 style={{
                        fontSize: '28px',
                        color: '#ffffff' }} >Explore a world of emotions through images on PhotoReaction
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default Home