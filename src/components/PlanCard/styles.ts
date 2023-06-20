import styled from 'styled-components'

export const PlanCard = styled.li`
	border: 1px solid #191847;
	border-radius: 15px;
	padding: 20px;
	cursor: pointer;
	position: relative;

	.pipe {
		font-size: 14px;
		line-height: 16px;
		font-weight: 400;
		margin: 0 8px;
	}
	`

export const PlanCardLabel = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 4px;
	
	.pipe {
		font-weight: 700;
		line-height: 18px;
	}
`

export const PlanCardTitle = styled.h5`
	font-size: 14px;
	line-height: 18px;
	font-weight: 700;
	color: #191847;
	margin: 0;
`

export const PlanCardDescription = styled.h5`
	font-size: 14px;
	line-height: 18px;
	font-weight: 700;
	color: #191847;
	margin: 0;
`

export const PlanCardPrice = styled.div`
	display: flex;
	align-items: center;
`

export const PlanCardFullPrice = styled.h6`
	font-size: 12px;
	line-height: 16px;
	font-weight: 400;
	color: #191847;
	margin: 0;
`

export const PlanCardDiscountedPrice = styled.h6`
	font-size: 12px;
	line-height: 16px;
	font-weight: 400;
	color: #191847;
	margin: 0;
`

export const PlanCardDiscountFlag= styled.span`
	color: rgb(255, 255, 255);
    font-size: 10px;
    background: rgb(245, 133, 11);
    border-radius: 9px;
    min-width: 40px;
    display: inline-block;
    text-align: center;
    line-height: 16px;
	margin-left: 12px;
`

export const PlanCardInstallments = styled.div`
	display: flex;
	margin-top: 4px;
`

export const PlanCardInstallment = styled.span`
	font-size: 10px;
	line-height: 13px;
	color: #F5850B;
`

export const PlanCardSelector = styled.span`
	position: absolute;
	top: 50%;
    right: 20px;
    transform: translateY(-50%);
	width: 16px;
	height: 16px;
	border: 2px solid #F4F3F6;
	border-radius: 100%;
	
	&::after {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border-radius: 100%;
		background-color: #FFF;
		width: 10px;
		height: 10px;
	}
	
	&.selected{
		border-color: #C9C5D4;
		
		&::after {
			background-color: #191847;
		}
	}
`
