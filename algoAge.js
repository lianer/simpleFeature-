/**
 * 计算年龄
 * @param  {number} y 年
 * @param  {number} m 月
 * @param  {number} d 日
 * @return {number}   年龄
 */
function algoAge(y, m, d) {
    y*=1, m=m-1, d*=1;

    var birthday=new Date(y, m, d);
    if((~~birthday)===0){
        return -1;
    }
    birthday={
        y: birthday.getFullYear(),
        m: birthday.getMonth(),
        d: birthday.getDate()
    };
    if(birthday.y!==y || birthday.m!==m || birthday.d!==d){
        return -1;
    }

    var today=new Date();
    today={
        y: today.getFullYear(),
        m: today.getMonth(),
        d: today.getDate()
    };

    var age=today.y-birthday.y;
    if(age<=0){
        return 0;
    }

    // 如果生日的月日小于当前的月日，取闰年做对比更精确
    if(new Date(2000, today.m, today.d) < new Date(2000, birthday.m, birthday.d)){
        age--;
    }

    // 最大120岁
    if(age>=120){
        age=120;
    }
    
    return age;
}


var age=0;

age=algoAge(1992, 12, 31);
console.log(age);  // => 22

age=algoAge(1991, 0, 0);
console.log(age);  // -1