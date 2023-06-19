import styled from 'styled-components'

export const FormSection = styled.section`
    flex: 1 0 100%;
    order: 2;
    
    @media screen and (min-width: 1025px) {
        flex: 0 0 330px;
        order: 1;
    }
`

export const FormSectionTitle = styled.h4`
    font-size: 20px;
    line-height: 26px;
    font-weight: 400;

    margin-bottom: 8px;
`

export const FormSectionText = styled.span`
    display: block;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 30px;
`