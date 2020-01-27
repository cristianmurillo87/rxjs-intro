// Operators
// Methods that can be used on Obervables or Subjects
// They modify the original observable and return a new one
// They also do not modify the variable outside its scope

// Static operators
// Used to create observables. Mainly found under creation operators

// Instance operators
// Methods on observable instances (mayority of operators of RxJS)
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { interval } from 'rxjs/Observable/interval';
// import { from } from 'rxjs/Observable/from'; //  import specific ways to create observables
// import { merge } from 'rxjs/observable/merge';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/skipUntil';

// Merge op. => merges several observables and creates a new one
/*var observable = Observable.create((observer: any) => {
    observer.next('Hey guys!')
})

var observable2 = Observable.create((observer: any) => {
    observer.next('How is it going?')
})

var newObs = merge(observable, observable2)

newObs.subscribe((x: any) => addItem(x));*/


// Map op. => applies a function to the values emited by the observable
/*Observable.create((observer: any) => {
    observer.next('Hey guys!')
})
    .map((val: any) => val.toUpperCase())
    .subscribe((x: any) => addItem(x))
*/

// Pluck op. => if an observable emits an object or array of objects with several properties
// but only one is desired. it returns a new observable containing
// only the desired property
/*from([
    {first: 'Gary', last: 'Simon', age: '34'},
    {first: 'Jane', last: 'Simon', age: '34'},
    {first: 'John', last: 'Simon', age: '34'}
])
    .pluck('first')
    .subscribe((x: any) => addItem(x))
*/

// SkipUntil op. => Allows an observable to emit values only after
// a second observer starts emitting its values
var observable1 = Observable.create((data: any) => {
    var i = 1;
    // observable1 will emit values every second
    setInterval(() => {
        data.next(i++)
    }, 1000)
})


var observable2 = new Subject;

// observable2 will start emitting values after 5 seconds 
setTimeout(() => {
    observable2.next('Hey!')
}, 5000)

// observable1 will only start emitting values once observable2 has started emiting values
var newObs = observable1.skipUntil(observable2);
newObs.subscribe((x: any) => addItem(x))


function addItem(val: any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}