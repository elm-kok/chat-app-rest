const { Router } = require('express')
const router = new Router()

var all_rooms = ['room 1', 'room 2', 'my room', 'system room']

router.get('/', (req, res) => {
    res.status(200).json([...all_rooms, 200])
})

router.post('/', (req, res) => {
    if (!all_rooms.includes(req.body.id)){
        all_rooms.push(req.body.id)
        res.status(201).json([{"id":req.body.id}, 201])
    }
    else{
        res.status(404).json([`${req.body.id} already exists`, 404])
    }
})

router.put('/', (req, res) => {
    if (!all_rooms.includes(req.body.id)){
        all_rooms.push(req.body.id)
        res.status(201).json([{"id":req.body.id}, 201])
    }
    else{
        res.status(200).json([{"id":req.body.id}, 200])
    }
})

router.delete('/', (req, res) => {
    if(all_rooms.includes(req.body.id)){
        for(i in all_rooms){
            if(all_rooms[i] === req.body.id){
                all_rooms.pop(i)
            }
        }
        res.status(200).json([`${req.body.id} is deleted`, 200])
    }
    else{
        res.status(404).json([`${req.body.id} is not found`, 404])
    }
})

module.exports = router
