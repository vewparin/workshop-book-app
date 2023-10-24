// rafce
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { TextField, Box, Button } from '@mui/material'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {
    remove,
    create,
    getdata

} from '../functions/Hotels'



const FormProduct = () => {

    const [data, setData] = useState([])
    const [form, setForm] = useState({})

    useEffect(() => {
        // code
        loadData()

    }, [])

    const loadData = async () => {
        getdata()
            .then((res) => setData(res.data))
            .catch((err) => console.log(err))
    }
    const handleChange = (e) => {


        if (e.target.name === "file") {
            setForm({
                ...form,
                [e.target.name]: e.target.files[0]
            })
        } else {
            setForm({
                ...form,
                [e.target.name]: e.target.value
            })
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formImageData = new FormData()
        for (const key in form) {
            formImageData.append(key, form[key])
        }
        console.log(formImageData)
        create(formImageData)
            .then(res => {
                console.log(res.data)
                loadData()
            })
            .catch((err) => console.log(err))
    }
    const handleRemove = async (id) => {
        remove(id)
            .then((res) => {
                console.log(res)
                loadData()
            })
            .catch((err) => console.log(err))
    }
    return (
        <div>
            {/* HTML */}
            FormAddProduct
            <form onSubmit={handleSubmit} encType="multipart/form-data">


                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    <TextField label="name" name='name' onChange={e => handleChange(e)} variant="outlined" style={{ marginRight: '10px', marginBottom: '10px' }} />
                    <TextField label="location" name='location' onChange={e => handleChange(e)} variant="outlined" style={{ marginRight: '10px', marginBottom: '10px' }} />
                    <TextField label="detail" name='description' onChange={e => handleChange(e)} variant="outlined" style={{ marginRight: '10px', marginBottom: '10px' }} />
                    <TextField type="file" label="file" name='file' onChange={e => handleChange(e)} variant="outlined" style={{ marginRight: '10px', marginBottom: '10px' }} />
                    <TextField type="number" label="price" name='price' onChange={e => handleChange(e)} variant="outlined" style={{ marginRight: '10px', marginBottom: '10px' }} />
                </div>
                <Button variant="contained" type='submit'>Submit</Button>
            </form>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>location</TableCell>
                            <TableCell>description</TableCell>
                            <TableCell>File</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Action</TableCell>
                            <TableCell>Edit</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data ? data.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.location}</TableCell>
                                <TableCell>{item.description}</TableCell>
                                <TableCell>{item.file}</TableCell>
                                <TableCell>{item.price}</TableCell>
                                <Button onClick={() => handleRemove(item._id)}>Delete</Button>
                                <TableCell>
                                    <Link to={'/edit/' + item._id}>Edit</Link>
                                </TableCell>
                            </TableRow>
                        )) : null}
                    </TableBody>
                </Table>
            </TableContainer>


        </div>
    )
}

export default FormProduct