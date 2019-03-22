const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const MovieSchema = new Schema({
    director_id:Schema.ObjectId,
    title:{
        type: String,
        require:true
    },
    catagory:String,
    country:String,
    year:Number,
    imdb_score:Number,
    date:{
        type: date,
        default:Date.now
    }
});

module.exports = mongoose.model('api_movie',MovieSchema);
