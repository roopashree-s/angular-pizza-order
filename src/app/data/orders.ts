export const orders = [
  {
    orderId: '101-3-3',
    customerName: 'Tom',
    price: 200,
    items: [
      {
        name: 'Pasta Pizza',
        qty: 2,
        price: 100
      },
      {
        name: 'Bread Pizza',
        qty: 1,
        price: 100
      }
    ],
    contactNumber: '+91 9834355773',
    address: {
      street1: '1st Block, 3rd main, 5th cross',
      street2: 'Malleshwaram, Bangalore',
      pinCode: '560024'
    },
    status: 'inprogress'
  },
  {
    orderId: '101-3-4',
    customerName: 'John',
    price: 100,
    items: [
      {
        name: 'Cheese burst Pizza',
        qty: 1,
        price: 100
      }
    ],
    contactNumber: '+91 9346646777',
    address: {
      street1: '2nd phase, 4th main, 8th cross',
      street2: 'Bommasandra, Electronic city, Bangalore',
      pinCode: '560100'
    },
    status: 'received'
  }
];
