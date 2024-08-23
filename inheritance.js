/**
 * Inheritance
 */
class IdolModel{
    name;
    year;

    constructor(name,year){
        this.name=name;
        this.year=year;
    }
}
class FemaleIdolModel extends IdolModel{
    dance(){
        return `${this.name}이 춤을 춥니다.`;
    }
}
class MaleIdolModel extends IdolModel{
    sing(){
        return `${this.name}이 노래를 부릅니다.`;
    }
}
const yuJin=new FemaleIdolModel('안유진',2003);
console.log(yuJin);
const GDragon=new MaleIdolModel('권지용',1993);
console.log(GDragon);

console.log(yuJin.dance());
console.log(GDragon.sing());

const kyojune=new IdolModel('이교준',2000);
console.log(kyojune);
console.log(yuJin instanceof FemaleIdolModel);
console.log(kyojune instanceof IdolModel);
