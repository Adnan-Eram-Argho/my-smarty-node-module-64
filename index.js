const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;
app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {

    res.send('hello from my over smarty pant')
})
const users = [
    {
        id: 1,
        name: 'adnan eram argho',
        email: "adnaneramargho@gmail.com",
        phone: '0171446381',
    },
    {
        id: 2,
        name: "shabnur",
        email: "shabnur@gmail.com",
        phone: '0171446381',
    },
    {
        id: 3,
        name: 'aliacat',
        email: "aliacat@gmail.com",
        phone: '0171446381',
    },
    {
        id: 4,
        name: 'adnan eram arg',
        email: "adnaneramargho@gmail.com",
        phone: '0171446381',
    },
    {
        id: 5,
        name: 'adnan eram arg',
        email: "adnaneramargho@gmail.com",
        phone: '0171446381',
    },
    {
        id: 6,
        name: 'adnan eram arg',
        email: "adnaneramargho@gmail.com",
        phone: '0171446381',
    },
    {
        id: 7,
        name: 'adnan eram arg',
        email: "adnaneramargho@gmail.com",
        phone: '0171446381',
    }
]
app.get('/users', (req, res) => {
    console.log('query', req.query)
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched)
    } else {
        res.send(users)
    }

})

app.get('/users:id', (req, res) => {
    console.log(req.params.id)
    const id = req.params.id
    const user = users[id];
    res.send(user)
})
app.get('/foods', (req, res) => {
    res.send(['mango', 'apple', 'oranges'])
})
app.get('/foods/mango/fazli', (req, res) => {
    res.send('sour sour fazli flavour')
})
app.post('/user', (req, res) => {
    console.log("request", req.body)
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user)
})
app.listen(port, () => {
    console.log('listening to port', port)
})