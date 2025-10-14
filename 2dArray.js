var score=[
    [70,80,90,60,80],
    [80,90,70,75,85],
    [85,85,80,90,80]
]
function avg(score){
    var sum=0;
    for(var i=0;i<score.length;i++){
        sum += score[i];
    }
    //if(score.length>0)
    //    average=sum/score.length;
    return (score.length>0) ? sum/score.length : 0;
}
//var Score=[50,20,30,15,16,21,33,11,9,27];

for(var i=0;i<score.length;i++){
    console.log("student" + (i + 1)+"avg:"+ avg(score[i]));
}
//console.log("Score[0]="+Score[0]);
//console.log("Score[1]="+Score[1]);
//console.log("Score[2]="+Score[2]);
//avg for every element