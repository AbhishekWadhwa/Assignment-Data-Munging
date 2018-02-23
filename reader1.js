const fs = require('fs');
const readline = require('readline');
const stream = require('stream');

const instream = fs.createReadStream('Indicators.csv');
const outstream = new stream();
const rl = readline.createInterface(instream, outstream);
const outputStream = fs.createWriteStream('Part1.json', { 
});
outputStream.write('[');
outputStream.write('\n');
outputStream.write('\n');


const outputStream1 = fs.createWriteStream('Part2.json', {
});
outputStream1.write('[');
outputStream1.write('\n');
outputStream1.write('\n');


const list = ['Afghanistan', 'Armenia', 'Azerbaijan', 'Bahrain', 'Bangladesh', 'Bhutan', 'Brunei', 'Cambodia', 'China', 'Cyprus',
  'Georgia', 'India', 'Indonesia', 'Iran', 'Iraq', 'Israel', 'Japan', 'Jordan', 'Kazakhstan', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Lebanon',
  'Malaysia', 'Maldives', 'Mongolia', 'Myanmar', 'Nepal', 'North Korea', 'Oman', 'Pakistan', 'Palestine', 'Philippines', 'Qatar',
  'Saudi Arabia', 'Singapore', 'South Korea', 'Sri Lanka', 'Syria', 'Taiwan', 'Tajikistan', 'Thailand',
  'Timor-Leste', 'Turkey', 'Turkmenistan', 'United Arab Emirates', 'Uzbekistan', 'Vietnam', 'Yemen',
];
const dict = {};
const dict1 = {};
const dict2 = {};
const dict3 = {};

for (let i = 0; i < list.length; i += 1) { dict2[list[i]] = 1; }


let c;
let c1;

rl.on('line', (line) => {
  const spl = line.split(',');

  if (spl[0] === 'India' && spl[2] === 'Urban population (% of total)') {
    // if(!(y[4] in dict))
    // {
    // dict[y[4]] = [];
    // if(y[4]) //rural
    // {
    dict[spl[4]] = parseFloat(spl[5]);
    // dict[y[4]].push(0);
    // }
    // else //urban
    // {
    // dict[y[4]].push(0);
    // dict[y[4]].push(parseFloat(y[5]));

    // }
    // }
    // else{
    // if(y[4]) //rural
    // dict[y[4]][0]+= parseFloat(y[5]);
    // else
    // dict[y[4]][1] += parseFloat(y[5]);
  }
  if (spl[0] === 'India' && spl[2] === 'Rural population (% of total population)') {
    dict1[spl[4]] = parseFloat(spl[5]);
  }

  if ((dict2[spl[0]] === 1) && (spl[2] === 'Urban population' || spl[2] === 'Rural population')) {
    if (dict3[spl[0]]) {
      dict3[spl[0]] += parseInt(spl[5], 10);
    } else { dict3[spl[0]] = parseInt(spl[5], 10); }
  }
});

c = true;
c1 = true;
rl.on('close', () => {
  for (const i in dict, dict1) {
    if (c) {
      outputStream.write(`${'{' + '\n' + '"Year" : ' + '"'}${i}",` + '\n' +
                `"ValueForUrbanPopulation" : ${dict[i]},` + '\n' + `"ValueForRuralpopulation" : ${dict1[i]}\n` + '}' + '\n' + '\n');
      c = false;
    } else {
      outputStream.write(`${',{' + '\n' + '"Year" : ' + '"'}${i}",` + '\n' +
                `"ValueForUrbanPopulation" : ${dict[i]},` + '\n' + `"ValueForRuralpopulation" : ${dict1[i]}\n` + '}' + '\n' + '\n');
    }
  }

  outputStream.write(']');


  const sorteditems = Object.keys(dict3).map(key => [key, dict3[key]]);

  // Sort the array based on the second element
  sorteditems.sort((first, second) => second[1] - first[1]);

  for (const v in sorteditems) {
    if (c1) {
      outputStream1.write(`${'{' + '\n' + '"CountryName" : ' + '"'}${sorteditems[v][0]}",` + '\n' +
               `"Value" : ${sorteditems[v][1]}\n` + '}' + '\n' + '\n');
      c1 = false;
    } else {
      outputStream1.write(`${',{' + '\n' + '"CountryName" : ' + '"'}${sorteditems[v][0]}",` + '\n' +
               `"Value" : ${sorteditems[v][1]}\n` + '}' + '\n' + '\n');
    }
  }
  outputStream1.write(']');
});
