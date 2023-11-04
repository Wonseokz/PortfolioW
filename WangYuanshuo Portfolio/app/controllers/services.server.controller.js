//exports.render = function(req, res) {
  //  res.status(200).send('Hello World');
   //};

   exports.render = function(req, res) {

    if (req.session.lastVisit) {
        console.log(req.session.lastVisit);
        }
        req.session.lastVisit = new Date();
        
    res.render('services', {
    title: 'Services',
    intro:'There are services that I can offer',
    service1:'Web Development Such As This Website',
    service2:'C  C++  C# Programing',
    service3:'Rank Helper in LOL',
    imgsrc:'img/zhanji.png'
    });
   };