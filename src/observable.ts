import { Observable } from "rxjs/Observable";
import { fromEvent } from 'rxjs/Observable/fromEvent';
import { from } from "rxjs";
//import 'rxjs/add/operator/share';
// Defining an observable
// An observable is hot when the producer (the function inside the create function)
// is emiting values outside of the observable
/*var observable = Observable.create((observer: any) => {
    try {
        observer.next('Hey guys!')
        observer.next('How are you?')
        setInterval(() => {
            observer.next('I am good')
        }, 2000);
    } catch(err) {
        observer.error(err)
    }
    
}).share();*/

// Observers receive values from a Observable after susbscribing to it
// Defining a observer in order to
// subscribe to an observable
/*var observer = observable.subscribe(
    (x: any) => addItem(x),
    (error: any) => addItem(error),
    () => addItem('Completed')
);*/

/*
var observer2 = observable.subscribe(
    (x: any) => addItem(x)
);

// Appending a subscriber to another 
// in order to cancel both of them at the same time
observer.add(observer2)
*/

/*setTimeout(() => {
    //observer.unsubscribe(); // unsubscribing from a observable
    var observer2 = observable.subscribe(
        (x: any) => addItem('Subscriber 2:' + x)
    )
}, 6001);*/

// Craete a truly hot observable
var observable = fromEvent(document, 'mousemove');

setTimeout(() => {
    var subscription = observable.subscribe(
        (x:any) => addItem(x)
    )
}, 2000)

function addItem(val: any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}