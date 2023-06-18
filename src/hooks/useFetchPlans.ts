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

type PlansApiRes = {
  results: PlansList;
  count?: number;
};

export type PlansList = Array<Plan>;

const useFetchPlans = () => {
  return {
    fetchPlansList
  };
};


const fetchPlansList = async (
  plansList: PlansList,
) => {
  const url = 'https://private-0ced4-pebmeddesafiofrontend.apiary-mock.com/offer'

  const { data } = await axios.get<PlansApiRes>(url);
  const countResults = data.count === undefined ? 0 : data.count;

  return { count: countResults, results: [...plansList, ...data.results] };
};

export default useFetchPlans;