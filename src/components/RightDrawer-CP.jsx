import React from "react";
import Style from "./style.css";
const _string = require("lodash/string");
const _object = require("lodash/object");
const url = require("url");
import {
  Slide,
  Button,
  ClickAwayListener,
  AppBar,
  Typography,
  Toolbar,
  FormControl,
  TextField,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio
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

class RightDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      siteName: "",
      siteAdr: "",
      iconAdr: "",
      favicon: "",
      // collapseON: false,
      siteAdrError: false,
      iconAdrError: false,
      switchButton: false
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSiteAdrChange = this.handleSiteAdrChange.bind(this);
    this.handleIconAdrChange = this.handleIconAdrChange.bind(this);
  }

  setStateInit() {
    this.setState({
      siteName: "",
      siteAdr: "",
      iconAdr: "",
      favicon: "",
      // collapseON: false,
      siteAdrError: false,
      iconAdrError: false,
      switchButton: false
    });
  }

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

  handleNameChange(nameValue) {
    this.setState({ siteName: nameValue });
  }
  handleSiteAdrChange(siteAdrValue) {
    this.setState({ siteAdr: siteAdrValue });
    if (siteAdrValue !== "") {
      this.setState({ siteAdrError: false });
    }
  }
  handleIconAdrChange(iconAdrValue) {
    this.setState({ iconAdr: iconAdrValue });
    if (iconAdrValue !== "") {
      this.setState({ switchButton: true });
    } else {
      this.setState({ switchButton: false });
    }
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

  handleCancel(e) {
    e.preventDefault();
    this.setStateInit();
    this.props.wantCloseRightDrawer();
  }
  async handlePreview(e) {
    e.preventDefault();
    // 检测图标地址，返回true/false
    // 如果获取到图片则设置div图片背景并且转换按钮，
    // 如果获取失败则返回error和message
    let checkResult = await checkIconPath(this.state.iconAdr);

    if (checkResult) {
      this.setState({ switchButton: false });
      this.props.wantPreviewIcon(this.state.iconAdr);
    } else {
      this.setState({ iconAdrError: true });
    }
  }

  handleClickAway(e) {
    e.preventDefault();
    this.setStateInit();
    this.props.wantCloseRightDrawer();
  }

  // handleUnCollapse(e) {
  //   e.preventDefault();
  //   this.setState({ collapseON: true });
  // }

  handleFileInput(e) {
    e.preventDefault();
    {
      /* TODO: delete leater */
    }
    console.log("change file input");
  }

  render() {
    let errorMessage = "请输入正确地址";
    return (
      <div>
        <Slide
          direction="left"
          in={this.props.signal}
          mountOnEnter
          unmountOnExit
        >
          <ClickAwayListener onClickAway={e => this.handleClickAway(e)}>
            <div className={Style.sideDrawer}>
              <AppBar position="static" color="default">
                <Toolbar>
                  <Typography variant="h6" color="inherit">
                    添加网址
                  </Typography>
                </Toolbar>
              </AppBar>

              <form className={Style.siteForm} encType="multipart/form-data">
                <div className={Style.formSection}>
                  <SiteInfoInput
                    inputLabel="标题"
                    currentValue={this.state.siteName}
                    onInputChange={this.handleNameChange}
                  />
                </div>
                {/* TODO:添加错误提示 */}
                <div className={Style.formSection}>
                  <SiteInfoInput
                    inputLabel="地址"
                    inputError={this.state.siteAdrError}
                    currentValue={this.state.siteAdr}
                    onInputChange={this.handleSiteAdrChange}
                    helperText={this.state.siteAdrError ? errorMessage : ""}
                  />
                </div>
                <div className={Style.formSection}>
                  <div className={Style.siteIconBox}>
                    <div id="siteIcon" className={Style.siteIcon} />
                    {/* <a
                      className={Style.customButton}
                      onClick={e => this.handleUnCollapse(e)}
                    >
                      <span>使用自定义图像</span>
                    </a> */}
                    {/* <div>
                      <div>style</div>
                      <div className={Style.RadioGroup}>
                        <span>
                          <Radio value="word" aria-label="word" />
                          word
                        </span>
                        <span>
                          <Radio value="img" aria-label="img" />
                          img
                        </span>
                      </div>
                    </div> */}
                  </div>
                  {/* TODO:添加错误提示 */}
                  <div className={Style.webIconInput}>
                    {/* <SiteInfoInput
                      inputLabel="图标地址"
                      inputError={this.state.iconAdrError}
                      currentValue={this.state.iconAdr}
                      onInputChange={this.handleIconAdrChange}
                      helperText={this.state.iconAdrError ? errorMessage : ""}
                    /> */}
                    <div className={Style.fileInputBox}>
                      <Button
                        variant="contained"
                        color="primary"
                        className={Style.actionButton}
                      >
                        确认
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
                {/* 按钮 */}
                <div className={Style.formSection}>
                  <div className={Style.actionButtons}>
                    <Button
                      variant="contained"
                      color="default"
                      onClick={e => this.handleCancel(e)}
                      className={Style.actionButton}
                    >
                      取消
                    </Button>
                    <div
                      className={
                        this.state.switchButton ? Style.hidden : Style.show
                      }
                    >
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={e => this.handleSubmit(e)}
                        className={Style.actionButton}
                      >
                        确认
                      </Button>
                    </div>
                    <div
                      className={
                        this.state.switchButton ? Style.show : Style.hidden
                      }
                    >
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={e => this.handlePreview(e)}
                        className={Style.actionButton}
                      >
                        预览
                      </Button>
                    </div>
                  </div>
                </div>
              </form>
              <ColorRadios />
            </div>
          </ClickAwayListener>
        </Slide>
      </div>
    );
  }
}

const colors = ["#353535", "#000000", "#FFFFFF", "#00FF00"];

class ColorRadios extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: "#353535"
    };
  }

  handleSelectColor(color) {
    this.setState({ currentValue: color });
  }

  render() {
    return (
      <div>
        {colors.map((color, index) => (
          <RadioItem
            key={index}
            isSelected={this.state.currentValue === color ? true : false}
            color={color}
            onSelectColor={value => this.handleSelectColor(value)}
          />
        ))}
      </div>
    );
  }
}

const RadioItem = props => {
  const { color, onSelectColor, isSelected } = props;
  const handleClick = e => {
    e.preventDefault();
    onSelectColor(color);
  };
  return (
    <div
      style={{ borderColor: isSelected === true ? color : "transparent" }}
      className={Style.outerCircle}
    >
      <div
        style={{ backgroundColor: color }}
        onClick={e => handleClick(e)}
        className={Style.innerRound}
      />
    </div>
  );
};

export default RightDrawer;
