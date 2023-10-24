import axios from 'axios'


export const remove = async (id) =>
    await axios.delete(process.env.REACT_APP_API + '/hotels/' + id)

export const create = async (data) =>
    await axios.post(process.env.REACT_APP_API + '/hotels', data)
    
export const getdata = async () => {
    return await axios.get(process.env.REACT_APP_API + '/hotels')
}
export const read = async (id) => {
    return await axios.get(process.env.REACT_APP_API + '/hotels/' + id)
}
export const update = async (id, data) => {
    return await axios.put(process.env.REACT_APP_API + '/hotels/' + id, data)
}