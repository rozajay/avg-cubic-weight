import { clear } from 'console';
import chalk from 'chalk';
import figlet from 'figlet';
import yargs from 'yargs';
import calculateWeightAvgFromUrl from './utils/calculateWeightAvgFromUrl';

clear();

// Print out the application name
console.log(
  chalk.yellow(
    figlet.textSync('Avg \nCubic \nWeight', { horizontalLayout: 'full' }),
  ),
);

// Process command line text
const processedContent = yargs.command(
  '$0 <input url>',
  'the default command',
).argv;

// Calculate the weighted average from nested APIs
const calculateWeightAvgFromNestedApi = async (
  url: string,
) => {
  let response = await calculateWeightAvgFromUrl(url);
  let nextUrl = response?.next;

  const weightsArray: number[] = [];

  if (response?.avgCubicWeight) {
    weightsArray.push(response.avgCubicWeight);
  }

  while (nextUrl) {
    response = await calculateWeightAvgFromUrl(nextUrl);
    if (response) {
      if (response.avgCubicWeight) {
        weightsArray.push(response.avgCubicWeight);
      }
    }
    nextUrl = response?.next;
  }

  const sumOfArray = weightsArray.reduce((prev, current) => prev + current);
  const avgOfArray = sumOfArray/weightsArray.length;

  return avgOfArray;
};

try {
  calculateWeightAvgFromNestedApi(
    processedContent.inputurl as string,
  ).then((value) => {
    if (value) {
      console.log(
        chalk.green('Input Url:'),
        chalk.white(`${processedContent.inputurl}`),

      );
      console.log(
        chalk.green('Average Cubic Weight for ACs'),
        chalk.white(`${value}kg`),
      );
    }
  });
} catch (error) {
  console.log(
    chalk.red(`Make sure the inputs are passed in double quotes eg("1 2 2") \n Output: ${error}`),
  );
}
