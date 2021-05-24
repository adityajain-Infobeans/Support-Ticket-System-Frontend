const express = require('express');
const router = express.Router();
const Ticket = require('../models/Ticket');
const { Op } = require('sequelize');

router.get('/:ticket_id?', function (req, res) {
    if (!req.params.ticket_id) {
        // send all tickets for dashboard  code here

        res.send('');
    } else {
        // supplied data for supplied ticket id  code here
        res.send('');
    }
});

router.post('/', function (req, res) {
    // add ticket to db code here
    res.end('');
});

router.put('/', function (req, res) {
    // update already existing ticket code here
    res.end('');
});

router.delete('/', function (req, res) {
    // delete ticket code here
    res.end('');
});

// tickets summary for dashboard
router.get('/summary', (req, res) => {
    const totalTickets = Ticket.count({})
        .then((data) => {
            return data;
        })
        .catch((err) => {
            console.log(err);
        });

    const openTicket = Ticket.count({
        where: {
            ticket_id: {
                [Op.eq]: 'open',
            },
        },
    })
        .then((data) => {
            return data;
        })
        .catch((err) => {
            console.log(err);
        });

    const resolvedTicket = Ticket.count({
        where: {
            ticket_id: {
                [Op.eq]: 'closed',
            },
        },
    })
        .then((data) => {
            return data;
        })
        .catch((err) => {
            console.log(err);
        });

    Promise.all([totalTickets, openTicket, resolvedTicket])
        .then((response) => {
            res.json({
                status: 'success',
                message: 'Promises resolved successfully',
                data: {
                    totalTickets: response[0],
                    openTicket: response[1],
                    resolvedTicket: response[2],
                },
            });
            res.end();
        })
        .catch((err) => {
            console.log(err);
            res.json({
                status: 'error',
                message: 'error occurred with promise',
                data: {},
            });
            res.end();
        });
});

module.exports = router;