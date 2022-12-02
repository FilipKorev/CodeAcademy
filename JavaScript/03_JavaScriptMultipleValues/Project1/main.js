const theList = [
    'Laurence', 
    'Svekis', 
    true, 
    35,
    null, 
    undefined, 
    {test: 'one', score: 55}, 
    ['one', 'two']
];

theList.shift();
theList.unshift("first");
theList[3] = "Hello World";
theList[2] = "MIDDLE";
theList.pop();
theList.pop();
theList.pop();
theList.pop();
theList.push("LAST");
console.log(theList);


