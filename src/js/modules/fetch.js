const fakeRes = [
  {
    id: '0',
    name: 'ColoName',
    company: 'Microsoft',
    phone: '(625) 555-0118',
    email: 'jansse@awemicrosoft.com',
    country: 'United States',
    status: 'Active',
  },
  {
    id: '1',
    name: 'BravoName',
    company: 'Microsoft',
    phone: '(713) 555-0118',
    email: 'any@awemicrosoft.com',
    country: 'United States',
    status: 'Inactive',
  },
  {
    id: '2',
    name: 'AlfaName',
    company: 'Microsoft',
    phone: '(326) 555-0118',
    email: 'some@awemicrosoft.com',
    country: 'United States',
    status: 'Inactive',
  },
  {
    id: '3',
    name: 'Jane Coopaweaer',
    company: 'Microsoft',
    phone: '(225) 555-0118',
    email: 'else@awemicrosoft.com',
    country: 'United States',
    status: 'Active',
  },
  {
    id: '4',
    name: 'Jane waeCooper',
    company: 'Microsoft',
    phone: '(225) 555-0118',
    email: 'jansse@awemicrosoft.com',
    country: 'United States',
    status: 'Active',
  },
  {
    id: '5',
    name: 'Jane Cooper',
    company: 'Microsoft',
    phone: '(222) 555-0118',
    email: 'jane@microsoft.com',
    country: 'United States',
    status: 'Active',
  },
  {
    id: '6',
    name: 'Jane Cooper',
    company: 'Microsoft',
    phone: '(225) 555-0118',
    email: 'jansse@awemicrosoft.com',
    country: 'United States',
    status: 'Active',
  },
  {
    id: '7',
    name: 'Jane Cooper',
    company: 'Microsoft',
    phone: '(175) 555-0118',
    email: 'kirill@awemicrosoft.com',
    country: 'United States',
    status: 'Active',
  },
  {
    id: '8',
    name: 'Jane Cooper',
    company: 'Microsoft',
    phone: '(512) 555-0118',
    email: 'jansse@awemicrosoft.com',
    country: 'United States',
    status: 'Active',
  },
  {
    id: '9',
    name: 'Jane Cooper',
    company: 'Microsoft',
    phone: '(225) 555-0118',
    email: 'jane@microsoft.com',
    country: 'United States',
    status: 'Inactive',
  },
  {
    id: '10',
    name: 'Jane Cooper',
    company: 'Microsoft',
    phone: '(225) 555-0118',
    email: 'jansse@awemicrosoft.com',
    country: 'United States',
    status: 'Active',
  },
  {
    id: '11',
    name: 'Jane Cooper',
    company: 'Some',
    phone: '(225) 555-0118',
    email: 'jane@microsoft.com',
    country: 'United States',
    status: 'Inactive',
  },
  {
    id: '12',
    name: 'Jane Cooper',
    company: 'Microsoft',
    phone: '(225) 555-0118',
    email: 'jane@microsoft.com',
    country: 'United States',
    status: 'Active',
  },
  {
    id: '13',
    name: 'Jane Cooper',
    company: 'Microsoft',
    phone: '(225) 555-0118',
    email: 'jane@microsoft.com',
    country: 'United States',
    status: 'Inactive',
  },
  {
    id: '14',
    name: 'Jane Cooper',
    company: 'Microsoft',
    phone: '(225) 555-0118',
    email: 'jane@microsoft.com',
    country: 'Atlantis',
    status: 'Active',
  },
  {
    id: '15',
    name: 'Jane Cooper',
    company: 'Any',
    phone: '(225) 555-0118',
    email: 'jane@microsoft.com',
    country: 'United States',
    status: 'Inactive',
  },
  {
    id: '16',
    name: 'Jane Cooper',
    company: 'Microsoft',
    phone: '(225) 555-0118',
    email: 'jane@microsoft.com',
    country: 'United States',
    status: 'Active',
  },
  {
    id: '17',
    name: 'Jane Cooper',
    company: 'Microsoft',
    phone: '(225) 555-0118',
    email: 'jane@microsoft.com',
    country: 'United States',
    status: 'Active',
  },
  {
    id: '18',
    name: 'Jane Cooper',
    company: 'Microsoft',
    phone: '(225) 555-0118',
    email: 'jane@microsoft.com',
    country: 'United States',
    status: 'Active',
  },
  {
    id: '19',
    name: 'Jane Cooper',
    company: 'Microsoft',
    phone: '(225) 555-0118',
    email: 'jane@microsoft.com',
    country: 'United States',
    status: 'Active',
  },
  {
    id: '20',
    name: 'Jane Cooper',
    company: 'Microsoft',
    phone: '(225) 555-0118',
    email: 'jane@microsoft.com',
    country: 'United States',
    status: 'Active',
  },
  {
    id: '21',
    name: 'Jane Cooper',
    company: 'Microsoft',
    phone: '(225) 555-0118',
    email: 'jane@microsoft.com',
    country: 'United States',
    status: 'Active',
  },
  {
    id: '22',
    name: 'Jane Cooper',
    company: 'Microsoft',
    phone: '(225) 555-0118',
    email: 'jane@microsoft.com',
    country: 'United States',
    status: 'Active',
  },
  {
    id: '23',
    name: 'Jane Cooper',
    company: 'Microsoft',
    phone: '(225) 555-0118',
    email: 'jane@microsoft.com',
    country: 'United States',
    status: 'Active',
  },
  {
    id: '24',
    name: 'Jane Cooper',
    company: 'Microsoft',
    phone: '(225) 555-0118',
    email: 'jane@microsoft.com',
    country: 'United States',
    status: 'Active',
  },
  {
    id: '25',
    name: 'Anne Cooper',
    company: 'Microsoft',
    phone: '(215) 555-0118',
    email: 'anne@microsoft.com',
    country: 'United States',
    status: 'Active',
  },
  {
    id: '26',
    name: 'Anne Cooper',
    company: 'Microsoft',
    phone: '(215) 555-0118',
    email: 'anne@microsoft.com',
    country: 'United States',
    status: 'Active',
  },
  {
    id: '27',
    name: 'Anne Cooper',
    company: 'Microsoft',
    phone: '(215) 555-0118',
    email: 'anne@microsoft.com',
    country: 'United States',
    status: 'Active',
  },
  {
    id: '28',
    name: 'Anne Cooper',
    company: 'Microsoft',
    phone: '(215) 555-0118',
    email: 'anne@microsoft.com',
    country: 'United States',
    status: 'Active',
  },
  {
    id: '29',
    name: 'Anne Cooper',
    company: 'Microsoft',
    phone: '(215) 555-0118',
    email: 'anne@microsoft.com',
    country: 'United States',
    status: 'Active',
  },
  {
    id: '30',
    name: 'Anne Cooper',
    company: 'Microsoft',
    phone: '(215) 555-0118',
    email: 'anne@microsoft.com',
    country: 'United States',
    status: 'Active',
  },
  {
    id: '31',
    name: 'Anne Cooper',
    company: 'Microsoft',
    phone: '(215) 555-0118',
    email: 'anne@microsoft.com',
    country: 'United States',
    status: 'Active',
  },
];

const sendRequest = async (url) => {
  // let res;

  // try {
  //   res = await (await fetch(url)).json();
  // } catch (err) {
  //   console.log(err);
  // }

  // return res;
  return fakeRes;
};

export default sendRequest;
