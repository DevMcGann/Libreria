import React from 'react';
import { compose } from 'redux'; //potenciadores del store
import { connect } from 'react-redux'; //conecta componente, este, con el Storede redux
import { firestoreConnect } from 'react-redux-firebase'; //para hacer consultas

const Suscriptores = () => {
    return (
        <h1>Suscriptores</h1>

    );
}

export default compose(
    firestoreConnect([{ collection: 'suscriptores' }]),
    connect((state, props) => ({ suscriptores: state.firestore.ordered.suscriptores }))
)(Suscriptores)