const loginPage = (req,res) => {
    return res.render('index');
}

const registerPage = (req,res) => {
    return res.render('register');
}


module.exports = {
    loginPage,registerPage
}