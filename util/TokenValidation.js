const jwt = require('jsonwebtoken')
const secret = 'secret';
const generateToken = (user) => { // user = payload

    const token = jwt.sign(user , secret , {expiresIn: 30, algorithm: 'HS512'});
    console.log(token);
    return token
}

const validateToken = (token) => {

    const decoded = jwt.verify(token,secret);
    console.log(decoded);

}

generateToken({id:101 , name: "karan"})
// validateToken("eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAxLCJuYW1lIjoia3J1c2huYSIsImlhdCI6MTcwMTUzNTk3MSwiZXhwIjoxNzAxNTM2MDAxfQ.e5FBbvFCEsZxoNkrTXFTVSMZ28pmCgi7szi7C3pTLnXcC4OoljqRX25gn-Tz07WgXEVkz3zzYVVMKE7iguzAig")


module.exports = {
    generateToken,
    validateToken
}