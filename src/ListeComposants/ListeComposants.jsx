import PropTypes from 'prop-types';
import './ListeComposants.css';

function ListeComposants({clics, setClics, composants, composantsAjoutes, setComposantsAjoutes, corrigerResultat}){

    const getComponentFromId = (id = null) => {
        if(!id) return null;
        return composants.filter(c => c.id === id)?.[0] ?? null;
    }

    const ajouterComposant = (idComposant) => {
        const composant = getComponentFromId(idComposant);
        if(!composant) return;
        setClics(corrigerResultat(clics - composant.cost));
        const comps = [...composantsAjoutes, composant];
        setComposantsAjoutes(comps);
        // changerIntervalle(comps);
    };

    const getColonne = (res, classes = "") => <div className={'colonne ' + classes}>{res}</div>;

    return (
        <div className='colonne'>
            {
                composants.map((c, index) => {
                    const prochain = composants[index+1];
                    return (
                        index%2 ===0 ? (
                        <div className="ligne" key={c.id}>
                            {
                                getColonne(
                                    <button className='btnComposant' disabled={clics < c.cost} onClick={() => ajouterComposant(c.id)}>
                                        {c.icon}{c.nom}<br />
                                        -{c.cost} c, +{c.clicks} c/s
                                    </button>, "is-flex-right"
                                )
                            }
                            {
                                getColonne(
                                    <button className='btnComposant' disabled={clics < prochain.cost} onClick={() => ajouterComposant(prochain.id)}>
                                        {prochain.icon}{prochain.nom}<br />
                                        -{prochain.cost} c, +{prochain.clicks} c/s
                                    </button>, "is-flex-left"
                                )
                            }
                        </div>
                    ) : (<></>)
                    )
                })
            }
        </div>
    )
}

ListeComposants.propTypes = {
    clics: PropTypes.number.isRequired,
    setClics: PropTypes.func.isRequired,
    composants: PropTypes.array.isRequired,
    composantsAjoutes: PropTypes.array.isRequired,
    setComposantsAjoutes: PropTypes.func.isRequired,
    corrigerResultat: PropTypes.func.isRequired,
}

export default ListeComposants;