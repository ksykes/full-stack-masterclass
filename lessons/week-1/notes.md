# Week 1 Notes

Can now use [Web Assembly](https://webassembly.org/) to write code on the front-end.

The value of the this keyword is determined by the place where the function is called. 

State is the part of an application that changes over time. State management is responsible for ~90% of bugs of your application. 

Transform class properties — the new way of writing state (in playground file). 

Props is an explicit unilateral communication. They are fancy attributes that communicate information to a component about information it should display or something it should do.

You should aim to manage data/state as high up in your app tree as you need to access it.

## Review Questions

1. What’s the difference between let and const?
Let can be re-assigned, const cannot (but both can be mutated). 

2. What’s the difference between let/const and var?
Let/const are block scoped, whereas var is not. Temporal dead zone:

```function whatever() {
   console.log(name)
   // TEMPORAL DEAD ZONE
   Const name = “Simon”
}
```

3. Out of the box, is JavaScrpipt function scoped or block scope?
Function scoped: variables that are declared inside of a function are not accessible outside of that function. (A block is {}). 

4. What are the two differences between arrow functions and regular functions?
    * Arrow functions give access to the this value of the parent (lexical this). 
    * Syntactical sugar (e.g. implicit return). 

5. When you define a function you include a parameter, which is a placeholder until an argument is passed in. 

6. What are the two packages that are required to kickoff React?
React and ReactDOM. 

7. What two arguments need to be passed into render to start up your app?
What and where. 

8. What are two quirks of JSX? 
    * Self-closing elements need to have a slash
    * Class = className (for now — will change soon)
    * Need root enveloping element aka div daddy — <> </>