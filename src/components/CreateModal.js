import * as React from 'react';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Input, InputLabel, TextField } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import './createModal.css'
import { adminServices } from '../services/admin.services'
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center'
};






export default function KeepMountedModal() {
    const [name, setName] = useState('')
    const [adminid, setAdminId] = useState('6416bb61115dc8d869fde3e1')
    const [img, setImg] = useState('')
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    async function getFormData(e) {
        e.preventDefault()
        console.warn(name, adminid, img)
        const formData = new FormData();
        formData.append("image", img)
        formData.append("name", name)
        formData.append("adminid", adminid)
        const data = await adminServices.addCategory(formData).then((res) => {
            console.log("response from add category", res)
        }).catch((error) => {
            console.log(error)
        })

    }

    return (
        <div style={{}}>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box component='form' noValidate autoComplete="off" sx={style}>
                    <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                        Enter Category Details
                    </Typography>
                    <div style={{
                        display: 'flex',
                        flexDirection: "column",
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <div style={{ textAlign: "center", marginBottom: "1rem" }}>
                            <InputLabel htmlFor='name'>Category Name</InputLabel>
                            <TextField style={{ padding: "0.2rem" }} onChange={(e) => setName(e.target.value)} required id='adminid' vatiant=' outlined' placeholder="" />
                        </div>
                        <div style={{ textAlign: "center", marginBottom: "1rem" }}>
                            <InputLabel htmlFor='adminid'>Admin Id</InputLabel>
                            <TextField onChange={(e) => setAdminId(e.target.value)} value={adminid} required id='name' vatiant=' outlined' placeholder="" />
                        </div>
                        <Button className='imageUpload' variant="contained" component="label">
                            Upload File
                            <Input className='imgInput' onChange={(e) => setImg(e.target.files[0])} type="file" hidden />
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            onClick={(e) => getFormData(e)}
                            sx={{ margin: "2rem" }}
                        >
                            ADD
                        </Button>
                    </div>
                </Box >
            </Modal >
        </div >
    );
}
