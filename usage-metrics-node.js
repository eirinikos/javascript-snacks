process.stdin.resume();
process.stdin.setEncoding("ascii");

let data = "";

// process each set of host info
function processInfoSet(infoSet) {
  const output = [];
  for (let set in infoSet) {
    let outputString =
        set + ': Average: ' + infoSet[set]['avg'] + ' Max: ' + infoSet[set]['max'] + ' Min: ' + infoSet[set]['min'];
    output.push(outputString);
  }
  
  return output;
}

// get & process each line from input
function processLines(input) {
  const averages = {};
  const lines = input.split('\n');
  const hostInfoSet = {};

  for (let line of lines) {
    // TODO: validate line input (for real)

    if (line !== '') {
      let host = line.split('|');
      let hostName = host[0];
      let hostPercentStrings = host[1].split(',');
      hostInfoSet[hostName] = processPercents(hostPercentStrings);
    }
  }
  
  return hostInfoSet;
}

// identify min, max, and avg from one set of percentages
function processPercents(percentStrings) {
  const allPercentages = [];
  const keyPercentages = {};

  for (let percent of percentStrings) {
    // TODO: validate value input

    let floatValue = parseFloat(percent);
    allPercentages.push(floatValue);
  }

  const length = allPercentages.length;
  const lastIndex = length - 1;
  const sum = allPercentages.reduce((accumulator, currentVal) =>
    accumulator + currentVal);
  const minPercent = allPercentages.sort(sortFloat)[0];
  const maxPercent = allPercentages.sort(sortFloat)[lastIndex];
  const average = sum / length;

  keyPercentages['min'] = minPercent;
  keyPercentages['max'] = maxPercent;
  keyPercentages['avg'] = average;

  return keyPercentages;
}

// create compareFunction for .sort()
function sortFloat(a, b) {
  return a - b;
}

// READ INPUT
process.stdin.on("data", function (chunk) {
  data += chunk;
});

// WRITE OUTPUT
process.stdin.on("end", function () {
  const processedLines = processLines(data);
  const output = processInfoSet(processedLines);
  process.stdout.write(output.join("\n"));
  process.stdout.write("\n")
});
