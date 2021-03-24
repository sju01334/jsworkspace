//총알을 정의한다
class Bullet{
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

        //총알의 모습
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
    //물리량 변화
    tick(){
        this.x+=this.velX;
        this.y+=this.velY;
        //총알은 날아가다가, 자신이 스크린을 벗어난다면, 자살
        if(this.x>screen.width){
            // 여기서 this는 bullet 객체가 생성되었을때 나를 지칭함
            var index=bulletArray.indexOf(this);
            removeObject(this.container, this.img, bulletArray, index);
        }
    }
    //그래픽 처리
    render(){
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px"
    }
}