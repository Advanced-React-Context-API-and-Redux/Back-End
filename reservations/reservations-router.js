const router = require('express').Router();
const Reservations = require('./reservations-model');



//Get all reservations
router.get('/', (req, res) => {
    Reservations.all()
    .then(reservation => {
        res.status(200).json(reservation);
    })
    .catch(({name, message, stack, code}) => {
        res.status(500).json({ 
            error: 'There was an error fetching reservations.',
            name: name,
            message: message,
            stack: stack,
            code: code
        });
    });

});

//GET reservations by reservation id
router.get('/:id', (req, res) => {
    Reservations.findByReservationId(req.params.id)
    .then(reservation => {
        if(reservation){
            res.status(200).json(reservation);
        }else{
            res.status(404).json({error: 'Reservation by that ID does not exist.'});
        }
    })
    .catch(({name, message, stack, code}) => {
        res.status(500).json({ 
            error: 'There was an error finding the reservation.',
            name: name,
            message: message,
            stack: stack,
            code: code
        });
    });
});

//GET Reservations by listing id
router.get('/listing/:id', (req, res) => {
    Reservations.findByListingId(req.params.id)
    .then(reservation => {
        if(reservation){
            res.status(200).json(reservation);
        }else{
            res.status(404).json({error: 'Reservation by that listing ID does not exist.'});
        }
    })
    .catch(({name, message, stack, code}) => {
        res.status(500).json({ 
            error: 'There was an error finding the reservation.',
            name: name,
            message: message,
            stack: stack,
            code: code
        });
    });

});


//GET Reservations By Owner
router.get('/owner/:id', (req, res) => {
    Reservations.findByOwnerId(req.params.id)
    .then(reservation => {
        if(reservation){
            res.status(200).json(reservation);
        }else{
            res.status(404).json({error: 'Reservation for that owner do not exist.'});
        }
    })
    .catch(({name, message, stack, code}) => {
        res.status(500).json({ 
            error: 'There was an error finding the reservation.',
            name: name,
            message: message,
            stack: stack,
            code: code
        });
    });
});

//ADD Reservation to Listing
router.post('/', (req, res) => {
    Reservations.add(req.body)
    .then(reservation => {
        res.status(201).json(reservation)  
    })
    .catch(({name, message, stack, code}) => {
        res.status(500).json({ 
            error: 'There was an error finding the reservation.',
            name: name,
            message: message,
            stack: stack,
            code: code
        });
    });
});

//UPDATE 
router.put('/:id', (req, res) => {
    Reservations.update(req.params.id, req.body)
    .then(reservation => {
        res.status(201).json(reservation)  
    })
    .catch(({name, message, stack, code}) => {
        res.status(500).json({ 
            error: 'There was an error finding the reservation.',
            name: name,
            message: message,
            stack: stack,
            code: code
        });
    });
});

//Delete
router.delete('/:id', (req, res) => {
    Reservations.del(req.params.id)
    .then(listing => {
        if(listing){
            res.status(200).json({message: `Reservation ID: ${req.params.id} deleted.`});
        }else{
            res.status(404).json({message: 'Reservation does not exist.'})
        }   
    })
    .catch(({name, message, stack, code}) => {
        res.status(500).json({ 
            error: 'There was an error deleting reservation.',
            name: name,
            message: message,
            stack: stack,
            code: code
        });
    });
})

module.exports = router;


