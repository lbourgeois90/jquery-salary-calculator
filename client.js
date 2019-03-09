const totalEmployees = [];

$(document).ready(readyNow);

function readyNow(){
    console.log('in JQ');
    $('#submitButton').on('click', addEmployee);
    $('#removeEmployeeButton').on('click', removeEmployee);

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
    displayInTable();
    $( '#firstNameIn').val('');
    $( '#lastNameIn' ).val('');
    $( '#idNumberIn').val('');
    $( '#jobTitleIn').val('');
    $( '#annualSalaryIn').val('');

}//end addEmployee

function removeEmployee() {
    console.log('in RemoveEmployee');
    for(let i = 0; i<totalEmployees.length; i++) {
        if ((totalEmployees[i].idNumber) === ($( '#idNumberInTwo').val())) {
            totalEmployees.splice(i, 1);
        }//end if
    }// end for
    displayInTable();
    $( '#idNumberInTwo').val('')
}// 

function displayInTable(){
    $('.tableInputs').empty();
    $('#addMonthlyTotal').empty();
    for (let item of totalEmployees){
        $('.tableInputs').append(`<tr><td>${item.firstName}</td><td>${item.lastName}</td><td>${item.idNumber}</td><td>${item.jobTitle}</td><td>$${item.annualSalary}</td></tr>`);
    }//end for loop
    calculateMonthlyCost();
    // if(totalMonthly > 20000) {
    //     $('#addMonthlyTotal').css('background-color','red').append('$',totalMonthly);
    // }//end if
    // else {
    //    return $('#addMonthlyTotal').append('$', totalMonthly);
    // }
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
       return $('#addMonthlyTotal').append('$', totalMonthly.toFixed(2));
    }
}//end calculateMonthlyFunction
