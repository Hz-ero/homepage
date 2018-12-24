import React from "react";
import Style from "./style.css";
var _string = require("lodash/string");
import {
  Slide,
  Button,
  ClickAwayListener,
  AppBar,
  Typography,
  Toolbar,
  Collapse,
  TextField,
  OutlinedInput
} from "@material-ui/core";

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
      siteAdrError: false
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSiteAdrChange = this.handleSiteAdrChange.bind(this);
    this.handleIconAdrChange = this.handleIconAdrChange.bind(this);
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

    console.log(this.state.siteName);
  }

  handleClickAway(e) {
    e.preventDefault();
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
                    <div className={Style.siteIcon} />
                    <a
                      className={Style.customButton}
                      onClick={e => this.handleUnCollapse(e)}
                    >
                      <span>使用自定义图像</span>
                    </a>
                  </div>
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
                <Button
                  variant="contained"
                  color="primary"
                  onClick={e => this.handleSubmit(e)}
                  className={Style.confirmButton}
                >
                  确认
                </Button>
              </div>
            </div>
          </ClickAwayListener>
        </Slide>
      </div>
    );
  }
}

export default RightDrawer;
