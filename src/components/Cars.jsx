
const Car = ({color, name, year}) => {

    const colorInfo = color ? <p>Couleur: {color}</p> : <p>Couleur: "Néant"</p>;

    if (name) {
        return (
            <div style={ {backgroundColor: 'pink', width: '400px', padding: '10px', margin: '5px auto'} }>
                <h2>Marque: { name }</h2>
                <p>Age: {year}</p>
                {colorInfo}
            </div>
        )
    } else {
      // return null // ce return est Facultatif

      return null
    }

}

export default Car
