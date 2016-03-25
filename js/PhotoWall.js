/**
 * Created by lianghao on 2016/3/10.
 */
window.onload = function () {
    imgLocation("container", "box")

    //自定义数据源 json格式
    var imgUrl =
    {"url": [{"src": "1.jpg"}, {"src": "2.jpg"}, {"src": "3.jpg"}, {"src": "4.jpg"}, {"src": "5.jpg"}, {"src": "6.jpg"}, {"src": "7.jpg"}, {"src": "8.jpg"}, {"src": "9.jpg"}]};

    window.onscroll = function () {
        if (checkFlag()) {
          var cparent=document.getElementById("container");
            for(var i=0;i<imgUrl.url.length;i++){
                var ccontent=document.createElement("div");
                ccontent.className="box";
                cparent.appendChild(ccontent);
                var boximg=document.createElement("div");
                boximg.className="box_img";
                ccontent.appendChild(boximg);
                var img=document.createElement("img");
                img.src="imgs/"+imgUrl.url[i].src;
                boximg.appendChild(img);

            }
            imgLocation("container", "box");
        }
    }

}
//是否加载图片
function checkFlag() {
    var cparent = document.getElementById("container");
    var ccontent = getChildElement(cparent, "box");
    var lastContentHeight = ccontent[ccontent.length - 1].offsetTop;//最后一张图片距离顶部的距离
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;//获取活动条滑动的距离
    var pageHeight = document.documentElement.clientHeight || document.body.clientHeight;//获取当前页面的高度

    if (lastContentHeight < scrollTop + pageHeight) {
        return true;
    }

}


//获取图片数量
function imgLocation(parent, content) {
    //将parent下的所有content全部取出
    var cparent = document.getElementById(parent)//得到父级控件
    var ccontent = getChildElement(cparent, content);//子级控件
    //console.log(ccontent);


    var imgWidth = ccontent[0].offsetWidth;//每个图片的宽度


    var num = Math.floor(document.documentElement.clientWidth / imgWidth);//获取每一行可以放几张图片

    cparent.style.cssText = "width:" + imgWidth * num + "px;;margin:0 auto";//重置位置

    var boxHeightArr = [];//存放盒子的高度

    for (var i = 0; i < ccontent.length; i++) {
        if (i < num) {
            boxHeightArr[i] = ccontent[i].offsetHeight;//每个盒子的高度
        } else {

            var minHeight = Math.min.apply(null, boxHeightArr);//得到盒子中最小的高度
            var minIndex = getMinHeightLocation(boxHeightArr, minHeight);//盒子中高度最小的盒子位置
            ccontent[i].style.position = "absolute";
            ccontent[i].style.top = minHeight + "px";
            ccontent[i].style.left = ccontent[minIndex].offsetLeft + "px";
            boxHeightArr[minIndex] = boxHeightArr[minIndex] + ccontent[i].offsetHeight;
        }
    }

}

//获取盒子中高度最小的盒子位置
function getMinHeightLocation(boxHeightArr, minHeight) {

    for (var i in boxHeightArr) {
        if (boxHeightArr[i] == minHeight) {
            return i;
        }
    }

}

//得到子控件的集合
function getChildElement(parent, content) {

    var contentArr = [];
    var allContent = parent.getElementsByTagName("*");//得到所有内容
    for (var i = 0; i < allContent.length; i++) {

        //alert(allContent[i].className)

        if (allContent[i].className == content) {
            contentArr.push(allContent[i]);
        }
    }
    return contentArr;
}