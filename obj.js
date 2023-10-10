const student ={
    name:'Adrian',
    logName: function(){
        console.log(this.name);
    },
    logName2: ()=> console.log(this),
}

student.logName2();
student.logName();