import './clicker.css';
import PropTypes from 'prop-types';

function Clicker({clics, setClics,corrigerResultat}){

    const ajouterClic = () => {
        setClics(corrigerResultat(clics + 1));
    };

    return (
        <div className='colonne content-centered'>
            <button id="clicker" onClick={ajouterClic}></button>
        </div>
    )
}

Clicker.propTypes = {
    clics: PropTypes.number.isRequired,
    setClics: PropTypes.func.isRequired,
    corrigerResultat: PropTypes.func.isRequired,
}

export default Clicker;