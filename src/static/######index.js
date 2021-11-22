import React, { useState } from 'react';


const [isOpened, setIsOpened] = useState(false);

function hide() {
setIsOpened(wasOpened => !wasOpened);
}

function HideBox(/* { title, children } */) {
  

  /* return (
    <div className="box">
      <div className="boxTitle" onClick={toggle}>
        {title}
      </div>
      {isOpened && (
        <div className="boxContent">
          {children}
        </div>
      )}
    </div>
  ); */
}


export default hide;