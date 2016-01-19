exports.render = function(req, res, next){
  var isLoggedIn = false;
  var email = '';
if(typeof req.session.remember !== 'undefined'){
  isLoggedIn = req.session.remember;
  email = req.session.email;
}

  res.render('index', {
    'title': 'Hello',
    isLoggedIn: isLoggedIn,
    'email':  email
  });
}
