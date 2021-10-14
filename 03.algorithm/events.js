function EventEmitter () {
	this._events = {};
}

EventEmitter.prototype.on = function (eventName, func) {
	if (this._events[eventName]) {
		this._events[eventName].push(func);
	} else {
		this._events[eventName] = [func];
	}
};

EventEmitter.prototype.off = function (eventName, func) {
	this._events[eventName] = this._events[eventName].filter(function (item, index, array) {
		return item !== func;
	});
};

EventEmitter.prototype.emit = function (eventName, ...args) {
	var eventList = this._events[eventName];
	for ( var i = 0, length = eventList.length; i < length; i++ ) {
		eventList[i].apply(null, args);
	}
};

var eventEmitter = new EventEmitter();

var HUNGRY = 'hungry';
function hungryHandler1() {
	console.log(arguments);
	console.log('hungryHandler1');
}
function hungryHandler2() {
	console.log(arguments);
	console.log('hungryHandler2');
}
eventEmitter.on(HUNGRY, hungryHandler1);
eventEmitter.on(HUNGRY, hungryHandler2);

// eventEmitter.off(HUNGRY, hungryHandler1);

eventEmitter.emit(HUNGRY, 1, 2, 3);