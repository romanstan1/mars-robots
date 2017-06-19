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
  vm.moveInput = null;
  vm.direction = null;
  vm.outputs = [];
  const compassArray = ['N','E','S','W'];
  const directionArray = [
                          [0, 1], // N
                          [1, 0], // E
                          [0,-1], // S
                          [-1,0] //  W
                        ];

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
    //activeRobot[0].id

    const refs = activeRobot[0].id.split(/x|y/);
    let xCord = parseInt(refs[1]);
    let yCord = parseInt(refs[2]);

    let newRefs = refs;
    let lostVariable = "";
    let lastXCord = xCord;
    let lastYCord = yCord;

    vm.moveInput.split('').forEach((letter) => {
      let index = compassArray.indexOf(vm.direction);

      if( letter === 'F') {
        xCord += directionArray[index][0];
        yCord += directionArray[index][1];

          if( xCord>59 || xCord <10 || yCord > 39 || yCord < 10 ) lostVariable = "LOST";
          else {
            lastXCord = xCord;
            lastYCord = yCord;
          }

      } else if ( letter === 'R') {
        if (index === 3) index = -1;
        vm.direction = compassArray[index + 1];
      } else if ( letter === 'L') {
        if (index === 0) index = 4;
        vm.direction = compassArray[index - 1];
      }
      newRefs = 'x'.concat(xCord, 'y', yCord);
    });


    const outputString =(lastXCord-10).toString() + "-" + (lastYCord-10).toString() + "-" + vm.direction + " " + lostVariable;
    vm.outputs.push(outputString);
    if (vm.outputs.length > 25) vm.outputs.shift();
    const newActiveRobot = angular.element( document.querySelector( `#${newRefs}` ));
    newActiveRobot.addClass('activeRobot');
  }
  vm.moveRobot = moveRobot;
}
