// 비행기라는 사용자 정의 자료형을 선언
class Plane{
    // 변수와 함수

    //객체의초기화
    //비행기가 어떤 특성을 가지고 태어날지 결정
    constructor(container, src, width, height, x, y, velX, velY){
        //멤버변수 선언 초기화
        this.container=container; //비행기가 붙을 부모요소
        this.img=document.createElement("img");
        this.src=src;
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;
        this.velX=velX;//주인공의 x축으로 속도를 결정
        this.velY=velY;//주인공의 y축으로 속도를 결정
        //멤버 변수를 이용한 속성값 지정(스타일 속성)
        this.img.src=src;
        this.img.style.width=this.width+"px";
        this.img.style.height=this.height+"px";
        this.img.style.position="absolute";
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";

        this.container.appendChild(this.img);

    }
    //
    tick(){
        this.x+=this.velX;
        this.y+=this.velY;
        // console.log("this.x=", this.x);

        if(this.x<=0){
            this.x=0;
        }
        if(this.x>=screen.width-this.width){
            // console.log("경계에 도착");
            this.x=screen.width-this.width;
        }
    }
    //변경된 값을 화면에 보여주기 위한 그래픽 처리(게임분야, 그래픽 분야에서는 랜더링)
    render(){
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
    }
}