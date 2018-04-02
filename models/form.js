var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var userSchema=new Schema({
    name:{type:String},
    description:{type:String},
    state:{type:String},
    age:{type:String},
    ethnicity:{type:String},
    race:{type:String},
    sex:{type:String},
    height:{type:String},
    weight:{type:String}

});

var User=mongoose.model('user_details',userSchema);

module.exports={User};