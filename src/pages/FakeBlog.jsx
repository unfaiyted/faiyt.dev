import React from "react";
import {CodeBlock} from "faiyt-ui-components";
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

  const cssBlock = `
    // Media queries
  @mixin for-size($size) {
    @if $size == phone-only {
      @media (max-width: 599px) { @content; }
    } @else if $size == tablet-portrait-up {
      @media (min-width: 600px) { @content; }
    } @else if $size == tablet-landscape-up {
      @media (min-width: 900px) { @content; }
    } @else if $size == desktop-up {
      @media (min-width: 1200px) { @content; }
    } @else if $size == big-desktop-up {
      @media (min-width: 1800px) { @content; }
    } @else if is-absolute-length($size) {
      @media (min-width: $size) { @content; }
    }
  }
`

  return (
    <div>

      <h1>Introducing a Concept</h1>

      <p className="sub-head">Concepts are new in Faiyt 1.8. They are like the best and other
      features without thinking about them. </p>

      <p>
        This is the best and because its the best you have to use it.
        No one asked you if you had anything else you might want to use.
        That's simply wrong.
      </p>

      <CodeBlock codeString={codeBlock}/>


      <p>This new thing is cool because I said <code>getThing</code> and that makes thing work like
      the other thing proud!?</p>

      <p><span className="b">You can start learning the Thing below this stuff.</span> On this page here we are going to
      try and explain things and you will figure it out as we go ok.</p>


      <blockquote>
        <p className="b">Note to User</p>
        <p>
          The thing you need to know about version 1.8 is that it comes after
          version 1.7. Yep thats how versioning works and if you dont understand
          that at all. Here is a link to <a href="#">symantic versioning.</a>
        </p>
        <p>The reason is <code>codeIsCoded</code> you can get that <a href="#">here</a></p>

      </blockquote>

      <h2>When to use Concepts</h2>

      <p>There are a few good use cases for concepts:</p>

      <ul>
        <li>Managing foucs, text and stuff.</li>
        <li>Learning and such.</li>
        <li>If you think about it. It just works.</li>
      </ul>

      <p>Avoid using any concepts that are too complicated</p>

      <p>For example, you could <code>start()</code> writing <code>code()</code>
      and a bunch of other stuff too.</p>

      <CodeBlock codeString={cssBlock} language="scss"/>

      <h2>Don't think to much</h2>


    </div>
  )
};
