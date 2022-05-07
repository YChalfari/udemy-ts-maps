import Chance from "chance";
const chance = new Chance();

export class Company {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = chance.company();
    this.catchPhrase = chance.sentence();
    this.location = {
      lat: chance.latitude(),
      lng: chance.longitude(),
    };
  }
}
