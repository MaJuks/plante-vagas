export class Address {
  id: number;
  country: string;
  state: string;
  city: string;
  district: string;
  street: string;
  number: string;
  complement: string;
  postalCode: string;
  userCandidate: {
    connect: {
      id: number;
    };
  };
}
