const {Thing} = require('../models');

module.exports.createThing = async (req, res, next) => {
  try {
    const {body} = req;
    const [newThing] = await Thing.create(body);
    if(newThing){
      res.status(201).send({data: newThing});
    }
    res.status(400).send();
  } catch (error) {
    next(error)
  }
}


module.exports.getAllThings = async (req, res, next) => {
  try {
    const arrayThings = await Thing.findAll();
    if(arrayThings.length){
      res.status(200).send({data: arrayThings});
    }
    res.status(404).send();
  } catch (error) {
    next(error)
  }
}

module.exports.getThing = async (req, res, next) => {
  try {
    const {params:{id}}=req;
    const thing = await Thing.findByPk(id);
    if(thing){
      res.status(200).send({data: thing});
    }
    res.status(404).send();
  } catch (error) {
    next(error)
  }
}



module.exports.updateThing = async (req, res, next) => {
  try {
    const {params:{id}, body}=req;
    const updatedThing = await Thing.updateByPk(id, body);
    if(updatedThing){
      res.status(200).send({data: updatedThing});
    }
    res.status(404).send();
  } catch (error) {
    next(error)
  }
}



module.exports.deleteThing = async (req, res, next) => {
  try {
    const {params:{id}}= req;
    const thing = await Thing.deleteByPk(id);
    if(thing){
      res.status(200).send({data: thing});
    }
    res.status(404).send();   
  } catch (error) {
    next(error)
  }
}

