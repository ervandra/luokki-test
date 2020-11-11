var SheetToArrayOfObjects = require("sheet-to-array-of-objects");
var fs = require("fs");

var fileName = "src/translation.json";

SheetToArrayOfObjects(
  {
    key: "1877fFhSykalGJmNCj1YsBsg4SlQ6uOP8RFfAHquh8ZA",
  },
  function (err, data) {
    if (err) {
      console.log(err);
      return;
    }
    const newData = data;
    let resources = {};
    newData.forEach(o => {
      Object.keys(o).forEach((key) => {
        var langCode, langKey, langKeyVal;
        if (key !== "key") {
          langCode = key;
          langKey = o.key.toString();
          langKeyVal = o[key];
          if (resources[langCode] === undefined) {
            resources[langCode] = {
              translation: {},
            };
          }
          resources[langCode].translation[langKey] = langKeyVal.toString();
        }
      });
    });
    fs.writeFileSync(fileName, JSON.stringify(resources, null, "\t"), "utf8");
    console.log(`${fileName} Generated`);
  }
);