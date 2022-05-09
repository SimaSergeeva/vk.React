import React from 'react';
import './Catalog.css';
import catalog from '../../assets/catalog.png'

const Catalog = () => {
    return (
        <div className='logoCatalog'>
            <img className='imgCatalog' src={catalog} alt="логотип" />
        </div>
    );
};

export default Catalog;