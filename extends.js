Object.prototype.extends = function(clas) {
   clas.call(this);
   var proto = Object.getPrototypeOf(this);
   Object.setPrototypeOf(proto, clas.prototype);
}
