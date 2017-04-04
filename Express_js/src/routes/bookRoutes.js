var express = require('express');
var bookRouter = express.Router();

var router = function(nav, test){
    var books = [
        {
            title: '1',
            genre: 'one',
            author: 'I',
            read: false
        },
        {
            title: '2',
            genre: 'two',
            author: 'II',
            read: false
        },
        {
            title: '3',
            genre: 'three',
            author: 'III',
            read: false
        },
        {
            title: '4',
            genre: 'four',
            author: 'IV',
            read: false
        },
        {
            title: '5',
            genre: 'five',
            author: 'V',
            read: false
        },
    ];
    bookRouter.route('/')
        .get(function(req,res){
            res.render('bookListView',{title: 'Books', 
                                nav: nav,
                                books: books
                    });
        });
    bookRouter.route('/:id')
        .get(function(req,res){
            var id = req.params.id;
            res.render('bookView',{title: 'Books', 
                                nav: nav,
                                book: books[id]
                    });
        });
    console.log(test);
    return bookRouter;
}


module.exports = router;