/* 각 아이템이 어떤 역할을 하고, 어떤 이미지를 갖고 있는지 대한 정보를
가진 객체 정의 */
// 디자인적으로 또는 시작적으로 보여지는 클래스가 아니라, 아이템의 정보를 가진 객체
class ItemRole{
    constructor(role, src){
        this.role=role;
        this.src=src;
    }
}