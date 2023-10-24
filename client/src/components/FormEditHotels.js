import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { read, update } from '../functions/Hotels'

const FormEditProduct = () => {
    const params = useParams()
    const navigate = useNavigate()


    const [data, setData] = useState({
        name: '',
        detail: '',
        price: ''
    })
    const [fileOld,setFileOld]= useState()

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
        formImageData.append('fileOld',fileOld)
        update(params.id, formImageData)
            .then(res => {
                console.log(res)
                navigate('/')
            })
            .catch((err) => console.log(err))
    }

    return (
        <div>FormEditProduct 555

            <form onSubmit={handleSubmit} encType='multipart/from-data'>
                <input
                    type='text'
                    name='name'
                    onChange={e => handleChange(e)}
                    placeholder='name'
                    value={data.name}
                /> <br />

                <input type='text'
                    name='detail'
                    placeholder='detail'
                    value={data.detail}
                    onChange={e => handleChange(e)}
                /><br />

                <input type='file'
                    name='file'
                    onChange={e => handleChange(e)}
                /><br />

                <input
                    type='text'
                    name='price'
                    placeholder='price'
                    value={data.price}
                    onChange={e => handleChange(e)} />
                <br />
                <button>Submit</button>
            </form>

        </div>
    )
}

export default FormEditProduct