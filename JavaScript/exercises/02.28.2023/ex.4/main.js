class books{
    constructor(a,b,c,d,e,f,g){
        this.title = a;
        this.author = b;
        this.copyrightDate = c;
        this.ISBN = d;
        this.numberOfPages = e;
        this.numberOfTimesCheckedOut = f;
        this.discarded = g;
    }

}

let novelClass = new books(
    "Pride and prejeduce",
    "Jane Austin",
    1813,
    111111111111,
    432,
    32,
    "No"
    );

console.log(novelClass);

let manualClass = new books(
    "Top Secret Shuttle Building",
    "Redacted",
    2013,
    00000000000,
    1147,
    1,
    "No"
)

console.log(manualClass);