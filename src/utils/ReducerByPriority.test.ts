import { findLowestPriorityObject } from './ReducerByPriority';

describe('findLowestPriorityObject', () => {
  it('should return the object with the lowest priority', () => {
    // const objects = [
    //   { name: 'Object A', priority: 3 },
    //   { name: 'Object B', priority: 1 },
    //   { name: 'Object C', priority: 5 },
    //   { name: 'Object D', priority: 2 }
    // ];
    
    const objects = [
      {
        id: 1,
        storeId: '111',
        title: 'Objeto 1',
        description: 'Objeto 1',
        caption: 'Objeto 1',
        fullPrice: 1111,
        discountAmmount: 11,
        discountPercentage: 0.1,
        periodLabel: 'Mês',
        period: 'Teste',
        discountCouponCode: 2,
        order: 123,
        priority: 1,
        gateway: 'Iubu',
        splittable: true,
        installments: 10,
        acceptsCoupon: false,
      },
      {
        id: 1,
        storeId: '111',
        title: 'Objeto 1',
        description: 'Objeto 1',
        caption: 'Objeto 1',
        fullPrice: 1111,
        discountAmmount: 11,
        discountPercentage: 0.1,
        periodLabel: 'Mês',
        period: 'Teste',
        discountCouponCode: 2,
        order: 123,
        priority: 4,
        gateway: 'Iubu',
        splittable: true,
        installments: 10,
        acceptsCoupon: false,
      }
    ];

    const lowestPriorityObject = findLowestPriorityObject(objects);
    expect(lowestPriorityObject).toEqual({
      id: 1,
      storeId: '111',
      title: 'Objeto 1',
      description: 'Objeto 1',
      caption: 'Objeto 1',
      fullPrice: 1111,
      discountAmmount: 11,
      discountPercentage: 0.1,
      periodLabel: 'Mês',
      period: 'Teste',
      discountCouponCode: 2,
      order: 123,
      priority: 1,
      gateway: 'Iubu',
      splittable: true,
      installments: 10,
      acceptsCoupon: false,
    });
  });
});