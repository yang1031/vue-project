// 根据json数组中的对象的属性值给数组排序
export function compare(pro) {
  return function(obj1, obj2) {
    const val1 = obj1[pro];
    const val2 = obj2[pro];
    if (val1 < val2) {
      return 1;
    } else if (val1 > val2) {
      return -1;
    } else {
      return 0;
    }
  };
}
// 对数字进行格式化为每三位加一个逗号（JS三位分节法或者叫JS千分位加逗号）
export function thousands(num) {
  const str = num.toString();
  const reg =
    str.indexOf(".") > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g;
  return str.replace(reg, "$1,");
}
