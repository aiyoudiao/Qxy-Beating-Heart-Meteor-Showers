import "./self.css";
import "./heart.css";
import "./heart2.css";
import "./meteor.css";
import { addMeteorShower } from "./share/meteor";
import { useStarrySky } from "./share/starrySky";
import $ from "jquery";

document.querySelector("#app").innerHTML = `
<!-- 音乐 -->
<audio id="audio" autoplay="autoplay" loop>
      <source src="renxi.mp3" type="audio/mp3" />
</audio>
<!-- 星星背景 -->
<div id="starsBackground">
  <!-- 流星雨区域 -->
  <div class="meteor"></div>
  <!-- 爱心 -->
  <div class="Love">
      <div class="loveLeft"></div>
      <div class="loveRight"></div>
      <div class="loveBottom" ></div>
  </div>
  <div class="Love2">
  <div class="loveLeft2"></div>
  <div class="loveRight2"></div>
  <div class="loveBottom2" ></div>
</div>
</div>
<!--//爱-->
<div id="i_love_you" style="margin-top: -225px; top: 50%; left: 10%; width: 350px; height: 450px; position: fixed; color: pink; font-family: 华文琥珀 华文彩云 '幼圆'; text-align: center;transform:scale(1.5,1.5);-webkit-transform:scale(1.5,1.5);-moz-transform:scale(1.5,1.5);-o-transform:scale(1.5,1.5);text-shadow:0 0 20px pink;-webkit-text-shadow:0 0 20px pink;-moz-text-shadow:0 0 20px pink;-o-text-shadow:0 0 20px pink;">

    <h2>《青玉案·元夕》</h2>
    <h4 style="letter-spacing: 4px; font-weight: bolder;">东风夜放花千树，更吹落，星如雨</h4>
    <h4 style="letter-spacing: 4px; font-weight: bolder;">宝马雕车香满路</h4>
    <h4 style="letter-spacing: 4px; font-weight: bolder;">凤箫声动，玉壶光转，一夜鱼龙舞</h4>
    <h4 style="letter-spacing: 4px; font-weight: bolder;">蛾儿雪柳黄金缕，笑语盈盈暗香去</h4>
    <h5 style="line-height:10px">众里寻他千百度</h5>
    <h5 style="line-height:10px">蓦然回首</h5>
    <h5 style="line-height:10px">那人却在</h5>
    <h5 style="line-height:10px">灯火阑珊处</h5>

</div>
`;

$(() => {
  useStarrySky(1314);
  addMeteorShower(520);
  const music = document.querySelector("#audio");
  document.body.addEventListener("click", function () {
    if (music.paused) {
      music.play();
    }
  });
});
