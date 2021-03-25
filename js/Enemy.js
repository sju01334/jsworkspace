// 적군을 정의
class Enemy{
    constructor(container, src, width, height, x, y, velX, velY){
        //멤버변수
        this.container=container;
        this.img=document.createElement("img");
        this.src=src;
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;
        this.velX=velX;
        this.velY=velY;
        this.r=0;

        //적군의 모습
        this.img.src=this.src;
        //크기
        this.img.style.width=this.width+"px";
        this.img.style.height=this.height+"px";
        //위치
        this.img.style.position="absolute";
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";

        this.container.appendChild(this.img);
    }
    tick(){
        this.x+=this.velX;
        this.y+=this.velY;

        if(this.x<0){
            removeObject(this.container, this.img, enemyArray, enemyArray.indexOf(this));
        }
    }
    render(){
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
        this.r++;
        this.img.style.transform="rotate("+this.r+"deg)";

    }
}