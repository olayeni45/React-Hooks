import React from "react";

const DemoOutput = (props) => {
  const { show } = props;
  console.log("Demo output running");
  return <p>{show ? "This is new" : ""}</p>;
};

export default React.memo(DemoOutput);

/*React.memo
React.memo checks if there was a change in the props of the component and re-evaluates the component.
1. Stores the previous value
2. Compares the two values to determine if the component would re-evaluate.

*Functions are objects in JavaScript 

Primitive values: strings, booleans, numbers.
Reference values: Objects and arrays

The stack is essentially an easy-to-access memory that simply manages its items as a - well - stack. 
Only items for which the size is known in advance can go onto the stack. This is the case for numbers, strings, booleans.

The heap is a memory for items of which you can't pre-determine the exact size and structure.
Since objects and arrays can be mutated and change at runtime, they have to go into the heap therefore.

React.memo only works for primitive values whi;e reference values are to be managed by useCallback hook.
*/
