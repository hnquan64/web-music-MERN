
const router = require("express").Router();
const Song = require("../Models/song.js");
const Singer = require("../Models/singer.js");
//Lấy data Singer.
router.get('/dataSinger', function (req, res,) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:6469');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // // Pass to next layer of middleware
    // // next();
    Singer.find(function (err, data) {
        if (err) {
            res.json({ "kq": 0, "errMsg": err });
        } else {
            // res.send({dssinger:data});
            res.json(data);
        }
    });
});

//Lấy tất cả data (Singer + Song).
router.get("/dataSong", function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:6469');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    var singer = Singer.aggregate([{
        //Ở bảng singer dò lấy dữ liệu bên bảng song.
        $lookup: {
            from: "songs",
            localField: "Songs",
            foreignField: "_id",
            as: "dssong"
        }
    }], function (err, data) {
        if (err) {
            res.json({ "kq": 0, "errMsg": err });
        } else {
            // console.log(data);
            // res.json(data);
            res.json(data);
        }
    }).sort({ 'Name': 1 }).limit(10);
});

//Lấy 5 bài hát (theo lượt nghe).
router.get('/top5listen', function (req, res,) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:6469');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    // next();
    Song.find().limit(5).sort({ 'Count': -1 }).exec(function (err, data) {
        if (err) {
            res.json({ "kq": 0, "errMsg": err });
        } else {
            res.json(data);
        }
    });
});

//Lấy 5 bài hát mới thêm vào (theo lượt nghe).
router.get('/top5moi', function (req, res,) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:6469');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    // next();
    Song.find().limit(5).sort({ 'Name': 1 }).exec(function (err, data) {
        if (err) {
            res.json({ "kq": 0, "errMsg": err });
        } else {
            res.json(data);
        }
    });
});

//Top bai hat like nhieu
router.get('/favourite', function (req, res,) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:6469');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    // next();
    Song.find().limit(10).sort({ 'Likesong': -1 }).exec(function (err, data) {
        if (err) {
            res.json({ "kq": 0, "errMsg": err });
        } else {
            res.json(data);
        }
    });
});

//Top 50bai nge nhieu nhat
router.get('/chart', function (req, res,) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:6469');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    // next();
    Song.find().limit(50).sort({ 'Count': -1}).exec(function (err, data) {
        if (err) {
            res.json({ "kq": 0, "errMsg": err });
        } else {
            res.json(data);
        }
    });
});

//Top bai hat nghe nhieu
router.get('/hotsong', function (req, res,) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:6469');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    // next();
    Song.find().limit(10).sort({ 'Count': -1}).exec(function (err, data) {
        if (err) {
            res.json({ "kq": 0, "errMsg": err });
        } else {
            res.json(data);
        }
    });
});

//10 bài mới nhất
router.get('/top5new', function (req, res,) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:6469');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    // next();
    Song.find().limit(5).sort({_id:-1}).exec(function (err, data) {
        if (err) {
            res.json({ "kq": 0, "errMsg": err });
        } else {
            res.json(data);
        }
    });
});


// 15 bài mới nhất việt nam
router.get('/newvn', function (req, res,) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:6469');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    // next();
    Song.find({Area:'V-Pop'}).limit(15).sort({_id:-1}).exec(function (err, data) {
        if (err) {
            res.json({ "kq": 0, "errMsg": err });
        } else {
            res.json(data);
        }
    });
});


// 15 bài mới nhất china
router.get('/newchina', function (req, res,) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:6469');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    // next();
    Song.find({Area:'C-Pop'}).limit(15).sort({_id:-1}).exec(function (err, data) {
        if (err) {
            res.json({ "kq": 0, "errMsg": err });
        } else {
            res.json(data);
        }
    });
});


// 15 bài mới nhất KOREA
router.get('/newkorea', function (req, res,) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:6469');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    // next();
    Song.find({Area:'K-Pop'}).limit(15).sort({_id:-1}).exec(function (err, data) {
        if (err) {
            res.json({ "kq": 0, "errMsg": err });
        } else {
            res.json(data);
        }
    });
});


// 15 bài mới nhất usuk
router.get('/newusuk', function (req, res,) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:6469');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    // next();
    Song.find({Area:'US-UK'}).limit(15).sort({_id:-1}).exec(function (err, data) {
        if (err) {
            res.json({ "kq": 0, "errMsg": err });
        } else {
            res.json(data);
        }
    });
});


// Tất cả các bài hát việt nam
router.get('/vietnamsong', function (req, res,) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:6469');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    // next();
    Song.find({Area: 'V-Pop'}).limit().sort({ 'Count': -1}).exec(function (err, data) {
        if (err) {
            res.json({ "kq": 0, "errMsg": err });
        } else {
            res.json(data);
        }
    });
});

// Tất cả các bài hát China
router.get('/chinasong', function (req, res,) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:6469');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    // next();
    Song.find({Area: 'C-Pop'}).limit().sort({ 'Count': -1}).exec(function (err, data) {
        if (err) {
            res.json({ "kq": 0, "errMsg": err });
        } else {
            res.json(data);
        }
    });
});

// Tất cả các bài hát KOREA
router.get('/koreasong', function (req, res,) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:6469');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    // next();
    Song.find({Area: 'K-Pop'}).limit().sort({ 'Count': -1}).exec(function (err, data) {
        if (err) {
            res.json({ "kq": 0, "errMsg": err });
        } else {
            res.json(data);
        }
    });
});

// Tất cả các bài hát US-UK
router.get('/usuksong', function (req, res,) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:6469');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    // next();
    Song.find({Area: 'US-UK'}).limit().sort({ 'Count': -1}).exec(function (err, data) {
        if (err) {
            res.json({ "kq": 0, "errMsg": err });
        } else {
            res.json(data);
        }
    });
});

//Top bai hat ballad nghe nhieu
router.get('/topballad', function (req, res,) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:6469');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    // next();
    Song.find({Genre: 'Ballad'}).limit(10).sort({ 'Count': -1}).exec(function (err, data) {
        if (err) {
            res.json({ "kq": 0, "errMsg": err });
        } else {
            res.json(data);
        }
    });
});

router.get('/toppop', function (req, res,) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:6469');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    // next();
    Song.find({Genre: 'Pop'}).limit(10).sort({ 'Count': -1}).exec(function (err, data) {
        if (err) {
            res.json({ "kq": 0, "errMsg": err });
        } else {
            res.json(data);
        }
    });
});

router.get('/topr&b', function (req, res,) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:6469');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    // next();
    Song.find({Genre: 'R&B'}).limit(10).sort({ 'Count': -1}).exec(function (err, data) {
        if (err) {
            res.json({ "kq": 0, "errMsg": err });
        } else {
            res.json(data);
        }
    });
});

router.get('/toprap', function (req, res,) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:6469');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    // next();
    Song.find({Genre: 'Rock'}).limit(10).sort({ 'Count': -1}).exec(function (err, data) {
        if (err) {
            res.json({ "kq": 0, "errMsg": err });
        } else {
            res.json(data);
        }
    });
});

// Top 10 ca si duoc yeu thich
router.get('/singersfav', function (req, res,) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:6469');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    // next();
    Singer.find().limit(10).sort({ 'Likesinger': -1}).exec(function (err, data) {
        if (err) {
            res.json({ "kq": 0, "errMsg": err });
        } else {
            res.json(data);
        }
    });
});

//Hot music
router.get('/hotmusic', function (req, res,) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:6469');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    // next(); 
    Song.find({'Count':{$gte:50 }}).limit(10).sort({_id:-1}).exec(function (err, data) {
        if (err) {
            res.json({ "kq": 0, "errMsg": err });
        } else {
            res.json(data);
        }
    });
});

//Trending
router.get('/trending', function (req, res,) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:6469');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    // next(); 
    Song.find({'Count':{$gte:100 }}).limit(10).sort({_id:-1}).exec(function (err, data) {
        if (err) {
            res.json({ "kq": 0, "errMsg": err });
        } else {
            res.json(data);
        }
    });
});

module.exports = router
