const ourFamily=[
    {
        name:'이창희',
        year:1968,
    },  
    {
        name:'곽혜경',
        year:1967,
    },
    {
        name:'이가현',
        year:1997,
    },
    {
        name:'이교준',
        year:2000

    }


]
class Country{
    name;
    location;

    constructor(name, location){
        this.name=name;
        this.location=location;
    }
}

class location{
    name;
    mbti;
    constructor(name,mbti){
        this.name=name;
        this.mbti=mbti;
    }
}
class leeFamily{
   name;
   year;
   constructor(name,year){
    this.name=name;
    this.year=year;
   } 
}
const courFamily=ourFamily.map(
    (x)=> new leeFamily(x['name'],x['year']) ,
);
console.log(courFamily);
