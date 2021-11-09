const express = require('express');
const router = express.Router();
const Fpage = require('../schemas/schema.js');

router.get('/', async (req, res) => {
    try {
      const fpa = await Fpage.find()
      res.json(fpa)
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  })

  router.get('/:id', getName, async (req, res) => {
res.json(res.gname);

  })


  router.delete('/:id', getName, async (req, res) => {
    try {
      await res.gname.remove();
      res.json({ message: 'Deleted Subscriber' })
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  })



  router.post('/', async (req, res) => {
    const fpa = new Fpage({
      name: req.body.name,
      desc: req.body.desc,
      link : req.body.link
    })
    try {
      const nfpa = await fpa.save()
      res.status(201).json(nfpa)
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  })

  
  
  async function getName(req, res, next) {
    var gname
    try {
      gname = await Fpage.findById(req.params.id)
      if (gname == null) {
        return res.status(404).json({ message: 'Cannot find subscriber' })
      }
    } catch (err) {
      return res.status(500).json({ message: err.message })
    }
  
    res.gname = gname
    next()
  }


module.exports =  router;