/**
 * 测试快速排序法的效率
 * 记录：
 *     length: 2,000
 *     quick:  7ms         25,839次循环
 *     normal: 8ms         2,001,000次循环
 * 
 *     length: 20,000
 *     quick:  25ms        330,574次循环
 *     normal: 952ms       约2亿次循环
 * 
 *     length: 200,000
 *     quick:  206ms       4,164,458次循环
 *     normal: 99,202ms    等了许久，洗了个脸回来终于好了，约200亿次循环
 * 结论：
 *     数组长度越大快速排序法越优于普通排序法，有奇效
 */

var arr=[];

var count={
    quick: 0,
    normal: 0
};

function quickSort(arr, desc) {
    if(arr.length<2){
        return arr;
    }

    var base=arr[0], small=[], big=[];

    for (var i = 1, len=arr.length, n; i<len; i++) {
        count.quick++;
        n=arr[i];
        if(n<base){
            small.push(n);
        }
        else{
            big.push(n);
        }
    };

    if(desc){
        return quickSort(big, true).concat(base).concat(quickSort(small, true));
    }
    else{
        return quickSort(small).concat(base).concat(quickSort(big));
    }
}

function normalSort(arr, desc) {
    for (var i = 0, len=arr.length, temp; i < len; i++) {
        for (var j = i; j < len; j++) {
            count.normal++;
            if(desc){
                if(arr[j]>arr[i]){
                    temp=arr[j];
                    arr[j]=arr[i];
                    arr[i]=temp;
                }
            }
            else{
                if(arr[j]<arr[i]){
                    temp=arr[j];
                    arr[j]=arr[i];
                    arr[i]=temp;
                }
            }
        };
    };
    return arr;
}

function createRandom(length, max, min) {
    var arr=[];
    for (var i = 0, r; i < length; i++) {
        r=Math.random()*(max-min)+min;
        arr.push(r);
    }
    return arr;
}

// quickSort(createRandom(10, 1, 10));

test();

function test() {
    var length=2e4;
    console.log("start...");
    console.log("length: " + length);
    console.log("-----------");

    setTimeout(function () {
        arr=createRandom(length, 0, 100);
        testQuick(arr, true);

        setTimeout(function () {
            arr=createRandom(length, 0, 100);
            testNormal(arr, true);

            console.log("-----------");
            console.log(count);
            console.log("-----------");
        }, 300);
    }, 300);

    function testQuick(arr) {
        var st=new Date();
        quickSort(arr);
        if(time){ console.log("quick: " + (new Date() - st) + "ms"); }
    }

    function testNormal(arr) {
        var st=new Date();
        normalSort(arr);
        console.log("normal: " + (new Date() - st) + "ms");
    }
}