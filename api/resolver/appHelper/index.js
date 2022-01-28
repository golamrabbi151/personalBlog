const objectId = require('mongoose').Types.ObjectId
module.exports = {
    validateId: (id='')=>{
        if (objectId.isValid(id)){
            if ((String)(new objectId(id))=== id){
                return true
            }
            throw new Error("Invalid id", 400)
        }
        throw new Error("Invalid id", 400)
    }
}