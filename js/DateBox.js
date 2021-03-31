/*
달력의 셀 하나를 표현하는 사각형
일정 등록및 날짜 표가 가능한 객체
*/
class DateBox{
    constructor(container, width, height, text, bg){
        this.container=container;
        this.div=document.createElement("div");
        this.width=width;
        this.height=height;
        this.div.innerText=text; //인수로 넘겨받은 문자열을 div에 출력
        this.bg=bg;//배경색을 인수로 넘겨받자!!
        this.title; //제목 보관용
        this.content;//내용 보관용
        this.init();
    }
    init(){
        this.div.style.width=this.width+"px"
        this.div.style.height=this.height+"px"
        this.div.style.background=this.bg;
        this.div.style.border="1px solid white";
        this.div.style.boxSizing="border-box";
        this.div.style.float="left"; //block이니까
        this.container.appendChild(this.div);
        var bg=this.bg;
        var me=this;
        //이 클래스로부터 장차 미래에 메모리에 올라갈 인스턴스 자신을 말함
        //클릭 이벤트 안에서의  this는 div를 말함

        //이벤트 구현 
        this.div.addEventListener("mouseover", function(){
            this.style.background="dodgerblue";
        });
        this.div.addEventListener("mouseout", function(){
            this.style.background=bg;
        });

        //클릭하면, 일정을 입력하는 창을 띄운다        
        this.div.addEventListener("click", function(){
            //현재 날짜 박스가 boxArray의 몇번째 요소인지를 역추적!!
            var index = boxArray.indexOf(me);
            openDialog(index);
        });

    }
}
