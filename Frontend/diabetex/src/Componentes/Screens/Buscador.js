import React, { useState } from 'react';

export default function Busacador() {

    const [query, setQuery] = useState(''); //almacenar consulta de búsqueda

    const [results, setResults] = useState([]); //almacenar resultados de búsqueda

    const handleInputChange = (event) => { // Función para manejar cambios en el campo de entrada
        setQuery(event.target.value);
    };

    const handleSearch = (event) => {  // Función para manejar la búsqueda
        event.preventDefault(); // Evitar la recarga de la página

        // Aquí debes agregar la lógica para buscar productos en función de 'query' 
    
        // Puedes hacer una solicitud a tu API o realizar la búsqueda en tu conjunto de datos local.
        // Luego, actualiza el estado 'results' con los resultados de la búsqueda.
    };
    return (
         <div className="widget-search-bar">
            <form role="search" method="get" className="d-flex" onSubmit={handleSearch}>
                <input
                className="search-field"
                placeholder="Search"
                type="text"
                value={query}
                onChange={handleInputChange}
                />
                <button className="btn btn-dark" type="submit">
                <i className="icon icon-search"></i>
                </button>
            </form>
           
            {results.length > 0 && (
                <div className="search-results">
                    <h2>Results:</h2>
                    <ul>
                        {results.map((product) => (
                        <li key={product.id}>{product.name}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
