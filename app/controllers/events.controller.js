//Grap Event Model 
const { events } = require('../models/event')
const Event = require('../models/event')
let msg = ""
let countItem = 0;
let statue = "";
function show(req, res) {
    Event.find({} , (err, events) => {
        if (err) console.log(err)
    res.render('layout.ejs', {events , title :"Showing All items", message : msg, itemNums : countItem, statue : statue})
    msg = "";
    });
}

function add(req, res) {
    const event  = new Event ({
            item : req.body.item
    })
    if(event.item != "") 
    { 
        event.save((err) => {console.log(err) })
        countItem++;
        msg = "Item Added Successfully !!"
        statue = "success"
    }
    else
        {
            msg = "You Cannot submit NULL !"
            statue = "danger"
        }
    res.redirect('/')
}

function destroy(req, res) {
    const event = Event.find({_id: req.params.id} )
    event.deleteOne((err) => {if(err) console.log(err)} );
    countItem--;
    res.redirect('/')
}

module.exports = {
    add,
    show,
    destroy
}