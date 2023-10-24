import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { TextField, Box, Button } from '@mui/material'
import { read, update } from '../functions/Hotels'

const FormEditProduct = () => {
    const params = useParams()
    const navigate = useNavigate()


    const [data, setData] = useState({
        name: '',
        detail: '',
        price: ''
    })
    const [fileOld, setFileOld] = useState()

    useEffect(() => {
        loadData(params.id)
    }, [])

    const loadData = async (id) => {
        read(id)
            .then((res) => {
                setData(res.data)
                setFileOld(res.data.file)
            })
    }
    const handleChange = (e) => {
        if (e.target.name === "file") {
            setData({
                ...data,
                [e.target.name]: e.target.files[0]
            })
        } else {
            setData({
                ...data,
                [e.target.name]: e.target.value
            })
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(data)
        console.log(fileOld)

        const formImageData = new FormData()
        for (const key in data) {
            formImageData.append(key, data[key])
        }
        formImageData.append('fileOld', fileOld)
        update(params.id, formImageData)
            .then(res => {
                console.log(res)
                navigate('/admin/viewtable')
            })
            .catch((err) => console.log(err))
    }

    return (
        <div>FormEditProduct

            <form onSubmit={handleSubmit} encType='multipart/from-data'>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    <TextField label="name" name='name' onChange={e => handleChange(e)} variant="outlined" style={{ marginRight: '10px', marginBottom: '10px' }} />
                    <TextField label="location" name='location' onChange={e => handleChange(e)} variant="outlined" style={{ marginRight: '10px', marginBottom: '10px' }} />
                    <TextField label="detail" name='description' onChange={e => handleChange(e)} variant="outlined" style={{ marginRight: '10px', marginBottom: '10px' }} />
                    <TextField type="file" label="file" name='file' onChange={e => handleChange(e)} variant="outlined" style={{ marginRight: '10px', marginBottom: '10px' }} />
                    <TextField type="number" label="price" name='price' onChange={e => handleChange(e)} variant="outlined" style={{ marginRight: '10px', marginBottom: '10px' }} />
                </div>
                <Button variant="contained" type='submit'>Submit</Button>
            </form>

        </div>
    )
}

export default FormEditProduct