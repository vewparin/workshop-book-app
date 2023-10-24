// rafce
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


import {
    remove,
    create,
    getdata

} from '../functions/Hotels'



const FormProduct = () => {
    // javascript
    const tam = 'tam roitai'
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
            FormProduct
            <form onSubmit={handleSubmit} encType='multipart/from-data'>
                <input
                    type='text'
                    name='name'
                    onChange={e => handleChange(e)}
                    placeholder='name'
                /> <br />

                <input type='text'
                    name='detail'
                    placeholder='detail'
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
                    onChange={e => handleChange(e)} />
                <br />
                <button>Submit</button>
            </form>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">name</th>
                        <th scope="col">detail</th>
                        <th scope="col">file</th>
                        <th scope="col">price</th>
                        <th scope="col">action</th>
                        <th scope="col">edit</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data ? data.map((item, index) =>
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.detail}</td>
                                <td>{item.price}</td>
                                <td>{item.file}</td>
                                <td onClick={() => handleRemove(item._id)}>
                                    delete
                                </td>
                                <td>
                                    <Link to={'/edit/' + item._id}>
                                        edit
                                    </Link>
                                </td>
                            </tr>
                        )
                            : null
                    }
                </tbody>
            </table>


        </div>
    )
}

export default FormProduct