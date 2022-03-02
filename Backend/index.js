var express = require("express");
var app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
app.use(express.json());
app.use(cors());
app.use("/dulieu", require("./routes/fe.route"));
app.use("/users", require("./routes/userRouter"));
var ejs = require('ejs');
const axios = require('axios');
app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.static("public"));
// set up express


const PORT = process.env.PORT || 5000;// Thiết lập cổng cho phía server

app.listen(PORT, () => console.log(`Máy chủ đã mở ở cổng: ${PORT}`));// Kiểm tra xem đã kết nối đến chưa

// set up mongoose

mongoose.connect(// Kết nối đến cơ sở dữ liệu mongo
  process.env.JWT_SECRET,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Kết nối với Mongo đã được thành lập");// Nếu kết nối thành công câu lệnh này sẽ t/h
  }
);

// Thiết lập đường dẫn

// app.listen(4000);

//Mongo
// getting-started.js

//Set connect đến database: mongodb localhost
// mongoose.connect('mongodb://localhost:27017/singerdb', { useNewUrlParser: true }, function (err) {
//     if (err) {
//         console.log("Mongo connect error" + err);
//     } else {
//         console.log("Mongo connected successful.")
//     }
// });

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

//Models
const Singer = require("./Models/singer");
const Song = require("./Models/song");

//multer
var multer = require('multer');
const { diskStorage } = require("multer");
const { find } = require("./Models/singer");


//-----------------------------------------------XỬ LÝ UPLOAD FILE IMAGE + AUDIO---------------------------------------------------------------------------
//Set storage của bài hát
var storage_song = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/upload/song') //cb: call back
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname)
    }
});

//Set storage chứ ảnh avatar + cover.
var storage_singer_img = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/upload/singer/image') //cb: call back
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname)
    }
});

//Hàm Upload poster + file mp3 bài hát.
var upload_song = multer({
    storage: storage_song,
    fileFilter: function (req, file, cb) {
        console.log(file);
        if (file.mimetype == "image/bmp" || file.mimetype == "image/png" || file.mimetype == "image/jpeg" || file.mimetype == "image/jpg" || file.mimetype == "image/gif" || file.mimetype == "audio/mpeg") {
            cb(null, true)
        } else {
            return cb(new Error('Only image are allowed!'))
        }
    }
}).fields([{
    name: 'songPoster', maxCount: 2
}, {
    name: 'songAudio', maxCount: 2
}])

//Hàm upload ảnh avatar + cover
var upload_singer_image = multer({
    storage: storage_singer_img,
    fileFilter: function (req, file, cb) {
        console.log(file);
        if (file.mimetype == "image/bmp" || file.mimetype == "image/png" || file.mimetype == "image/jpeg" || file.mimetype == "image/jpg" || file.mimetype == "image/gif" || file.mimetype == "audio/mpeg") {
            cb(null, true)
        } else {
            return cb(new Error('Alo err!'))
        }
    }
}).fields([{
    name: 'singerAva', maxCount: 2
}, {
    name: 'singerCover', maxCount: 2
}])
//----------------------------------------------------------Quản trị ca sĩ-----------------------------------------------------------------------------
//Render addSinger
app.get("/addSinger", function (req, res) {
    res.render("addSinger");
});

//Thêm mới ca sĩ
app.post("/addSinger", function (req, res) {
    //Upload file
    upload_singer_image(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            res.json({ "kq": 0, "errMsg": "A Multer error occurred when uploading." });
        } else if (err) {
            res.json({ "kq": 0, "errMsg": "An unknown error occurred when uploading." + err });
        } else {
            //Save ca sĩ
            const A = req.files.singerAva[0];
            const B = req.files.singerCover[0];
            var singer = Singer({
                Name: req.body.txtSingerName,
                Age: req.body.txtAge,
                Ava: A.filename,
                Cover: B.filename,
                Country: req.body.txtCountry,
                Likesinger: req.body.Likesinger,
                Songs: []
            });
            singer.save(function (err) {
                if (err) {
                    res.json({ "kq": 0, "errMsg": err });
                } else {
                    res.redirect("http://localhost:5000/listsinger");
                }
            });
        }
    });
});

//Lấy danh sách ca sĩ
app.get('/listsinger', function (req, res) {
    Singer.find(function (err, data) {
        if (err) {
            res.json({ "kq": 0, "errMsg": err });
        } else {
            res.render("home2", { trang: "listsinger", dssinger: data });
        }
    });
});

//Lấy thông tin từ ID + render editSinger
app.get("/editSinger/:id", function (req, res) {

    Singer.findById(req.params.id, function (err, char) {
        if (err) {
            res.json({ "kq": 0, "errMsg": err });
        } else {
            console.log(char);
            id = req.params.id
            res.render("editSinger", { casi: char });
            // res.render("home", {trang:"editSinger",casi:char});
        }
    });
});

app.post("/editSinger", function (req, res) {
    upload_singer_image(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            res.json({ "kq": 0, "errMsg": "A Multer error occurred when uploading." });
        } else if (err) {
            res.json({ "kq": 0, "errMsg": "An unknown error occurred when uploading." + err });
        } else {
            Singer.updateOne({ _id: req.body.IDChar }, {
                Name: req.body.txtSingerName,
                Age: req.body.txtAge,
                Ava: req.files.singerAva[0].filename,
                Cover: req.files.singerCover[0].filename,
                Country: req.body.txtCountry,
                Likesinger: req.body.Likesinger,
                Songs: []
            }, function (err) {
                if (err) {
                    res.json({ "kq": 0, "errMsg": err });
                } else {
                    res.redirect("./listsinger");
                }
            });
        }
    });
});



//Xóa ca sĩ 
app.get("/delete/:id", function (req, res) {
    Singer.deleteOne({ _id: req.params.id }, function (err) {
        if (err) {
            res.json({ "kq": 0, "errMsg": err });
        } else {
            res.redirect("../listsinger");
        }
    })
});

//------------------------------------------------------------Trang chủ---------------------------------------------------------------------------
app.get("/", function (req, res) {

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
            res.render("home", { data: data });
        }
    });


});

//-------------------------------------------------------------Quản trị bài hát--------------------------------------------------------------------------
//Render addSong + Set singer để thêm song
app.get("/addSong", function (req, res) {
    Singer.find(function (err, data) {
        if (err) {
            res.json({ "kq": 0, "errMsg": err });
        } else {
            res.render("home2", { trang: "addSong", dssinger: data });
        }
    })
});

//Thêm mới bài hát
app.post("/addSong", function (req, res) {
    //Upload file
    upload_song(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            res.json({ "kq": 0, "errMsg": "A Multer error occurred when uploading." });
        } else if (err) {
            res.json({ "kq": 0, "errMsg": "An unknown error occurred when uploading." + err });
        } else {
            //Save bài hát
            const C = req.files.songPoster[0];
            const D = req.files.songAudio[0];
            var song = Song({
                Name: req.body.txtSongName,
                Author: req.body.txtAuthor,
                Genre: req.body.txtGenre,
                Poster: C.filename,
                Aud: D.filename,
                Area: req.body.txtArea,
                Time: req.body.Time,
                Count: req.body.Count,
                Likesong: req.body.Likesong
            });
            song.save(function (err) {
                if (err) {
                    res.json({ "kq": 0, "errMsg": err });
                } else {
                    Singer.findOneAndUpdate({ _id: req.body.slcSinger }, { $push: { Songs: song._id } }, function (err) {
                        if (err) {
                            res.json({ "kq": 0, "errMsg": err });
                        } else {
                            res.redirect("../");
                        }
                    });
                }
            });
        }
    });
});

//Xóa bài hát
app.get("/deletesong/:id", function (req, res) {
    Song.deleteOne({ _id: req.params.id }, function (err) {
        if (err) {
            res.json({ "kq": 0, "errMsg": err });
        } else {
            res.redirect("../");
        }
    })
});

// Lấy data Singer.
// app.get('/dataSinger', function (req, res,) {
    
//     Singer.find(function (err, data) {
//         if (err) {
//             res.json({ "kq": 0, "errMsg": err });
//         } else {
//             // res.send({dssinger:data});
//             res.json(data);
//         }
//     });
// });

// //Lấy tất cả data (Singer + Song).
// app.get("/dataSong", function (req, res) {
    
//     var singer = Singer.aggregate([{
//         //Ở bảng singer dò lấy dữ liệu bên bảng song.
//         $lookup: {
//             from: "songs",
//             localField: "Songs",
//             foreignField: "_id",
//             as: "dssong"
//         }
//     }], function (err, data) {
//         if (err) {
//             res.json({ "kq": 0, "errMsg": err });
//         } else {
            
//             res.json(data);
//         }
//     }).sort({ 'Name': 1 }).limit(10);
// });

// Lấy 5 bài hát (theo lượt nghe).
// app.get('/top5', function (req, res,) {
//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:6469');

//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader('Access-Control-Allow-Credentials', true);

//     // Pass to next layer of middleware
//     // next();
//     Song.find().limit(5).sort({ 'Name': 1 }).exec(function (err, data1) {
//         if (err) {
//             res.json({ "kq": 0, "errMsg": err });
//         } else {
//             res.json(data1);
//         }
//     });
// });


// //Nút LIKE
// app.post("/like", function (req, res) {

//     Singer.updateOne({ _id: req.params.id }, {
//         Name: req.body.txtSingerName,
//         Age: req.body.txtAge,
//         Ava: req.files.singerAva[0].filename,
//         Cover: req.files.singerCover[0].filename,
//         Country: req.body.txtCountry,
//         Likesinger: req.body.Likesinger,
//         Songs: []
//     }, function (err) {
//         if (err) {
//             res.json({ "kq": 0, "errMsg": err });
//             console.log(err);
//         } else {
//             console.log("ok");
//         }
//     });
// });
// app.post("/like1", function (req, res,) {
//     function loiloi(err) {
//         if (err) {
//             res.json({ "kq": 0, "errMsg": "An unknown error occurred when uploading." + err });
//             console.log(err);
//         } else {
//             //Save ca sĩ
//             var singer = Singer({
//                 Name: req.body.txtSingerName,
//                 Age: req.body.txtAge,
//                 // Ava: A.filename,
//                 // Cover: B.filename,
//                 Country: req.body.txtCountry,
//                 Likesinger: req.body.Likesinger,
//                 Songs: []
//             });
//             singer.save(function (err) {
//                 if (err) {
//                     res.json({ "kq": 0, "errMsg": err });
//                 } else {
//                     console.log("Thanh cong");
//                 }
//             });
//         }
//     }
// });

// app.post('/edit/:id').get(function (req, res) {
//     let id = req.params.id;
//     Singer.findById(id, function (err, data) {
//         res.json(data);
//     });
// });

// //  Defined update route
// app.post('/update').post(function (req, res) {
//     update: (req, res)=>{
//         const SingerId = req.params.id;
//             Singer.findByIdAndUpdate(SingerId, { $set:{Likesinger:req.body.Likesinger} })
//             .exec((err, data) => {
//                  if (err) res.status(500).json({message : err})
//                  res.status(200).json({ message: "Vendor updated"});
//             })
//         }
// });