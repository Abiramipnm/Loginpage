import React from 'react'
import mbbs from '../../Assects/mbbs.jpg'
import mari from '../../Assects/mariuniversity.jpg'
import kazan from '../../Assects/kazanuniversity.jpg'
import symble from '../../Assects/symble.jpg'
import russia from '../../Assects/russia.jpg'
import './home.css';
import Footer from '../footer/footer'

function Home() {
    return (
      <>
        <div className="fixed-content">
          <img src={russia} className="russia" alt="Russia" />
          <h1 className="font-center">Russia</h1>
        </div>
        <div className="home-body">
          <div className="scroll-content">
            <div className="first-item">
              <h1 className="align">Russia</h1>
              <img src={mari} className="mari" alt="Mari State University" />
              <h2 className="home-h2div">Mari State University</h2>
              <p className="home-p">
                Mari State University (MarSU), founded in 1972 in Yoshkar-Ola,
                Russia, is a leading institution known for its diverse educational
                programs and research. Offering degrees in medicine, engineering,
                humanities, natural sciences, and social sciences, MarSU combines
                theoretical knowledge with practical training through advanced
                laboratories and hospital affiliations. It boasts a multicultural
                student body and experienced faculty, fostering an inclusive and
                high-quality educational environment. MarSU is dedicated to
                academic excellence and innovation, contributing to significant
                advancements through its research initiatives and international
                collaborations.
              </p>
            </div>
            <br></br>
            <br></br>
            <div className="second-item">
              <img
                src={kazan}
                className="kazan"
                alt="Kazan State Medical University"
              />
              <h2 className="home-h2div">Kazan State Medical University</h2>
              <p>
                Kazan State Medical University (KSMU), established in 1814 in
                Kazan, Tatarstan, is one of Russia's oldest and most prestigious
                medical schools. It offers a range of programs in medicine,
                dentistry, pharmacy, and public health, combining theoretical
                knowledge with practical training in advanced facilities and
                affiliated hospitals. KSMU has a diverse, multicultural student
                body and a faculty of experienced professionals. Renowned for its
                scientific research and international collaborations, KSMU is
                dedicated to producing highly skilled medical professionals and
                advancing medical science.
              </p>
            </div>
            <br></br>
  
            <h2 className="home-h2">Course Details in Russia</h2>
            <div className="third-item">
              <div className="container">
                <img className="home-img-3" src={mbbs} alt="Course details" />
                <div className="overlay">
                  <div className="text"> Facilities Individual Hostel Indian Food Medical Insurance Visa Extension</div>
                </div>
              </div>
  
              <div className="container">
                <img className="home-img-3" src={symble} alt="University details" />
                <div className="overlay">
                  <div className="text"> Average Fees Per year $ </div>
                </div>
              </div>
  
              <div className="container">
                <img className="home-img-3" src={mbbs} alt="Course details" />
                <div className="overlay">
                  <div className="text">Coaching Offered FMGE PMDC NMC Classes B</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Footer className="foot" />
          </div>
        </div>
      </>
    );
  }
  
  export default Home;

