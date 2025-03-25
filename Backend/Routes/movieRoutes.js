const express = require('express');
const app = express.Router();
const movieSchema = require('../Model/movieSchema');

app.post('/',async(req,res)=>{
    try{
        const newMovie = await new movieSchema(req.body).save();
        res.status(201).json(newMovie);
    }
    catch(error){
        res.status(error.status||500).json({message: error.message});
    }
})

app.get('/',async(req,res)=>{
    try{
        const movies = await movieSchema.find();
        res.status(200).json(movies);
    }
    catch(error){
        res.status(error.status||500).json({message: error.message});
    }
})

app.get('/:id',async(req,res)=>{
    try{
        const movie = await movieSchema.findById(req.params.id);
        if(!movie){
            return res.status(404).json({message:"No results"});
        }
        res.status(200).json(movie);
    }
    catch(error){
        res.status(error.status||500).json({message: error.message});
    }
})


app.put('/:id',async(req,res)=>{
    try{
        const upMovie = await movieSchema.findByIdAndUpdate(req.params.id,req.body,{new : true});
        res.status(200).json(upMovie);
    }
    catch(error){
        res.status(error.status||500).json({message: error.message});
    }
})

app.delete('/:id',async(req,res)=>{
    try{
        await movieSchema.findByIdAndDelete(req.params.id);
        res.status(204).json({message : "Movie deleted successfully"});
    }
    catch(error){
        res.status(error.status||500).json({message: error.message});
    }
})

module.exports = app;