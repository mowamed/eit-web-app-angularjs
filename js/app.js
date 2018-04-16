var MS_YEAR = 31556952000; // https://www.calculateme.com/Time/Years/ToMilliseconds.htm
var MS_MONTH = 2629746000; // https://www.calculateme.com/Time/Months/ToMilliseconds.htm
var MS_DAY = 86400000; // https://www.calculateme.com/Time/Days/ToMilliseconds.htm

var eitApp = angular.module('eitApp', []);

eitApp.controller('eitController', function(eitService){
  this.gName = 'bakus';
  this.eitList = eitService.getEitList();

});

eitApp.controller('addEitCtrl', function(eitService){
  this.fName = 'momo';
  this.lName = '';
  this.age = '';
  this.gender = '';
  this.list = '';

  this.addEit = function(){
    var id = Date.now()+this.fName.split('').map(v=>v.charCodeAt(0)).reduce((a,v)=>a+((a<<7)+(a<<3))^v).toString(16);
    var now = new Date();
    var remainder = (now - this.age);
    var age = Math.floor(remainder / MS_YEAR);
    this.list = eitService.addNewEit(id, this.fName, this.lName, age, this.gender);
  }
});

eitApp.controller('editEitCtrl', function(eitService){
  this.eit = {}

  this.getEit = function(id) {
    this.eit = eitService.getOneEit(id);
  }

  this.editEit = function() {
    eitService.editEit(this.eit);
  }
  
});

eitApp.controller('deleteEitCtrl', function(){

});


