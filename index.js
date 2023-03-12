//Assign an employee variable to an obj containing name and streetAddress
const employee = {
    name: "Nelson",
    streetAddress: {
        line1: "123 Park Ave South",
        line2: "7th Floor" 
    },
        city : "New York",
        state : "NY",
        zipCode : "12345",
    };


//create and define the func updateEmployeeWithKeyAndValue to include employee obj, 
//key and value must create a new object with an updated value for the key using spread
function updateEmployeeWithKeyAndValue (employee, key, value){
    const newObj1 = {...employee};
    newObj1[key] = value;
return newObj1;

}

//create and define the func destructiveUpdateEmployeeWithKeyAndValue that changes 
//the original employee obj
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){

    employee[key] = value;

return employee;
}

//create and define the func deleteFromEmployeeByKey
//Takes in employee obj & key. Delete key but not affect orignial obj use spread
function deleteFromEmployeeByKey (employee, key){
    const newEmployee = {...employee}; 
    delete newEmployee[key];

    return newEmployee;
}

//create and define the func destructivelyDeleteFromEmployeeByKey works as above
//but it will affect the original obj

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];

    return employee;
}