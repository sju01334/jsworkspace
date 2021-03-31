//공을 정의한다.
class Brickball{
    constructor(container, src, width, height, velX, velY){
        //멤버변수
        this.container=container;//어디에 붙일이 결정짓지 말고, 호출자가 결정
        this.src=src;
        this.x=0;
        this.y=0;
        this.width=width;
        this.height=height;
        this.velX=velX; 
        this.velY=velY; 
        this.limitX=parseInt(this.container.style.width); //공의 x축 한계점
        this.limitY=parseInt(this.container.style.height); //공의 y축 한계점
        // this.r=0; //각도
        
        this.img=document.createElement("img"); //공을 감쌀 img
        this.img.style.width=this.width+"px";
        this.img.style.height=this.height+"px";
        // this.img.style.background="red";
        this.img.src=this.src;
        this.img.style.position="absolute";
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
        
        //img를 부모요소에 부착
        this.container.appendChild(this.img)
        
    }
    
    tick(){
        
        this.x+=this.velX; //10씩 증가하는 등속도 운동
        this.y+=this.velY; //10씩 증가하는 등속도 운동2
        

        //축의 경계에 다다르면
        if(this.y>=this.limitY-this.height || this.y<=0){
            this.velY*=-1;   
        }
        if(this.x>=this.limitX-this.width || this.x<=0){
            this.velX*=-1;
        }

        //축의 경계에 다다르면
        // if(this.y>=this.limitY-this.height || this.y<=0 || this.x>=this.limitX-this.width || this.x<=0){
        //     alert("GAME OVER");
        //     document.location.reload();
        //     clearInterval(st);
        // }

        for(var i=0;i<brickArray.length;i++){
            switch(hitTestAll(this.img, brickArray[i].div, 230, 80)){
                case 1: this.velX=-1;
                brickArray[i].div.style.opacity-=0.2;
                // console.log
                    break;
                case 2: this.velY=-1;
                brickArray[i].div.style.opacity-=0.2;
                    break;
                case 3: this.velX=1;
                brickArray[i].div.style.opacity-=0.2;
                    break;
                    case 4: this.velY=1;
                    brickArray[i].div.style.opacity-=0.2;
                    break;
            }
        }

        if(brickArray[0].div.style.opacity<=0 &&
            brickArray[1].div.style.opacity<=0 &&
            brickArray[2].div.style.opacity<=0 &&
            brickArray[3].div.style.opacity<=0){
            alert("끝");
        }

        switch(hitTestAll(this.img, bar, 0, 0)){
            case 1: this.velX=-2;
                // console.log()
                break;
            case 2: this.velY=-2;
                break;
            case 3: this.velX=2;
                break;
            case 4: this.velY=2;
                break;
        }

        

        
    }
    render(){
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
        // this.r++;
        // this.img.style.transform="rotate("+this.r+"deg)";

    }
}