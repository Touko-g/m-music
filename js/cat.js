if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    L2Dwidget.init({
        "model": {
            //jsonpath控制显示那个模型，替换时后面名字也要替换掉
            jsonPath: "https://unpkg.com/live2d-widget-model-hijiki/assets/hijiki.model.json",
            "scale": 1
        },
        "display": {
            "position": "left", //看板娘的表现位置
            "width": 50,  //model的宽度
            "height": 100, //model的高度
            "hOffset": 160,
            "vOffset": 380
        },
        "mobile": {
            "show": true,
            "scale": 0.5
        },
        "react": {
            "opacityDefault": 1,
            "opacityOnHover": 0.2
        }
    });
} else {
    L2Dwidget.init({
        "model": {
            //jsonpath控制显示那个模型，替换时后面名字也要替换掉
            jsonPath: "https://unpkg.com/live2d-widget-model-hijiki/assets/hijiki.model.json",
            "scale": 1
        },
        "display": {
            "position": "left", //看板娘的表现位置
            "width": 150,  //model的宽度
            "height": 300, //model的高度
            "hOffset": 20,
            "vOffset": -60
        },
        "mobile": {
            "show": true,
            "scale": 0.5
        },
        "react": {
            "opacityDefault": 1,
            "opacityOnHover": 0.2
        }
    });
}