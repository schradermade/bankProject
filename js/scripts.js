//*********************************************************************//
    // Business Logic //
//*********************************************************************//
function Account(firstName, lastName, beginningBalance)  {
  this.firstName = firstName;
  this.lastName = lastName;
  this.beginningBalance = beginningBalance;
}

// Front End Logic
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let beginningBalance = parseFloat($('#beginningBalance').val());
    let account1 = new Account(firstName, lastName, beginningBalance);
    alert(account1.firstName);
    alert(account1.lastName);
    console.log(account1);
  

  });
});