//tarea de express
const users = require("./users");

function login (req, res) {
 const {email, password} = req.query;
 users.forEach(user => {
    

if (user.email === email && user.password === password){
         res.status(200).json({access: true})
} else { res.status(404).json({access: false})}
})

};

module.exports = { login } 