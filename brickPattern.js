var pattern =
[


0


]


var top = 123;
var left = 63;
var count = 0;
var num = -1;
pattern = pattern.map( (x) => {


  if(count===5)

    {top+= 33; left = 63;count=0;}

    count++;

  if(x===0)
    {left += 63;return 0} else

    if (x===1)
      {
        num++;
        left += 63;
        return [top,left,num] }


})


pattern = pattern.filter(x=>x!==0)

export default pattern;