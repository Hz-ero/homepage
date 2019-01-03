import React from "react";
import Style from "./style.css";
const _string = require("lodash/string");
const _object = require("lodash/object");
const url = require("url");
import ColorRadios_CT from "../containers/ColorRadios-CT";
import {
  Slide,
  Button,
  ClickAwayListener,
  AppBar,
  Typography,
  Toolbar,
  TextField
} from "@material-ui/core";

/**
 * 将网站域名转换为网站标题
 *
 * @param {string} hostname
 * @returns {string}
 */
const hostnameToName = hostname => {
  let result = hostname;
  if (hostname === "") {
    return false;
  }
  result = _string.replace(result, "http://", "");
  result = _string.replace(result, "https://", "");
  result = _string.replace(result, "www.", "");
  result = _string.replace(result, ".com", "");
  result = _string.replace(result, ".cn", "");
  return result;
};

/**
 * 检测图标地址，返回true/false
 *
 * @param {string} path
 * @returns true/false
 */
const checkIconPath = async path => {
  try {
    const result = await fetch(path);
    const data = await result.blob();
    const dataType = data.type.slice(0, 5);

    if (dataType === "image") {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

/**
 * 组件：可复用输入框
 *
 * @param {*} props
 * @returns
 */
const SiteInfoInput = props => {
  const {
    helperText,
    inputLabel,
    inputError,
    currentValue,
    onInputChange
  } = props;

  const handleChange = input => {
    onInputChange(input.target.value);
  };
  return (
    <div>
      <TextField
        className={Style.repeatInput}
        variant="outlined"
        label={inputLabel}
        error={inputError}
        value={currentValue}
        onChange={handleChange}
        helperText={helperText}
      />
    </div>
  );
};

class RightDrawerTTT extends React.Component {
  /**
   * 使setState成为同步函数
   *
   * @param {object} state
   * @returns
   * @memberof RightDrawer
   */
  setStateAsync(state) {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  }

  async handleSubmit(e) {
    e.preventDefault();

    if (this.state.siteAdr === "") {
      this.setState({ siteAdrError: true });
      return false;
    }

    try {
      const inputUrl = new URL(this.state.siteAdr);
      const hostname = inputUrl.hostname;
      await this.setStateAsync({ favicon: hostname + "/favicon.ico" });
    } catch (error) {
      this.setState({ siteAdrError: true, siteName: "" });
      return false;
    }

    // if (this.state.iconAdr === "") {

    // }

    if (this.state.siteName === "") {
      const inputUrl = new URL(this.state.siteAdr);
      const hostname = inputUrl.hostname;
      const nameFromAdr = hostnameToName(hostname);
      await this.setStateAsync({ siteName: nameFromAdr });
    }

    let siteInfo = _object.pick(this.state, [
      "siteName",
      "siteAdr",
      "iconAdr",
      "favicon"
    ]);
    this.props.wantAddSite(siteInfo);
    this.setStateInit();
    this.props.wantCloseRightDrawer();
  }

  render() {
    let errorMessage = "请输入正确地址";
    return (
      <div onClick={e => this.closeColorPicker(e)}>
        <Slide
          direction="left"
          in={this.props.signal}
          mountOnEnter
          unmountOnExit
        >
          <ClickAwayListener onClickAway={e => this.handleClickAway(e)}>
            <div className={Style.sideDrawer}>
              <form className={Style.siteForm} encType="multipart/form-data">
                <div className={Style.formSection}>
                  <div className={Style.siteIconBox}>
                    <div
                      style={{ backgroundColor: this.props.colorSelected }}
                      id="siteIcon"
                      className={Style.siteIcon}
                    />
                  </div>
                  {/* TODO:添加错误提示 */}
                  <div className={Style.webIconInput}>
                    <div className={Style.fileInputBox}>
                      <Button
                        variant="contained"
                        color="primary"
                        className={Style.actionButton}
                      >
                        选择图标
                      </Button>
                      <input
                        className={Style.fileInput}
                        onChange={e => this.handleFileInput(e)}
                        type="file"
                        accept="image/png, image/jpeg, image/gif, image/jpg"
                      />
                    </div>
                  </div>
                </div>
              </form>

              <ColorRadios_CT />
            </div>
          </ClickAwayListener>
        </Slide>
      </div>
    );
  }
}

export default RightDrawer;
