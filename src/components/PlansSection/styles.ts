import styled from 'styled-components'

export const PlansSection = styled.section`
    flex: 1 0 100%;
    order: 1;
    
    @media screen and (min-width: 1025px) {
        flex: 0 0 330px;
        order: 2;
    }
`

export const PlansSectionText = styled.span`
    font-size: 12px;
    line-height: 16px;

    & + svg {
        margin-left: 12px;
    }
`

export const PlansSectionTitle = styled.h4`
    font-size: 20px;
    line-height: 26px;
    font-weight: 400;
    
    margin-bottom: 8px;
`

export const PlansSectionHelpTooltip = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        cursor: pointer;
        
        &:hover {

            & + span {
                visibility: visible;
                opacity: 1;
            }
        }
    }
`

export const PlansSectionHelpTooltipText = styled.span`
    position: absolute;
    top: 0px;
    right: -20px;
    border: 1px solid rgb(25, 24, 71);
    border-radius: 15px;
    padding: 16px;
    background: white;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    opacity: 0;
    visibility:hidden;
    transition:all 0.3s ease;
`



