import React from 'react';
import {
    MdRemoveCircleOutline,
    MdAddCircleOutline,
    MdDelete,
} from 'react-icons/md';
import { Container } from './styles';

export default function Cart() {
    return (
        <Container>
            <ProductTable>
                <thead>
                    <tr>
                        <th>Produto</th>
                        <th>QTD</th>
                        <th>SUBTOTAL</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img
                                src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/06/HZM-1731-006/HZM-1731-006_zoom1.jpg"
                                alt="NetShoes"
                            />
                        </td>
                        <td>
                            <strong>Tênis massa</strong>
                            <span>R$129,90</span>
                        </td>
                        <td>
                            <button type="button">
                                <MdRemoveCircleOutline
                                    size={20}
                                    color={'#7159c1'}
                                ></MdRemoveCircleOutline>
                            </button>
                            <input type="number" readOnly value={2}></input>
                            <button type="button">
                                <MdAddCircleOutline
                                    size={20}
                                    color={'#7159c1'}
                                ></MdAddCircleOutline>
                            </button>
                        </td>
                        <td>
                            <strong>R$258,80</strong>
                        </td>
                        <td>
                            <button type="button">
                                <MdDelete size={20} color="#7159c1"></MdDelete>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </ProductTable>
            <footer>
                <button type="button">Finalizar Pedido</button>
                <Total>
                    <span>Total</span>
                    <strong>R$1920,28</strong>
                </Total>
            </footer>
        </Container>
    );
}
