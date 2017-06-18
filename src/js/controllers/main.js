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
  vm.direction = null;

  let cleanBoard = true;


  function createRobot() {
    // let activeRobot = document.getElementsByClassName(`cell x${xCoordinate} y${yCoordinate}`);
    // activeRobot[0].addClass('activeRobot');
    // activeRobot.addClass('activeRobot');
    // console.log(activeRobot);


    const input = vm.activeRobot.split('-');

    const xCord = parseInt(input[0]) + 10;
    const yCord = parseInt(input[1]) + 10;

    vm.direction = input[2];


    if (!cleanBoard)  {
      const oldRobot = angular.element( document.querySelector( '.activeRobot' ));
      oldRobot.addClass('oldRobot');
      oldRobot.removeClass('activeRobot');
    }

    const activeRobot = angular.element( document.querySelector( `#x${xCord}y${yCord}` ));
    activeRobot.addClass('activeRobot');
    
    cleanBoard = false;

    // console.log(activeRobot);

    //angular.element('li.cell x0 y0').addClass("activeRobot");
  }

  vm.createRobot = createRobot;


  function moveRobot() {
    const activeRobot = angular.element( document.querySelector( '.activeRobot' ));
    activeRobot.removeClass('activeRobot');
    console.log(activeRobot);
  }
  vm.moveRobot = moveRobot;
}
