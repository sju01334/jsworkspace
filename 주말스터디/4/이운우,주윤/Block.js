// 벽돌생성
class Block{
    constructor(container, color, width, height, x, y){
        this.container = container;
        this.color = color;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        
        //스타일
        this.div = document.createElement("div");
        this.div.style.backgroundColor = this.color;
        this.div.style.border = "1px solid white";
        this.div.style.boxSizing = "border-box";
        this.div.style.opacity = 1;

        //크기
        this.div.style.width = this.width + "px";
        this.div.style.height = this.height + "px";

        //위치
        this.div.style.position = "absolute";
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";


        //부모 요소에 부착
        this.container.appendChild(this.div);
    }
}