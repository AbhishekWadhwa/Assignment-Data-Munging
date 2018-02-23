# Assignment-Data-Munging
World Development Indicators - Urbanization
Data Source: WDIFootNote.csv

Use the local server http://172.23.238.252/csv_files for accessing csv.
Notes:

Ensure the dataset is in csv format.

You’ll mostly be filtering on the field ‘Indicator Name.’

If the data cell is blank, do not plot

All the "data" is in the file Indicators.csv. The rest are all metadata.


Part 1: Data Munging


Write a Nodejs program that converts the csv file into a json file that will be used to plot data in part 2. You have to come up with an optimal schema for the json file based on the requirements of Part 2.


Part 2: Data Visualization with D3.js


Make a multi-series line chart of the following data for India over the years supplied (1960 - 2015)

Urban population (% of total)

Rural population (% of total)


2.  Make a stacked bar chart for all countries in Asia over the given time period filtering on the following value:

Urban population + Rural population in descending order.

## Getting Started
1. Run reader1.js file to change the data from "Indiacators.csv" to Part1.json and Part2.json.
2. Use "node reader1.js" command on the terminal to achieve that.
3. Run command "http-server" on the same directory which has all the files.
4. On the http server, Run indexBar.html file and indexMultiline.html to get the desired output of Bar chart and Multiline      series chart respectively.
5. I have already validate through eslint and remove all the errors.


### Prerequisites

You have to install http-server
you have to install eslint


## Authors

* **Abhishek Wadhwa** - [AbhishekWadhwa](https://github.com/AbhishekWadhwa)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
