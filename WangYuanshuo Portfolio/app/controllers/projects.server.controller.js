//exports.render = function(req, res) {
  //  res.status(200).send('Hello World');
   //};

   exports.render = function(req, res) {

    if (req.session.lastVisit) {
        console.log(req.session.lastVisit);
        }
        req.session.lastVisit = new Date();
        
    res.render('projects', {
    title: 'Projects',
    intro:'See my honors below',
    imgsrc1:'img/duanwei.png',
    imgsrc1descrp:'This is my record of advancing from Diamond VI to Master using a Champion Camille The Steel Shadow. In those games, the position I hold is the Top Lane.',
    imgsrc2:'img/zhanji.png',
    imgsrc2descrp:'This is record chart of consecutive victories in Single and Double Rank using Camille The Steel Shadow.In those games, the position I hold is the Top Lane.',  
    imgsrc3:'img/preview.jpg',
    imgsrc3descrp:'This is Camille Ferros The Steel Shadow.',  
  });
   };