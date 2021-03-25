// 사각형을 정의
class Rect{

    constructor(container, width, height, x, y, bg){
        this.container=container;
        this.div=document.createElement("div");
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;
        this.bg=bg; //배경색

        this.init();
    }
    //디자인 초기화
    init(){
        this.div.style.width=this.width+"px";
        this.div.style.height=this.height+"px";
        this.div.style.position="absolute";
        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";
        this.div.style.background=this.bg;
        this.div.style.boxSizing="border-box";
        this.div.style.border="1px solid white"

        //부모 요소에 부착
        this.container.appendChild(this.div);

        //클릭 이벤트 연결
        this.div.addEventListener("click",function(){
            console.log("저 불렀어요?", this); //이벤트를 일으킨 주체 즉 컴포넌트인 div를 말한다 (인스턴스 x)
            //투명으로
            this.style.opacity=0.3

        });
    }


}