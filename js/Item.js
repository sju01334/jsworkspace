// 아이템 정의
/*
role 1 : candy1.png) 무기 전환
role 2 : candy2.png) 적군 전체 소멸
role 3 : candy3.png) hp추가
role 4 : candy4.png) 주인공의 속도 업그레이드
*/

class Item{
    constructor(itemRole, container, width, height, x, y, velX,velY){
        this.itemRole=itemRole; //각 아이템을 보유할 객체
        this.container=container;
        this.img = document.createElement("img");
        this.src=itemRole.src;
        this.width=width;
        this.height =height;
        this.x=x;  
        this.y=y;
        this.velX=velX; 
        this.velY=velY;

        //아이템의 모습을 설정해본다!!
        this.img.src=this.src;
        
        //크기
        this.img.style.width=this.width+"px";
        this.img.style.height=this.height+"px";

        //위치
        this.img.style.position="absolute";
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";

        //부모요소에 부착
        this.container.appendChild(this.img);
   }
    tick(){
        this.x += this.velX;
        this.y += this.velY;

        //내가 화면의 음수값을 가질때 즉 좌측 한계점을 지나면, 제거
        if(this.x<0){
            removeObject(this.container, this.img, itemArray, itemArray.indexOf(this));
        }
   }
    render(){
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
    }
}