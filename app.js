const express = require('express');

var app = express();

const fs = require('fs');
const session = require('express-session')
const formidable = require('formidable');
const util = require('util');
const crypto = require('crypto');
//const nodemailer = require("nodemailer");

app.set('view engine', 'ejs');

app.use('/css', express.static('css'));
app.use('/imagini', express.static('imagini'));
app.use('/views/frag', express.static('fragm'));


function getJson(numeFis){
	let textFis = fs.readFileSync(numeFis);//pun continutul fisierului useri.json in rawdata
	return JSON.parse(textFis);//obtin obiectul asociat json-ului
}

function saveJson(obJson, numeFis){
	let data = JSON.stringify(obJson);//transform in JSON
	fs.writeFileSync(numeFis, data);//scriu JSON-ul in fisier (inlocuind datele vechi)
}

//setez o session
app.use(session({
    secret: 'abcdefg',//folosit de express session pentru criptarea id-ului de sesiune
    resave: true,
    saveUninitialized: false
  }));

app.get('/', function(req, res) {
	res.render('html/proiect');
});

app.get('/prezentare', function(req, res) {
    res.render('html/despre_mine');
});

app.get('/proiecte', function(req, res) {
    res.render('html/proiecte');
});

app.get('/CV', function(req, res) {
    res.render('html/cv');
});

app.get('/contact', function(req, res) {
    res.render('html/contact');
});

app.get('/magazin', function(req, res) {
   if(req.session.mail)
   {
    let rawdata = fs.readFileSync('produse.json');
    let jsfis = JSON.parse(rawdata);
    console.log(jsfis.produse);

    res.render('html/magazin',{produse:jsfis.produse,user:req.session.mail});
   }

   else
   {
    res.render('html/login');
   }
});

//pagini de utilizare //
app.get('/login', function(req, res) {
    res.render('html/login');
});

app.get('/review', function(req, res) {
    res.render('html/review');
});

app.get('/logout', function(req, res) {
    req.session.destroy();
    res.render('html/logout');
});

app.get('/inregistrare', function(req, res) {
    res.render('html/inregistrare_user', {user: req.session.mail});
});


//posturile
app.post('/login',function(req, res)
{
    var form = new formidable.IncomingForm();//ia datele primite
	form.parse(req, function (err, fields, files) {	//fields e pentru text files pentru spre ex poza

		jsfis = getJson('useri.json')	//citeste fisier useri
		var cifru = crypto.createCipher('aes-128-cbc', 'mypassword');//creez un obiect de tip cifru cu algoritmul aes
		var encrParola = cifru.update(fields.parola, 'utf8', 'hex');//cifrez parola
		encrParola += cifru.final('hex');//inchid cifrarea (altfel as fi putut adauga text nou cu update ca sa fie cifrat
		let user = jsfis.useri.find(function (x) {//caut un user cu acelasi mail dat in formular si aceeasi cifrare a parolei

			return (x.mail == fields.mail && x.parola == encrParola);
		});	//daca un user are un nume valid si daca parola e ca aia corect cripatata
		if (user) 
		{
			console.log(user);
			console.log(user.parola);
			console.log(encrParola);
			req.session.mail = user;//setez userul ca proprietate a sesiunii

			let rawdata = fs.readFileSync('produse.json');
        	let jssfis = JSON.parse(rawdata);
			res.render('html/magazin',{produse:jssfis.produse,user:req.session.mail });
		}
		else
		{
			res.render('html/login');
		}
		

		console.log(req.session.mail);
        /*afiseaza(render) pagina folosind ejs (deoarece este setat ca view engine) */
        
        
	});


});

app.post('/inregistrare',function(req, res) 
{
    var form = new formidable.IncomingForm();
	form.parse(req, function(err, fields, files) {

		let rawdata = fs.readFileSync('useri.json');
		let jsfis = JSON.parse(rawdata);
		var cifru = crypto.createCipher('aes-128-cbc', 'mypassword');
		var encrParola= cifru.update(fields.parola, 'utf8', 'hex');
		encrParola+=cifru.final('hex');
		console.log(fields.parola+ " "+encrParola);
		jsfis.useri.push({id:jsfis.lastId, nume: fields.nume, prenume: fields.prenume, mail: fields.mail, parola: encrParola, dataInreg: new Date()});
		jsfis.lastId++;
		res.render('html/login');

		saveJson(jsfis,'useri.json')
		//trimiteMail(fields.username, fields.email).catch((err) => {console.log(err)})
    });
	
});



//////// PAGINA 404 //////
app.use(function(req,res){
    res.status(404).render('html/404');
});

app.get('/404', function(req, res) {
    res.render('html/404');
});


app.listen(5300);
console.log('Aplicatia se va deschide pe portul 5300.');