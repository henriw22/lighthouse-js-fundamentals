const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

function chooseStations(stations) {
  const chosenStations = [];

    for (var i = 0; i < stations.length; i++) {
      var station = stations[i];
      const capacity = station[1];

      if (capacity >= 20) {
        const type = station [2];
        if (type === "school" || type === "community centre") {
        chosenStations.push(station[0]);
        }
      }
    }
  return chosenStations;
};

console.log(chooseStations(stations));