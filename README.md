# extendsjs
simplest and smallest way simulate class inheritance

what it lets you do...

    function Vechile(){
     this.loc=0;
    }
    Vechile.prototype.move = function(){
      this.loc++;
    };
    
    //sub class
    function Van(){
      this.extends(Vechile);
    }    
    Van.prototype.pickUp = function(){};
    
    var a = new Van();
    var b = new Van();
    
    /*:::NOW:::
    a.pickup() //exists
    a.move() //exists
    a.loc=0 
    a.move == b.move //true
    a.constructor == Van
    a.__proto__ == Van.prototype
    a.__proto__.__proto__ == Vechile.prototype
    a.__proto__.__proto__.__proto__ == Object.prototype
    */
    
Only Known Sideffects gotchas and so on..
===========
 - IE11+ (working on support)
 
 Tips
 -----
 - Library is so small you might as well just copy paste it instead of linking to it.
