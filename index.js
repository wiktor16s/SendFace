const user = {
    email: "email@email.com",
    password: "stRonGPassworD",
    token: '100000559203575', //to jest id docelowy. do niego wysyłamy wiadomość. PS. to jest twój token :D
          //100002794740699 // a to jest mój id
    msg: "siemaneczko, to ja, test" 
};
/*
id danej osoby możesz sprawdzić na tej stronce:
https://findmyfbid.com/

a jak nie działa to zobacz:
https://www.youtube.com/watch?v=wJ55-nH5nos
*/

let express = require('express');
let login = require("facebook-chat-api")
let app = express();
let isError = false;
let done = false;

let sendFace = function () {

    login({
        email: user.email,
        password: user.password
    }, (err, api) => {

        if (err) {
            isError = true;
            return console.error(err);
        } else {
            api.sendMessage(user.msg, user.token);
            done = true;
            return (console.log("wysłano"));
        }
    });
    return (0);
}

app.get('/', function (req, res) {
    console.log("Got a GET request for the homepage");
    res.send('<html><head></head><body><button style="color: black; background-color: red; height: 300px; width: 300px; font-size: 60px;" onclick="window.location.href=\'/1\'">F I R E</button></body></html>');
})

app.get('/1', function (req, res) {
    console.log("Got a GET request for /1");
    sendFace();
    if (done = true) {
        res.send('Akcja');
    }
})

let server = app.listen(8081, function () {
    let host = server.address().address
    let port = server.address().port

    console.log("Apka wisi na localhost", host, port)
})