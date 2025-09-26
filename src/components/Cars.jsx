
const Car = ({color, name, year}) => {

    const colorInfo = color ? (`Couleur: ${color}`) : (`Couleur: "Néant")`);

    if (name) {
        return (
            <tr>
               <td><h2>Marque: { name }</h2></td>
                <td><p>Age: {year}</p></td>
                <td>{colorInfo}</td>
            </tr>
        )
    } else {
      // return null // ce return est Facultatif

      return null
    }

}

export default Car
