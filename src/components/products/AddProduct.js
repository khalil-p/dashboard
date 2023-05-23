import React from 'react'
import { adminServices } from '../../services/admin.services'
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Input, InputLabel, TextField } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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
    const [tostMessage, setTostMessage] = useState('')
    const [response, setResponse] = useState(null)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    let notify

    async function getFormData(e) {
        e.preventDefault()
        const formData = new FormData();
        formData.append("image", img)
        formData.append("name", name)
        formData.append("adminid", adminid)
        const data = await adminServices.addCategory(formData).then((res) => {
            setResponse(res)
            console.log("this is status.......", res.status)
            if (res.status === 201 || res.status === 200) {
                notify = () => { toast("Category Added Successfully") }
                notify()
            } else {
                console.log('something went wrong')
            }
        }).catch((error) => {
            console.log("this is an error....", error)
            notify = () => { toast("An Error Occured") }
            notify()
        })
    }
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <>
            <div >
                <Button onClick={handleOpen}>Add Category</Button>
                <Modal
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                >
                    <Box component='form'
                        onSubmit={
                            getFormData

                        } Validate autoComplete="off" sx={style}>
                        <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                            Enter Products Details
                        </Typography>
                        <div style={{
                            display: 'flex',
                            flexDirection: "column",
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <div style={{ textAlign: "center", marginBottom: "1rem" }}>
                                <InputLabel htmlFor='name'>Product Name</InputLabel>
                                <TextField style={{ padding: "0.2rem" }} onChange={(e) => setName(e.target.value)} required id='adminid' vatiant=' outlined' placeholder="" />
                            </div>
                            <div style={{ textAlign: "center", marginBottom: "1rem" }}>
                                <InputLabel htmlFor='name'>Price</InputLabel>
                                <TextField style={{ padding: "0.2rem" }} onChange={(e) => setName(e.target.value)} required id='adminid' vatiant=' outlined' placeholder="" />
                            </div>

                                <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
                                    <InputLabel id="demo-select-small-label">Age</InputLabel>
                                    <Select
                                        labelId="demo-select-small-label"
                                        id="demo-select-small"
                                        value={age}
                                        label="Age"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            
                            {/* <div style={{ textAlign: "center", marginBottom: "1rem" }}>
                                <InputLabel htmlFor='name'>Details</InputLabel>
                                <TextField style={{ padding: "0.2rem" }} onChange={(e) => setName(e.target.value)} required id='adminid' vatiant=' outlined' placeholder="" />
                            </div> */}
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
                                sx={{ margin: "2rem" }}
                            >
                                ADD
                            </Button>
                        </div>
                    </Box >

                </Modal >
            </div >
            <ToastContainer />
        </>
    )
}

