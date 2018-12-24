import test from "ava";
var _string = require("lodash/string");

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

test("foo", t => {
  t.falsy(adrToName(""));
  t.is("aabbcc", adrToName("http://aabbcc.cn"));
  t.is("aabbcc", adrToName("https://aabbcc.com"));
  t.is("aabbcc", adrToName("https://www.aabbcc.com"));
  t.is("aabbcc", adrToName("http://www.aabbcc.cn"));
});
