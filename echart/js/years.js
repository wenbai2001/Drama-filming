// 听戏的戏种柱状图
(function() {
    // 实例化对象
    var myChart = echarts.init(document.querySelector(".years"));
    // 指定配置和数据
    var option = {
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        series: [
            {
                type: 'tree',

                data: [
                    {
                        "children": [
                            {
                                "children": [
                                    {
                                        "children": [],
                                        "name": "1 《天仙配》"
                                    },{
                                        "children": [],
                                        "name": "2 《夫妻观灯》"
                                    }, {
                                        "children": [],
                                        "name": "3 《对百草》"
                                    }, {
                                        "children": [],
                                        "name": "4 《蓝桥会》"
                                    }, {
                                        "children": [],
                                        "name": "5 《打豆腐》"
                                    }, {
                                        "children": [],
                                        "name": "6 《打桑》"
                                    }, {
                                        "children": [],
                                        "name": "7 《打猪草》"
                                    }, {
                                        "children": [],
                                        "name": "8 《讨学钱》"
                                    }, {
                                        "children": [],
                                        "name": "9 《刘海戏金蟾》"
                                    }, {
                                        "children": [],
                                        "name": "10《放风筝》"
                                    }, {
                                        "children": [],
                                        "name": "11 《拾玉镯》"
                                    }, {
                                        "children": [],
                                        "name": "12《拾棉花》"
                                    }, {
                                        "children": [],
                                        "name": "13《送香茶》"
                                    }, {
                                        "children": [],
                                        "name": "14《送绫罗》"
                                    }, {
                                        "children": [],
                                        "name": "15《春香闹学》"
                                    }, {
                                        "children": [],
                                        "name": "16《柳树井》"
                                    }, {
                                        "children": [],
                                        "name": "17《瞧像》"
                                    }, {
                                        "children": [],
                                        "name": "18《游春》"
                                    }, {
                                        "children": [],
                                        "name": "19《葛麻》"
                                    }, {
                                        "children": [],
                                        "name": "20《梁山伯与祝英台》"
                                    }
                                ],
                                "name": "1953年——20个"
                            },
                            {
                                "children": [
                                    {
                                        "children": [],
                                        "name": "21《打瓜园》"
                                    },{
                                        "children": [],
                                        "name": "22《红梅劫》"
                                    }, {
                                        "children": [],
                                        "name": "23《西楼会》"
                                    }, {
                                        "children": [],
                                        "name": "24《张古董借妻》"
                                    }, {
                                        "children": [],
                                        "name": "25《李应卖女》"
                                    }, {
                                        "children": [],
                                        "name": "26《荞麦记》"
                                    }, {
                                        "children": [],
                                        "name": "27《砂子岗》"
                                    }, {
                                        "children": [],
                                        "name": "28《炼印》"
                                    }, {
                                        "children": [],
                                        "name": "29《春香闹学》"
                                    }, {
                                        "children": [],
                                        "name": "30《借铜银》"
                                    }, {
                                        "children": [],
                                        "name": "31 《做文章》"
                                    }, {
                                        "children": [],
                                        "name": "32《推车赶会》"
                                    }, {
                                        "children": [],
                                        "name": "33《蹬舟找子》"
                                    }
                                ],
                                "name": "1954年——13个"
                            },{
                                "children": [
                                    {
                                        "children": [],
                                        "name": "34《小菜园》"
                                    },{
                                        "children": [],
                                        "name": "35《中山狼》"
                                    }, {
                                        "children": [],
                                        "name": "36《云楼偷诗》"
                                    }, {
                                        "children": [],
                                        "name": "37《孔瞎子闹店》"
                                    }, {
                                        "children": [],
                                        "name": "38《打金枝》"
                                    }, {
                                        "children": [],
                                        "name": "39《打柴得宝》"
                                    }, {
                                        "children": [],
                                        "name": "40《玉玲珑》"
                                    }, {
                                        "children": [],
                                        "name": "41《杨八姐游春》"
                                    }, {
                                        "children": [],
                                        "name": "42《接女婿》"
                                    }, {
                                        "children": [],
                                        "name": "43《点大麦》"
                                    }, {
                                        "children": [],
                                        "name": "44《送同年》"
                                    }, {
                                        "children": [],
                                        "name": "45《柳湖风波》"
                                    }, {
                                        "children": [],
                                        "name": "46《断姻缘》"
                                    }, {
                                        "children": [],
                                        "name": "47 《锄茶棵》"
                                    }, {
                                        "children": [],
                                        "name": "48《晴雯》 "
                                    }, {
                                        "children": [],
                                        "name": "49《墙头马上》"
                                    }
                                ],
                                "name": "1955年——16个"
                            },{
                                "children": [
                                    {
                                        "children": [],
                                        "name": "50《小白旗的风波》"
                                    },{
                                        "children": [],
                                        "name": "51《小辞店》"
                                    }, {
                                        "children": [],
                                        "name": "52《王金凤》"
                                    }, {
                                        "children": [],
                                        "name": "53《王定保借当》"
                                    }, {
                                        "children": [],
                                        "name": "54《母女俩》"
                                    }, {
                                        "children": [],
                                        "name": "55《丝罗带》"
                                    }, {
                                        "children": [],
                                        "name": "56 《吐绒记》"
                                    }, {
                                        "children": [],
                                        "name": "57《鸡血记》"
                                    }, {
                                        "children": [],
                                        "name": "58《告粮官》"
                                    }, {
                                        "children": [],
                                        "name": "59《卖斗罗》"
                                    }, {
                                        "children": [],
                                        "name": "60《卖老布》"
                                    }, {
                                        "children": [],
                                        "name": "61《卖花记》"
                                    }, {
                                        "children": [],
                                        "name": "62《卖胭脂》"
                                    }, {
                                        "children": [],
                                        "name": "63《牧牛》"
                                    }, {
                                        "children": [],
                                        "name": "64《罗帕记》 "
                                    }, {
                                        "children": [],
                                        "name": "65《逃水荒》"
                                    }, {
                                        "children": [],
                                        "name": "66《俩姐妹》"
                                    }, {
                                        "children": [],
                                        "name": "67《说唱四十条》"
                                    }, {
                                        "children": [],
                                        "name": "68《荔枝缘》"
                                    }, {
                                        "children": [],
                                        "name": "69《借罗衣》"
                                    }, {
                                        "children": [],
                                        "name": "70《断桥》"
                                    }, {
                                        "children": [],
                                        "name": "71《庵堂认母》"
                                    }, {
                                        "children": [],
                                        "name": "72《祭头巾》"
                                    }, {
                                        "children": [],
                                        "name": "73《喝面叶》"
                                    }
                                ],
                                "name": "1956年——24个"
                            },{
                                "children": [
                                    {
                                        "children": [],
                                        "name": "74《一只鞋》"
                                    },{
                                        "children": [],
                                        "name": "75《九子鞭》"
                                    }, {
                                        "children": [],
                                        "name": "76《三审刁刘氏》"
                                    }, {
                                        "children": [],
                                        "name": "77《三难新郎》"
                                    }, {
                                        "children": [],
                                        "name": "78《双合镜》"
                                    }, {
                                        "children": [],
                                        "name": "80《王金豆借粮》"
                                    }, {
                                        "children": [],
                                        "name": "81《北地王》"
                                    }, {
                                        "children": [],
                                        "name": "82《血掌记》"
                                    }, {
                                        "children": [],
                                        "name": "83《花亭会》"
                                    }, {
                                        "children": [],
                                        "name": "84《李娃传》"
                                    }, {
                                        "children": [],
                                        "name": "85《张德和宿店》"
                                    }, {
                                        "children": [],
                                        "name": "86《何氏劝姑》"
                                    }, {
                                        "children": [],
                                        "name": "87《补皮鞋》"
                                    }, {
                                        "children": [],
                                        "name": "88《杨桂英》"
                                    }, {
                                        "children": [],
                                        "name": "89《清风岭》 "
                                    }, {
                                        "children": [],
                                        "name": "90《卖杂货》"
                                    }, {
                                        "children": [],
                                        "name": "91《渔网会母》"
                                    }, {
                                        "children": [],
                                        "name": "92《姑娘心里不平静》"
                                    }, {
                                        "children": [],
                                        "name": "93《钓蛤蟆》"
                                    }, {
                                        "children": [],
                                        "name": "94《桂花树》"
                                    }, {
                                        "children": [],
                                        "name": "95《捆被套》"
                                    }, {
                                        "children": [],
                                        "name": "96《借靴》"
                                    }, {
                                        "children": [],
                                        "name": "97《清官私访》"
                                    }, {
                                        "children": [],
                                        "name": "98《锁阳城》"
                                    }, {
                                        "children": [],
                                        "name": "99《跪池》"
                                    }, {
                                        "children": [],
                                        "name": "100《碧玉簪》"
                                    }, {
                                        "children": [],
                                        "name": "101《撇芥菜》"
                                    }
                                ],
                                "name": "1957年——28个"
                            },{
                                "children": [
                                    {
                                        "children": [],
                                        "name": "102《二龙山》"
                                    },{
                                        "children": [],
                                        "name": "103《二姑娘观灯》"
                                    }, {
                                        "children": [],
                                        "name": "104《人民公社好》"
                                    }, {
                                        "children": [],
                                        "name": "105《十年变》"
                                    }, {
                                        "children": [],
                                        "name": "106《刁窗》"
                                    }, {
                                        "children": [],
                                        "name": "107《三人行》"
                                    }, {
                                        "children": [],
                                        "name": "108《三里湾》"
                                    }, {
                                        "children": [],
                                        "name": "109《三家福》"
                                    }, {
                                        "children": [],
                                        "name": "110《三换肩》"
                                    }, {
                                        "children": [],
                                        "name": "111《二上夜校》"
                                    }, {
                                        "children": [],
                                        "name": "112《牛郎织女笑开颜》"
                                    }, {
                                        "children": [],
                                        "name": "113《为了炼钢》"
                                    }, {
                                        "children": [],
                                        "name": "114《木匠迎亲》"
                                    }, {
                                        "children": [],
                                        "name": "115《公社食堂好》"
                                    }, {
                                        "children": [],
                                        "name": "116《六姐妹学公报》 "
                                    }, {
                                        "children": [],
                                        "name": "117《不要随地吐痰》"
                                    }, {
                                        "children": [],
                                        "name": "118《凤凰山》"
                                    }, {
                                        "children": [],
                                        "name": "119《夫妻炼铁》"
                                    }, {
                                        "children": [],
                                        "name": "120 《王瞎子下乡》"
                                    }, {
                                        "children": [],
                                        "name": "121《打花魁》"
                                    }, {
                                        "children": [],
                                        "name": "122《讨嫁妆》"
                                    }, {
                                        "children": [],
                                        "name": "123《刘介梅》"
                                    }, {
                                        "children": [],
                                        "name": "124 《状元梦》"
                                    }, {
                                        "children": [],
                                        "name": "125《抢伞》"
                                    }, {
                                        "children": [],
                                        "name": "126《扯伞》"
                                    }, {
                                        "children": [],
                                        "name": "127《纺线纱》"
                                    }, {
                                        "children": [],
                                        "name": "128《花烛之夜》"
                                    }, {
                                        "children": [],
                                        "name": "129《柜中缘》(折子戏)"
                                    }, {
                                        "children": [],
                                        "name": "130 《卖花篮》"
                                    }, {
                                        "children": [],
                                        "name": "131《拉郎配》"
                                    }, {
                                        "children": [],
                                        "name": "132《宝英传》"
                                    }, {
                                        "children": [],
                                        "name": "133《转变》"
                                    }, {
                                        "children": [],
                                        "name": "134《金钗记》"
                                    }, {
                                        "children": [],
                                        "name": "135《送表妹》"
                                    }, {
                                        "children": [],
                                        "name": "136《送碳》"
                                    }, {
                                        "children": [],
                                        "name": "137《送炭》"
                                    }, {
                                        "children": [],
                                        "name": "138《送报表》"
                                    }, {
                                        "children": [],
                                        "name": "138《磨房会》（疑似有误）"
                                    }, {
                                        "children": [],
                                        "name": "139《挑牙虫》"
                                    }, {
                                        "children": [],
                                        "name": "140《袁天成干革命》"
                                    }, {
                                        "children": [],
                                        "name": "141《恩仇记》"
                                    }, {
                                        "children": [],
                                        "name": "142《桃花扇》"
                                    }, {
                                        "children": [],
                                        "name": "143《党的女儿》"
                                    }, {
                                        "children": [],
                                        "name": "144《朝阳沟》"
                                    }, {
                                        "children": [],
                                        "name": "145 《琴挑》"
                                    }, {
                                        "children": [],
                                        "name": "146《新女婿上门》"
                                    }, {
                                        "children": [],
                                        "name": "147《意中缘》"
                                    }, {
                                        "children": [],
                                        "name": "148《模范家庭》"
                                    }
                                ],
                                "name": "1958年——47个"
                            },{
                                "children": [
                                    {
                                        "children": [],
                                        "name": "149《两面红旗》"
                                    },{
                                        "children": [],
                                        "name": "150《女驸马》"
                                    }, {
                                        "children": [],
                                        "name": "151《女神》"
                                    }, {
                                        "children": [],
                                        "name": "152《双赶车》"
                                    }, {
                                        "children": [],
                                        "name": "153《百花亭》"
                                    }, {
                                        "children": [],
                                        "name": "154《百花赠剑》"
                                    }, {
                                        "children": [],
                                        "name": "155《年青一代》"
                                    }, {
                                        "children": [],
                                        "name": "156《红旗在前》 "
                                    }, {
                                        "children": [],
                                        "name": "157《补背褡》"
                                    }, {
                                        "children": [],
                                        "name": "158《花墙会》"
                                    }, {
                                        "children": [],
                                        "name": "159《闹金桥》"
                                    }, {
                                        "children": [],
                                        "name": "160《闹菜园》"
                                    }, {
                                        "children": [],
                                        "name": "161《闹官棚》"
                                    }, {
                                        "children": [],
                                        "name": "162《姑嫂俩》"
                                    }, {
                                        "children": [],
                                        "name": "163《姑嫂探亲》"
                                    }, {
                                        "children": [],
                                        "name": "164《送宝得宝》"
                                    }, {
                                        "children": [],
                                        "name": "165《送粮河上》"
                                    }, {
                                        "children": [],
                                        "name": "166《赵桂英》"
                                    }, {
                                        "children": [],
                                        "name": "167 《罗帕记》"
                                    }, {
                                        "children": [],
                                        "name": "169《游园惊梦》"
                                    }, {
                                        "children": [],
                                        "name": "170《喜荣归》"
                                    }, {
                                        "children": [],
                                        "name": "171《勤俭办喜事》"
                                    }, {
                                        "children": [],
                                        "name": "172《想娘》"
                                    }, {
                                        "children": [],
                                        "name": "173《责夫劝夫》"
                                    }
                                ],
                                "name": "1959年——26个"
                            },{
                                "children": [
                                    {
                                        "children": [],
                                        "name": "174《龙凤呈祥》"
                                    }, {
                                        "children": [],
                                        "name": "175《打瓜招亲》"
                                    }, {
                                        "children": [],
                                        "name": "176《打樱桃》"
                                    }, {
                                        "children": [],
                                        "name": "177《刘三姐》"
                                    }, {
                                        "children": [],
                                        "name": "178《红布条》"
                                    }, {
                                        "children": [],
                                        "name": "179《红光满天》"
                                    }, {
                                        "children": [],
                                        "name": "180《红色种子》"
                                    }, {
                                        "children": [],
                                        "name": "181《老田管》"
                                    }, {
                                        "children": [],
                                        "name": "182《扫花堂》"
                                    }, {
                                        "children": [],
                                        "name": "183《江姐》"
                                    }, {
                                        "children": [],
                                        "name": "184《争担子》"
                                    }, {
                                        "children": [],
                                        "name": "185《米烂敲窗》"
                                    }, {
                                        "children": [],
                                        "name": "186《买卖公平》"
                                    }, {
                                        "children": [],
                                        "name": "187《团员之后》"
                                    }, {
                                        "children": [],
                                        "name": "188《考新郎》"
                                    }, {
                                        "children": [],
                                        "name": "189《花园扎枪》"
                                    }, {
                                        "children": [],
                                        "name": "190《拖拉机》"
                                    }, {
                                        "children": [],
                                        "name": "191《拉郎榜》"
                                    }, {
                                        "children": [],
                                        "name": "192《金黛莱》"
                                    }, {
                                        "children": [],
                                        "name": "193《南北界》"
                                    }, {
                                        "children": [],
                                        "name": "194《除四害》"
                                    }, {
                                        "children": [],
                                        "name": "195《挑菜》"
                                    }, {
                                        "children": [],
                                        "name": "196《送饭》"
                                    }, {
                                        "children": [],
                                        "name": "197《党的好干部》"
                                    }, {
                                        "children": [],
                                        "name": "198《莲湘姐妹》"
                                    }, {
                                        "children": [],
                                        "name": "199《程红梅》"
                                    }, {
                                        "children": [],
                                        "name": "200《新对象》"
                                    }, {
                                        "children": [],
                                        "name": "201《赞人民公社》"
                                    }, {
                                        "children": [],
                                        "name": "202《十里风雪》"
                                    }
                                ],
                                "name": "1960年——29个"
                            },{
                                "children": [
                                    {
                                        "children": [],
                                        "name": "203《三月三》"
                                    }, {
                                        "children": [],
                                        "name": "204《三哭殿》"
                                    }, {
                                        "children": [],
                                        "name": "205《义民册》"
                                    }, {
                                        "children": [],
                                        "name": "206《双下山》"
                                    }, {
                                        "children": [],
                                        "name": "207《双送肥》"
                                    }, {
                                        "children": [],
                                        "name": "208《打纸牌》"
                                    }, {
                                        "children": [],
                                        "name": "209《红楼梦》"
                                    }, {
                                        "children": [],
                                        "name": "210《张飞审瓜》"
                                    }, {
                                        "children": [],
                                        "name": "211《晚会跳船》"
                                    }, {
                                        "children": [],
                                        "name": "212《香罗帕》"
                                    }, {
                                        "children": [],
                                        "name": "213《罢宴》"
                                    }, {
                                        "children": [],
                                        "name": "214《婆媳俩》"
                                    }
                                ],
                                "name": "1961年——12个"
                            },{
                                "children": [
                                    {
                                        "children": [],
                                        "name": "203《三月三》"
                                    }, {
                                        "children": [],
                                        "name": "204《三哭殿》"
                                    }, {
                                        "children": [],
                                        "name": "205《义民册》"
                                    }, {
                                        "children": [],
                                        "name": "206《双下山》"
                                    }, {
                                        "children": [],
                                        "name": "207《双送肥》"
                                    }, {
                                        "children": [],
                                        "name": "208《打纸牌》"
                                    }, {
                                        "children": [],
                                        "name": "209《红楼梦》"
                                    }, {
                                        "children": [],
                                        "name": "210《张飞审瓜》"
                                    }, {
                                        "children": [],
                                        "name": "211《晚会跳船》"
                                    }, {
                                        "children": [],
                                        "name": "212《香罗帕》"
                                    }, {
                                        "children": [],
                                        "name": "213《罢宴》"
                                    }, {
                                        "children": [],
                                        "name": "214《婆媳俩》"
                                    }
                                ],
                                "name": "1961年——12个"
                            },{
                                "children": [
                                    {
                                        "children": [],
                                        "name": "215《小上坟》"
                                    }, {
                                        "children": [],
                                        "name": "216《王三姐》"
                                    }, {
                                        "children": [],
                                        "name": "217《当坊会》"
                                    }, {
                                        "children": [],
                                        "name": "218 《杀狗劝妻》"
                                    }, {
                                        "children": [],
                                        "name": "219 《过界岭》"
                                    }, {
                                        "children": [],
                                        "name": "220《西厢记》"
                                    }, {
                                        "children": [],
                                        "name": "222《二块六》"
                                    }, {
                                        "children": [],
                                        "name": "223 《李慧娘》"
                                    }, {
                                        "children": [],
                                        "name": "224《金山战鼓》"
                                    }, {
                                        "children": [],
                                        "name": "225《孟丽君》"
                                    }, {
                                        "children": [],
                                        "name": "226《姑嫂比剑》"
                                    }, {
                                        "children": [],
                                        "name": "227《鸳鸯谱》"
                                    }, {
                                        "children": [],
                                        "name": "228《谢瑶环》"
                                    }
                                ],
                                "name": "1962年——14个"
                            },{
                                "children": [
                                    {
                                        "children": [],
                                        "name": "229《牛郎织女》"
                                    }, {
                                        "children": [],
                                        "name": "230《红色宣传员》"
                                    }, {
                                        "children": [],
                                        "name": "231《社长的女儿》"
                                    }, {
                                        "children": [],
                                        "name": "232《杜鹃山》"
                                    }, {
                                        "children": [],
                                        "name": "233《审椅子》"
                                    }, {
                                        "children": [],
                                        "name": "234《铜锣记》"
                                    }, {
                                        "children": [],
                                        "name": "235《槐荫记》"
                                    }
                                ],
                                "name": "1963年——7个"
                            },{
                                "children": [
                                    {
                                        "children": [],
                                        "name": "236《一件棉袄》"
                                    }, {
                                        "children": [],
                                        "name": "237《丰收之后》"
                                    }, {
                                        "children": [],
                                        "name": "238《卖箩筐》"
                                    }, {
                                        "children": [],
                                        "name": "239《怎么谈不拢》"
                                    }, {
                                        "children": [],
                                        "name": "240《战斗在险峰》"
                                    }, {
                                        "children": [],
                                        "name": "241《送肥记》"
                                    }, {
                                        "children": [],
                                        "name": "242《换房》"
                                    }, {
                                        "children": [],
                                        "name": "243《雪里红》"
                                    }, {
                                        "children": [],
                                        "name": "244《锦帆远航》"
                                    }
                                ],
                                "name": "1964年——9个"
                            },{
                                "children": [
                                    {
                                        "children": [],
                                        "name": "245《一颗红心》"
                                    }, {
                                        "children": [],
                                        "name": "246《儿女奇志》"
                                    }, {
                                        "children": [],
                                        "name": "247《三回船》"
                                    }, {
                                        "children": [],
                                        "name": "248《小保管上任》"
                                    }, {
                                        "children": [],
                                        "name": "249《王杰颂》"
                                    }, {
                                        "children": [],
                                        "name": "250《三岔口》"
                                    }, {
                                        "children": [],
                                        "name": "251《电闪雷鸣》"
                                    }, {
                                        "children": [],
                                        "name": "252 《打铜锣》"
                                    }, {
                                        "children": [],
                                        "name": "253《向北方》"
                                    }, {
                                        "children": [],
                                        "name": "254 《传枪》"
                                    }, {
                                        "children": [],
                                        "name": "255 《红管家》"
                                    }, {
                                        "children": [],
                                        "name": "256《两个苹果》"
                                    }, {
                                        "children": [],
                                        "name": "257《两块红布》"
                                    }, {
                                        "children": [],
                                        "name": "258《两珑地》"
                                    }, {
                                        "children": [],
                                        "name": "259 《补锅》"
                                    }, {
                                        "children": [],
                                        "name": "260《炉火正红》"
                                    }, {
                                        "children": [],
                                        "name": "261《知心站》"
                                    }, {
                                        "children": [],
                                        "name": "262《春水绿秧》"
                                    }, {
                                        "children": [],
                                        "name": "263《胜利在望》"
                                    }, {
                                        "children": [],
                                        "name": "264《难为迎亲伯》"
                                    }, {
                                        "children": [],
                                        "name": "265《特别的军礼》"
                                    }, {
                                        "children": [],
                                        "name": "266《海英》"
                                    }, {
                                        "children": [],
                                        "name": "267《烘房飘香》"
                                    }, {
                                        "children": [],
                                        "name": "268《《箭杆河边》"
                                    }
                                ],
                                "name": "1965年——24个"
                            },{
                                "children": [
                                    {
                                        "children": [],
                                        "name": "269《白毛女》"
                                    }, {
                                        "children": [],
                                        "name": "270《红色娘子军》"
                                    }, {
                                        "children": [],
                                        "name": "271《两个女货郎》"
                                    }, {
                                        "children": [],
                                        "name": "272《耕读好》"
                                    }, {
                                        "children": [],
                                        "name": "273《游乡》"
                                    }, {
                                        "children": [],
                                        "name": "274《茶山红日》"
                                    }, {
                                        "children": [],
                                        "name": "275《送礼》"
                                    }, {
                                        "children": [],
                                        "name": "276《沙家浜》"
                                    }
                                ],
                                "name": "1966年——8个"
                            },{
                                "children": [],
                                "name": "1967年——无"
                            },{
                                "children": [],
                                "name": "1968年——无"
                            },{
                                "children": [],
                                "name": "1969年——无"
                            },{
                        "children": [
                            {
                                "children": [],
                                "name": "277《龙河坝》"
                            }, {
                                "children": [],
                                "name": "278《军民一家》"
                            }, {
                                "children": [],
                                "name": "279《红灯记》"
                            }, {
                                "children": [],
                                "name": "280《张思德的故事》"
                            }, {
                                "children": [],
                                "name": "281《银针曲》"
                            }
                        ],
                        "name": "1970年——5个"
                    },{
                        "children": [
                            {
                                "children": [],
                                "name": "282《一把草药》"
                            }
                        ],
                        "name": "1971年——1个"
                    },{
                        "children": [
                            {
                                "children": [],
                                "name": "283《一把米》"
                            }, {
                                "children": [],
                                "name": "284《白衣红心》"
                            }, {
                                "children": [],
                                "name": "285《半篮花生》"
                            }, {
                                "children": [],
                                "name": "286《向阳花》"
                            }, {
                                "children": [],
                                "name": "287《拥军花》"
                            }, {
                                "children": [],
                                "name": "288《奇峰岭》"
                            }, {
                                "children": [],
                                "name": "289《送子当红军》"
                            }, {
                                "children": [],
                                "name": "290《战井台》"
                            }, {
                                "children": [],
                                "name": "291《追报表》"
                            }
                        ],
                        "name": "1972年——9个"
                    },{
                        "children": [
                            {
                                "children": [],
                                "name": "292《山乡加油站》"
                            }, {
                                "children": [],
                                "name": "293《小店春早》"
                            }, {
                                "children": [],
                                "name": "294《青春的步伐》"
                            }, {
                                "children": [],
                                "name": "295《红枫岭上》"
                            }, {
                                "children": [],
                                "name": "296《回茶乡》"
                            }, {
                                "children": [],
                                "name": "297《补秧》"
                            }, {
                                "children": [],
                                "name": "298《南国烽烟》"
                            }, {
                                "children": [],
                                "name": "299《珍珠姑娘》"
                            }, {
                                "children": [],
                                "name": "300《养鸡曲》"
                            }, {
                                "children": [],
                                "name": "301《稻香千里》"
                            }, {
                                "children": [],
                                "name": "302 《激浪红心》"
                            }, {
                                "children": [],
                                "name": "303《曙光初照》"
                            }
                        ],
                        "name": "1973年——12个"
                    },{
                        "children": [
                            {
                                "children": [],
                                "name": "304《一斤二两米》"
                            }, {
                                "children": [],
                                "name": "305《山村姐妹》"
                            }, {
                                "children": [],
                                "name": "306《山村新风》"
                            }, {
                                "children": [],
                                "name": "307《向阳商店》"
                            }, {
                                "children": [],
                                "name": "308《阵地》"
                            }, {
                                "children": [],
                                "name": "309《园丁之歌》"
                            }
                        ],
                        "name": "1974年——6个"
                    },{
                        "children": [
                            {
                                "children": [],
                                "name": "310《人老心红》"
                            }, {
                                "children": [],
                                "name": "311《主课》"
                            }, {
                                "children": [],
                                "name": "312《决裂》"
                            }, {
                                "children": [],
                                "name": "313《叉江口》"
                            }, {
                                "children": [],
                                "name": "314《两张发票》"
                            }, {
                                "children": [],
                                "name": "315《春蚕曲》"
                            }, {
                                "children": [],
                                "name": "316 《海港》"
                            }, {
                                "children": [],
                                "name": "317《深山育苗》"
                            }, {
                                "children": [],
                                "name": "318 《铜墙铁壁》"
                            }, {
                                "children": [],
                                "name": "319《渡口》"
                            }, {
                                "children": [],
                                "name": "320《堡垒》"
                            }, {
                                "children": [],
                                "name": "321《路诊》"
                            }, {
                                "children": [],
                                "name": "322《新药》"
                            }, {
                                "children": [],
                                "name": "323《山花烂漫》"
                            }
                        ],
                        "name": "1975年——14个"
                    },{
                        "children": [
                            {
                                "children": [],
                                "name": "324《支农新店》"
                            }, {
                                "children": [],
                                "name": "325《书记的家事》"
                            }, {
                                "children": [],
                                "name": "326《田头怒火》"
                            }, {
                                "children": [],
                                "name": "327《杨柳村》"
                            }, {
                                "children": [],
                                "name": "328《茶花》"
                            }, {
                                "children": [],
                                "name": "329《花岭争春》（茶岭争春）"
                            },
                        ],
                        "name": "1976年——6个"
                    },{
                        "children": [
                            {
                                "children": [],
                                "name": "330《上铁岭》"
                            }, {
                                "children": [],
                                "name": "331《书记搬家》"
                            }, {
                                "children": [],
                                "name": "332《夺因》"
                            }, {
                                "children": [],
                                "name": "333《苹果树下》"
                            }, {
                                "children": [],
                                "name": "334《油沙豆》"
                            }, {
                                "children": [],
                                "name": "335《接受证》"
                            },
                        ],
                        "name": "1977年——6个"
                    },{
                        "children": [
                            {
                                "children": [],
                                "name": "336《于无声处》"
                            }, {
                                "children": [],
                                "name": "337《芳草记》"
                            }, {
                                "children": [],
                                "name": "338《青春之歌》"
                            }, {
                                "children": [],
                                "name": "339《看戏路上》"
                            }, {
                                "children": [],
                                "name": "340《原上草》"
                            }
                        ],
                        "name": "1978年——5个"
                    },{
                        "children": [
                            {
                                "children": [],
                                "name": "341《包公赔情》"
                            }, {
                                "children": [],
                                "name": "342《姐妹易嫁》"
                            }, {
                                "children": [],
                                "name": "343《春草闯堂》"
                            }, {
                                "children": [],
                                "name": "344《站花墙》"
                            }, {
                                "children": [],
                                "name": "345《唐知县审诰命》"
                            }, {
                                "children": [],
                                "name": "346《胭脂》"
                            }, {
                                "children": [],
                                "name": "347《袁璞与金凤》"
                            }, {
                                "children": [],
                                "name": "348《不听话的姑娘》"
                            }, {
                                "children": [],
                                "name": "349《陈州怨》"
                            }
                        ],
                        "name": "1979年——9个"
                    },{
                        "children": [
                            {
                                "children": [],
                                "name": "350《呼唤》"
                            }, {
                                "children": [],
                                "name": "351《哑女告状》"
                            }
                        ],
                        "name": "1980年——2个"
                    },{
                        "children": [
                            {
                                "children": [],
                                "name": "352《燕双飞》"
                            }
                        ],
                        "name": "1981年——1个"
                    },{
                        "children": [
                            {
                                "children": [],
                                "name": "353《一箭缘》"
                            }, {
                                "children": [],
                                "name": "354《小荷才露尖尖角》"
                            }, {
                                "children": [],
                                "name": "355《夫妻和》"
                            }, {
                                "children": [],
                                "name": "356《龙女情》"
                            }, {
                                "children": [],
                                "name": "357《冯香罗》"
                            }, {
                                "children": [],
                                "name": "358《江南曲》"
                            }, {
                                "children": [],
                                "name": "359《吕蒙正三审胖知县》"
                            }, {
                                "children": [],
                                "name": "360《柳伞》"
                            }, {
                                "children": [],
                                "name": "361《美祸》"
                            }, {
                                "children": [],
                                "name": "362《慈母泪》"
                            }, {
                                "children": [],
                                "name": "363《卫官传奇》"
                            }
                        ],
                        "name": "1982年——11个"
                    },{
                        "children": [
                            {
                                "children": [],
                                "name": "364《五女拜寿》"
                            }, {
                                "children": [],
                                "name": "365《马娘娘归天》"
                            }, {
                                "children": [],
                                "name": "366《贞嫂》"
                            }, {
                                "children": [],
                                "name": "367《春城飞花》"
                            }, {
                                "children": [],
                                "name": "368《桃花闹店》"
                            }
                        ],
                        "name": "1983年——5个"
                    },{
                        "children": [
                             {
                                "children": [],
                                "name": "369《风尘女画家》"
                            }, {
                                "children": [],
                                "name": "370《古鑑录》"
                            }, {
                                "children": [],
                                "name": "371《杜十娘》"
                            }, {
                                "children": [],
                                "name": "372《灵芝》"
                            }, {
                                "children": [],
                                "name": "374《逃婚》"
                            }, {
                                "children": [],
                                "name": "375《情深似海》"
                            }
                        ],
                        "name": "1984年——5个"
                    },{
                        "children": [
                             {
                                "children": [],
                                "name": "376《凤灵》"
                            }, {
                                "children": [],
                                "name": "377《母老虎上轿》"
                            }, {
                                "children": [],
                                "name": "378《审婿招婿》"
                            }, {
                                "children": [],
                                "name": "379《无事生非》"
                            }
                        ],
                        "name": "1985年——4个"
                    },{
                        "children": [
                             {
                                "children": [],
                                "name": "380《订婚照的风波》"
                            }, {
                                "children": [],
                                "name": "381《严凤英》广播剧"
                            }, {
                                "children": [],
                                "name": "382《藏不住的娇儿》"
                            }
                        ],
                        "name": "1986年——3个"
                    },{
                        "children": [
                             {
                                "children": [],
                                "name": "383《人间天上充满爱》"
                            }, {
                                "children": [],
                                "name": "384《牛仔女皇》"
                            }, {
                                "children": [],
                                "name": "385《这家没男人》"
                            }, {
                                "children": [],
                                "name": "386《严凤英》（广播剧、电视剧）"
                            }, {
                                "children": [],
                                "name": "387《狐女婴灵》"
                            }, {
                                "children": [],
                                "name": "388《退赔款》"
                            }, {
                                "children": [],
                                "name": "389《惜纷飞》"
                            }, {
                                "children": [],
                                "name": "390《黄梅戏演唱会》"
                            }
                        ],
                        "name": "1987年——8个"
                    },{
                        "children": [
                             {
                                "children": [],
                                "name": "391《汉宫秋》"
                            }, {
                                "children": [],
                                "name": "392《古刹鬼影》"
                            }, {
                                "children": [],
                                "name": "393《张春郎消发》"
                            }, {
                                "children": [],
                                "name": "394《花家村传奇》"
                            }, {
                                "children": [],
                                "name": "395《狐侠红玉》"
                            }, {
                                "children": [],
                                "name": "396《劈棺惊梦》"
                            }
                        ],
                        "name": "1988年——6个"
                    },{
                        "children": [
                             {
                                "children": [],
                                "name": "397《巧妹与憨哥》"
                            }, {
                                "children": [],
                                "name": "398《遥指杏花村》"
                            }, {
                                "children": [],
                                "name": "399《琴痴宦娘》"
                            }
                        ],
                        "name": "1989年——3个"
                    },{
                        "children": [
                             {
                                "children": [],
                                "name": "400《山乡路上》"
                            }, {
                                "children": [],
                                "name": "401《盼儿记》"
                            }, {
                                "children": [],
                                "name": "402《灯下夜话》"
                            }
                        ],
                        "name": "1990年——3个"
                    },{
                        "children": [
                             {
                                "children": [],
                                "name": "403《红了黄梅》"
                            }, {
                                "children": [],
                                "name": "404《柯老二入党》"
                            }, {
                                "children": [],
                                "name": "405《嫦娥与后羿》"
                            }, {
                                "children": [],
                                "name": "406《赴港演出》"
                            }, {
                                "children": [],
                                "name": "1991—407— 424 为资料和日志无图片"
                            }
                        ],
                        "name": "1991年——4个"
                    },{
                        "children": [
                            {
                                "children": [],
                                "name": "红楼梦（疑似档案盒遗漏 无编号）"
                            }
                        ],
                        "name": "1992年——1个"
                    },{
                        "children": [
                            {
                                "children": [],
                                "name": "428《梁山伯与祝英台》（新编）"
                            }
                        ],
                        "name": "1993年——1个"
                    },{
                        "children": [],
                        "name": "1994年——无"
                    },{
                        "children": [
                            {
                                "children": [],
                                "name": "468《草色青青》（编号疑似有误）"
                            }
                        ],
                        "name": "1995年——1个"
                    },{
                        "children": [
                            {
                                "children": [],
                                "name": "427《啼笑因缘》"
                            },{
                                "children": [],
                                "name": "430《家.春.秋》"
                            }
                        ],
                        "name": "1996年——2个（编号疑似有误）"
                    },{
                        "children": [],
                        "name": "1997年——无"
                    },{
                        "children": [
                            {
                                "children": [],
                                "name": "432《风雨丽人行》"
                            },{
                                "children": [],
                                "name": "433《木瓜上市》"
                            },{
                                "children": [],
                                "name": "434《秋千架》"
                            },{
                                "children": [],
                                "name": "435《长亭别》"
                            },{
                                "children": [],
                                "name": "436《六尺巷》"
                            }
                        ],
                        "name": "1998年——5个"
                    },{
                        "children": [
                            {
                                "children": [],
                                "name": "435《挡轿》（编号疑似有误）"
                            }
                        ],
                        "name": "1999年——1个"
                    },{
                        "children": [],
                        "name": "2000年——无"
                    },{
                        "children": [
                            {
                                "children": [],
                                "name": "437《最后一天》"
                            },{
                                "children": [],
                                "name": "438《墙头马上》"
                            },{
                                "children": [],
                                "name": "463《棒打薄情》"
                            }
                        ],
                        "name": "2001年——3个"
                    },{
                        "children": [],
                        "name": "2002年——无"
                    },{
                        "children": [
                            {
                                "children": [],
                                "name": "441《长恨歌》"
                            },{
                                "children": [],
                                "name": "442《灵姑戏虎》"
                            },{
                                "children": [],
                                "name": "445《借妻》"
                            }
                        ],
                        "name": "2003年——3个（编号疑似有误）"
                    },{
                        "children": [
                            {
                                "children": [],
                                "name": "445《双玉蝉》"
                            },{
                                "children": [],
                                "name": "446《半边月》"
                            },{
                                "children": [],
                                "name": "447《乌金记》"
                            },{
                                "children": [],
                                "name": "448《窦娥冤》"
                            },{
                                "children": [],
                                "name": "449《三请樊梨花》"
                            },{
                                "children": [],
                                "name": "450《清风亭》"
                            },{
                                "children": [],
                                "name": "462《孝子冤》"
                            },{
                                "children": [],
                                "name": "465《江山美人》"
                            }
                        ],
                        "name": "2004年——8个（编号疑似有误）"
                    },{
                        "children": [
                            {
                                "children": [],
                                "name": "451《霸王别姬》"
                            },{
                                "children": [],
                                "name": "452《知心村官》"
                            },{
                                "children": [],
                                "name": "453《长亭别》"
                            },{
                                "children": [],
                                "name": "454《六尺巷》"
                            },{
                                "children": [],
                                "name": "455《游龙戏凤》"
                            },{
                                "children": [],
                                "name": "456《雷雨》"
                            },{
                                "children": [],
                                "name": "457《玩会跳船》"
                            },{
                                "children": [],
                                "name": "458《闹新房》"
                            },{
                                "children": [],
                                "name": "459《炸坝时刻》"
                            },{
                                "children": [],
                                "name": "460《十送英台》"
                            }
                        ],
                        "name": "2005年——10个（编号疑似有误）"
                    },{
                        "children": [
                            {
                                "children": [],
                                "name": "461《逆火》"
                            }
                        ],
                        "name": "2006年——1个"
                    },{
                        "children": [
                            {
                                "children": [],
                                "name": "462 《何处桃花红》（根据鲁彦周小说《逆火》改编）"
                            }
                        ],
                        "name": "2007年——1个"
                    },{
                        "children": [],
                        "name": "2008年——无"
                    },{
                        "children": [],
                        "name": "2009年——无"
                    },{
                        "children": [],
                        "name": "2010年——无"
                    },{
                        "children": [],
                        "name": "2011年——无"
                    },{
                        "children": [],
                        "name": "2012年——无"
                    },{
                        "children": [],
                        "name": "2013年——无"
                    },{
                        "children": [],
                        "name": "2014年——无"
                    },{
                        "children": [
                            {
                                "children": [],
                                "name": "462 《不越雷池》"
                            },{
                                "children": [],
                                "name": "463 《小乔初嫁》"
                            }
                        ],
                        "name": "2015年——2个"
                    },{
                        "children": [
                            {
                                "children": [],
                                "name": "464 《遍地月光》"
                            }
                        ],
                        "name": "2016年——1个"
                    },{
                        "children": [],
                        "name": "2017年——无"
                    },{
                        "children": [],
                        "name": "2018年——无"
                    },{
                        "children": [
                            {
                                "children": [],
                                "name": "465《五月的鲜花》"
                            },{
                                "children": [],
                                "name": "466《我的离骚》"
                            }
                        ],
                        "name": "2019年——2个"
                    }
                ],
                "name": "戏曲添加情况统计表"
            }
                    
                    
            ],
//页面中布局情况
                top: '18%',
                bottom: '14%',

                layout: 'radial',
//点点效果
                symbol: 'emptyCircle',

                symbolSize: 7,

                initialTreeDepth: 1,

                animationDurationUpdate: 600,

                emphasis: {
                    focus: 'descendant'
                }
            }
        ]
    };
  
    // 把配置给实例对象
    myChart.setOption(option);
    //图表跟随屏幕来适应
    window.addEventListener("resize", function() {
      myChart.resize();
    });
    myChart.setOption(option);
  })();