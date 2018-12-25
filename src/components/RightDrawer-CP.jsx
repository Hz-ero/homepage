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
  Collapse,
  TextField
} from "@material-ui/core";

/**
 * 将网站地址转换为网站标题
 *
 * @param {string} adr
 * @returns {string}
 */
const adrToName = adr => {
  let result = adr;
  if (adr === "") {
    return false;
  }
  result = _string.replace(result, "http://", "");
  result = _string.replace(result, "https://", "");
  result = _string.replace(result, "www.", "");
  result = _string.replace(result, ".com", "");
  result = _string.replace(result, ".cn", "");
  return result;
};

const SiteInfoInput = props => {
  const { inputLabel, inputError, currentValue, onInputChange } = props;

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
      collapseON: false,
      siteAdrError: false,
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
      collapseON: false,
      siteAdrError: false,
      switchButton: false
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
  handleSubmit(e) {
    e.preventDefault();

    if (this.state.siteAdr === "") {
      this.setState({ siteAdrError: true });
      return false;
    }

    if (this.state.siteName === "") {
      const nameFromAdr = adrToName(this.state.siteAdr);
      this.setState({ siteName: nameFromAdr });
    }

    if (this.state.iconAdr === "") {
      try {
        const inputUrl = new URL(this.state.siteAdr);
        const hostname = inputUrl.hostname;
        this.setState({ iconAdr: hostname + "/favicon.ico" });
      } catch (error) {
        this.setState({ siteAdrError: true, siteName: "" });
        return false;
      }
    }

    let siteInfo = _object.pick(this.state, ["siteName", "siteAdr", "iconAdr"]);
    console.log(siteInfo);
  }

  handleCancel(e) {
    e.preventDefault();
    this.setStateInit();
  }
  handlePreview(e) {
    e.preventDefault();
    this.setState({ switchButton: false });
    this.props.wantPreviewIcon(this.state.iconAdr);
  }

  handleClickAway(e) {
    e.preventDefault();
    this.setStateInit();
    this.props.wantCloseRightDrawer();
  }

  handleUnCollapse(e) {
    e.preventDefault();
    this.setState({ collapseON: true });
  }

  render() {
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

              <div className={Style.siteForm}>
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
                  />
                </div>
                <div className={Style.formSection}>
                  <div className={Style.siteIconBox}>
                    <div id="siteIcon" className={Style.siteIcon} />
                    <a
                      className={Style.customButton}
                      onClick={e => this.handleUnCollapse(e)}
                    >
                      <span>使用自定义图像</span>
                    </a>
                  </div>
                  {/* TODO:添加错误提示 */}
                  <Collapse in={this.state.collapseON}>
                    <div className={Style.webIconInput}>
                      <SiteInfoInput
                        inputLabel="图标地址"
                        currentValue={this.state.iconAdr}
                        onInputChange={this.handleIconAdrChange}
                      />
                    </div>
                  </Collapse>
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
              </div>
            </div>
          </ClickAwayListener>
        </Slide>
      </div>
    );
  }
}

export default RightDrawer;
