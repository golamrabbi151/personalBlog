const jwt = require("jsonwebtoken")
module.exports = {
    verifyAuth: (header) => {
        try{
            if (header){
                const authToken = header.authentication
                const token = authToken.split(" ")[1]
                const decodedData = jwt.verify(token, "app_secret")
                if (decodedData){
                    if (decodedData.role === "admin"){
                        return {userId: decodedData.userId}
                    }
                }
            }

        }catch (e) {
            throw new Error("Invalid user request")
        }
    }
}