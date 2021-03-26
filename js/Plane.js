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
        // console.log("this.y=", this.y);

        //화면 밖으로 주인공이 나가지 않게 하기
        if(this.x<=0){
            this.x=0;
        }
        if(this.x>=screen.width-this.width){
            // console.log("경계에 도착");
            this.x=screen.width-this.width;
        }

        if(this.y<=0){
            this.y=0;
        }
        if(this.y>= 600-this.height){
            this.y= 600-this.height;
        }

        //나와 적군들과 충돌체크, 나의 hp 죽고 적군 죽고
        for(var i=0;i<enemyArray.length;i++){
            if(hitTest(this.img , enemyArray[i].img)){ 
                removeObject(this.container, enemyArray[i].img,  enemyArray, i);
                if(hpArray.length>0){
                    removeObject(info, hpArray[hpArray.length-1].img, hpArray ,hpArray.length-1);//나의 hp제거 
                }
                //주인공의 에너지가 모두 소진되었는지 hp배열의 길이가 0이면
                if(hpArray.length==0){
                    var div=document.createElement("div");
                    div.style.fontSize=150+"px";
                    div.style.textAlign="center";
                    div.style.color="#FFF";
                    div.style.fontWeight="bold";
                    div.style.height=600+"px"
                    div.innerHTML="GAME OVER <br><a href=\"javascript:location.reload();\">Retry</a>";
                    this.container.appendChild(div)//생성된 div를 화면에 부착
                }
            }
        }

        /*
        role 0) 무기를 미사일로 전환
        role 1) 또다른 무기로 미사일로 전환 missile2.png
        role 2) hp추가
        role 3) 주인공의 속도 업그레이드
        */
        //나와 아이템 충돌검사(아이템 취득)
        for(var i=0;i<itemArray.length;i++){
            if(hitTest(this.img, itemArray[i].img)){
                var itemRole=itemArray[i].itemRole;//주인공과 충동할 아이템정보

                removeObject(this.container, itemArray[i].img, itemArray, i)
                //조건을은 롤을 통해 처리 가능
                switch(itemRole.role){
                    case 0: 
                    changeWeapon() ;break;
                    case 1: 
                    clearEnemy() ;break;
                    case 2: 
                    increaseHp() ;break;
                    case 3: 
                    speedUp();break;
                }
            }
        }

    }
    //변경된 값을 화면에 보여주기 위한 그래픽 처리(게임분야, 그래픽 분야에서는 랜더링)
    render(){
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
    }
}