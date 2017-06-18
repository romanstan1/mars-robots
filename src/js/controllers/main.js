angular
  .module('marsRobots')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = [];
function MainCtrl() {
  const vm = this;

  vm.height = 30;
  vm.width = 50;

  vm.rows = new Array(vm.height);
  vm.columns = new Array(vm.width);
  vm.activeRobot = null;
  vm.output = null;


  function createRobot() {
    console.log(vm.activeRobot);
  }

  vm.createRobot = createRobot;


  function moveRobot() {
    console.log(vm.output);
  }
  vm.moveRobot = moveRobot;
}
