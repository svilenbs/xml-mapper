const xml2js = require('xml2js');
const fs = require('fs');
const parser = new xml2js.Parser();
const INPUT_NAME = './dummy.xml';
const OUTPUT_NAME = './config.xml';
let xml_string = fs.readFileSync(INPUT_NAME, "utf8");
parser.parseString(xml_string, function(error, result) {
    if(error === null) {
		console.log(result);
		// Modify the object result here...
		
		const builder = new xml2js.Builder();
		const xml = builder.buildObject(result);
		fs.writeFile(OUTPUT_NAME, xml, (err) => {
        if (err) {
            throw err;
        }
    });
    }
    else {
        console.log(error);
    }
});
