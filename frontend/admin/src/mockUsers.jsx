const mockUsers = [
  {
    id: 1,
    email: 'sabrikawtar17@gmail.com',
    password: '123456',
    role: 'admin',
    privileges: ['add_service'],
    name: 'Sabrikawtar'
  },
  {
    id: 2,
    email: 'Fatihaidbrahim90@gmail.com',
    password: 'Fatiha1234',
    role: 'admin',
    privileges: ['orders'],
    name: 'Fatiha Adbrahim'
  },
  {
    id: 3,
    email: 'Hasnaaelasbihani12@gmail.com',
    password: 'Hasnaa1234',
    role: 'admin',
    privileges: ['devis'],
    name: 'Hasnaa Elasbihani'
  },
  {
    id: 4,
    email: 'chalkhane.youness@hotmail.com',
    password: 'Youness1234',
    role: 'superadmin',
    privileges: ['all'],
    name: 'Youness Chalkhane'
  }
];

export default mockUsers;
