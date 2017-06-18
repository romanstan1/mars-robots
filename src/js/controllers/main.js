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
  const compassArray = ['N','S','E','W'];
  const directionArray = [
                          [0, 1], // N
                          [0,-1], // S
                          [1, 0], // E
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

    vm.moveInput.split('').forEach((letter) => {
      if( letter === 'F') {
        const index = compassArray.indexOf(vm.direction);
        xCord += directionArray[index][0];
        yCord += directionArray[index][1];
        newRefs = 'x'.concat(xCord, 'y', yCord);
      }
    });

    console.log(newRefs);
    const newActiveRobot = angular.element( document.querySelector( `#${newRefs}` ));
    newActiveRobot.addClass('activeRobot');






    // console.log(directionArray[index]);

    // vm.moveInput.forEach( letter => {
    //   console.log(letter);
    // });

          // +1
    //-1     // +1
         //-1
    //if(vm.moveInput === "N")

  }
  vm.moveRobot = moveRobot;
}
