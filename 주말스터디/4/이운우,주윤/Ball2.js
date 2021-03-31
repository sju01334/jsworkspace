class Ball{
    constructor(container, color, width, height, velX, velY){
        this.container = container; //어디에 붙일지를 결정짓지 말고, 호출자가 결정하도록...
        this.color = color;
        this.x=0;
        this.y=0;
        this.width = width;
        this.height = height;
        this.velX=velX; //좌우를 결정하는 변수 +일때 증가, -일때는 감소
        this.velY=velY; //상하를 결정하는 변수 +일때 증가, -일때는 감소
        this.limitX=parseInt(this.container.style.width); //공의 x축 한계점
        this.limitY=parseInt(this.container.style.height); //공의 y축 한계점
        this.r = 0;

        this.div = document.createElement("div"); //공을 감쌀 div
        this.div.style.width = this.width + "px";
        this.div.style.height = this.height + "px";
        this.div.style.backgroundColor = this.color;
        this.div.style.position = "absolute";
        this.div.style.left = 0 +"px";
        this.div.style.top = 0 + "px";
        this.div.style.padding = 0 + "px";
        this.div.style.borderRadius = 100 + "%";

        //div 부모 요소에 부착
        this.container.appendChild(this.div);
    }

    //공의 동작!!
    move(){
        var opa = [];

        this.x = this.x + this.velX;
        this.y = this.y + this.velY;
        

        //y축의 경계에 다다르면..부호변경 
        if(this.y <= 0){ //밑바닥 or 천장에 도달하면!!!
            this.velY *= -1;
        }
        //x축의 경계에 다다르면..부호변경
        if(this.x >= this.limitX-this.width || this.x <= 0){
            this.velX *= -1;
        }
    }

    touchBar(){
        //Bar에 닿으면 공이 튕긴다
        var hitBar = hitTest2(this.div, bar);
        if(hitBar=="top" || hitBar=="bottom" || hitBar=="left" || hitBar=="right"){
            this.velY = -this.velY;
        }
    }

    touchBlock(){
        //벽돌에 닿으면 벽돌을 없애고 공은 튕겨나간다
        for(var i=0;i<blockArray.length;i++){
            for(var j=0;j<blockArray[i].length;j++){
                var hitResult = hitTest2(this.div, blockArray[i][j].div);
                var opa = blockArray[i][j].div.style.opacity;

                if(hitResult=="left"|| hitResult=="right"){
                    this.velX = -this.velX;
                    blockArray[i][j].div.style.opacity = opa - 0.5;
                }else if(hitResult=="top"|| hitResult=="bottom"){
                    this.velY = -this.velY;
                    blockArray[i][j].div.style.opacity = opa - 0.5;
                }                
                if(opa==0){
                    removeObject(this.container, blockArray[i][j].div, blockArray[i], j);
                }
            }   
        }
    }

    gameOver(){
        if(this.y >= this.limitY-this.height){
            var div = document.createElement("div");
            div.style.fontSize = 100 + "px";
            div.style.position = "relative";
            div.style.top = 150 + "px";
            div.style.color = "black";
            div.style.fontWeight = "bold";
            div.style.height = 600 + "px";
            div.style.textAlign = "center";
            div.innerHTML = "GAMEOVER <br><a href = 'javascript:location.reload()'>Retry</a>";

            this.container.appendChild(div); //생성된 텍스트 div를 화면에 부착
        }
    }

    // gameClear(){
    //     if(){
    //         var div = document.createElement("div");
    //         div.style.fontSize = 100 + "px";
    //         div.style.position = "relative";
    //         div.style.top = 150 + "px";
    //         div.style.color = "black";
    //         div.style.fontWeight = "bold";
    //         div.style.height = 600 + "px";
    //         div.style.textAlign = "center";
    //         div.innerHTML = "GAMECLEAR <br><a href = 'javascript:location.reload()'>Retry</a>";

    //         this.container.appendChild(div); //생성된 텍스트 div를 화면에 부착
    //     }
    // }

    tick(){
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
    }
}