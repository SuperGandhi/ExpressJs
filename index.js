const express = require('express');
const app = express();
const morgan = require('morgan');
const songsRouter = require('./router/songs.js');
const artistsRouter = require('./router/artists');


app.use(morgan('dev'))
// Only request to /artists
app.use('/artists', artistsRouter)

// Only request to /songs
app.use('/songs', songsRouter )


app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.listen(3000, ()=>{
    console.log('Server running on port 3000');
})