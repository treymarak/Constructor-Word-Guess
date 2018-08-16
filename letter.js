var letter = function() {

    this.character = let;
    this.appear = false;
    this.letterRender = function() {
        return !(this.appear) ? "_" : this.character;
    };

};  

module.exports = Letter