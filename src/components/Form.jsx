import React from 'react'
import styled from '@emotion/styled'

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

    &:hover {
        background-color: #7A7DFE;
        cursor: pointer;
    }
`

const Form = () => {
  return (
    <form>
        <InputSubmit
            type="submit"
            value="Cotizar"
        />
    </form>
  )
}

export default Form