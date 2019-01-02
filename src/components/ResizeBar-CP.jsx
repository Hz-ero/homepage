import React from "react";

const ResizeBar_CP = props => {
  const { useStyle, direction, wantResizeStart } = props;

  const handleResizeStart = e => {
    e.preventDefault();
    e.stopPropagation();
    let refPosition = { x: e.clientX, y: e.clientY };

    wantResizeStart(direction, refPosition);
  };

  return <span className={useStyle} onMouseDown={e => handleResizeStart(e)} />;
};

export default ResizeBar_CP;
