const checkAge = (req,res,next) => {
    let age = req.query.age;
   if(!age || age < 18){
        return res.redirect('/');
   }
   return next()
}

module.exports = checkAge;