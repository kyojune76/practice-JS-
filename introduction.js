
class country{
    name;
    gamenames;
    constructor(name,gamenames){
        this.name=name;
        this.gamenames=gamenames;
    }
}
class gamename{
    name;
    game;
    constructor(name,game){
        this.name=name;
        this.game=game;
    }
}


class game{
    job;
    tier;
    constructor(job,tier){
        this.job=job;
        this.tier=tier;
    }
}
class mapleStory extends game{
  
}

class lostArk extends game{

}
const ljob=[
    {job:'스트라이커',
    tier:'1티어',
    },
    {job:'블래스터',
        tier:'2티어',
    },
    {job:'방랑전사',
        tier:'3티어',
        },
        
];

const mjob=[{
    job: '표창도적',
    tier: '1티어',
},{
job: '미하일',
    tier: '2티어',
},
{
    job:'신궁',
    tier:'3티어',
},{
    job: '히어로',
    tier: '4티어',
}
]



//생성자 함수

console.log(new mapleStory('표창도적','1티어'));

const cmapleStory=mjob.map(
    (x)=>new mapleStory(x['job'],x['tier']),
)
const clostArk=ljob.map(
    (x)=> new lostArk(x['job'],x['tier']),
)
console.log(cmapleStory);
console.log('-----------------------');
console.log(clostArk);
const gmaple=new gamename(
    '메이플',
    cmapleStory,

)
const glostArk=new gamename(
    '로스트 아크',
     clostArk,

)
console.log(gmaple);
console.log(glostArk);
console.log('-----------------------');
const korea=new country(
    '대한민국',
    [
        gmaple,
        glostArk,
    ],
);
console.log(korea);
const alltogether=new country(
    '대한민국',
    [
        new gamename(
            '메이플스토리',
            mjob.map(
                (x)=>new mapleStory(x['job'],x['tier']),
            ),

        ),
        new gamename(
            '로스트아크',
            ljob.map(
                (x) => new lostArk(x['job'],x['tier']),
            ),
            

        ),
    ],
);

console.log(alltogether);
