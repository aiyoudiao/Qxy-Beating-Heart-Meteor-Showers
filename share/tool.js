// 自定义随机数的方法
const generateRandom = (min, max) => {
  //获取计算后的结果
  const result = Math.random() * (max - min) + min;
  //返回四舍五入后的整数结果
  return Math.round(result);
};

const generateRgbaColor = (min, max, alpha) => {
  //红色的值
  var red = generateRandom(min, max);
  //绿色的值
  var green = generateRandom(min, max);
  //蓝色的值
  var blue = generateRandom(min, max);
  //返回最后用户自定义的一个rgba的色值
  //return "rgba(" + red + "," + green + "," + blue + "," + alpha + ")";
  return "pink";
};

export { generateRandom, generateRgbaColor };
