import styled from 'styled-components'

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
`

export const Fieldset = styled.fieldset`
    padding: 0;
    border: none;
    display: flex;
    flex-direction: column;
    margin: 0px 0 48px;
    
    &:not(.double) {
        position: relative;
    }
    
    &.double {
        flex-direction: row;

        > div {
            position: relative;
            flex: 1 0;

            &.validate {
                margin-right: 25px;
            }
            &.cvv {
                margin-left: 25px;
            }
        }
    }
`

export const ErrorMsg = styled.small`
    position: absolute;
    white-space: nowrap;
    color: #d66157;
    font-weight: 700;
    bottom: -20px;
    order: 3;
    margin-top: 4px;
`

export const Input = styled.input`
    outline: none;
    border: none;
    font-size: 16px;
    line-height: 21px;
    border-bottom: 1px solid #F4F3F6;
    order: 2;
    width: 100%;

    &::placeholder {
        color: #FFF;
        transition: all .3s ease;
    }

    &:not(:placeholder-shown),
    &:focus {
        &::placeholder {
            color: #C9C5D4;
        }

        & + label {
            font-size: 12px;
            line-height: 16px;
            color: #666173;
            top: -18px;
            left: 0;
            cursor: auto;
        }
    }
`

export const Label = styled.label`
    font-size: 12px;
    line-height: 16px;
    color: #666173;

    &:not(.select) {
        font-size: 16px;
        line-height: 21px;
        font-weight: 400;
        margin-bottom: 4px;
        color: #C9C5D4;
        order: 1;
        position: absolute;
        top: 0;
        transition: all .3s ease;
        cursor: text;
    }
`

export const Select = styled.select`
    outline: none;
    border: none;
    font-size: 16px;
    line-height: 21px;
    font-weight: 400;
    color: #C9C5D4;
    border-bottom: 1px solid #F4F3F6;
    margin-top: 4px;
    padding-bottom: 10px;
    background: #fff;
    border-radius: 0;

    option {
        color: #666173;
    }
`

export const Button = styled.button`
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    color: #fff;
    background: #191847;
    border-radius: 25px;
    padding: 18px;
    text-transform: uppercase;
    border: none;
    cursor: pointer;
    transition: all .3s ease;

    &:disabled {
        /* background-color: rgb(201, 197, 212);
        color: #000; */
        cursor: auto;
        pointer-events: none;
        opacity: .3;
    }
`