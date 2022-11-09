import $ from "jquery";
import { generateRgbaColor } from "./tool";

//制造星星的方法
let star = null;
const createStar = () => {
  //创建一个span 作为星星
  const spanStar = star ? star.clone() : $("<span></span>");
  //定义一下星星的大小
  const starSize = Math.random() * 0.99 + "px";
  //定义一下星星的颜色
  const starColor = generateRgbaColor(0, 255, 1);
  //定义一下星星的光茫
  const starShine = "0 0 " + starSize + " " + starColor;
  //定义一下星星的坐标信息
  const starX = Math.random() * 100 + "%";
  const starY = Math.random() * 100 + "%";
  //给星星添加一个类样式
  spanStar.addClass("star");
  //再继续给星星增加动态样式
  spanStar
    .css("padding", starSize) //大小
    .css("background", starColor) //颜色
    .css("box-shadow", starShine) //光芒
    .css("left", starX) //x轴的位置
    .css("top", starY); //y轴的位置
  star = spanStar;
  return spanStar;
};

class StarrySky {
  //获取当前窗体对象
  static $window = $(window);
  constructor() {
    //获取当前星星背景对象
    this.starsBackground = $("#starsBackground");
  }
  // 初始化一个星空的方法
  initStarrySky(count) {
    //设置星空大小
    this.starsBackground.height(StarrySky.$window.height());
    this.starsBackground.width(StarrySky.$window.width());

    //循环制造指定数目的星星
    for (let i = 0; i < count; i++) {
      //星星
      const star = createStar();
      //添加星星到星空中
      this.starsBackground.prepend(star);
    }
  }

  //让所有的星星位置移动 从而触发星星的 transition属性
  starsRun() {
    //改变所有星星的坐标值 这样就相当于 手动触发
    $("#starsBackground")
      .children("span.star")
      .each(function () {
        //获取随机的坐标值
        const starX = Math.random() * 100 + "%";
        const starY = Math.random() * 100 + "%";
        //让当前的星星动起来
        $(this).css("left", starX).css("top", starY);
      });
  }

  //让星星在星空中动起来
  starsRunWithStarrySky() {
    //transition属性 是需要手动触发的 也就是当transition中 property所包含的css属性有变化时才会触发
    //transform属性 是设置后自动触发的

    //首次触发星星的 transition属性
    setTimeout(this.starsRun, 1000);

    //定时触发星星的 transition属性
    setInterval(this.starsRun, 52000);
  }

  //展示星空
  showStarrySky(count = 1314) {
    //初始化星空的方法
    this.initStarrySky(count);
    //让星空中的已有的星星动起来
    this.starsRunWithStarrySky();
  }
}

const useStarrySky = (count) => {
  const starrySky = new StarrySky();
  starrySky.showStarrySky(count);
};

export { StarrySky, useStarrySky };
