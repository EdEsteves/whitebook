import { PlansList } from "../hooks/useFetchPlans";

export const findLowestPriorityObject = (objects: PlansList) => {
    if (objects.length === 0) {
      return null; // Return null if the array is empty
    }
  
    return objects.reduce((lowestPriorityObject, currentObject) => {
      if (currentObject.priority < lowestPriorityObject.priority) {
        return currentObject;
      } else {
        return lowestPriorityObject;
      }
    });
  }