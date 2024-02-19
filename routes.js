import express from 'express'
import becomeController from './controllers/becomeController.js'
import contactController from './controllers/contactController.js'
import donateController from './controllers/donateController.js'

const router=express.Router()

router.post("/postbecome",becomeController.createBecome)
router.get("/getbecome",becomeController.getAllBecome)

router.post("/postcontact",contactController.createContact)
router.get("/getcontact",contactController.getAllContact)

router.post("/postdonate",donateController.createDonate)
router.get("/getdonate",donateController.getAllDonate)

export default  router