const fs = require('fs');
const path = require('path');
const csvtojson = require('csvtojson');

const csvFile = path.join(__dirname, 'test.csv');
const jsonFile = path.join(__dirname, `test.json`);

csvtojson().fromFile(csvFile).then((json) => {
	fs.writeFileSync(jsonFile, JSON.stringify(json), (error) => {
		if (error) {
			return console.log(error.message);
		}
	});
	console.log(`csvファイル (${csvFile}) は、jsonファイル(${jsonFile})に変換されました `);
});
