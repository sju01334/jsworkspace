class Div{
    constructor(container,x,y,width,height,color){
        this.container=container;
        this.color=color;

        this.div=document.createElement("div");
        this.div.style.width=width+"px";
        this.div.style.height=height+"px";
        this.div.style.left=x+"px";
        this.div.style.top=y+"px";
        this.div.style.backgroundColor=this.color;
        this.div.style.position="absolute";
        this.div.style.opacity=1;
        container.appendChild(this.div);
    }
//닿을때마다 투명해지는것
}

class Bar{
    constructor(container,x,y){
        this.bar=document.createElement("div");
        this.bar.style.width=50+"px";
        this.bar.style.height=50+"px";
        this.bar.style.left=x+"px";
        this.bar.style.top=y+"px";
        this.bar.style.backgroundColor="pink";
        this.bar.style.position="absolute";

        container.appendChild(this.bar);
        
    }
}

class Ball{
    constructor(container,x,y,size){
        this.container=container;
        this.x=x;
        this.y=y;
        this.velX=-1;
        this.velY=-1;
        
        this.ball=document.createElement("img");
        this.ball.style.position="absolute";
        this.ball.style.left=this.x+"px";
        this.ball.style.top=this.y+"px";
        this.ball.style.width=size;
        this.ball.style.height=size;
        this.ball.src="./balls/ball8.png"
        this.container.appendChild(this.ball);
        this.limitX=parseInt(this.container.style.width)-parseInt(this.ball.style.width);
        this.limitY=parseInt(this.container.style.height)-parseInt(this.ball.style.height);
    }
    tick(){
        this.x+=this.velX;
        this.y+=this.velY;

        var gameFlag=divArr[0].div.style.opacity<=0&&divArr[1].div.style.opacity<=0&&divArr[2].div.style.opacity<=0&&divArr[3].div.style.opacity<=0;

        if(this.x<0||this.y<0||this.x>this.limitX||this.y>this.limitY||gameFlag){
            clearInterval(gameInterval);
            removeObject(this.container, ball.ball);
            removeObject(this.container, bar.bar);
            var div=document.createElement("div");
            div.style.fontSize="200px";
            div.style.textAlign="center"
            div.style.color="#ffffff";
            div.style.fontWeight="bold";
            div.style.height=600+"px";
            if(gameFlag){
                div.innerHTML="GAME CLEAR <br><br><a href=\"javascript:location.reload()\">again?</a>";
                this.container.appendChild(div);
                return;
            }
            div.innerHTML="GAME OVER <br><br><a href=\"javascript:location.reload()\">Retry</a>";
            this.container.appendChild(div);
        }
    }
    render(){
        this.ball.style.left=this.x+"px";
        this.ball.style.top=this.y+"px";
    }
    contect(){
        
        if(hitTest(this.ball, bar.bar,0,0)){
            var barX=parseInt(bar.bar.style.left);
            var barY=parseInt(bar.bar.style.top);
            var ballX=parseInt(this.ball.style.left);
            var ballY=parseInt(this.ball.style.top);
            if(barX+47<ballX<barX-3&&barY<ballY<barY+50){
                if(barY+3<ballY){
                    this.velY=1;
                }else{
                    this.velY=-1;
                }
            }
            if(barY+47<ballY<barY-3&&barY<ballY<barY+50){
                if(barX+3<ballX){
                    this.velX=1;
                }else{
                    this.velX=-1;
                }
            }
        }

        for(var i=0;i<divArr.length;i++){
            if(hitTest(this.ball, divArr[i].div,550,300)){
                divArr[i].div.style.opacity-=0.1;
                var ballx=parseInt(this.ball.style.left);
                if(i==0){
                    var xresult=(ballx<502)? 0:1;
                    switch(xresult){
                        case 0:this.velX=-1;break;
                        case 1:this.velY=-1;break;
                    }
                }else if(i==1){
                    var xresult=(ballx<502)? 0:1;
                    switch(xresult){
                        case 0:this.velX=-1;break;
                        case 1:this.velY=1;break;
                    }
                }else if(i==2){
                    var xresult=(ballx>948)? 0:1;
                    switch(xresult){
                        case 0:this.velX=1;break;
                        case 1:this.velY=-1;break;
                    }
                }else if(i==3){
                    var xresult=(ballx>948)? 0:1;
                    switch(xresult){
                        case 0:this.velX=1;break;
                        case 1:this.velY=1;break;
                    }
                }
            }
        }

    }
}