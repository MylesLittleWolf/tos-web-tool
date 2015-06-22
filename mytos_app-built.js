define("mytos",["jquery"],function(e){var t={initImages:function(){$("#cimgArea").html("");for(var e=0;e<this.cardGroups.length;++e){for(var t=0;t<this.cardGroups[e].length;++t);var n=$("<img>");n.attr("cid",e),n.addClass("cardimg"),n.data("cards",this.cardGroups[e]),n.data("currentID",t-1),$("#cimgArea").append(n),this.updateImage(n)}},initEvents:function(){var e=this;$(document).on("mouseover",".cardimg",function(e){var t=$(e.currentTarget);window.selectcardstart&&t.toggleClass("selected")}),$(document).on("mouseout",".cardimg",function(e){var t=$(e.currentTarget)}),$(document).on("click",".loadBtn",function(t){var n=localStorage.getItem("mytos");n!=null&&e.importData(n)});var t=localStorage.getItem("mytos");t==null&&$(".loadBtn").hide(),$(document).on("click",".storeBtn",function(t){localStorage.setItem("mytos",e.exportData()),$(".loadBtn").show()}),$(document).on("click",".cardimg",function(t){var n=$(t.currentTarget);t.altKey?e.prevImage(n):e.nextImage(n)}),$(document).on("mousedown",function(e){}),$(window).on("blur",function(e){window.selectcardstart=!1}),$(document).on("mouseup",function(e){window.selectcardstart=!1}),document.ondragstart=function(){return!1},document.onselectstart=function(){return!1}},getCardImgPath:function(e){return e>=850&&e<880&&(e-=3),e>=880&&e<=890&&(e+=1),"cimg/img_"+e+".png"},exportData:function(){var e=[],t=$(".cardimg");for(var n=0;n<t.length;++n){var r=$(t[n]);e.push(r.data("currentID"))}return e.join("")},importData:function(e){var t=$(".cardimg");for(var n=0;n<e.length;++n){var r=$(t[n]);r.data("currentID",e.charAt(n)),this.updateImage(r)}},updateImage:function(e){var t=e.data("cards"),n=e.data("currentID"),r=!1;n>=t.length&&(n=0,r=!0);var i=t[n],s=this.patt.exec(i);if(s.length==3){e.attr("alt",s[2]);var o=parseInt(s[1])-1;e.attr("src",this.getCardImgPath(o)),r?e.addClass("nocard"):e.removeClass("nocard")}},nextImage:function(e){var t=e.data("cards"),n=e.data("currentID");n=n+1>t.length?0:n+1,e.data("currentID",n),this.updateImage(e)},prevImage:function(e){var t=e.data("cards"),n=e.data("currentID");n=n-1<0?t.length:n-1,e.data("currentID",n),this.updateImage(e)},cardGroups:[["No. 001 莫莉","No. 002 高級水術士莫莉","No. 003 水魔法師莫莉","No. 004 水元素賢者莫莉","No. 408 "],["No. 005 肖恩","No. 006 高級劍士肖恩","No. 007 火焰劍士肖恩","No. 008 紅蓮劍士肖恩","No. 409 "],["No. 009 鄧肯","No. 010 牧者鄧肯","No. 011 德魯依鄧肯","No. 012 森林王者鄧肯","No. 410 "],["No. 013 男爵奈寶尼","No. 014 子爵奈寶尼","No. 015 伯爵奈寶尼","No. 016 侯爵奈寶尼","No. 411 "],["No. 017 暗修導士安多","No. 018 高級暗修導士安多","No. 019 死靈術士安多","No. 020 死靈祭師安多","No. 412 "],["No. 021 水方士","No. 022 清川真人","No. 023 靈江仙人","No. 024 青龍孟章神君","No. 511 "],["No. 025 火方士","No. 026 赤灶真人","No. 027 真火仙人","No. 028 朱雀陵光神君","No. 512 "],["No. 029 木方士","No. 030 九地真人","No. 031 虛土仙人","No. 032 玄武執明神君","No. 513 "],["No. 033 陽方士","No. 034 聖明真人","No. 035 耀尊仙人","No. 036 白虎監兵神君","No. 514 "],["No. 037 陰方士","No. 038 幽陵真人","No. 039 紫微妖仙","No. 040 饕餮渾沌魔君","No. 515 "],["No. 041 冰花龍","No. 042 冰晶龍","No. 043 冰晶龍王"],["No. 044 洋燭龍","No. 045 星火龍","No. 046 硝鐵火龍"],["No. 047 碧甲龍","No. 048 碧甲岩龍","No. 049 靈山龍龜"],["No. 050 光輝龍","No. 051 閃耀龍","No. 052 聖衡機龍"],["No. 053 無頭龍","No. 054 斷頭龍","No. 055 魂索邪龍"],["No. 116 烏爾德","No. 117 過去之烏爾德","No. 118 歷史之烏爾德","No. 481 "],["No. 119 斯庫爾德","No. 120 未來之斯庫爾德","No. 121 無常之斯庫爾德","No. 482 "],["No. 122 薇兒丹蒂","No. 123 現在之薇兒丹蒂","No. 124 命運之薇兒丹蒂","No. 483 "],["No. 125 伊登","No. 126 聖果之伊登","No. 127 永生之伊登","No. 484 "],["No. 128 英靈殿侍女","No. 129 戰魂之瓦爾基麗","No. 130 催魂之瓦爾基麗","No. 485 "],["No. 131 水遊俠","No. 132 水舞劍士","No. 133 水舞劍神","No. 686 "],["No. 134 火遊俠","No. 135 火焰戰士","No. 136 炎舞軍神","No. 687 "],["No. 137 木遊俠","No. 138 翠綠狙擊手","No. 139 疾風神射手","No. 688 "],["No. 140 光遊俠","No. 141 聖光遊俠","No. 142 萬劍遊俠","No. 689 "],["No. 143 暗遊俠","No. 144 暗夜刺客","No. 145 暗影劍豪","No. 690 "],["No. 146 冰耀巨像","No. 147 冰耀巨像 ‧ 解放","No. 148 冰耀巨鱷"],["No. 149 烙紅巨像","No. 150 烙紅巨像 ‧ 解放","No. 151 烙紅龍蜥"],["No. 152 碧青巨像","No. 153 碧青巨像 ‧ 解放","No. 154 碧青行者"],["No. 155 聖靈巨像","No. 156 聖靈巨像 ‧ 解放","No. 157 聖靈怒獅"],["No. 158 暗月巨像","No. 159 暗月巨像 ‧ 解放","No. 160 暗月夜龍"],["No. 161 機械鯨鯊","No. 162 強化機械鯨鯊","No. 163 變異機械鯨鯊"],["No. 164 機械獅子","No. 165 強化機械獅子","No. 166 狂暴機械獅子"],["No. 167 機械犀牛","No. 168 強化機械犀牛","No. 169 野蠻機械犀牛"],["No. 170 機械狼","No. 171 強化機械狼","No. 172 重甲機械狼"],["No. 173 機械豹","No. 174 強化機械豹","No. 175 掠奪機械豹"],["No. 176 海獸","No. 177 克蘇魯","No. 178 邪神克蘇魯","No. 851 "],["No. 179 地獄三頭犬","No. 180 基路比魯斯","No. 181 冥府兇獸基路比魯斯","No. 852 "],["No. 182 蛇妖","No. 183 美杜莎","No. 184 妖女美杜莎","No. 853 "],["No. 185 鷹頭獸","No. 186 獅鷲","No. 187 獅鷲獸王","No. 854 "],["No. 188 魔羊","No. 189 魔羊怪","No. 190 惡魔巴風特","No. 855 "],["No. 191 波塞頓","No. 192 海神波塞頓"],["No. 193 赫淮斯托斯","No. 194 奧林火神赫淮斯托斯"],["No. 195 雅典娜","No. 196 智慧女神雅典娜"],["No. 197 阿波羅","No. 198 光明之神阿波羅"],["No. 199 阿提密斯","No. 200 月之狩獵女神阿提密斯"],["No. 201 費雷","No. 202 勝利海神費雷","No. 506 "],["No. 203 提爾","No. 204 獨臂戰神提爾","No. 507 "],["No. 205 費蕾雅","No. 206 妙曼愛神費蕾雅","No. 508 "],["No. 207 索爾","No. 208 轟天雷神索爾","No. 509 "],["No. 209 洛基","No. 210 黃昏號角洛基","No. 510 "],["No. 211 泰芙努特","No. 212 雨神泰芙努特","No. 641 "],["No. 213 賽特","No. 214 戰爭之神賽特","No. 642 "],["No. 215 舒","No. 216 天空之神 ‧ 舒","No. 643 "],["No. 217 拉","No. 218 太陽之子拉","No. 644 "],["No. 219 奧西利斯","No. 220 不死冥王奧西利斯","No. 645 "],["No. 221 海龍","No. 222 東海龍王 ‧ 敖廣","No. 591 "],["No. 223 蓮藕仔","No. 224 三太子 ‧ 哪吒","No. 592 "],["No. 225 大力王","No. 226 平天大聖 ‧ 牛魔王","No. 593"],["No. 227 美猴王","No. 228 齊天大聖 ‧ 孫悟空","No. 594 "],["No. 229 妖狐","No. 230 白臉金毛 ‧ 妲己","No. 595 "],["No. 294 通透的蛋","No. 295 海拉","No. 296 幻夢魚仙 ‧ 伊德海拉"],["No. 297 火紅的蛋","No. 298 梅格","No. 299 龍裔 ‧ 梅格蘭斯"],["No. 300 翠綠的蛋","No. 301 伊薇特","No. 302 蝶妖伊薇特"],["No. 303 閃亮的蛋","No. 304 瑪格","No. 305 聖蜂后 ‧ 瑪格莉特"],["No. 306 暗啞的蛋","No. 307 伊莎貝爾","No. 308 黑寡婦伊莎貝爾"],["No. 309 水之異界龍","No. 310 深潛者之父 ‧ 達貢","No. 571 "],["No. 311 火之異界龍","No. 312 火焰共生者 ‧ 克圖格亞","No. 572 "],["No. 313 風之異界龍","No. 314 不朽尖吼者 ‧ 拜亞基","No. 573 "],["No. 315 光之異界龍","No. 316 招蕩的輝芒 ‧ 圖爾茲查","No. 574 "],["No. 317 暗之異界龍","No. 318 群山中之恐怖 ‧ 法格恩","No. 575 "],["No. 344 特洛伊公主","No. 345 受詛咒的先知 ‧ 卡珊德拉"],["No. 346 科耳喀斯皇女","No. 347 愛與恨的魔女 ‧ 美狄亞"],["No. 348 薩爾瑪提亞女皇","No. 349 黑魔法女巫 ‧ 喀耳刻"],["No. 355 持劍侍女 ‧ 波比","No. 356 白羊宮 ‧ 波比","No. 816 "],["No. 357 攻城者 ‧ 阿姆士唐","No. 358 金牛宮 ‧ 阿姆士唐","No. 817 "],["No. 359 雙劍士 ‧ 波魯克斯","No. 360 雙子宮 ‧ 加斯陀與波魯克斯","No. 818 "],["No. 361 暗影刺客 ‧ 約翰","No. 362 巨蟹宮 ‧ 約翰","No. 819 "],["No. 363 重劍士 ‧ 加里昂","No. 364 獅子宮 ‧ 加里昂","No. 820 "],["No. 365 割穗少女 ‧ 普西芬妮","No. 366 處女宮 ‧ 普西芬妮","No. 821 "],["No. 367 聖殿武士 ‧ 露娜","No. 368 天秤宮 ‧ 露娜","No. 822 "],["No. 369 重鐮刺客 ‧ 艾瑪","No. 370 天蠍宮 ‧ 艾瑪","No. 823 "],["No. 371 綠林行者 ‧ 赫茲","No. 372 人馬宮 ‧ 赫茲","No. 824 "],["No. 373 碎岩武者 ‧ 杜門","No. 374 山羊宮 ‧ 杜門","No. 825 "],["No. 375 鬼魅舞者 ‧ 凱莉","No. 376 水瓶宮 ‧ 凱莉","No. 826 "],["No. 377 海浪騎士 ‧ 卡秋婭與拉維妮斯","No. 378 雙魚宮 ‧ 卡秋婭與拉維妮斯","No. 827 "],["No. 388 不懼的鬼戰士","No. 389 屠龍者 ‧ 貝奧武夫"],["No. 390 不仁的鬼鬥士","No. 391 戰神 ‧ 阿基里斯"],["No. 392 不幸的鬼騎士","No. 393 薔薇雙槍 ‧ 迪爾姆德"],["No. 394 不惑的鬼武士","No. 395 遮那王 ‧ 源義經"],["No. 396 不義的鬼將士","No. 397 鬼神 ‧ 呂布"],["No. 413 蒼龍魂使","No. 414 龍儀姬 ‧ 烏蘇拉"],["No. 415 赤龍魂使","No. 416 龍儀姬 ‧ 愛格德"],["No. 417 青龍魂使","No. 418 龍儀姬 ‧ 芭芭拉"],["No. 419 光龍魂使","No. 420 龍脈者 ‧ 安納"],["No. 421 暗龍魂使","No. 422 龍脈者 ‧ 諾瓦利斯"],["No. 432 奪寶海盜","No. 433 冰晶領航者 ‧ 奪寶海盜"],["No. 434 紅纓武者","No. 435 火靈之舞 ‧ 紅纓武者"],["No. 436 捕風酋長","No. 437 翡翠獵手 ‧ 捕風酋長"],["No. 466 貴族伊莉莎白","No. 467 血浴美人 ‧ 伊莉莎白","No. 711 "],["No. 468 信差潔琪","No. 469 彈簧腿 ‧ 潔琪","No. 712 "],["No. 470 婚約者貝莉","No. 471 罌花新娘 ‧ 貝莉","No. 713 "],["No. 472 紳士傑克","No. 473 開膛怪傑 ‧ 傑克","No. 714 "],["No. 474 理髮魔偶陶德","No. 475 戲謔小丑 ‧ 陶德","No. 715 "],["No. 497 ","No. 498 "],["No. 499 ","No. 500 "],["No. 531 太師聞仲","No. 532 普化天尊 ‧ 聞仲"],["No. 533 道僧燃燈","No. 534 錠光如來 ‧ 燃燈"],["No. 535 靈將楊戩","No. 536 清源仙將 ‧ 楊戩"],["No. 537 仙道姜尚","No. 538 封神仙帥 ‧ 姜子牙"],["No. 539 仙道申公豹","No. 540 號雷鬥罡 ‧ 申公豹"],["No. 596 格蕾琴與海森堡","No. 597 連肢機偶 · 格蕾琴與海森堡"],["No. 598 阿涅茜","No. 599 焚魔學者 ‧ 阿涅茜"],["No. 600 風動傀儡","No. 601 蠻牛貳式"],["No. 602 莉莎 ‧ 畢法露","No. 603 半偶研製者 ‧ 莉莎"],["No. 604 米基利","No. 605 偏狂學士 ‧ 米基利"],["No. 621 奧托","No. 622 孤傲的奧托","No. 623 部落勇士 ‧ 奧托"],["No. 624 伊奇多","No. 625 癲狂的伊奇多","No. 626 部落智者 ‧ 伊奇多"],["No. 627 木法沙","No. 628 勇猛的木法沙","No. 629 部落首領 ‧ 木法沙"],["No. 630 布瑪","No. 631 俠義的布瑪","No. 632 天空俠盜 ‧ 布瑪"],["No. 633 芭絲蒂","No. 634 溫柔的芭絲蒂","No. 635 月詠美神 ‧ 芭絲蒂"],["No. 661"],["No. 662"],["No. 663"],["No. 664"],["No. 665"],["No. 716 復仇半龍 ‧ 絲蔻比亞"],["No. 717 執拗聖盾 ‧ 忒提斯"],["No. 718 嫉愛薔薇 ‧ 艾摩婭與瑟露絲"],["No. 719 鬼刀意志 ‧ 今劍與薄綠"],["No. 720 魔骸戰意 ‧ 呂凌霜"],["No. 726 雪女","No. 727 冰柱姬 ‧ 雪女"],["No. 728 酒吞童子","No. 729 百鬼統領 ‧ 酒吞童子"],["No. 730 烏天狗","No. 731 孤傲山僧 ‧ 大天狗"],["No. 732 毛倡妓","No. 733 血怨藝妓 ‧ 毛倡妓"],["No. 734 土蜘蛛","No. 735 八握脛 ‧ 土蜘蛛"],["No. 746 於小雪","No. 747 女媧天石 ‧ 於小雪"],["No. 748 拓跋玉兒","No. 749 神農奇鼎 ‧ 拓跋玉兒"],["No. 750 陳靖仇","No. 751 亡國少主 ‧ 陳靖仇"],["No. 752 車芸與雲狐","No. 753 木甲之術 ‧ 車芸與雲狐"],["No. 754 騎士賽特","No. 755 尋道旅者 ‧ 賽特"],["No. 756 沐月","No. 757 華胥天人 ‧ 沐月"],["No. 758 夏柔","No. 759 東皇神鐘 ‧ 夏柔"],["No. 760 陸承軒","No. 761 昊天靈塔 ‧ 陸承軒"],["No. 762 宇文拓","No. 763 崑崙明鏡 ‧ 宇文拓"],["No. 764 焉逢與徐暮雲","No. 765 軒轅聖劍 ‧ 皇甫朝雲與皇甫暮雲"],["No. 766 司空宇","No. 767 軒轅遺民 ‧ 司空宇"],["No. 790 庫庫爾坎","No. 791 守衛龍神 ‧ 庫庫爾坎"],["No. 792 皮亞沙","No. 793 墮魔傲龍 ‧ 皮亞沙"],["No. 794 皮拉圖斯","No. 795 復甦遺龍 ‧ 皮拉圖斯"],["No. 796 法芙尼爾","No. 797 攻伐龍神 ‧ 法芙尼爾"],["No. 798 瓦維爾","No. 799 罪孽霸龍 ‧ 瓦維爾"],["No. 801 阿特拉哈西斯","No. 802 智慧者 ‧ 阿特拉哈西斯"],["No. 803 尼努爾塔","No. 804 暴風軍神 ‧ 尼努爾塔"],["No. 805 杜穆濟","No. 806 牧者國王 ‧ 杜穆濟"],["No. 807 伊南娜","No. 808 月神 ‧ 伊南娜"],["No. 809 納姆塔爾","No. 810 惡疾之神 ‧ 納姆塔爾"],["No. 861 千千","No. 862 舞孃陀螺 ‧ 千千"],["No. 863 克拉拉","No. 864 胡桃夾子 ‧ 克拉拉"],["No. 865 瑪特羅什卡","No. 866 套娃人偶 ‧ 瑪特羅什卡"],["No. 867 鐵皮的哈梅爾","No. 868 發條玩具 ‧ 鐵皮的哈梅爾"],["No. 869 莫里斯","No. 870 泰迪熊 ‧ 莫里斯"],["No. 9001 ","No. 9002 "],["No. 9003 ","No. 892 "],["No. 893 ","No. 894 "],["No. 895 ","No. 896 "],["No. 897 ","No. 898 "],["No. 899 ","No. 900 "],["No. 901 ","No. 902 "],["No. 934 ","No. 935 "],["No. 936 ","No. 937 "],["No. 938 ","No. 939 "],["No. 940 ","No. 941 "],["No. 942 ","No. 943 "],["No. 944 ","No. 945 "],["No. 946 ","No. 947 "],["No. 881 ","No. 882 "],["No. 883 ","No. 884 "],["No. 885 ","No. 886 "],["No. 887 ","No. 888 "],["No. 889 ","No. 890 "]],patt:/No.\s+(\d+)(.*)/};return $(function(){t.initImages(),t.initEvents()}),t}),require.config({paths:{jquery:"jquery-1.11.3.min"}}),require(["mytos"],function(e){}),define("mytos_main",function(){});