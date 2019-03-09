const totalEmployees = [];

$(document).ready(readyNow);

function readyNow(){
    console.log('in JQ');
    $('#submitButton').on('click', addEmployee);
    $('#removeEmployeeButton').on('click', removeEmployee);

}

function getEmployeeInfo(){
    let newEmployee = {
        firstName: $( '#firstNameIn').val(),
        lastName: $( '#lastNameIn' ).val(),
        idNumber: $( '#idNumberIn').val() ,
        jobTitle: $( '#jobTitleIn').val() ,
        annualSalary: $( '#annualSalaryIn').val()
    }//end employeeObject
    return newEmployee;
}

function addEmployee(){
   if (validateInputs() ) {
       let employee = getEmployeeInfo();

    totalEmployees.push( employee );
    
    $( '#firstNameIn').val('');
    $( '#lastNameIn' ).val('');
    $( '#idNumberIn').val('');
    $( '#jobTitleIn').val('');
    $( '#annualSalaryIn').val('');

    displayInTable();
   }//end if
   else { 
       alert(`Please enter in all information requested`);
   }
}//end addEmployee

function removeEmployee() {
    console.log('in RemoveEmployee');
    for(let i = 0; i<totalEmployees.length; i++) {
        if ((totalEmployees[i].idNumber) === ($( '#idNumberInTwo').val())) {
            totalEmployees.splice(i, 1);
        }//end if
    }// end for
    if (($( '#idNumberInTwo').val()) === ''){
        alert(`Please Enter an Employee ID`);
    }//end if 
    displayInTable();
    $( '#idNumberInTwo').val('')
}// end removeEmployee function

function validateInputs() {
    let firstName = $( '#firstNameIn').val();
    let lastName = $( '#lastNameIn' ).val();
    let idNumber = $( '#idNumberIn').val();
    let jobTitle = $( '#jobTitleIn').val();
    let annualSalary = $( '#annualSalaryIn').val();

    if( firstName !== '' && lastName !== '' && idNumber !== '' && jobTitle !== '' && annualSalary !== '') {
        return true;
    }//end if statement
    return false;
}//end validateInput func
  
  

function displayInTable(){
    $('.tableInputs').empty();
    $('#addMonthlyTotal').empty();
    for (let item of totalEmployees){
        $('.tableInputs').append(`<tr><td>${item.firstName}</td><td>${item.lastName}</td><td>${item.idNumber}</td><td>${item.jobTitle}</td><td>$${item.annualSalary}</td></tr>`);
    }//end for loop
    calculateMonthlyCost();
}//end display

function calculateMonthlyCost(){
    let totalMonthly = 0;
    for( let i = 0; i<totalEmployees.length; i++) {
    totalMonthly += Number(totalEmployees[i].annualSalary) /12;
    }//end for
    if(totalMonthly > 20000) {
        $('#addMonthlyTotal').css('background-color','hsla(0, 100%, 50%, 0.5)').append('$',totalMonthly.toFixed(2));
    }//end if
    else {
       return $('#addMonthlyTotal').css('background-color','white').append('$', totalMonthly.toFixed(2));
    }
}//end calculateMonthlyFunction

