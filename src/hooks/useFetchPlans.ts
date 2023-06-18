import axios from "axios";

export type Plan = {
	id: number;
	storeId: string;
	title: string;
	description: string;
	caption: string;
	fullPrice: number;
	discountAmmount: number;
	discountPercentage: number;
	periodLabel: string;
	period: string;
	discountCouponCode: number | null;
	order: number;
	priority: number;
	gateway: string;
	splittable: boolean;
	installments: number;
	acceptsCoupon: boolean;
};


export type PlansList = Array<Plan>;

type PlansApiRes = PlansList;

const useFetchPlans = () => {
  return {
    fetchPlansList
  };
};


const fetchPlansList = async () => {
  const url = 'https://private-0ced4-pebmeddesafiofrontend.apiary-mock.com/offer'

  const { data } = await axios.get<PlansApiRes>(url);

  return data;
};

export default useFetchPlans;