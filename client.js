const totalEmployees = [];
let totalMonthly = 0;

$(document).ready(readyNow);

function readyNow(){
    console.log('in JQ');
    $('#submitButton').on('click', addEmployee);

}

function addEmployee(){
    let newEmployee = {
        firstName: $( '#firstNameIn').val(),
        lastName: $( '#lastNameIn' ).val(),
        idNumber: $( '#idNumberIn').val() ,
        jobTitle: $( '#jobTitleIn').val() ,
        annualSalary: $( '#annualSalaryIn').val()

    }//end employeeObject
    totalEmployees.push( newEmployee );
    calculateMonthlyCost();
    displayInTable();

}//end addEmployee

function displayInTable(){
    $('.tableInputs').empty();
    $('#addMonthlyTotal').empty();
    for (let item of totalEmployees){
        $('.tableInputs').append(`<tr><td>${item.firstName}</td><td>${item.lastName}</td><td>${item.idNumber}</td><td>${item.jobTitle}</td><td>${item.annualSalary}</td></tr>`);
    }//end for loop
    $('#addMonthlyTotal').append(totalMonthly);

}//end display

function calculateMonthlyCost(){
    for( let i = 0; i<totalEmployees.length; i++) {
    totalMonthly = Number(totalEmployees[i].annualSalary) + totalMonthly;
    }//end for
    totalMonthly = (totalMonthly / 12);
  return totalMonthly;
}//end calculateMonthlyFunction
