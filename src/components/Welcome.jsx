

const Welcome = () => {

  const bonjour = () => {
    console.log("Bonjour")
  }

  const bonsoir = (bonsoir) => {
    console.log(bonsoir)
  }

  return (
    <div>
      {/* Invoquer une fonction "Bonjour" qui affichera console.log("Bonjour"*/}
      <button onClick={bonjour}>Invoquer une fonction</button>

      {/* Invoquer une fonction "Bonsoir" avec un argument "Bonsoir" qui affichera console.log("Bonsoir")*/}
      <button onClick={() => bonsoir("Bonsoir")}>Invoquer une fonction avec arg "Bonsoir</button>

      {/* lancer le console.log("Bonne nuit")après le click sans invoquer de fonction */}
      <button onClick={() => console.log("Bonne nuit")}>console.log sur le bouton</button>
    </div>
  )

}

export default Welcome
