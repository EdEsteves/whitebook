import axios from "axios";

export interface OrderInfo {
    couponCode: string | number;
    creditCardCPF: string | number;
    creditCardCVV: string | number;
    creditCardExpirationDate: string | number;
    creditCardHolder: string | number;
    creditCardNumber: string | number;
    gateway: string;
    installments: string | number;
    offerId: number;
    userId: number;
    id: number;
};

const useFetchSubscription = () => {
  return {
    fetchSubscription
  };
};


const fetchSubscription = async (orderInf: OrderInfo) => {
  const url = 'https://private-0ced4-pebmeddesafiofrontend.apiary-mock.com/subscription'

  const { data } = await axios.post(url, orderInf);

  return data;
};

export default useFetchSubscription;