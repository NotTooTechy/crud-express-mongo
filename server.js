var express = require('express');
var cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const bodyParser= require('body-parser');

var app = express();
app.use(cors());

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var url = "mongodb://admin:password@localhost:27017/";
MongoClient.connect(url, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database');
    const db = client.db('star-wars-quotes');
    const quotesCollection = db.collection('quotes');
    console.log('quotesCollection');
  });


MongoClient.connect(url, { useUnifiedTopology: true })
  .then(client => {
	const db = client.db('star-wars-quotes');
	const quotesCollection = db.collection('quotes');
	app.post('/quotes', (req, res) => {
		quotesCollection.insertOne(req.body)
	.then(result => {
		res.redirect('/');
		//res.send(req.body);
	}).catch(error => console.error(error));
	})
	})
	

MongoClient.connect(url, { useUnifiedTopology: true })
  .then(client => {
	const db = client.db('star-wars-quotes');
	app.get('/', (req, res) => {
		const cursor = db.collection('quotes').find().toArray().then(results => {
			res.render('index.ejs', {quotes:results});
	}).catch(error => console.error(error));
	})
	})
	
MongoClient.connect(url, { useUnifiedTopology: true })
  .then(client => {
	const db = client.db('star-wars-quotes');
	const quotesCollection = db.collection('quotes');
	  app.post('/update_quotes', (req, res) => {
		  const aquery = { name: req.body.updating_name};
		  const updated = { $set : { name: req.body.updating_name, quote:req.body.update_quote_text}};
  		quotesCollection.updateOne(aquery, updated).then(result => { console.log(result) }).catch(error => console.error(error))
		res.redirect('/');
})
})
	
MongoClient.connect(url, { useUnifiedTopology: true })
  .then(client => {
	const db = client.db('star-wars-quotes');
	const quotesCollection = db.collection('quotes');
	app.post('/delete_quote', (req, res) => {
		const aquery = { name: req.body.updating_name};
		//res.send(aquery);
  		quotesCollection.deleteOne(aquery).then(result => { console.log("deleted") }).catch(error => console.error(error))
		res.redirect('/');
})
})
app.listen(3000);


