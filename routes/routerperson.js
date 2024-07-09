const express=require('express');
const router=express.Router();
const Person=require('../models/Person')

router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newPerson = new Person(data);
        const savePerson = await newPerson.save();
        res.send(savePerson);
        res.status(200).json(savePerson);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'An error occurred while saving the person data.' });
    }
});

router.get('/', async (req, res) => {
    try {
        const data = await Person.find();
        res.send(data);
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'An error occurred while saving the person data.' });
    }
})

//parameterized API
router.get('/:worktype', async (req, res) => {
    try {
        const worktype = req.params.worktype;
        if (worktype == 'chef' || worktype == 'manager' || worktype == 'waiter') {
            const response=await Person.find({work:worktype});
            res.status(200).json(response);
        }else{
            res.status(404).json({error:'Invaild request'})
        }

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'An error occurred while saving the person data.' });
    }

})


//updating data from database using _id

router.put('/:id',async(req,res)=>{
    try{
        const personId=req.params.id; //Extract the id from the URL parameters
        const updatePersondata=req.body;  //update data for the person

        const response=await Person.findByIdAndUpdate(personId,updatePersondata,{
            new:true, //return the updated document
            runValidators:true //run mongoose validation

        })
        if(!response){
            return res.status(404).json(err);
        }
        res.status(200).json(response);


    }catch(err){
        console.log(err);
        res.status(500).json({ error: 'An error occurred while saving the person data.' });
    }
})

router.delete('/:id',async(req,res)=>{
    try{
        const personId=req.params.id; //Extract the id from the URL parameters
        const updatePersondata=req.body;  //update data for the person

        const response=await Person.findByIdAndDelete  (personId);
        if(!response){
            return res.status(404).json(err);
        }
        res.status(200).json({message:'success'});

        
    }catch(err){
        console.log(err);
        res.status(500).json({ error: 'An error occurred while saving the person data.' });
    }
})

module.exports=router;