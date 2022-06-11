const fs = require("fs");

//Create File
const createFile = () => {
  fs.writeFile(
    "employees.json",
    '{"name": "Employee 1 Name", "salary": 1000}',
    "utf8",
    (err) => {
      if (err) console.log(err);
    }
  );
};
//Read File
const readFile = () => {
  fs.readFile("employees.json", "utf8", (err, data) => {
    if (err) console.log(err);
    console.log(data);
  });
};
// Update
const addData = () => {
  fs.appendFile(
    "employees.json",
    '\n{"name": "Employee 2 Name", "salary": 2000}',
    "utf8",
    (err) => {
      if (err) console.log(err);
    }
  );
};

//Delete File
const deleteFile = () => {
  fs.unlink("employees.json", (err) => {
    if (err) console.log(err);
    console.log("Deleted");
  });
};


createFile();
addData();
readFile();
//deleteFile();
