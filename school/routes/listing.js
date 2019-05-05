const express = require('express');
const User = require('../models/User');
const Listing = require('../models/Listing');
const passport = require('passport');
const geo = require('geolib');
const router = express.Router();

router.get('/all', (req,res) => {
  Listing.find({}, (err,allListings) => {
    if(err){
      res.json({error:"Couldn't get all listings"});
    }else{
      res.json(allListings);
    }
  });
});

router.post('/add', (req,res)=> {
  if(req.isAuthenticated()){
    if (req.body){
      const newListing = new Listing({
        name:req.body.name,
        monthly:req.body.monthly,
        location: req.body.location,
        description:req.body.description,
        matchType:req.body.matchType
      })
      newListing.save(err => {
        if(err){
          console.log(err);
          res.json({error:"Could not add listing to database"});
        }else {
          res.json({succes:"added to database"})
        }
      });
    }
  }else{
    res.json({error:"not logged in"})
  }
});

router.delete('/remove',(req,res) => {
  if (req.body.id && req.isAuthenticated()){
    Listing.remove({_id:req.body.id},(err,deleteMsg) => {
      if(err){
        res.json({error:`Couldn't delete ${req.body.id}`});
      }else {
        res.json({succes:"Deleted"});
      }
    })
  }else{
    req.json({error:"cant remove, must be signed in"})
  }
});

router.get('/:location', (req,res) => {
  if(req.params.location){
    Listing.find({location:req.params.location}, (err,findingListings) =>{
      if(err){
        res.json({error:"Couldn't find any listings for given location"});
      }else if(findingListings.length < 1){
        res.json({error:"Couldn't find any listings for given location"});
      }else{
        res.json(findingListings);
      }
    })
  }else{
    res.json({error:"Not right usage of API"})
  }
})

router.get('/:location/:pricingRangeMin/:pricingRangeMax', (req,res) => {
  if(req.params.location && req.params.pricingRangeMin && req.params.pricingRangeMax){
    console.log(parseInt(req.params.pricingRangeMin));
    Listing.find({location:req.params.location,monthly:{ $gt :  parseInt(req.params.pricingRangeMin), $lt : parseInt(req.params.pricingRangeMax)}},(err,findingListings)=>{
      if(err){
        res.json({error:"Couldnt find in this range or place"});
      }else if(findingListings.length < 1){
        res.json({error:"Couldn't find listings"})
      }else{
          res.json(findingListings);
        }
    })
  }
});

module.exports = router;
