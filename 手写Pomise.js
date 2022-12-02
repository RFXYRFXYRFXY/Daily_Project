function rfxyPromise(executor) {
    this.status = "pending";
    this.result = undefined;
    this.cb = [];
​
    var _this = this;
​
    function resolve(res) {
        if (_this.status !== "pending") {
            return;
        }
        _this.status = "fulfilled";
        _this.result = res;
        //使用forEach进行遍历
        _this.cb.forEach(item => {
            item.successCB && item.successCB(_this.result)
        })
    }
    function reject(res) {
        if (_this.status !== "pending") {
            return;
        }
        _this.status = "rejected";
        _this.result = res;
        //使用forEach进行遍历
        _this.cb.forEach(item => {
            item.failCB &&item.failCB(_this.result)
        })
    }
    executor(resolve, reject);
}

rfxyPromise.prototype.then = function (successCB, failCB) {
    if (this.status === "fulfilled") {
        successCB(this.result);
    }
    if (this.status === "rejected") {
        failCB && failCB(this.result);
    }
    if (this.status === "pending") {
        //用push方法进行压栈操作
        this.cb.push({
            successCB,
            failCB
        });
    }
};


var p = new rfxyPromise((resolve, reject) => {
    resolve("调用resolve方法")
    //reject("调用reject方法")
})
​
p.then((res) => {
    console.log(res)
}, (err) => {
    console.log(err)
})

