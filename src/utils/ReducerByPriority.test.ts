import { findLowestPriorityObject } from './ReducerByPriority';

describe('findLowestPriorityObject', () => {
  it('should return the object with the lowest priority', () => {
    const objects = [
      { name: 'Object A', priority: 3 },
      { name: 'Object B', priority: 1 },
      { name: 'Object C', priority: 5 },
      { name: 'Object D', priority: 2 }
    ];

    const lowestPriorityObject = findLowestPriorityObject(objects);
    expect(lowestPriorityObject).toEqual({ name: 'Object B', priority: 1 });
  });

  it('should return null for an empty array', () => {
    const objects = [];

    const lowestPriorityObject = findLowestPriorityObject(objects);
    expect(lowestPriorityObject).toBeNull();
  });
});