import React from "react";
import Style from "./style.css";
import {
  Slide,
  Button,
  ClickAwayListener,
  AppBar,
  Typography,
  Toolbar,
  Collapse
} from "@material-ui/core";

const RightDrawer = props => {
  let collapseON = false;
  let siteAdrInput, siteNameInput;
  const { signal, clickAddSite, wantCloseRightDrawer } = props;

  const handleSubmit = e => {
    e.preventDefault();

    let siteInfo = {
      siteAdr: siteAdrInput.value,
      siteName: siteNameInput.value
    };
    clickAddSite(siteInfo);
    handleCloseForm();
  };

  const handleClickAway = () => {
    wantCloseRightDrawer();
    collapseON = false;
    siteAdrInput.value = "";
    siteNameInput.value = "";
  };

  const handleShowcustomInput = e => {
    e.preventDefault();
    collapseON = true;
    console.log("show custom:", collapseON);
  };

  return (
    <div>
      <Slide direction="left" in={signal} mountOnEnter unmountOnExit>
        <ClickAwayListener onClickAway={handleClickAway}>
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
                <input
                  type="text"
                  className={Style.inputField}
                  placeholder="输入标题"
                  ref={input => (siteNameInput = input)}
                />
              </div>

              <div className={Style.formSection}>
                <input
                  type="text"
                  className={Style.inputField}
                  placeholder="输入网址"
                  ref={input => (siteAdrInput = input)}
                />
              </div>
              <CustomIconInput />
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
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
};

class CustomIconInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { collapseON: false };
    // 事件处理函数必须绑定
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({
      collapseON: true
    });
  }

  render() {
    // 在实例中通过使用`ref`回调函数来存储text输入框的DOM元素引用(例如:this.textInput)
    return (
      <div className={Style.formSection}>
        <div className={Style.siteIconBox}>
          <div className={Style.siteIcon} />
          <a className={Style.customButton} onClick={e => this.handleClick(e)}>
            <span>使用自定义图像</span>
          </a>
        </div>
        <Collapse in={this.state.collapseON}>
          <div className={Style.webIconInput}>
            <input className={Style.inputField} />
          </div>
        </Collapse>
      </div>
    );
  }
}

export default RightDrawer;
