// 轻量级的为函数或者变量添加的约束
;
(function () {
    function showMsg(str) {
        return '一二三 ' + str;
    }
    // let msg = '四五六'
    var msg = [1, 2, 3];
    console.log(showMsg(msg));
})();
