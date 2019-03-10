const totalEmployees = [];

$(document).ready(readyNow);

function readyNow(){
    console.log('in JQ');
    $('#submitButton').on('click', addEmployee);
    $('.tableInputs').on('click', '.newRow', '.removeButton',  removeEmployee);
    $('#totalMonthlyCostLabel').hide();
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
   let employeeInfo = $(this).data();
   console.log($(this));
   console.log(`in employee info`, employeeInfo);

   for( let i = 0; i<totalEmployees.length; i++){
       let info = totalEmployees[i];
       if( info.idNumber === employeeInfo.idNumber){
           totalEmployees.splice(i, 1);
       }
   }
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
        let $tr = $(`<tr class = "newRow"><td>${item.firstName}</td><td>${item.lastName}</td><td>${item.idNumber}</td><td>${item.jobTitle}</td><td>$${item.annualSalary}</td><td id= "tdStyle"><button class= "removeButton">Remove Employee</button></td></tr>`);
        $tr.data(item);
        $('.tableInputs').append($tr);
    }//end for loop
    $('#totalMonthlyCostLabel').show();
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