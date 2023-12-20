import { Link } from "react-router-dom";

export function Lab(){
    return <div className="lab-container">
    <p>The projects listed here are for experimental use, you may clone them to view source code but <strong>please do not distribute it</strong>.</p>
    <p>This section intent to grow as soon as I get time to update it.</p>
    <div className="section text">
      <div className="work-title">
        <h3>Portifolio - Current Version</h3>
      </div>
      <Link className="work-image" to="/"><img alt="portifolio" src="/portifolio-react.png" /></Link>
      <p className="main-description">A port ot the previous portifolio, done in React Framework. I still like my layout but I was a little bit rust on React, so I decided to update it :)</p>
      <p className="main-description">(React, Web)</p>
      <a href="https://github.com/lelis718/portifolio-v2" target="_blank" rel="noreferrer">GitHub</a>
    </div>
 
    <div className="section text">
      <div className="work-title">
        <h3>Portifolio - Angular Version</h3>
      </div>
      <a className="work-image" href="http://legacy-portifolio.lelis718.com.br" target="_blank" rel="noreferrer">
        <img src="/portifolio-angular.png" alt="legacy version of the portifolio"/></a>
      <p className="main-description">This site. Gave me plenty of work during a weekend :)</p>
      <p className="main-description">(Angular 8, Web)</p>
      <a href="https://github.com/lelis718/portifolio" target="_blank" rel="noreferrer">GitHub</a>
    </div>
 
    <div className="section text">
      <div className="work-title">
        <h3>React Space Shooter</h3>
      </div>
      <a className="work-image" href="http://react-shooter.lelis718.com.br" target="_blank" rel="noreferrer"><img
          src="/react-shooter.png" alt="screenshot of the react shooter game" /></a>
      <p className="main-description">A Space Shooter game made entirely using React :)</p>
      <p className="main-description">(React, Web)</p>
      <a href="https://github.com/lelis718/react-shooter" target="_blank" rel="noreferrer">GitHub</a>
    </div>
    <div className="section text">
      <div className="work-title">
        <h3>Estradas do Medo - (Scary Roads)</h3>
      </div>
      <a className="work-image" href="http://react-shooter.lelis718.com.br" target="_blank"  rel="noreferrer"><img
          src="/scary-streets.png" alt="screenshot of the scary streets game" /></a>
      <p className="main-description">A little game designed and produced in a week for a GameJam. :)</p>
      <p className="main-description">(Unity, Desktop and Android)</p>
      <a href="https://github.com/lelis718/TerrorStreets" target="_blank" rel="noreferrer">GitHub</a><br />
      <p>comming soon...</p>
    </div>

    <div className="section text">
      <div className="work-title">
        <h3>Hosting</h3>
      </div>
      <a className="work-image" href="https://www.oracle.com/cloud/free/" target="_blank" rel="noreferrer" ><img src="/oracle-host.png" alt="screen shoot of the oracle hosting charts of this site" /></a>
      <p className="main-description">Also hosting all of this stuff was a challenge itself, I have set up and run all of these project on a Oracle Free Tier Cloud Service (thanks Oracle!)  :)</p>
    </div>
    <p>&nbsp;</p>

</div>
}