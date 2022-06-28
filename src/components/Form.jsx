import React from 'react'
import styled from '@emotion/styled'
import { coins } from '../data/coins'
import useSelectCoins from '../hooks/useSelectCoins'

const InputSubmit = styled.input`
    background-color: #9a97ff;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-top: 30px;

    &:hover {
        background-color: #7A7DFE;
        cursor: pointer;
    }
`

const Form = () => {
    const [ SelectCoins ] = useSelectCoins('Elige tu Moneda', coins);

    SelectCoins();

    return (
        <form>
            <SelectCoins />

            <InputSubmit
                type="submit"
                value="Cotizar"
            />
        </form>
    )
}

export default Form