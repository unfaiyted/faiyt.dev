import React from "react";
/**
 * This is a page displaying the different components that have been created and is
 * used as a reference for various components in the application as they are being built
 * @constructor
 */
export const ComponentLibrary = () => {
  return (
    <div>
      <div className="component-section">
        <div>Typography</div>
        <h1>Level 1 Heading</h1>
        <h2>Level 2 Heading</h2>
        <h3>Level 3 Heading</h3>
        <h4>Level 4 Heading</h4>
        <h5>Level 5 Heading</h5>
        <h6>Level 6 Heading</h6>
      </div>

      <div className="component-section">
        <div>Type Styles</div>
        <span className="i">Italicize: to write or print (text) in italics.</span>
        <span className="b" >Some text that has to be bold.</span>
        <span className="underline">This text is underlined.</span>
        <span className="strike">this text has a line through its middle.</span>
        <span className="cap-first">Every word is capitalized on the first letter.</span>
        <span className="cap-all">Everything is capitalized. I'm yelling here!</span>
      </div>
      
      <div className="component-section">
        <div>Type faces</div>

        <div>
          <span>Default Typeface</span>
          <span>a b c d e f g h i j k l m n o p q r s t u v w x y z</span>
          <span>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</span>
        </div>

        <div>
          <span>Secondary Typeface</span>
          <span>a b c d e f g h i j k l m n o p q r s t u v w x y z</span>
          <span>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</span>
        </div>

        <div>
          <span>Tertiary Typeface</span>
          <span>a b c d e f g h i j k l m n o p q r s t u v w x y z</span>
          <span>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</span>
        </div>

        <div>
          <span>Code Typeface</span>
          <span>a b c d e f g h i j k l m n o p q r s t u v w x y z</span>
          <span>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</span>
        </div>

      </div>


    </div>
  )
};
