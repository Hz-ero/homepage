import React from "react";

const DragBar_CP = props => {
  const { useStyle, direction, wantDragStart } = props;

  const handleDragStart = e => {
    e.preventDefault();
    let refPosition = { x: e.clientX, y: e.clientY };

    wantDragStart(direction, refPosition);
  };

  return <span className={useStyle} onMouseDown={e => handleDragStart(e)} />;
};

export default DragBar_CP;
