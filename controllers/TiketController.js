const fs = require("fs");
const path = require("path");
const ParkingService = require("../services/ParkingServices");

module.exports = (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.send("No file uploaded");
  }

  const file = req.files.file;
  const buffer = file.data.toString("utf8");
  const breakTheBuffer = buffer.split("\n");
  for (const line of breakTheBuffer) {
    const activity = line.split(" ");
    switch (activity[0]) {
      case "create_parking_lot":
        ParkingService.createParkingLot(parseInt(activity[1]));
        break;

      case "park":
        ParkingService.carPark(activity[1]);
        break;

      case "leave":
        ParkingService.carLeave(activity[1]);
        break;

      default:
        break;
    }
  }
  ParkingService.status();
  // ParkingService.carPark();

  res.send("Uploaded");
};
