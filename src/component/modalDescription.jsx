import React, { useState } from "react";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from "react-redux";
import { editDescription } from "../features/favorite/favoriteSlice";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    padding: '25px',
    border: '2px solid #000000',
    backgroundColor: '#ffffff',
    boxShadow: '0 0 10px 5px rgba(0, 0, 0, 0.2)',
    maxWidth: '500px',
    borderRadius: '8px',
    transition: 'transform 0.3s ease-in-out',
};

const styleButton = {
    borderRadius: '30px',
    backgroundColor: '#000000',
    color: '#ffffff',
    border: 'none',
    padding: '10px',
    fontSize: '20px'
}
const styleInput = {
    width: '95%',
    margin: '2px',
    padding: '10px',
    border: '1px solid #000000',
    borderRadius: '4px',
    fontSize: '16px'
}

export let ModalDescription = (id, auxDescription) => {
    const [open, setOpen] = React.useState(false);
    let [description, setDescription] = useState('')
    let dispatch = useDispatch()

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    let handleChange = (e) => {
        setDescription(e)
    }

    let addDescription = (id, description) => {
        dispatch(editDescription({ id, description }))
        setOpen(false)
        setDescription('')
    }

    let cancelDescription = () => {
        setOpen(false)
        setDescription('')
    }
    let defaultDescription = (id, description) => {
        dispatch(editDescription({ id, description }))
        setOpen(false)
        setDescription('')
    }

    return (
        <div>
            <Button onClick={handleOpen}><EditIcon /></Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
            >
                <Fade in={open}>
                    <Box sx={style}>

                        <Typography id="transition-modal-title" variant="h6" component="h2" sx={{
                            textAlign: 'center',
                            fontFamily: 'Roboto',
                            fontSize: '24px' }}>
                            Add description
                        </Typography>

                        <Typography id="transition-modal-description" sx={{ 
                            mt: 2 }}>
                            <input type="text" onChange={(e) => handleChange(e.target.value)} style={styleInput} />
                        </Typography>

                        <div style={{ 
                            display: 'flex', 
                            justifyContent: 'space-around', 
                            marginTop: '5px' }}>
                            
                            <button onClick={() => { addDescription(id, description) }} style={styleButton} >Confirm
                            </button>

                            <button onClick={cancelDescription} style={styleButton}>Cancel
                            </button>

                            <button onClick={() => { defaultDescription(id, id.auxDescription) }} style={styleButton}>Reset description
                            </button>
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}