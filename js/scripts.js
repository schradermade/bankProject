//*********************************************************************//
    // Business Logic //
//*********************************************************************//
function Account(firstName, lastName, beginningBalance) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.beginningBalance = beginningBalance;
  this.currentBalance = 0;
  // this.withdrawal;
}

Account.prototype.withdrawal = function() {
  console.log(this.beginningBalance);
  // this.currentBalance = this.currentBalance - this.withdrawal;
  // return this.currentBalance;
  
}

// Front End Logic
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let beginningBalance = parseFloat($('#beginningBalance').val());
    let account1 = new Account(firstName, lastName, beginningBalance);
    console.log(account1);
    account1.withdrawal();
    $(".userBeginningBalance").append("This is your beginning balance: " + beginningBalance)
    $(".userCurrentBalance").append("This is your current balance: " + currentBalance)
  });
});