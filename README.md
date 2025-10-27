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
| Цвет | HEX | Текст | Блок |
|:---:|:---:|:---:|:---:|
| --color-red | `#FF0000` | <span style="color:#FF0000;background:#fff">Пример</span> | <div style="background:#fff;height:25px;width:90%"><div style="background:#FF0000;height:20px;width:90%"></div></div> |
| --color-green | `#00FF00` | <span style="color:#00FF00;background:#fff">Пример</span> | <div style="background:#fff;height:25px;width:90%"><div style="background:#00FF00;height:20px;width:90%"></div></div> |
| --color-blue | `#0000FF` | <span style="color:#0000FF;background:#fff">Пример</span> | <div style="background:#fff;height:25px;width:90%"><div style="background:#0000FF;height:20px;width:90%"></div></div> |
| --color-orange | `#ffa500` | <span style="color:#ffa500;background:#fff">Пример</span> | <div style="background:#fff;height:25px;width:90%"><div style="background:#ffa500;height:20px;width:90%"></div></div> |
| --color-yellow | `#ffff00` | <span style="color:#ffff00;background:#000">Пример</span> | <div style="background:#fff;height:25px;width:90%"><div style="background:#ffff00;height:20px;width:90%"></div></div> |
| --color-pink | `#ff00ff` | <span style="color:#ff00ff;background:#fff">Пример</span> | <div style="background:#fff;height:25px;width:90%"><div style="background:#ff00ff;height:20px;width:90%"></div></div> |
| --color-purple | `#800080` | <span style="color:#800080;background:#fff">Пример</span> | <div style="background:#fff;height:25px;width:90%"><div style="background:#800080;height:20px;width:90%"></div></div> |
| --color-gray | `#808080` | <span style="color:#808080;background:#fff">Пример</span> | <div style="background:#fff;height:25px;width:90%"><div style="background:#808080;height:20px;width:90%"></div></div> |
| --color-bgray | `#111111` | <span style="color:#111111;background:#fff">Пример</span> | <div style="background:#fff;height:25px;width:90%"><div style="background:#111111;height:20px;width:90%"></div></div> |
| --color-black | `#000000` | <span style="color:#000000;background:#fff">Пример</span> | <div style="background:#fff;height:25px;width:90%"><div style="background:#000000;height:20px;width:90%"></div></div> |
| --color-white | `#ffffff` | <span style="color:#ffffff;background:#000">Пример</span> | <div style="background:#000;height:25px;width:90%"><div style="background:#ffffff;height:20px;width:90%"></div></div> |
| --color-text | --color-bit-white | <span style="color:#f4f4f4;background:#000">Пример</span> | <div style="background:#000;height:25px;width:90%"><div style="background:#f4f4f4;height:20px;width:90%"></div></div> |
| --color-background | --color-bit-gray | <span style="color:#1a1c2c;background:#fff">Пример</span> | <div style="background:#fff;height:25px;width:90%"><div style="background:#1a1c2c;height:20px;width:90%"></div></div> |
| --color-pastel-red | `#ee70b5` | <span style="color:#ee70b5;background:#fff">Пример</span> | <div style="background:#fff;height:25px;width:90%"><div style="background:#ee70b5;height:20px;width:90%"></div></div> |
| --color-pastel-orange | `#eeb570` | <span style="color:#eeb570;background:#fff">Пример</span> | <div style="background:#fff;height:25px;width:90%"><div style="background:#eeb570;height:20px;width:90%"></div></div> |
| --color-pastel-yellow | `#ecffbc` | <span style="color:#ecffbc;background:#000">Пример</span> | <div style="background:#fff;height:25px;width:90%"><div style="background:#ecffbc;height:20px;width:90%"></div></div> |
| --color-pastel-green | `#b5ee70` | <span style="color:#b5ee70;background:#fff">Пример</span> | <div style="background:#fff;height:25px;width:90%"><div style="background:#b5ee70;height:20px;width:90%"></div></div> |
| --color-pastel-blue | `#70b5ee` | <span style="color:#70b5ee;background:#fff">Пример</span> | <div style="background:#fff;height:25px;width:90%"><div style="background:#70b5ee;height:20px;width:90%"></div></div> |
| --color-pastel-cyan | `#70eeb5` | <span style="color:#70eeb5;background:#fff">Пример</span> | <div style="background:#fff;height:25px;width:90%"><div style="background:#70eeb5;height:20px;width:90%"></div></div> |
| --color-pastel-pink | `#ffbcec` | <span style="color:#ffbcec;background:#fff">Пример</span> | <div style="background:#fff;height:25px;width:90%"><div style="background:#ffbcec;height:20px;width:90%"></div></div> |
| --color-pastel-purple | `#b570ee` | <span style="color:#b570ee;background:#fff">Пример</span> | <div style="background:#fff;height:25px;width:90%"><div style="background:#b570ee;height:20px;width:90%"></div></div> |
| --color-pastel-gray | `#474751` | <span style="color:#474751;background:#fff">Пример</span> | <div style="background:#fff;height:25px;width:90%"><div style="background:#474751;height:20px;width:90%"></div></div> |
| --color-pastel-white | `#babad3` | <span style="color:#babad3;background:#fff">Пример</span> | <div style="background:#fff;height:25px;width:90%"><div style="background:#babad3;height:20px;width:90%"></div></div> |
| --color-pastel-worange | `#ffecbc` | <span style="color:#ffecbc;background:#000">Пример</span> | <div style="background:#fff;height:25px;width:90%"><div style="background:#ffecbc;height:20px;width:90%"></div></div> |
| --color-pastel-wblue | `#bcecff` | <span style="color:#bcecff;background:#000">Пример</span> | <div style="background:#fff;height:25px;width:90%"><div style="background:#bcecff;height:20px;width:90%"></div></div> |
| --color-pastel-wcyan | `#bcffec` | <span style="color:#bcffec;background:#000">Пример</span> | <div style="background:#fff;height:25px;width:90%"><div style="background:#bcffec;height:20px;width:90%"></div></div> |
| --color-pastel-wpurple | `#ecbcff` | <span style="color:#ecbcff;background:#fff">Пример</span> | <div style="background:#fff;height:25px;width:90%"><div style="background:#ecbcff;height:20px;width:90%"></div></div> |
| --color-pastel-wgray | `#8e8ea3` | <span style="color:#8e8ea3;background:#fff">Пример</span> | <div style="background:#fff;height:25px;width:90%"><div style="background:#8e8ea3;height:20px;width:90%"></div></div> |
| --color-pastel-wwhite | `#e3e3f2` | <span style="color:#e3e3f2;background:#000">Пример</span> | <div style="background:#fff;height:25px;width:90%"><div style="background:#e3e3f2;height:20px;width:90%"></div></div> |
| --color-bit-red | `#b13e53` | <span style="color:#b13e53;background:#fff">Пример</span> | <div style="background:#fff;height:25px;width:90%"><div style="background:#b13e53;height:20px;width:90%"></div></div> |
| --color-bit-orange | `#ef7d57` | <span style="color:#ef7d57;background:#fff">Пример</span> | <div style="background:#fff;height:25px;width:90%"><div style="background:#ef7d57;height:20px;width:90%"></div></div> |
| --color-bit-yellow | `#ffcd75` | <span style="color:#ffcd75;background:#fff">Пример</span> | <div style="background:#fff;height:25px;width:90%"><div style="background:#ffcd75;height:20px;width:90%"></div></div> |
| --color-bit-green | `#38b764` | <span style="color:#38b764;background:#fff">Пример</span> | <div style="background:#fff;height:25px;width:90%"><div style="background:#38b764;height:20px;width:90%"></div></div> |
| --color-bit-blue | `#29366f` | <span style="color:#29366f;background:#fff">Пример</span> | <div style="background:#fff;height:25px;width:90%"><div style="background:#29366f;height:20px;width:90%"></div></div> |
| --color-bit-sblue | `#41a6f6` | <span style="color:#41a6f6;background:#fff">Пример</span> | <div style="background:#fff;height:25px;width:90%"><div style="background:#41a6f6;height:20px;width:90%"></div></div> |
| --color-bit-cyan | `#257179` | <span style="color:#257179;background:#fff">Пример</span> | <div style="background:#fff;height:25px;width:90%"><div style="background:#257179;height:20px;width:90%"></div></div> |
| --color-bit-purple | `#5d275d` | <span style="color:#5d275d;background:#fff">Пример</span> | <div style="background:#fff;height:25px;width:90%"><div style="background:#5d275d;height:20px;width:90%"></div></div> |
| --color-bit-gray | `#1a1c2c` | <span style="color:#1a1c2c;background:#fff">Пример</span> | <div style="background:#fff;height:25px;width:90%"><div style="background:#1a1c2c;height:20px;width:90%"></div></div> |
| --color-bit-white | `#f4f4f4` | <span style="color:#f4f4f4;background:#000">Пример</span> | <div style="background:#000;height:25px;width:90%"><div style="background:#f4f4f4;height:20px;width:90%"></div></div> |
| --color-bit-wgreen | `#a7f070` | <span style="color:#a7f070;background:#fff">Пример</span> | <div style="background:#fff;height:25px;width:90%"><div style="background:#a7f070;height:20px;width:90%"></div></div> |
| --color-bit-wblue | `#3b5dc9` | <span style="color:#3b5dc9;background:#fff">Пример</span> | <div style="background:#fff;height:25px;width:90%"><div style="background:#3b5dc9;height:20px;width:90%"></div></div> |
| --color-bit-wsblue | `#73eff7` | <span style="color:#73eff7;background:#fff">Пример</span> | <div style="background:#fff;height:25px;width:90%"><div style="background:#73eff7;height:20px;width:90%"></div></div> |
| --color-bit-wgray | `#333c57` | <span style="color:#333c57;background:#fff">Пример</span> | <div style="background:#fff;height:25px;width:90%"><div style="background:#333c57;height:20px;width:90%"></div></div> |
| --color-bit-wwgray | `#566c86` | <span style="color:#566c86;background:#fff">Пример</span> | <div style="background:#fff;height:25px;width:90%"><div style="background:#566c86;height:20px;width:90%"></div></div> |
| --color-bit-wwwgray | `#94b0c2` | <span style="color:#94b0c2;background:#fff">Пример</span> | <div style="background:#fff;height:25px;width:90%"><div style="background:#94b0c2;height:20px;width:90%"></div></div> |