import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    list-style: none;

    li {
        display: flex;
        flex-direction: column;
        background: #fff;
        border-radius: 4px;
        padding: 20px;

        img {
            align-self: center;
            max-width: 200px;
        }
        /* coloquei o > pra manipular só o strong q ta dentro do li**/
        > strong {
            font-size: 16px;
            line-height: 20px;
            color: #333;
            margin-top: 5px;
        }

        > span {
            font-size: 21px;
            font-weight: bold;
            margin: 5px 0 20px;
        }
        /* auto faz o elemento ocupar toda a margem possivel**/
        button {
            background: #7159c1;
            color: #fff;
            border: 0;
            border-radius: 4px;
            overflow: hidden;
            margin-top: auto;
            display: flex;
            align-items: center;

            &:hover {
                background: ${darken(0.03, '#7159c1')};
            }

            div {
                display: flex;
                align-items: center;
                padding: 12px;
                background: rgba(0, 0, 0, 0.1);

                svg {
                    margin-right: 5px;
                }
            }

            span {
                flex: 1;
                text-align: center;
                font-weight: bold;
            }
        }
    }
`;
