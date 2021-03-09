import express from 'express';

const app = express();

app.set('view engine', 'pug');
app.use(express.static('public'));

let theTime = new Date();

app.get('/', (req, res) => {
    res.render('index');
})




app.listen(3000);