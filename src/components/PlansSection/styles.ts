import styled from 'styled-components'

export const PlansSection = styled.section`
    flex: 1 0 100%;
    order: 1;
    
    @media screen and (min-width: 1025px) {
        flex: 0 0 330px;
        order: 2;
    }
`

export const PlansSectionTitle = styled.h4`
    font-size: 20px;
    line-height: 26px;
    font-weight: 400;

    margin-bottom: 8px;
`