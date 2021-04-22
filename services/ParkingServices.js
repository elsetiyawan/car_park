let parkingLot = 0;
let usedParkingLot = 0;
let carParked = [];
let report = [];

module.exports = class ParkingService {
  static createParkingLot = (num) => {
    parkingLot += num;
  };

  static carPark = (id) => {
    const availableLot = usedParkingLot + 1;
    if (availableLot <= parkingLot) {
      usedParkingLot++;
      carParked.push({ car: id, in: new Date() });
    } else {
      console.log("parking lot is full");
    }
  };

  static carLeave = (id) => {
    const isCarIn = carParked.find((x) => x.car === id);
    if (isCarIn) {
      usedParkingLot--;
      carParked = carParked.filter((x) => x.car !== id);
    } else {
      console.log("car is not inside");
    }
  };

  static status = () => {
    console.log(parkingLot);
    console.log(carParked);
  };
};
