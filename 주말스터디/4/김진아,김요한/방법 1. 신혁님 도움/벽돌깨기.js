class Block{
    constructor(wrapper,src,wrapper_width,wrapper_height,left,top){
        this.wrapper=wrapper;
        this.src=src;
        this.wrapper_width=wrapper_width;
        this.wrapper_height=wrapper_height;
        this.left=left;
        this.top=top;

        this.width=100;
        this.heigth=100;

        this.img=document.createElement("img");
        this.img.src=this.src;
        this.img.style.width=this.width+"px";
        this.img.style.height=this.heigth+"px";
        this.img.style.margin="0px";
        this.img.style.padding="0px";
        this.img.style.position="absolute";

        this.img.style.opacity=1;

        this.img.style.left = left + "px";
        this.img.style.top =top + "px";

        this.wrapper.appendChild(this.img);
    }
}