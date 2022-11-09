import $ from "jquery";

//制造流星的方法()
const meteorGenerator = () => {
  //创建流星的头部
  const meteorFirst = $("<div></div>");
  //添加流星的头部的样式
  meteorFirst.addClass("first");

  //创建流星的脖子部分
  const meteorSecond = $("<div></div>");
  //添加流星的脖子部分的样式
  meteorSecond.addClass("second");

  //创建流星的小肚子
  const meteorThird = $("<div></div>");
  //添加流星的小肚子部分的样式
  meteorThird.addClass("third");

  //创建流星的小脚丫
  const meteorLast = $("<div></div>");
  //添加流星的小脚丫部分的样式
  meteorLast.addClass("last");

  //组合一颗完整的流星 然后返回组合好的流星
  return meteorFirst.prepend(
    meteorSecond.prepend(meteorThird.prepend(meteorLast))
  );
};

const meteorShowerGenerator = () => {
  //每次制造流星的个数为随机值 最少为1 最多为5
  const meteorBead = Math.random() * 9 + 1;
  for (let i = 0; i < meteorBead; i++) {
    //获取当前屏幕的高度及宽度或者当前窗体的高度及宽度
    const areaWidth = $(window).width() + 200;
    const areaHeight = $(window).height();
    //设置流星起始点的X轴横向位置范围  流星的横向起点一定得是最左边    从左--→右
    const meteorStart_X = parseInt(Math.random() * areaWidth, 10);

    //设置流星起始点的Y轴纵向位置范围  流星的纵向起点一定得是你看不见的地方
    const meteorStart_Y = parseInt(Math.random() * 10 - 20, 10);
    //设置流星的落地之时的X轴横向位置范围
    const meteorStop_X = parseInt(
      (areaWidth / 4) * Math.random() + areaWidth / 4,
      10
    );
    //设置流星的落地之时的Y轴纵向位置范围
    const meteorStop_Y = parseInt(areaHeight + 20, 10);
    //设置每一颗流星从开始到落地整个过程的动画时间
    const meteorFloatTime = parseInt(
      areaHeight * 2 * Math.random() + areaWidth * 2
    );

    //在当前流星雨区域添加这颗流星
    $(".meteor").prepend(meteorGenerator());
    //在当前区域中找到当前添加的这颗完整的流星 设置他的位置
    $(".meteor")
      .find(".first")
      .eq(0)
      .css({ left: meteorStart_X, top: meteorStart_Y });

    //这个动画时间是上面Css3中的自定义的流星下落时会被放大时的动画时间
    const animationTime = Math.round(meteorFloatTime / 1000.0) + "s";

    //给当前流星区域中添加的这颗完整的流星注册一下上面Css3中的自定义的流星下落时会被放大时的动画效果
    $(".meteor")
      .children(".first")
      .eq(0)
      .css({
        animation: "meteorBig " + animationTime,
        "-webkit-animation": "meteorBig " + animationTime,
        "-moz-animation": "meteorBig " + animationTime,
        "-o-animation": "meteorBig " + animationTime,
      });

    //在当前区域中找到当前添加的这颗完整的流星  设置它的动画  怎么从最上面移动到最下面  并且
    $(".meteor")
      .find(".first")
      .eq(0)
      .animate(
        { left: meteorStart_X - meteorStop_X, top: meteorStop_Y },
        meteorFloatTime,
        function () {
          //当流星落地之后自动消失
          $(this).remove();
        }
      );
  }
};

const addMeteorShower = (timeSpan) => {
  //显示流星雨  也就是每隔一段时间制造一定数目的流星出来
  return setInterval(meteorShowerGenerator, timeSpan);
};

const deleteMeteorShower = (meteorShowerIntervalResult) => {
  //当需要停止流星雨时就停止
  clearInterval(meteorShowerIntervalResult);
};

export {
  meteorGenerator,
  meteorShowerGenerator,
  addMeteorShower,
  deleteMeteorShower,
};
