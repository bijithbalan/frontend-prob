export const users = [
  {
    id: 1,
    username: 'Admin',
    firstName: 'Test',
    lastName: 'User',
    email: 'admin@test.com',
    isAdmin: true,
    twoots: [
      { id: 1, content: 'Twotter is Amazing!' },
      { id: 2, content: 'Hello World!' }
    ]
  },
  {
    id: 2,
    username: 'Manager',
    firstName: 'Manager',
    lastName: 'User',
    email: null,
    isAdmin: false,
    twoots: []
  },
  {
    id: 3,
    username: 'Regular',
    firstName: 'Regular',
    lastName: 'User',
    email: null,
    isAdmin: false,
    twoots: []
  },
  {
    id: 4,
    username: 'Guest',
    firstName: 'Guest',
    lastName: 'User',
    email: null,
    isAdmin: false,
    twoots: []
  }
];
