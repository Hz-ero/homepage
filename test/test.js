import test from "ava";
var _ = require("lodash");

const adrToName = adr => {
  let result = adr;
  if (adr === "") {
    return false;
  }
  result = _.replace(result, "http://", "");
  result = _.replace(result, "https://", "");
  result = _.replace(result, "www.", "");
  result = _.replace(result, ".com", "");
  result = _.replace(result, ".cn", "");
  return result;
};

test("foo", t => {
  t.falsy(adrToName(""));
  t.is("aabbcc", adrToName("http://aabbcc.cn"));
  t.is("aabbcc", adrToName("https://aabbcc.com"));
  t.is("aabbcc", adrToName("https://www.aabbcc.com"));
  t.is("aabbcc", adrToName("http://www.aabbcc.cn"));
});
