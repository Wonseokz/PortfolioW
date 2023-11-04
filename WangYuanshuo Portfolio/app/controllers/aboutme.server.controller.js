//exports.render = function(req, res) {
  //  res.status(200).send('Hello World');
   //};

   exports.render = function(req, res) {

    if (req.session.lastVisit) {
        console.log(req.session.lastVisit);
        }
        req.session.lastVisit = new Date();
        
    res.render('aboutme', {
    title: 'About Me',
    greetings:'This page is brief introduction about me',
    introduction:'Welcome to my personal website! Allow me to introduce myself. My name is Wonseok, and I am a student, an avid gamer, and a software developer as you can see.'
    +' As a software developer, I thrive on solving complex problems and crafting innovative solutions. From designing user-friendly interfaces to writing robust code, I bring creativity and precision to every project. With experience in various programming languages such as C, C++, and C#, I am proficient in both front-end and back-end development. With an insatiable curiosity, I stay updated with the latest trends and techniques to enhance my skills continually.'
    +' I have created this personal website to showcase my skills, projects, and experiences. Feel free to browse through my portfolio, where you’ll find examples of my software development projects, along with my academic achievements. If you have any inquiries, collaboration opportunities, or just want to connect, please don’t hesitate to reach out to me through the contact page. I would be delighted to chat and explore how we can work together to create innovative solutions and push the boundaries of technology.'
    +' Thank you for visiting my website, and I look forward to connecting with you soon!',
    imgsrc:'img/preview.jpg',


    });
   };