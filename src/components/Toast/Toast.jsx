import { useEffect } from 'react'
import styled from '@emotion/styled'
import './toast.css';


const Error = styled.div`
    min-width: 250px;
    margin-left: -125px;
    background-color: #dc3545;
    color: #842029;
    text-align: center;
    border-radius: 2px;
    padding: 16px;
    position: fixed;
    z-index: 1;
    left: 50%;
    bottom: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
`

const ErrorButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: none;
    margin-left: 20px;
    stroke: #842029;
    stroke-width: 2px;
    padding: 0;

    &:hover {
        cursor: pointer;
        stroke: white;
    }
`



const Toast = ( {message, setError} ) => {

    useEffect(() => {
        setTimeout(() => {
            setError(false)
        }, 5000);
    }, [])
    

  return (
    <Error>
        {message}
        <ErrorButton type='button' onClick={() => setError(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" style={{width: '30px'}} viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </ErrorButton>
    </Error>
  )
}

export default Toast
