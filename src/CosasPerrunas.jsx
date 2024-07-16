import React, { useState, useEffect } from 'react';

function CosasPerrunas() {
    const [fact, setFact] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const obtenerDato = () => {
        setLoading(true);
        setError(null);
        fetch('https://dog-api.kinduff.com/api/facts')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Respueta erronea');
                }
                return response.json();
            })
            .then(data => {
                setFact(data.facts[0]);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    };

    useEffect(() => {
        obtenerDato();
    }, []);

    return (
        <div>
            <h1>Datos aleatorios de perros! (lo siento, en inglés) </h1>
            {loading ? (
                <p>Cargando cosas perrunas...</p>
            ) : error ? (
                <p>Error al cargar el dato: {error.message}</p>
            ) : (
                <p>{fact}</p>
            )}
            <button onClick={obtenerDato}>Quiero otro dato perruno!</button>
        </div>
    );
}

export default CosasPerrunas;
