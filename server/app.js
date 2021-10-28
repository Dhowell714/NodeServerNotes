const Express = require("express"); //Line one: requiring the use of the "express" npm package installed in dependencies
const app = Express(); //Create an instance of "express". This is actually firing off top level "Express()" function, which was exported by the Express module. This allows the ability to create an Express app.

app.use('/test', (req, res) => {
    res.send('This is a message from the test endpoint on the server!')
});

app.listen(3000, () => { //app.listen will use express to start a UNIX socket and listen for connections on the given path. The parameter (3000) indicates that the path will be "localhost:3000".
    console.log(`[Server]: App is listening on 3000.`); //This callback function allows us to see what port the server is running on.
});