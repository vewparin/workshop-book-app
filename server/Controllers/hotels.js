const Hotels = require('../Models/Hotels')
const fs = require('fs')

exports.read = async (req, res) => {
    try {

        const id = req.params.id
        const hotelSet = await Hotels.findOne({ _id: id }).exec();
        res.send(hotelSet)

    } catch {
        console.log(err)
        res.status(500).send('Server Create Error')
    }
}
exports.list = async (req, res) => {
    try {

        const hotelSet = await Hotels.find({}).exec();
        res.send(hotelSet)

    } catch {
        console.log(err)
        res.status(500).send('Server List Error')
    }
}
exports.create = async (req, res) => {
    try {
        var data = req.body

        if (req.file) {
            data.file = req.file.filename

        }
        const hotelSet = await Hotels(data).save()
        res.send(hotelSet)

    } catch {
        console.log(err)
        res.status(500).send('Server Create Error')
    }
}
exports.update = async (req, res) => {
    try {

        const id = req.params.id
        var newData = req.body
        if (typeof req.file !== 'underfined') {
            newData.file = req.file.filename
            await fs.unlink('./uploads/' + newData.fileOld, (err) => {
                if (err) {
                    console.log(err)
                } else {
                    console.log('Edit success')
                }
            })
        }
        const hotelSetUpdate = await Hotels.findOneAndUpdate({ _id: id }, newData , { new: true }).exec();
        res.send(hotelSetUpdate)

    } catch (err) {
        console.log(err)
        res.status(500).send('Server update Error')
    }
}

exports.remove = async (req, res) => {
    try {
        const id = req.params.id
        const removed = await Hotels.findOneAndDelete({ _id: id }).exec();

        if (removed?.file) {
            await fs.unlink('./uploads/' + removed.file, (err) => {
                if (err) {
                    console.log(err)
                } else {
                    console.log('Remove success')
                }
            })
        }
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Delete Error')
    }
}

