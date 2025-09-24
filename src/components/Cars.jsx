
const Car = ({color, children}) => {

    const colorInfo = color ? <p>Couleur: {color}</p> : <p>Couleur: "Néant"</p>;

    if (children) {
        return (
            <div style={ {backgroundColor: 'pink', width: '400px', padding: '10px', margin: '5px auto'} }>
                <h2>Marque: { children }</h2>
                {colorInfo}
            </div>
        )
    }

    // return null // ce return est Facultatif
}

export default Car
