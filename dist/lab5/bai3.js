"use strict";
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse': speed = animal.runningSpeed;
    }
    console.log('Moving at speed: ' + speed);
}
