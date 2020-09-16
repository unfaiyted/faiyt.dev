import React from "react";
/**
 * This is a page displaying the different components that have been created and is
 * used as a reference for various components in the application as they are being built
 * @constructor
 */
export const FakeBlog = () => {


  const codeBlock = `
        import React, { useState } from 'react';
        function Example() {
        // Declare a new state variable, which we'll call "count"
        const [count, setCount] = useState(0);

        return (
        <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
        Click me
        </button>
        </div>
        );
      }
  `

  return (
    <div>

      <h1>Introducing a Concept</h1>

      <p className="sub-head">Concepts are new in React 16.8. They are like the best and other
      features without thinking about them. </p>

      <code>
        {codeBlock}
      </code>




      <p>This new thing is cool because I said <code>getThing</code> and that makes thing work like
      the other thing proud!?</p>

      <p><span className="b">You can start learning the Thing below this stuff.</span> On this page here we are going to
      try and explain things and you will figure it out as we go ok.</p>


      <blockquote>
        Note
      </blockquote>



    </div>
  )
};
