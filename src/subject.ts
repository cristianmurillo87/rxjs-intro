// import { Subject } from "rxjs/Subject";
// import { BehaviorSubject } from "rxjs/BehaviorSubject";
// import { ReplaySubject } from "rxjs/ReplaySubject";
import {AsyncSubject } from "rxjs/AsyncSubject";

// a Subject is an observer that´s also able of emiting values.
// Is an observable and a observer at the same time
// var subject = new Subject()
// var subject = new BehaviorSubject('First')
// var subject = new ReplaySubject(2)
// var subject = new ReplaySubject(30, 500)
var subject = new AsyncSubject()

subject.subscribe(
    data => addItem('Observer 1: ' + data),
    //err => addItem(err),
    () => addItem('Observer 1 Completed')
)


// next is used to start emiting values
/*
subject.next('The first thing has been sent');
subject.next('Another thing has been sent')
subject.next('...Observer 2 is about to subscribe...')
*/

// observer2 (with Subject) only receives whatever is emited by subject its creation (of observer2)
// observer2 (with BehaviorSubject ) receives the previous value emited by subject before its creation (of observer2)
// observer2, with ReplaySubject(n) will only receive the previous n values emited by subject before its creation (of observer2)
// observer2, with ReplaySubject(n, t) will only receive the previous n values emited by subject during the last t miliseconds before its creation (of observer2)
/*
// observer2 (with AsyncSubject) receives the very last value emited by subject after subject.complete has been called
/*
var observer2 = subject.subscribe(
    data => addItem('Observer 2:' + data)
)
*/

var i = 1;
var int = setInterval(() => subject.next(i++), 100);

setTimeout(() => {
    var observer2 = subject.subscribe(
        data => addItem('Observer 2:' + data)
    )
    subject.complete() // needed for AsyncSbuject instances
}, 500);



//subject.next('The second thing has been sent');
//subject.next('The third thing has been sent');

//observer2.unsubscribe();

// Not received by observer2 since its emited after 
// unsubscribing to it
//subject.next('A final thing has been sent');

function addItem(val: any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}