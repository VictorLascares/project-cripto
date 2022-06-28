import { useEffect, useState } from 'react'
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
    const [cryptos, setCryptos] = useState([])
    
    const [ coin, SelectCoins ] = useSelectCoins('Elige tu Moneda', coins);
    const [ cryptocurrency, SelectCryptos ] = useSelectCoins('Elige tu Criptomoneda', cryptos);

    useEffect(() => {
        const APIRequest = async () => {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"

            const response = await fetch(url);
            const result = await response.json();


            const cryptoArray = result.Data.map(cripto => {
                const cryptObject  = {
                    id: cripto.CoinInfo.Name,
                    name: cripto.CoinInfo.FullName
                }
                return cryptObject;
            })
            setCryptos(cryptoArray);
        }
        APIRequest();
    }, [])
    

    return (
        <form>
            <SelectCoins />
            <SelectCryptos />
            <InputSubmit
                type="submit"
                value="Cotizar"
            />
        </form>
    )
}

export default Form