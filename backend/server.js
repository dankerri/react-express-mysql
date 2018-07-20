var mysql = require('mysql');
var bodyParser = require('body-parser');
var express = require('express');
var cors = require('cors')
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

var pool = mysql.createPool({
	connectionLimit: 10,
	host: 'localhost',
	user: 'danker',
	password: 'cctv..p,q',
	database: 'comment',
});

// home page
app.get('/', (req, res)=>{
	res.send("oh yeah.");
});


// users and comments
app.get('/users', (req, res) => {
	pool.query('SELECT * FROM user_comment', (err, row)=>{
		if (err) throw err;
		res.send(row);
	});
	
})

app.post('/test', (req, res)=> {
	// console.log(req.body.comment);
	pool.query(
		'INSERT INTO user_comment(comment) VALUES("'+req.body.comment +'")', 
		(err, row)=>{
			if (err) throw err;
			console.log('Inserted');
		});
});

app.listen(3000, ()=>{
	console.log("Server side, listening port 3000.");
});