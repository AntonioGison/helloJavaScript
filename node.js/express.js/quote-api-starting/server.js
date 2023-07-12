const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.listen(PORT);
app.use(express.static('public'));



app.get('/api/quotes/random', (req, res) => {
   res.send(getRandomElement(quotes));
})


app.get('/api/quotes', (req, res) => {
    const foundPerson = req.query.person;
    
    if (foundPerson) {
        res.send({ quotes: quotes.filter(quote => quote.person === foundPerson) });
    } else {
        res.send({ quotes: quotes });
    }
});

app.post('/api/quotes', (req, res) => {

    const { person, quote } = req.query;
    if(person && quote) {
        quotes.push({ person, quote });
        res.send({ quote: quote })
    } else {
        res.status(400).send({ error: 'Missing required fields' });
    }
});