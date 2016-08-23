$(function(event) {
  $('li').hide();
  account = prompt('Enter your account name here:');

  if (account !== null) {
    new Account(account);

  }


});

function Account(name) {
  this.accountName = name;
  this.balance = 200;
  this.block = false;
  this.count = 0;
  this.show();
  this.showBalance = $('<button>See Balance</button>').attr('id', 'show');
  this.withdraw = $('<button>Withdraw</button>').attr('id', 'withdraw');
  this.add = $('<button>Add Funds</button>').attr('id', 'addFunds');
  $('#balance').after(this.showBalance, this.withdraw, this.add);
  this.addEventListener();

}

Account.prototype.addEventListener = function() {

  $('#show').click(function(event) {
    event.preventDefault();
    this.viewBalance();
  }.bind(this));

  $('#withdraw').click(function(event) {
    event.preventDefault();
    this.draw();
  }.bind(this));

  $('#addFunds').click(function(event) {
    event.preventDefault();
    this.addFunds();
  }.bind(this));

};


Account.prototype.show = function() {
  $('.n').show();
  $('#name').text(this.accountName);
};

Account.prototype.viewBalance = function() {

  $('#balance').text(this.balance);
  $('.b').show();
  this.count++;
  if (this.count%2 !== 0) {
    $('#show').click(function() {
      $('.b').hide();
    });
  } else {
    $('#show').click(function() {
      $('.b').show();
    });
  }


};

Account.prototype.draw = function() {

  var amount = prompt('How much would you like to withdraw?');
  parseInt(amount);
  if (amount !== null) {
    if (amount > this.balance) {
      alert('You do not have enough funds.');
    } else {
    var newBalance = this.balance -= amount;
    $('#balance').text(newBalance);
    }
  }

};

Account.prototype.addFunds = function() {

  var amount = prompt('How much would you like to add?');
  console.log(amount);
  if (amount !== null) {
    if (amount === 1000) {
      alert('You cannot add that much at one time.');
    } else {
    var newBalance = this.balance += parseInt(amount);
    $('#balance').text(newBalance);
    }
  }

};
