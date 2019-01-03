const url = require("url");

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
}

export default RightDrawer;
