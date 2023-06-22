import React, { createContext, useState } from 'react';

import { OrderInfo } from '../hooks/useFetchSubscription';

interface Props {
  children: React.ReactNode;
}

export interface OrderConfirmation {
  planTitle: string,
  planDescription: string,
  fullPaidPrice: string,
  installmentPrice: string,
  email: string,
  cpf: string | number
}

type Order = {
    order: OrderInfo;
    setOrder: (value: OrderInfo) => void;
    orderConfirmation: OrderConfirmation;
    setOrderConfirmation: (value: OrderConfirmation) => void;
};

const OrderContext = createContext<Order>({
    order: {
        couponCode: '',
        creditCardCPF: '',
        creditCardCVV: '',
        creditCardExpirationDate: '',
        creditCardHolder: '',
        creditCardNumber: '',
        gateway: '',
        installments: '',
        offerId: 0,
        userId: 0,
        id: 0
    },
    setOrder: () => {},
      orderConfirmation: {
      planTitle: '',
      planDescription: '',
      fullPaidPrice: '',
      installmentPrice: '',
      email: '',
      cpf: ''
    },
    setOrderConfirmation: () => {},
});

export const OrderProvider: React.FC<Props> = ({ children }) => {
  const [order, setOrder] = useState<OrderInfo>({
    couponCode: '',
    creditCardCPF: '',
    creditCardCVV: '',
    creditCardExpirationDate: '',
    creditCardHolder: '',
    creditCardNumber: '',
    gateway: '',
    installments: '',
    offerId: 0,
    userId: 0,
    id: 0
  });
  const [orderConfirmation, setOrderConfirmation] = useState<OrderConfirmation>({
    planTitle: '',
    planDescription: '',
    fullPaidPrice: '',
    installmentPrice: '',
    email: '',
    cpf: ''
  });

  return (
    <OrderContext.Provider
      value={{
        order,
        setOrder,
        orderConfirmation,
        setOrderConfirmation
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContext;