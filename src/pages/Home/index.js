import React, { Component } from "react";
import { MdAddShoppingCart } from 'react-icons/md';
import api from '../../services/api';

import { ProductList } from './styles';

//usando uma class ao invés de function para poder manipular estado dos componentes
export default class Home extends Component {

    state = {
        products: [],
    };

    //requisição na API
    async componentDidMount() {
        const response = await api.get('products');
        this.setState({ products: response.data});
    }

    render () {
        //pego o estado aqui
        const  { products } = this.state;
        return (
        <ProductList>
             { products.map(product => (
                <li key={product.id}>
                    <img src={product.image} alt={product.title}></img>
                    <strong>{product.title}</strong>
                    <span>{product.price}</span>

                    <button type="button">
                     <div>
                         <MdAddShoppingCart size={16} color="#FFF">
                             {' '}
                             3{' '}
                         </MdAddShoppingCart>
                     </div>
                     <span>ADICIONAR AO CARRINHO</span>
                 </button>
                </li>
             ))}
        </ProductList>
        );
    }
}
