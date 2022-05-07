// const chance = new Chance()
import Chance from "chance";
const chance = new Chance();

export class User {
  //these properties are not yet initialized, only telling TS what to expect
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = chance.name();
    this.location = {
      lat: chance.latitude(),
      lng: chance.longitude(),
    };
  }
}
