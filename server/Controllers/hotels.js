const Hotels = require('../Models/Hotels')

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

        console.log(req.body)
        const hotelSet = await Hotels(req.body).save()
        res.send(hotelSet)

    } catch {
        console.log(err)
        res.status(500).send('Server Create Error')
    }
}
exports.update = async (req, res) => {
    try {

        const id = req.params.id
        const hotelSetUpdate = await Hotels.findOneAndUpdate({ _id: id }, req.body, { new: true }).exec();
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
        res.send(removed)

    } catch(err){
        console.log(err)
        res.status(500).send('Server Delete Error')
    }
}

