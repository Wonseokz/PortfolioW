//exports.render = function(req, res) {
  //  res.status(200).send('Hello World');
   //};

   exports.render = function(req, res) {

    if (req.session.lastVisit) {
        console.log(req.session.lastVisit);
        }
        req.session.lastVisit = new Date();
        
    res.render('home', {
    title: 'Home',
    Cname:'Yuanshuo Wang',
    name:'wonseok',
    greetings:'Welcome to my personal site. To see more about me, you can view the link in right top.Or just contact me below.',
    imgsrc:'img/preview.jpg'
    });
   };

