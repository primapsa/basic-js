const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  _chain: new Array(),
  getLength() {
    return this._chain.length;
  },
  addLink(value = '()') {        
    this._chain.push(String(value));
    return this;      
  },
  removeLink(position) {
    const isError = !!((position > 0) && (position <= this.getLength()) && (Math.trunc(position) == position)) 
    if(!isError){
      this._chain = [];
      throw Error("You can\'t remove incorrect link!");  
    } 
    this._chain.splice(position-1, 1);
    return this;
  },
  reverseChain() {
    this._chain.reverse();
    return this;
  },
  finishChain() {
    const chained = this._chain = "( " + this._chain.join( " )~~( " ) + " )";
    this._chain = [];
    return chained;
  },
};

module.exports = {
  chainMaker,
};
