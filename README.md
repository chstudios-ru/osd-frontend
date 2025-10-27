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
|------|-----|-------|------|
| --color-red | `#FF0000` | <span style="color:#FF0000">Пример</span> | <svg width="90" height="20"><rect width="90" height="20" fill="#FF0000"/></svg> |
| --color-green | `#00FF00` | <span style="color:#00FF00">Пример</span> | <svg width="90" height="20"><rect width="90" height="20" fill="#00FF00"/></svg> |
| --color-blue | `#0000FF` | <span style="color:#0000FF">Пример</span> | <svg width="90" height="20"><rect width="90" height="20" fill="#0000FF"/></svg> |
| --color-orange | `#ffa500` | <span style="color:#ffa500">Пример</span> | <svg width="90" height="20"><rect width="90" height="20" fill="#ffa500"/></svg> |
| --color-yellow | `#ffff00` | <span style="color:#ffff00">Пример</span> | <svg width="90" height="20"><rect width="90" height="20" fill="#ffff00"/></svg> |
| --color-pink | `#ff00ff` | <span style="color:#ff00ff">Пример</span> | <svg width="90" height="20"><rect width="90" height="20" fill="#ff00ff"/></svg> |
| --color-purple | `#800080` | <span style="color:#800080">Пример</span> | <svg width="90" height="20"><rect width="90" height="20" fill="#800080"/></svg> |
| --color-gray | `#808080` | <span style="color:#808080">Пример</span> | <svg width="90" height="20"><rect width="90" height="20" fill="#808080"/></svg> |
| --color-bgray | `#111111` | <span style="color:#111111">Пример</span> | <svg width="90" height="20"><rect width="90" height="20" fill="#111111"/></svg> |
| --color-black | `#000000` | <span style="color:#000000">Пример</span> | <svg width="90" height="20"><rect width="90" height="20" fill="#000000"/></svg> |
| --color-white | `#ffffff` | <span style="color:#ffffff;background:#333">Пример</span> | <svg width="90" height="20"><rect width="90" height="20" fill="#ffffff" stroke="#ccc" stroke-width="1"/></svg> |
| --color-text | --color-bit-white | <span style="color:#f4f4f4;background:#333">Пример</span> | <svg width="90" height="20"><rect width="90" height="20" fill="#f4f4f4" stroke="#ccc" stroke-width="1"/></svg> |
| --color-background | --color-bit-gray | <span style="color:#1a1c2c">Пример</span> | <svg width="90" height="20"><rect width="90" height="20" fill="#1a1c2c"/></svg> |
| --color-pastel-red | `#ee70b5` | <span style="color:#ee70b5">Пример</span> | <svg width="90" height="20"><rect width="90" height="20" fill="#ee70b5"/></svg> |
| --color-pastel-orange | `#eeb570` | <span style="color:#eeb570">Пример</span> | <svg width="90" height="20"><rect width="90" height="20" fill="#eeb570"/></svg> |
| --color-pastel-yellow | `#ecffbc` | <span style="color:#ecffbc;background:#333">Пример</span> | <svg width="90" height="20"><rect width="90" height="20" fill="#ecffbc" stroke="#ccc" stroke-width="1"/></svg> |
| --color-pastel-green | `#b5ee70` | <span style="color:#b5ee70">Пример</span> | <svg width="90" height="20"><rect width="90" height="20" fill="#b5ee70"/></svg> |
| --color-pastel-blue | `#70b5ee` | <span style="color:#70b5ee">Пример</span> | <svg width="90" height="20"><rect width="90" height="20" fill="#70b5ee"/></svg> |
| --color-pastel-cyan | `#70eeb5` | <span style="color:#70eeb5">Пример</span> | <svg width="90" height="20"><rect width="90" height="20" fill="#70eeb5"/></svg> |
| --color-pastel-pink | `#ffbcec` | <span style="color:#ffbcec">Пример</span> | <svg width="90" height="20"><rect width="90" height="20" fill="#ffbcec"/></svg> |
| --color-pastel-purple | `#b570ee` | <span style="color:#b570ee">Пример</span> | <svg width="90" height="20"><rect width="90" height="20" fill="#b570ee"/></svg> |
| --color-pastel-gray | `#474751` | <span style="color:#474751">Пример</span> | <svg width="90" height="20"><rect width="90" height="20" fill="#474751"/></svg> |
| --color-pastel-white | `#babad3` | <span style="color:#babad3">Пример</span> | <svg width="90" height="20"><rect width="90" height="20" fill="#babad3"/></svg> |
| --color-pastel-worange | `#ffecbc` | <span style="color:#ffecbc;background:#333">Пример</span> | <svg width="90" height="20"><rect width="90" height="20" fill="#ffecbc" stroke="#ccc" stroke-width="1"/></svg> |
| --color-pastel-wblue | `#bcecff` | <span style="color:#bcecff;background:#333">Пример</span> | <svg width="90" height="20"><rect width="90" height="20" fill="#bcecff" stroke="#ccc" stroke-width="1"/></svg> |
| --color-pastel-wcyan | `#bcffec` | <span style="color:#bcffec;background:#333">Пример</span> | <svg width="90" height="20"><rect width="90" height="20" fill="#bcffec" stroke="#ccc" stroke-width="1"/></svg> |
| --color-pastel-wpurple | `#ecbcff` | <span style="color:#ecbcff">Пример</span> | <svg width="90" height="20"><rect width="90" height="20" fill="#ecbcff"/></svg> |
| --color-pastel-wgray | `#8e8ea3` | <span style="color:#8e8ea3">Пример</span> | <svg width="90" height="20"><rect width="90" height="20" fill="#8e8ea3"/></svg> |
| --color-pastel-wwhite | `#e3e3f2` | <span style="color:#e3e3f2;background:#333">Пример</span> | <svg width="90" height="20"><rect width="90" height="20" fill="#e3e3f2" stroke="#ccc" stroke-width="1"/></svg> |
| --color-bit-red | `#b13e53` | <span style="color:#b13e53">Пример</span> | <svg width="90" height="20"><rect width="90" height="20" fill="#b13e53"/></svg> |
| --color-bit-orange | `#ef7d57` | <span style="color:#ef7d57">Пример</span> | <svg width="90" height="20"><rect width="90" height="20" fill="#ef7d57"/></svg> |
| --color-bit-yellow | `#ffcd75` | <span style="color:#ffcd75">Пример</span> | <svg width="90" height="20"><rect width="90" height="20" fill="#ffcd75"/></svg> |
| --color-bit-green | `#38b764` | <span style="color:#38b764">Пример</span> | <svg width="90" height="20"><rect width="90" height="20" fill="#38b764"/></svg> |
| --color-bit-blue | `#29366f` | <span style="color:#29366f">Пример</span> | <svg width="90" height="20"><rect width="90" height="20" fill="#29366f"/></svg> |
| --color-bit-sblue | `#41a6f6` | <span style="color:#41a6f6">Пример</span> | <svg width="90" height="20"><rect width="90" height="20" fill="#41a6f6"/></svg> |
| --color-bit-cyan | `#257179` | <span style="color:#257179">Пример</span> | <svg width="90" height="20"><rect width="90" height="20" fill="#257179"/></svg> |
| --color-bit-purple | `#5d275d` | <span style="color:#5d275d">Пример</span> | <svg width="90" height="20"><rect width="90" height="20" fill="#5d275d"/></svg> |
| --color-bit-gray | `#1a1c2c` | <span style="color:#1a1c2c">Пример</span> | <svg width="90" height="20"><rect width="90" height="20" fill="#1a1c2c"/></svg> |
| --color-bit-white | `#f4f4f4` | <span style="color:#f4f4f4;background:#333">Пример</span> | <svg width="90" height="20"><rect width="90" height="20" fill="#f4f4f4" stroke="#ccc" stroke-width="1"/></svg> |
| --color-bit-wgreen | `#a7f070` | <span style="color:#a7f070">Пример</span> | <svg width="90" height="20"><rect width="90" height="20" fill="#a7f070"/></svg> |
| --color-bit-wblue | `#3b5dc9` | <span style="color:#3b5dc9">Пример</span> | <svg width="90" height="20"><rect width="90" height="20" fill="#3b5dc9"/></svg> |
| --color-bit-wsblue | `#73eff7` | <span style="color:#73eff7">Пример</span> | <svg width="90" height="20"><rect width="90" height="20" fill="#73eff7"/></svg> |
| --color-bit-wgray | `#333c57` | <span style="color:#333c57">Пример</span> | <svg width="90" height="20"><rect width="90" height="20" fill="#333c57"/></svg> |
| --color-bit-wwgray | `#566c86` | <span style="color:#566c86">Пример</span> | <svg width="90" height="20"><rect width="90" height="20" fill="#566c86"/></svg> |
| --color-bit-wwwgray | `#94b0c2` | <span style="color:#94b0c2">Пример</span> | <svg width="90" height="20"><rect width="90" height="20" fill="#94b0c2"/></svg> |