import styled from 'styled-components'


export const OrderConfirmationContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 56px auto;

    > svg {
        margin-bottom: 18px;
    }
`

export const OrderConfirmationTitle = styled.h3`
    font-size: 20px;
    line-height: 25px;
    font-weight: 400;
    color: #191847;
    margin: 0 0 12px;
`

export const OrderConfirmationText = styled.span`
    font-size: 16px;
    line-height: 20px;
    color: #C9C5D4;
    margin-bottom: 56px;
    text-align: center;
`

export const OrderConfirmationCard = styled.div`
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 15px;
    padding: 16px 16px 24px;
    max-width: 340px;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 88px;
`

export const OrderConfirmationCardSection = styled.div`
    background: #F4F3F6;
    border-radius: 15px;
    flex: 1 0 auto;
    text-align: right;
    padding: 16px 20px 18px;
    margin-bottom: 18px;
    position: relative;

    span {
        padding: 0 8px;
    }

    svg {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 20px;
    }
`

export const OrderConfirmationCardTitle = styled.h4`
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;
    color: #191847;
    margin: 0 0 8px;
`

export const OrderConfirmationCardPrice = styled.h4`
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;
    color: #191847;
    margin: 0;
`

export const OrderConfirmationCardLabel = styled.span`
    font-size: 14px;
    line-height: 18px;
    color: #C9C5D4;
    flex: 1 0 calc(50% - 20px);
    text-align: left;
    padding-left: 20px;

    &:first-of-type {
        margin-bottom: 26px;
    }
`

export const OrderConfirmationCardValue = styled.span`
    font-size: 14px;
    line-height: 18px;
    color: #151516;
    flex: 1 0 calc(50% - 20px);
    text-align: right;
    padding-right: 20px;

    &:first-of-type {
        margin-bottom: 26px;
    }
`

export const OrderConfirmationRedirect = styled.a`
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    letter-spacing: 0.05em;
    color: #191847;
    margin-bottom: 24px;
    text-decoration: none;
`

export const OrderConfirmationButton = styled.button`
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
    width: 310px;
    margin-bottom: 30px;
`





