function exercise(activity){
    return `Today's activity: ${activity}`;
}

function run(){
    var run = exercise('running');
    return run;
}

function swim(){
    var swim = exercise('swimming');
    return swim;
}

console.log(run());
console.log(swim())