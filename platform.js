function platform() {
  this.x = 0;
  this.y = 550;
  
  this.show = function() {
    fill(color("grey"));
    rect(this.x, this.y, 5000,100);
  }
}