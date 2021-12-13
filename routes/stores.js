

// 1. IMPORTACIONES

const express = require("express")
const router  = express.Router()

const storeController = require("./../controllers/storeController")

// 2. RUTEO

// CREAR STORE
router.post("/create", storeController.create)

// LEER STORES
router.get("/readall", storeController.readAll)

// LEER UNA STORE
router.get("/readone/:id", storeController.readOne)


// 3. EXPORTACIONES
module.exports = router