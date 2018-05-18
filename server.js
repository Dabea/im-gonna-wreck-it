var express = require('express');
var exphbs  = require('express-handlebars');
 
var app = express();
 
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'))
 
const smashable = [
{
    name: "Chochlate",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfHJJCkHu0m6YOikI9ZZAMtXZYuzU9pgPr0_3hoE8Zihobz97qMA"
},
{
    name: "Birthday",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSj63s96cr-d-LOTD12qs6FpaMmnH7y2a9gukrxXmDtB_aDNGI"
}
]

const wrecked = [
    {
        name: "Chochlate",
        photo: "https://i2.wp.com/www.2hungryguys.com.au/wp-content/uploads/2015/10/DSC03714.jpg?w=900&ssl=1"
    },
    {
        name: "Birthday",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSj63s96cr-d-LOTD12qs6FpaMmnH7y2a9gukrxXmDtB_aDNGI"
    }
    ]
app.get('/', function (req, res) {
    res.render('index', {smashable: smashable, wrecked: wrecked});
});
 
app.listen(3000);