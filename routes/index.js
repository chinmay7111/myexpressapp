var express = require('express');
var router = express.Router();
const userModel = require("./users"); // need to require to use it 

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});


router.get("/create", async function(req,res){
  const createduser = await userModel.create({
    name: "gil",
    nickname: "prince",
    description: "the best young player in world ",
    categories:["batting","fielding","simple","young"],
    
  })
  res.send(createduser);
})

router.get("/find", async function(req,res){
  // var regex =new RegExp("^viR at$","i"); // to find case-Insensetive search
  // let finduser = await userModel.find({
  //   name: regex
  // })

// //**find onthe basis of catagorey
//   let finduser= await userModel.find({categories: {$all:['simple']}})
//   res.send(finduser)


//** to find document in specific date range
// var date1= new Date('2024-03-14');
// var date2= new Date('2024-03-15');
// let user = await userModel.find({
//   datecreated : {$gte: date1,$lte: date2}
// })
// res.send(user);

//** find documents basis on the existence of a field */

// let user = await userModel.find({ categories:{$exists:true}})
// res.send(user)


//** find document on the basis of field length  */
let user = await userModel.find({
  $expr:{ // $expr that is an obj
    $and:[  // $and oprater that is an array , it contains two obj
      {$gte:[{$strLenCP:'$nickname'},0]}, //Which contains aggrigated methods
      {$lte:[{$strLenCP:'$nickname'},6]}
    ]
  }
})
res.send(user)
})






// for deleting the users  
// router.get("/delete", async function(req,res){
//   const deluser= await userModel.find()
//   res.send(deluser)
// })



















// router.get('/failed', function(req, res) {
//   req.flash("name", "chinmay");// one the flash is created u can uset it on any route like below one , u can not do this with any data
//   res.send("it been created...");
// });


// router.get('/checkit', function(req, res) {
//  console.log(req.flash("name"));
//   res.send("it been checked...");
// });

module.exports = router;
