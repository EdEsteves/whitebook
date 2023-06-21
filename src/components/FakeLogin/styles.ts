import styled from 'styled-components'

export const FakeLoginContainer = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 15px;
    padding: 16px;
    margin: auto;
    min-width: 330px;
`


export const FakeLoginTitle = styled.h2`
    font-size: 20px;
    line-height: 25px;
    font-weight: 700;
    text-align: center;
    color: #191847;
    margin-bottom: 30px;
`

export const FakeLoginForm = styled.form`
    display: flex;
    flex-direction: column;
`

export const FakeLoginFieldset = styled.fieldset`
    padding: 0;
    border: none;
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 0 0 24px;
`

export const FakeLoginInput = styled.input`
    outline: none;
    border: none;
    font-size: 16px;
    line-height: 21px;
    border-bottom: 1px solid #F4F3F6;
    order: 2;

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
        }
    }
`

export const FakeLoginButton = styled.button`
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
`

export const FakeLoginLabel = styled.label`
    font-size: 16px;
    line-height: 21px;
    font-weight: 400;
    margin-bottom: 4px;
    color: #C9C5D4;
    order: 1;
    position: absolute;
    top: 0;
    transition: all .3s ease;
`