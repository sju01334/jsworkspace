function hitTest2(me, target) {
    var hitSide = "";

    var me_x= parseInt(me.style.left);
    var me_y= parseInt(me.style.top);
    var me_width=parseInt(me.style.width);
    var me_height=parseInt(me.style.height);

    var target_x= parseInt(target.style.left);
    var target_y= parseInt(target.style.top);
    var target_width=parseInt(target.style.width);
    var target_height=parseInt(target.style.height);

    var vx = (me_x + (me_width/2)) - (target_x + (target_width/2));
    var vy = (me_y + (me_height/2)) - (target_y + (target_height/2));
    
    var sumHalfWidth = (me_width/2) + (target_width/2);
    var sumHalfHeight = (me_height/2) + (target_height/2);
    
    
    if(Math.abs(vx)<sumHalfWidth && Math.abs(vy)<sumHalfHeight){
        var overlapX = sumHalfWidth - Math.abs(vx);
        var overlapY = sumHalfHeight - Math.abs(vy);

        if(overlapX >= overlapY){
            hitSide = (vy>0)? "top":"bottom";
        }else{
            hitSide = (vx>0)? "left":"right";
        }
        // console.log("이전", me.style.left,"  ", me.style.top);
        

        switch(hitSide){
            case "top":
                me.style.top = me_y - overlapY + "px";
                break;
            case "bottom":
                me.style.top = me_y + overlapY + "px";
                break;
            case "left":
                me.style.left = me_x - overlapX + "px";
                break;
            case "right":
                me.style.left = me_x + overlapX + "px";
                break;
        }
        // console.log("이후", me.style.left,"  ", me.style.top);
    }
    return hitSide;
}