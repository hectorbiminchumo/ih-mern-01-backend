

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

// ACTUALIZAR STORE
router.put("/edit/:id", storeController.edit)

// BORRAR UNA STORE
router.delete("/delete/:id", storeController.delete)


// 3. EXPORTACIONES
module.exports = router