import React from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
    color: #FFF;
    display: block;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
`

const Select = styled.select`
    width: 100%;
    font-size: 18px;
    padding: 14px;
    border-radius: 10px;
`

const useSelectCoins = ( label, options ) => {
    const selelectCoins = () => (
        <>
            <Label>{ label }</Label>
            <Select>
                <option value="">Seleccione</option>
                {options.map(option => (
                    <option
                        key={option.id}
                        value={option.id}
                    >
                        {option.name}
                    </option>
                ))}
            </Select>
        </>
    )
    return [ selelectCoins ];
}

export default useSelectCoins