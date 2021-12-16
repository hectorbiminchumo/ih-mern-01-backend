
const Store = require("./../models/Store")

exports.create = async (req, res) => {

    //DEL FORMULARIO, CREAMOS VARIABLES Y ASIGNAMOS VALORES.

    const{
        domicilio,
        telefono

    } =req.body

    // CREAR UNA GUITARRA EN BASE DE DATOS
    try {
        
        const newStore = await Store.create({
            domicilio,
            telefono
        })

        // DEVOLVER UNA RESPUESTA EN UN FORMATO JSON
        res.json({
            msg:"Store creada con exito",
            data: newStore
        })

    } catch (error) {
        res.status(500).json({
            msg: "Hubo un error creando la store",
            error:error

        })
        
    }





}

exports.readAll = async (req, res) => {

try {
    const stores = await Store.find({})

    res.json({
        msg: "Stores obtenidas con exito.",
        data: stores
    })


} catch (error) {

    res.status(500).json({
        msg: "Hubo un error obteniendo los datos",
        error:error
    })

}

}

exports.readOne = async (req, res) => {

	const { id } = req.params

	try {
		
		const store = await Store.findById(id)

		res.json({
			msg: "Store obtenida con éxito.",
			data: store
		})

	} catch (error) {
		res.status(500).json({
			msg: "hubo un error obteniendo los datos.",
			error: error
		})
	}


}

exports.edit = async (req, res) => {

    const {id} = req.params

    const {
        domicilio,
        telefono
    } = req.body

    try{
        const updatedStore = await Store.findByIdAndUpdate(id,
            
            {
                domicilio,
                telefono
            },
            {new: true}
            
            )
            res.json({
                msg: "Store actualizado con exito",
                data: updatedStore
            })
    } catch (error){

        res.status(500).json({
            msg: "Hubo un error con la actualizacion de Store",
            error: error
        })

    }

}
exports.delete = async (req, res) => {

    const { id } = req. params

    try {
        const deletedStore = await Store. findByIdAndRemove({_id:id})

        res.json({
            msg: "Store borrado con exito"
        })


    } catch ( error ) {
        res.status(500).json({
            msg: "Hubo un error borrando el store",
            error:error
        })
        
    }
}