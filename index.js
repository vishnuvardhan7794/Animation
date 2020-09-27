let isRobot = false;
function circularClicked() {
    this.isRobot = !this.isRobot;
    let roboCircle = findElement('circular--robo');
    let landCircle = findElement('circular--landscape');
    let welcome = findElement('welcome');
    let clickabove = findElement('clickabove');
    let list = document.getElementById('textBlock').classList;
    let intervalID = setInterval(function () {
        if (clickabove.opacity > 0 && this.isRobot == true) {
            clickabove.opacity -= 0.1;
            welcome.opacity = parseFloat(welcome.opacity) + 0.1;
        } else if (welcome.opacity > 0 && this.isRobot == false) {
            welcome.opacity -= 0.1;
            clickabove.opacity = parseFloat(clickabove.opacity) + 0.1;
        }
        else {
            clearInterval(intervalID);
            landCircle.display = !this.isRobot ? 'block' : 'none';
            roboCircle.display = this.isRobot ? 'block' : 'none';
            this.isRobot ? list.add("newClaa") : list.remove("newClaa");
        }
    }, 50);
    
}

function findElement(id){
  return document.getElementById(id).style
}