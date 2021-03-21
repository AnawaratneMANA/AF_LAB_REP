//Event module
/*
    We can create EventEmitters like in Angular and we
    can use them to listen to events and pass messages.
 */

const EventEmitter = require('events');

//Create class
class MyEmitter  extends EventEmitter{}

//Init object
const myEmitter = new  MyEmitter();

//Event listener
myEmitter.on('event', () => console.log("Event Fired!"));

//Init event
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
