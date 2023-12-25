//深拷贝和浅拷贝只针对Array和Object这种引用类型


//深拷贝开辟一个新的栈，两个对象属性完全相同，但对应两个不同的地址，修改一个对象的属性，并不会修改另一个对象的属性








function deepClone(obj, hash = new WeakMap()) {
    if (obj === null) return obj; // 如果是null或者undefined我就不进行拷贝操作
    if (obj instanceof Date) return new Date(obj);
    if (obj instanceof RegExp) return new RegExp(obj);
    // 可能是对象或者普通的值  如果是函数的话是不需要深拷贝
    if (typeof obj !== "object") return obj;
    // 是对象的话就要进行深拷贝
    if (hash.get(obj)) return hash.get(obj);
    let cloneObj = new obj.constructor();
    // 找到的是所属类原型上的constructor,而原型上的 constructor指向的是当前类本身
    hash.set(obj, cloneObj);
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            // 实现一个递归拷贝
            cloneObj[key] = deepClone(obj[key], hash);
        }
    }
    return cloneObj;
}


let data = {
    name: 'xxxxx',
    age: 10,
    c: {
        sex:'nv',
        weight:50
    }
};
deepClone(data);

