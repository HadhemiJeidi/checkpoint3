import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Program from './Program';
import Local from './local';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <h1 style={{ textalign: "center" }}>NOS PROGRAMMES </h1>
          <div style={{ display: "flex", marginRight: "3%", marginLeft: "3%", marginBottom: "50px" }}>
            <Program color="grey" title='FULL TIME PROGRAM' content="un programme intensif de 3 mois pour devenir un developpeur full stack js ou java . Un coaching technique et professionnel régulier et des liens très fort avec le monde de l'entreprise  " />
            <Program color="magenta" title='PART TIME PROGRAM' content="tu peux développer ton produit technologique pendant l'année scolaire si tu es étudiant ou en parallèle de ton travail si tu es un professionnel. ça se passe tous les week-end dans notre hacker-space " />
            <Program color="green" title='KIDS CODING PROGRAM' content="un programme intensif de 3 mois pour devenir un developpeur full stack js ou java . Un coaching technique et professionnel régulier et des liens très fort avec le monde de l'entreprise" />
            <Program color="yellow" title='SUMMER ACADEMY' content="un programme intensif de 3 mois pour devenir un developpeur full stack js ou java . Un coaching technique et professionnel régulier et des liens très fort avec le monde de l'entreprise" />
          </div>
        </div>

        <div>
          <div style={{ backgroundImage: "url(/img1.jpg)" }}>
            <h1 style={{ textAlign: "center" }}> Ou se passent les sessions?  </h1>
            <p style={{ textAlign: "center" }}>Les sessions se passent dans les hackerspaces de GoMyCode dans les ville suivantes : L'hebergement est passible dans la limite des places disponible  </p>
          </div>
          <div style={{ display: "flex", margin: "3%" }}>
            <Local image="/tunis.jpg" content="TUNIS" />
            <Local image="/sousse.jpg" content="SOUSSE" />
            <Local image="/sfax.jpg" content="SFAX" />

          </div>
        </div>
      </div>
    )
  }
}
export default App;
