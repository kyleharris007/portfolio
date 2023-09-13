import './App.css';

function App() {
  return (
    <div class="App">

          <img class="kyle-photo" src="https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/353394497_9548877921850468_2075302601223715098_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=0TMDSvt6bP8AX8sdORn&_nc_ht=scontent-lga3-1.xx&oh=00_AfAM0PFK9sUFfrPUowoyI7ZvnTghkTdoA-nQDLJPZ-AhfQ&oe=65046C63" alt="kyle"></img>
          <div class="name-item">Kyle Harris</div>

          <br></br>

          <div class="sub-about-me">NYC Based Front-End Software Engineer</div>


          <br></br>

          <div class="about-me">About Me</div>
          <div class="paragraph-item">
            <p>Ambitious and communicative front-end software engineer with a background in recruiting, sales, and marketing.<br></br>Combat Veteran of the US Army.
            An effective problem solver who enjoys collaboration and personal growth.</p>
          </div>

          <div class="software-title">Software</div>
            <ul class="software-list">
              React
              <br></br>
              React Redux
              <br></br>
              JavaScript
              <br></br>
              HTML
              <br></br>
              CSS
              <br></br>
              Tailwinds
              <br></br>
              Material Tailwinds
            </ul>

          <div class="projects-title">Projects</div>
          <p>Project #1 - Hangman: Built a fully functional game of hangman using JavaScript, HTML and CSS.</p>
          <p>Project #2 - Drinkhub: Built a full stack Mongo/Express/React/Node application using external API data.</p>
          <p>Project #3 - You & Meme: Built a fully functional social media website using React for the front-end, and Django and PostgresSQL for the back-end.</p>
          <div class="project-links">
              <div class="hangman-item">
                <a href="https://kyleharris007-hangman-game.netlify.app/">
                  <img class="hangman-image"src="https://play-lh.googleusercontent.com/thAxg7E4T1CuK8xoZehzhEwtSzXpNkfD1nKy7h4VC22BwgMQdAImxexU166hvj5Sd1UP=w240-h480-rw" alt="Hangman Logo" />
                </a>
              </div>

              <div class="drinkhub-item">
                <a href="https://drinkhubfoxtails.netlify.app/">
                  <img class="drinkhub-image"src="https://media.istockphoto.com/id/1160619894/vector/martini-glass-icon.jpg?s=612x612&w=0&k=20&c=VB7qcNIpvpwiiDlmi6bzQNuAatDOlw55zsjGqrPf3po=" alt="DrinkHub Logo" />
                </a>
              </div>

              <div class="youandmeme-item">
                <a href="https://youandmeme.netlify.app/">
                  <img class="youandmeme-image"src="https://icons.iconarchive.com/icons/iconarchive/dogecoin-to-the-moon/512/Doge-icon.png" alt="You and Meme Logo" />
                </a>
              </div>
          </div>

          <div class="socials-title">Social Links</div>
          <div class="social-links">
              <div class="linkedin-item">
                <a href="https://www.linkedin.com/in/kyleharris007/">
                  <img class="linkedin-image"src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png" alt="LinkedIn Logo" />
                </a>
              </div>

              <div class="github-item">
                <a href="https://github.com/kyleharris007">
                  <img class="github-image"src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub Logo" />
                </a>
              </div>

              <div class="resume-item">
                <a href="https://docs.google.com/document/d/1Jyi43MIJ1FSKortQY9z3MT0SWPzEq2p785nHs-5EjdE/edit?usp=sharing" alt="Resume Link" >
                  <img class="resume-image"src="https://static.vecteezy.com/system/resources/previews/002/205/865/original/employee-resume-icon-free-vector.jpg" alt="Resume Logo" />
                </a>
              </div>
          </div>

          <div class="contact-title">Contact</div>
          <div class="contact-item">
            <p>Phone: (585)490-1686</p>
            <p>Email: k.harris007@yahoo.com</p>
            <br></br>
          </div>
    </div>
  );
}

export default App;
