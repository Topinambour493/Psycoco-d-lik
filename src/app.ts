import express from 'express'

const app = express();
const port = 3000;

// View engine setup
app.set('view engine', 'ejs');

app.use(express.static('src'))

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.get('/hello', function(req, res){
  res.render('hello');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});