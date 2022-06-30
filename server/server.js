const express = require('express')
const app = express()
const list = require('./data')
const cors = require('cors');
const port = process.env.PORT || 3000;
app.use(express.json())
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).send(list)
})

app.get('/:searchResult', (req, res) => {
    const searchTerm = [req.params.searchResult.toLowerCase()];
    
    const results = list.filter((item) => {
        const title = item.search.toLowerCase();
        const findWords = searchTerm.map((term) => {
            return title.match(term);
        });
        console.log(findWords)
        return findWords[0] !== null;
    });

    if (results.length > 1){
        res.send(results);
    } else {
        res.status(404).send({error: 'It looks like there arenot many great matches for your search'})
    }
});


app.listen(port, () => console.log(`Starting on http://localhost:${port}`))
module.exports = app;
