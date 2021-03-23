class Gong{
    constructor(container, src, width, height, velX,velY){
        this.container=container;
        this.width=width;
        this.height=height;
        this.src=src;
        this.x=0;
        this.y=0;
        this.velX=velX;
        this.velY=velY;
        this.limitX=parseInt(this.container.style.width);
        this.limitY=parseInt(this.container.style.height);

        this.img=document.createElement("img");
        this.img.style.width=this.width+"px";
        this.img.style.height=this.height+"px";

        this.img.src=this.src;
        this.img.style.position="absolute";
        this.img.style.left=0+"px";
        this.img.style.top=0+"px";
        this.img.style.padding=0+"px";

        this.container.appendChild(this.img);

        

    }
    
    move(){
        this.x+=this.velX;
        this.y+=this.velY;

        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";

        if(this.x>=this.limitX-this.width || this.x<=0){
            this.velX*=-1;
        }
        if(this.y>=this.limitY-this.height || this.y<=0){
            this.velY*=-1;
        }
    }


}