import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Form from './components/Form'
import Spinner from './components/Spinner'
import Result from './components/Result'
import CriptoImage from './img/imagen-criptos.png'

const Container = styled.div`
    max-width: 900px;
    margin: 0 auto;
    width: 90%;
    @media (min-width: 992px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 2rem;
    }
`

const Image = styled.img`
    max-width: 400px;
    width: 80%;
    margin: 100px auto 0 auto;
    display: block;
`

const Heading = styled.h1`
    font-family: 'Lato', sans-serif;
    color: #fff;
    text-align: center;
    font-weight: 700;
    margin-top: 80px;
    margin-bottom: 50px;
    font-size: 34px;

    &::after {
        content: '';
        width: 100px;
        height: 6px;
        background-color: #66A2FE;
        display: block;
        margin: 10px auto 0 auto;
    }
`

function App() {
    const [coins, setCoins] = useState({})
    const [result, setResult] = useState({})
    const [charging, setCharging] = useState(false)

    useEffect(() => {
        if(Object.keys(coins).length > 0) {
            const quoteCryptocurrency = async () => {
                setCharging(true);
                setResult({})

                const { coin, cryptocurrency } = coins;
                const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${coin}&tsyms=${cryptocurrency}`

                const response = await fetch(url);
                const result = await response.json();

                setResult(result.DISPLAY[coin][cryptocurrency])
                setCharging(false);
            }
            quoteCryptocurrency();
        }
    }, [coins])
    

    return (
        <Container>
            <Image 
                src={CriptoImage} 
                alt="Imagenes criptomonedas" 
            />
            <div>
                <Heading>Cotiza Criptomonedas al Instante</Heading>
                <Form 
                    setCoins={setCoins}
                />

                {charging && <Spinner />}
                {Object.keys(result).length>0 && <Result result={result} />}
            </div>
        </Container>
        
    )
}

export default App
