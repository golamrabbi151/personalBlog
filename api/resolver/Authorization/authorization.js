const jwt = require("jsonwebtoken")
module.exports = {
    verifyAuth: (header) => {
        try{
            if (header){
                const token = header.split(" ")[1]
                const decodedData = jwt.verify(token, process.env.AUTH_SECRET)
                if (decodedData){
                    if (decodedData.role === "admin"){
                        const req = {userId: decodedData.userId}
                        return {req}
                    }
                }
            }

        }catch (e) {
            throw new Error("Invalid user request")
        }
    }
}