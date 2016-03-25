/**
 * Created by lianghao on 2016/3/10.
 */
function People() {

}
People.prototype.say = function () {
    alert("hello")
}

function Student() {

}
Student.prototype = new People();
var superSay = Student.prototype.say;
Student.prototype.say = function () {
    superSay.call(this);
    alert("stu-hello")
}
var stu = new Student();
stu.say();

//创建一个类
(function () {//封装
    function Person(name) {
        var _this = {}
        _this.name = name;
        _this.sayHello = function () {
            alert("Hello" + _this.name);
        }
        return _this;
    }
    window.Person=Person;

}())

function Teacher(name) {
    var _this = Person(name);
    var superSay = _this.sayHello();
    //复写父类的方法
    _this.sayHello = function () {
        //强制调用父类的方法
        superSay.call(_this);
        alert("hello")
    }
    return _this;
}

var t = Teacher("im");
t.sayHello();