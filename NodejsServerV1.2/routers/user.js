const express = require('express')
const router = express.Router()// express router function for it we can easily make more sub pages

router.get('/', (req, res) => {// upperpage of subpages
    res.send("User List")
})

router.get('/new', (req, res) => { // subpage
    res.send("User New Form")    
})

module.exports = router // send router out