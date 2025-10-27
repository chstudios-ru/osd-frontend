<style>
    .bgw{background-color:#fff}
    .bgb{background-color:#000}
    .b-bgw{background-color:#fff;height:25px;width:90%;}
    .b-bgb{background-color:#000;height:25px;width:90%;}
    .b{background-color:#000;height:20px;width:90%}
</style>
# OSD Frontend
> Здесь будет шпаргалка по работе с blayz.lib.css

### Основы
Что вообще можно делать:
- Анимация текста
- Менять настройки шрифта
- Менять цвета любых объектов
- unknown

Документация будет обновлятся по мере разработки библиотеки.
> Библиотека работает на чистом css, без sass,scss,js, поэтому некоторые моменты могут оказаться очень "глупыми" и не оптимизированными

### Цвета
|         Цвет        |         HEX        |                       Текст                         |                                     Блок                                       |
| :-----------------: |:------------------:| :-------------------------------------------------: | :----------------------------------------------------------------------------: |
--color-red           | `#FF0000`          | <div class="bgw" style="color:#FF0000">Пример</div> | <div class="b-bgw"><div class="b" style="background-color:#FF0000;"></div></div>
--color-green         | `#00FF00`          | <div class="bgw" style="color:#00FF00">Пример</div> | <div class="b-bgw"><div class="b" style="background-color:#00FF00;"></div></div>
--color-blue          | `#0000FF`          | <div class="bgw" style="color:#0000FF">Пример</div> | <div class="b-bgw"><div class="b" style="background-color:#0000FF;"></div></div>
--color-orange        | `#ffa500`          | <div class="bgw" style="color:#ffa500">Пример</div> | <div class="b-bgw"><div class="b" style="background-color:#ffa500;"></div></div>
--color-yellow        | `#ffff00`          | <div class="bgb" style="color:#ffff00">Пример</div> | <div class="b-bgw"><div class="b" style="background-color:#ffff00;"></div></div>
--color-pink          | `#ff00ff`          | <div class="bgw" style="color:#ff00ff">Пример</div> | <div class="b-bgw"><div class="b" style="background-color:#ff00ff;"></div></div>
--color-purple        | `#800080`          | <div class="bgw" style="color:#800080">Пример</div> | <div class="b-bgw"><div class="b" style="background-color:#800080;"></div></div>
--color-gray          | `#808080`          | <div class="bgw" style="color:#808080">Пример</div> | <div class="b-bgw"><div class="b" style="background-color:#808080;"></div></div>
--color-bgray         | `#111111`          | <div class="bgw" style="color:#111111">Пример</div> | <div class="b-bgw"><div class="b" style="background-color:#111111;"></div></div>
--color-black         | `#000000`          | <div class="bgw" style="color:#000000">Пример</div> | <div class="b-bgw"><div class="b" style="background-color:#000000;"></div></div>
--color-white         | `#ffffff`          | <div class="bgb" style="color:#ffffff">Пример</div> | <div class="b-bgb"><div class="b" style="background-color:#ffffff;"></div></div>
--color-text          | --color-bit-white  | <div class="bgb" style="color:#f4f4f4">Пример</div> | <div class="b-bgb"><div class="b" style="background-color:#f4f4f4;"></div></div>
--color-background    | --color-bit-gray   | <div class="bgw" style="color:#1a1c2c">Пример</div> | <div class="b-bgw"><div class="b" style="background-color:#1a1c2c;"></div></div>
--color-pastel-red    | `#ee70b5`          | <div class="bgw" style="color:#ee70b5">Пример</div> | <div class="b-bgw"><div class="b" style="background-color:#ee70b5;"></div></div>
--color-pastel-orange | `#eeb570`          | <div class="bgw" style="color:#eeb570">Пример</div> | <div class="b-bgw"><div class="b" style="background-color:#eeb570;"></div></div>
--color-pastel-yellow | `#ecffbc`          | <div class="bgb" style="color:#ecffbc">Пример</div> | <div class="b-bgw"><div class="b" style="background-color:#ecffbc;"></div></div>
--color-pastel-green  | `#b5ee70`          | <div class="bgw" style="color:#b5ee70">Пример</div> | <div class="b-bgw"><div class="b" style="background-color:#b5ee70;"></div></div>
--color-pastel-blue   | `#70b5ee`          | <div class="bgw" style="color:#70b5ee">Пример</div> | <div class="b-bgw"><div class="b" style="background-color:#70b5ee;"></div></div>
--color-pastel-cyan   | `#70eeb5`          | <div class="bgw" style="color:#70eeb5">Пример</div> | <div class="b-bgw"><div class="b" style="background-color:#70eeb5;"></div></div>
--color-pastel-pink   | `#ffbcec`          | <div class="bgw" style="color:#ffbcec">Пример</div> | <div class="b-bgw"><div class="b" style="background-color:#ffbcec;"></div></div>
--color-pastel-purple | `#b570ee`          | <div class="bgw" style="color:#b570ee">Пример</div> | <div class="b-bgw"><div class="b" style="background-color:#b570ee;"></div></div>
--color-pastel-gray   | `#474751`          | <div class="bgw" style="color:#474751">Пример</div> | <div class="b-bgw"><div class="b" style="background-color:#474751;"></div></div>
--color-pastel-white  | `#babad3`          | <div class="bgw" style="color:#babad3">Пример</div> | <div class="b-bgw"><div class="b" style="background-color:#babad3;"></div></div>
--color-pastel-worange| `#ffecbc`          | <div class="bgb" style="color:#ffecbc">Пример</div> | <div class="b-bgw"><div class="b" style="background-color:#ffecbc;"></div></div>
--color-pastel-wblue  | `#bcecff`          | <div class="bgb" style="color:#bcecff">Пример</div> | <div class="b-bgw"><div class="b" style="background-color:#bcecff;"></div></div>
--color-pastel-wcyan  | `#bcffec`          | <div class="bgb" style="color:#bcffec">Пример</div> | <div class="b-bgw"><div class="b" style="background-color:#bcffec;"></div></div>
--color-pastel-wpurple| `#ecbcff`          | <div class="bgw" style="color:#ecbcff">Пример</div> | <div class="b-bgw"><div class="b" style="background-color:#ecbcff;"></div></div>
--color-pastel-wgray  | `#8e8ea3`          | <div class="bgw" style="color:#8e8ea3">Пример</div> | <div class="b-bgw"><div class="b" style="background-color:#8e8ea3;"></div></div>
--color-pastel-wwhite | `#e3e3f2`          | <div class="bgb" style="color:#e3e3f2">Пример</div> | <div class="b-bgw"><div class="b" style="background-color:#e3e3f2;"></div></div>
--color-bit-red       | `#b13e53`          | <div class="bgw" style="color:#b13e53">Пример</div> | <div class="b-bgw"><div class="b" style="background-color:#b13e53;"></div></div>
--color-bit-orange    | `#ef7d57`          | <div class="bgw" style="color:#ef7d57">Пример</div> | <div class="b-bgw"><div class="b" style="background-color:#ef7d57;"></div></div>
--color-bit-yellow    | `#ffcd75`          | <div class="bgw" style="color:#ffcd75">Пример</div> | <div class="b-bgw"><div class="b" style="background-color:#ffcd75;"></div></div>
--color-bit-green     | `#38b764`          | <div class="bgw" style="color:#38b764">Пример</div> | <div class="b-bgw"><div class="b" style="background-color:#38b764;"></div></div>
--color-bit-blue      | `#29366f`          | <div class="bgw" style="color:#29366f">Пример</div> | <div class="b-bgw"><div class="b" style="background-color:#29366f;"></div></div>
--color-bit-sblue     | `#41a6f6`          | <div class="bgw" style="color:#41a6f6">Пример</div> | <div class="b-bgw"><div class="b" style="background-color:#41a6f6;"></div></div>
--color-bit-cyan      | `#257179`          | <div class="bgw" style="color:#257179">Пример</div> | <div class="b-bgw"><div class="b" style="background-color:#257179;"></div></div>
--color-bit-purple    | `#5d275d`          | <div class="bgw" style="color:#5d275d">Пример</div> | <div class="b-bgw"><div class="b" style="background-color:#5d275d;"></div></div>
--color-bit-gray      | `#1a1c2c`          | <div class="bgw" style="color:#1a1c2c">Пример</div> | <div class="b-bgw"><div class="b" style="background-color:#1a1c2c;"></div></div>
--color-bit-white     | `#f4f4f4`          | <div class="bgb" style="color:#f4f4f4">Пример</div> | <div class="b-bgb"><div class="b" style="background-color:#f4f4f4;"></div></div>
--color-bit-wgreen    | `#a7f070`          | <div class="bgw" style="color:#a7f070">Пример</div> | <div class="b-bgw"><div class="b" style="background-color:#a7f070;"></div></div>
--color-bit-wblue     | `#3b5dc9`          | <div class="bgw" style="color:#3b5dc9">Пример</div> | <div class="b-bgw"><div class="b" style="background-color:#3b5dc9;"></div></div>
--color-bit-wsblue    | `#73eff7`          | <div class="bgw" style="color:#73eff7">Пример</div> | <div class="b-bgw"><div class="b" style="background-color:#73eff7;"></div></div>
--color-bit-wgray     | `#333c57`          | <div class="bgw" style="color:#333c57">Пример</div> | <div class="b-bgw"><div class="b" style="background-color:#333c57;"></div></div>
--color-bit-wwgray    | `#566c86`          | <div class="bgw" style="color:#566c86">Пример</div> | <div class="b-bgw"><div class="b" style="background-color:#566c86;"></div></div>
--color-bit-wwwgray   | `#94b0c2`          | <div class="bgw" style="color:#94b0c2">Пример</div> | <div class="b-bgw"><div class="b" style="background-color:#94b0c2;"></div></div>