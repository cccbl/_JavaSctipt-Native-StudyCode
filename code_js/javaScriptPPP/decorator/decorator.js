

// let obj = { foo() { return 17; } }
class obj {
    foo() { return "666"; }

    foo2() {
        for (let i = 0; i < 10000; i++) {
            if(i==9990){
                return "99";
            }
        }
    }
}


function warp(model, key) {
    let objRes = Object.getOwnPropertyDescriptor(model.prototype, key)

    let log = function (...args) {
        let start = new Date().valueOf();
        try {
            return objRes.value.apply(this, args);
        } finally {
            let end = new Date().valueOf();
            console.log("[time]", end - start);
        }
    }

    Object.defineProperty(obj.prototype, key, {
        ...objRes,
        value: log
    })
    // console.log(objRes);
}

warp(obj, "foo");
warp(obj, "foo2");

console.error(new obj().foo2())
