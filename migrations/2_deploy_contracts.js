var SafeMath = artifacts.require("./SafeMath.sol");
var Splitter = artifacts.require("./Splitter.sol");

module.exports = function(deployer) {
  deployer.deploy(Splitter);
  deployer.link(Splitter, SafeMath);
};