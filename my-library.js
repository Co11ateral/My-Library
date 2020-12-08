function touch(rect1,rect2) {
    if(rect1.x - rect2.x < rect2.width/2 + rect1.width/2 && 
      rect2.x - rect1.x < rect2.width/2 + rect1.width/2 &&
      rect1.y - rect2.y < rect2.height/2 + rect1.height/2 && 
      rect2.y - rect1.y < rect2.height/2 + rect1.height/2) {
  
      return true;
    }
    else {
      return false;
    }
  }
  function bounce(rect1,rect2) {
    if(rect1.x - rect2.x < rect2.width/2 + rect1.width/2 && 
      rect2.x - rect1.x < rect2.width/2 + rect1.width/2 &&
      rect1.y - rect2.y < rect2.height/2 + rect1.height/2 && 
      rect2.y - rect1.y < rect2.height/2 + rect1.height/2) {
        rect2.velocityX = -(rect2.velocityX);
        rect1.velocityX = -(rect2.velocityX);
      }
  }
  function bounceOff(rect1,rect2) {
    if(rect1.x - rect2.x < rect2.width/2 + rect1.width/2 && 
      rect2.x - rect1.x < rect2.width/2 + rect1.width/2 &&
      rect1.y - rect2.y < rect2.height/2 + rect1.height/2 && 
      rect2.y - rect1.y < rect2.height/2 + rect1.height/2) {
        rect2.velocityX = -(rect2.velocityX);
      }
  }
  function collide(rect1,rect2) {
    if(rect1.x - rect2.x < rect2.width/2 + rect1.width/2 && 
      rect2.x - rect1.x < rect2.width/2 + rect1.width/2 &&
      rect1.y - rect2.y < rect2.height/2 + rect1.height/2 && 
      rect2.y - rect1.y < rect2.height/2 + rect1.height/2) {
        rect1.velocityX = 0;
        rect2.velocityX = 0;
        rect1.velocityY = 0;
        rect2.velocityY = 0;
    }
  }
  function displace(rect1,rect2) {
    if(rect1.x - rect2.x < rect2.width/2 + rect1.width/2 && 
      rect2.x - rect1.x < rect2.width/2 + rect1.width/2 &&
      rect1.y - rect2.y < rect2.height/2 + rect1.height/2 && 
      rect2.y - rect1.y < rect2.height/2 + rect1.height/2) {
        rect2.velocityX = rect1.velocityX;
        rect2.velocityY = rect1.velocityY;
        rect1.velocityX = 0;
        rect1.velocityY = 0;
    }
  }