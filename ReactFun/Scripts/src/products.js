import React from 'react';
import ReactDOM from 'react-dom'
import ProductsContainer from './Products/ProductsContainer.jsx'

ReactDOM.render(React.createElement(ProductsContainer, {}),
    document.getElementById('container-mount'));