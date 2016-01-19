var User = require('mongoose').model('User');
exports.read = function(req, res){
  res.json(req.user);
};
exports.delete = function(req, res, next){
  req.user.remove({username: req.user.username},function(err){
    if(err){
      return next(err);
    } else{
      res.json(user);
    }
  });
};
exports.update = function(req, res, next){
  User.findOneAndUpdate({username: req.user.username}, req.body,function(err, user){
    if(err){
      return next(err);
    } else{
      res.json(user);
    }
  });
};
exports.userByUsername = function(req, res, next, username){
  User.findOne({username: username},
  function(err, user){
    if(err){
      return next(err);
    } else{
      req.user = user;
      next();
    }
  });
};
exports.list = function(req, res, next){
  User.find({

  },function(err, users){
      if(err){
        return next(err);
      } else{
        res.json(users);
      }
  });
};
exports.create = function(req, res, next){
  var user = new User(req.body);
  user.save(function(err){
    if(err){
      return next(err);
    } else {
      res.json(user);
    }

  });
};
exports.login = function(req, res){
  console.log(req.body);
  if(req.body.remember === 'remember'){
    req.session.remember = true;
    req.session.email = req.body.email;
    req.sessionOptions.maxAge = 60000;
  }
  res.render('index',{
    'title': 'Hello',
    'isLoggedIn': true,
    'email': "Login as " + req.body.email
  });
}
exports.logout = function(req, res){
  console.log(req.body);
  req.session = null;
  res.render('index',{
    'title': 'See you again',
    'isLoggedIn': false
  });
}
