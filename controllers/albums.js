const express = require('express');
const router = express.Router();

let data = require('../data/data.json')

router.get('/albums', (req, res)=>{
    res.render('albums', {
        albums : data.albums,
        id : ''
    });
})

router.get('/albums/:album', (req, res)=>{
    let album = req.param('album')
    let albumObj = {}
        data.albums.forEach(element=>{
        if (element.albumLink == album)
        {
            albumObj = {
                "albumLink" : element.albumLink,
                "albumName" : element.albumName,
                "releaseDate" : element.releaseDate,
                "summary" : element.summary,
                "shortSummary" : element.shortSummary,
                "trackList" : element.trackList,
                "albumCover" : element.albumCover,
                "spotify" : element.spotify,
                "apple" : element.apple
            }
        }
    })
    res.render('albums', {
        album : albumObj,
        id : album
    })
})

module.exports = router