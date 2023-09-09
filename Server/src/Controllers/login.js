const user = require('../Utils/users');

const login = (request, response) => {
    const { email, password } = request.query;
    const found = user.find((user) => user.email === email && user.password === password);
    if (found) {        
        return response.status(200).json({ access: true });
    }
    return response.status(200).json({ access: false });
};

module.exports = login;