var express=require('express');
var router=express.Router();
var {User}=require('./../models/form');

router.get('/',(req,res)=>{
    res.render('test');
})

router.post('/',(req,res)=>{
    
 req.checkBody('name', 'please enter name').notEmpty();
 req.checkBody('description', 'please enter description of length 3 to 16 letters').notEmpty();
 req.checkBody('state', 'please select the state').notEmpty();
 req.checkBody('age', 'please enter age').notEmpty();
 req.checkBody('ethnicity', 'please select ethinicity').notEmpty();
 req.checkBody('race', 'please select race').notEmpty();
 req.checkBody('sex', 'please select sex').notEmpty();
 req.checkBody('height', 'please enter height').notEmpty();
 req.checkBody('weight', 'please select weight').notEmpty();

 var errors=req.validationErrors();  //if ther is then throw to users

if(errors)
{
    console.log(errors);
  return res.status(400).render('test',{title:"application error",errors});
}
    var name=req.body.name;
    var description=req.body.description;
    var state=req.body.state;
    var age=req.body.age;
    var ethnicity=req.body.ethnicity;
    var race=req.body.race;
    var sex=req.body.sex;
    var height=req.body.height;
    var weight=req.body.weight;

    new User({name:name,description:description,state:state,age:age,ethnicity:ethnicity,race:race,
              sex:sex,height:height,weight:weight
    }).save().then((user)=>{
res.render('test',{welcome:"you are successfully registered"});
    }).catch((e)=>{
        res.send(e);
    })
   
})

module.exports=router;