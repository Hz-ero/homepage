import React from "react";
import Style from "./style.css";
import colors from "../unit/colors.js";
import { ChromePicker } from "react-color";

const ColorRadios_CP = props => {
  const {
    colorState,
    outerNode,
    wantClickSelectRadio,
    wantOpenColorPicker,
    wantSetOuterNode,
    wantPickOneColor
  } = props;

  let colorPickerShow;
  if (outerNode === colorState.outerNode && colorState.pickerSignal) {
    colorPickerShow = true;
  } else {
    colorPickerShow = false;
  }

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
            radioSelected={colorState.radioSelected}
            colorSelected={colorState.colorSelected}
            clickSelectRadio={wantClickSelectRadio}
            wantOpenColorPicker={index === 11 ? wantOpenColorPicker : undefined}
            outerNode={index === 11 ? outerNode : undefined}
            wantSetOuterNode={index === 11 ? wantSetOuterNode : undefined}
          />
        ))}
      </div>
      <div
        className={Style.colorPicker}
        style={{ display: colorPickerShow ? "block" : "none" }}
        onClick={e => stopClickSpread(e)}
      >
        <ChromePicker
          color={colorState.colorSelected}
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
    clickSelectRadio(radioIndex);

    if (radioIndex === 11) {
      {
        /* TODO: delete leater */
      }
      console.log(props);

      e.stopPropagation();
      props.wantOpenColorPicker();
      props.wantSetOuterNode(props.outerNode);
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
