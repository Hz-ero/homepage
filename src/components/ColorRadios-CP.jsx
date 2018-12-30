import React from "react";
import Style from "./style.css";
import colors from "../unit/colors.js";
import { ChromePicker } from "react-color";

const ColorRadios_CP = props => {
  const {
    radioSelected,
    colorSelected,
    pickerSignal,
    wantClickSelectRadio,
    wantOpenColorPicker,
    wantPickOneColor
  } = props;

  const stopClickSpread = e => {
    e.preventDefault();
    e.stopPropagation();
  };

  const pickOneColor = (color, e) => {
    e.preventDefault();
    e.stopPropagation();
    wantPickOneColor(color.hex);
  };

  return (
    <div className={Style.colorRadiosBox}>
      <div className={Style.colorRadios}>
        {colors.map((color, index) => (
          <RadioItem
            key={index}
            radioIndex={index}
            colorValue={color}
            radioSelected={radioSelected}
            colorSelected={colorSelected}
            clickSelectRadio={wantClickSelectRadio}
            openColorPicker={index === 10 ? wantOpenColorPicker : undefined}
          />
        ))}
      </div>
      <div
        className={Style.colorPicker}
        style={{ display: pickerSignal ? "block" : "none" }}
        onClick={e => stopClickSpread(e)}
      >
        <ChromePicker
          color={colorSelected}
          onChange={(color, e) => pickOneColor(color, e)}
        />
      </div>
    </div>
  );
};

const RadioItem = props => {
  const {
    radioSelected,
    colorSelected,
    colorValue,
    radioIndex,
    clickSelectRadio
  } = props;

  const handleClick = e => {
    e.preventDefault();
    e.stopPropagation();
    clickSelectRadio(radioIndex);

    if (props.openColorPicker !== undefined) {
      props.openColorPicker();
    }
  };

  return (
    <div
      style={{
        backgroundColor: colorValue,
        borderColor: radioSelected == radioIndex ? colorSelected : "transparent"
      }}
      onClick={e => handleClick(e)}
      className={Style.radioItem}
    />
  );
};

export default ColorRadios_CP;
