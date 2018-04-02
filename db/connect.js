var mongoose=require('mongoose');
mongoose.Promise=global.Promise;

mongoose.connect('mongodb://helptheworld:Nitp12@ds121089.mlab.com:21089/helptheworld',()=>{
    console.log('datbase is connected');
});