//不同年份与戏曲的关系图
(function() {
    // 实例化对象
    var myChart = echarts.init(document.querySelector(".relationship"));


    var graph = {
        "nodes": [
          // 设置每一个类名的id，名字，大小，坐标，值，所属类名（年份）
          {
            "id": "0",
            "name": "《打猪草》",
            "symbolSize": 15,
            "x": -266.82776,
            "y": 299.6904,
            "value": 28.685715,
            "category": 0
          },
          {
            "id": "1",
            "name": "《夫妻观灯》",
            "symbolSize": 15,
            "x": -418.08344,
            "y": 446.8853,
            "value": 4,
            "category": 1
          },
          {
            "id": "2",
            "name": "《天仙配》",
            "symbolSize": 15,
            "x": -212.76357,
            "y": 245.29176,
            "value": 9.485714,
            "category": 1
          },
          {
            "id": "3",
            "name": "《拾棉花》",
            "symbolSize": 15,
            "x": -242.82404,
            "y": 235.26283,
            "value": 9.485714,
            "category": 1
          },
          {
            "id": "4",
            "name": "《春香传》",
            "symbolSize": 15,
            "x": -379.30386,
            "y": 429.06424,
            "value": 4,
            "category": 2
          },
          {
            "id": "5",
            "name": "《挑女婿》",
            "symbolSize": 15,
            "x": -417.26337,
            "y": 406.03506,
            "value": 4,
            "category": 3
          },
          {
            "id": "6",
            "name": "《打金枝》",
            "symbolSize": 15,
            "x": -332.6012,
            "y": 485.16974,
            "value": 4,
            "category": 3
          },
          {
            "id": "7",
            "name": "《荔枝缘》",
            "symbolSize": 15,
            "x": -382.69568,
            "y": 475.09113,
            "value": 4,
            "category": 4
          },
          {
            "id": "8",
            "name": "《碧玉簪》",
            "symbolSize": 15,
            "x": -320.384,
            "y": 387.17325,
            "value": 4,
            "category": 4
          },
          {
            "id": "9",
            "name": "《木匠迎亲》",
            "symbolSize": 15,
            "x": -344.39832,
            "y": 451.16772,
            "value": 4,
            "category": 4
          },
          {
            "id": "10",
            "name": "《女驸马》",
            "symbolSize": 15,
            "x": -89.34107,
            "y": 234.56128,
            "value": 4,
            "category": 5
          },
          {
            "id": "11",
            "name": "《宝英传》",
            "symbolSize": 15,
            "x": -87.93029,
            "y": -6.8120565,
            "value": 100,
            "category": 5
          },
          {
            "id": "12",
            "name": "《桃花扇》",
            "symbolSize": 15,
            "x": -339.77908,
            "y": -184.69139,
            "value": 6.742859,
            "category": 5
          },
          {
            "id": "13",
            "name": "《党的女儿》",
            "symbolSize": 15,
            "x": -194.31313,
            "y": 178.55301,
            "value": 4,
            "category": 5
          },
          {
            "id": "14",
            "name": "《春香闹学》",
            "symbolSize": 15,
            "x": -158.05168,
            "y": 201.99768,
            "value": 4,
            "category": 5
          },
          {
            "id": "15",
            "name": "《罗帕记》",
            "symbolSize": 15,
            "x": -127.701546,
            "y": 242.55057,
            "value": 4,
            "category": 6
          },
          {
            "id": "16",
            "name": "《砂子岗》",
            "symbolSize": 15,
            "x": -385.2226,
            "y": -393.5572,
            "value": 25.942856,
            "category": 6
          },
          {
            "id": "17",
            "name": "《打豆腐》",
            "symbolSize": 15,
            "x": -516.55884,
            "y": -393.98975,
            "value": 20.457146,
            "category": 6
          },
          {
            "id": "18",
            "name": "《戏牡丹》",
            "symbolSize": 15,
            "x": -464.79382,
            "y": -493.57944,
            "value": 20.457146,
            "category": 6
          },
          {
            "id": "19",
            "name": "《梁山伯与祝英台》",
            "symbolSize": 15,
            "x": -515.1624,
            "y": -456.9891,
            "value": 20.457146,
            "category": 6
          },
          {
            "id": "20",
            "name": "游春",
            "symbolSize": 15,
            "x": -408.12122,
            "y": -464.5048,
            "value": 20.457146,
            "category": 6
          },
          {
            "id": "21",
            "name": "《蓝桥会》",
            "symbolSize": 15,
            "x": -456.44113,
            "y": -425.13303,
            "value": 20.457146,
            "category": 6
          },
          {
            "id": "22",
            "name": "小辞店",
            "symbolSize": 15,
            "x": -459.1107,
            "y": -362.5133,
            "value": 20.457146,
            "category": 6
          },
          {
            "id": "23",
            "name": "刘三姐",
            "symbolSize": 15,
            "x": -313.42786,
            "y": -289.44803,
            "value": 42.4,
            "category": 6
          },
          {
            "id": "24",
            "name": "《风尘女画家》",
            "symbolSize": 15,
            "x": 4.6313396,
            "y": -273.8517,
            "value": 31.428574,
            "category": 7
          },
          {
            "id": "25",
            "name": "《孟姜女》",
            "symbolSize": 15,
            "x": 82.80825,
            "y": -203.1144,
            "value": 45.142853,
            "category": 7
          },
          {
            "id": "26",
            "name": "《无事生非》",
            "symbolSize": 15,
            "x": 78.64646,
            "y": -31.512747,
            "value": 31.428574,
            "category": 8
          },
          {
            "id": "27",
            "name": "《巧妹与憨哥》",
            "symbolSize": 15,
            "x": -81.46074,
            "y": -204.20204,
            "value": 47.88571,
            "category": 9
          },
          {
            "id": "28",
            "name": "《遥指杏花村》",
            "symbolSize": 15,
            "x": -225.73984,
            "y": 82.41631,
            "value": 12.228573,
            "category": 9
          },
          {
            "id": "29",
            "name": "《盼儿记》",
            "symbolSize": 15,
            "x": -385.6842,
            "y": -20.206686,
            "value": 23.2,
            "category": 10
          },
          {
            "id": "30",
            "name": "《柯老二入党》",
            "symbolSize": 15,
            "x": -403.92447,
            "y": -197.69823,
            "value": 6.742859,
            "category": 11
          },
          {
            "id": "31",
            "name": "《红楼梦》",
            "symbolSize": 15,
            "x": -281.4253,
            "y": -158.45137,
            "value": 12.228573,
            "category": 11
          },
          {
            "id": "32",
            "name": "《啼笑因缘》",
            "symbolSize": 15,
            "x": -122.41348,
            "y": 210.37503,
            "value": 4,
            "category": 12
          },
          {
            "id": "33",
            "name": "《木瓜上市》",
            "symbolSize": 15,
            "x": -234.6001,
            "y": -113.15067,
            "value": 6.742859,
            "category": 13
          },
          {
            "id": "34",
            "name": "《双下山》",
            "symbolSize": 15,
            "x": -387.84915,
            "y": 58.7059,
            "value": 17.714287,
            "category": 13
          },
          {
            "id": "35",
            "name": "《红丝错》",
            "symbolSize": 15,
            "x": -338.2307,
            "y": 87.48405,
            "value": 17.714287,
            "category": 13
          },
          {
            "id": "36",
            "name": "《喜荣归》",
            "symbolSize": 15,
            "x": -453.26874,
            "y": 58.94648,
            "value": 17.714287,
            "category": 13
          },
          {
            "id": "37",
            "name": "《风雨丽人行》",
            "symbolSize": 15,
            "x": -386.44904,
            "y": 140.05937,
            "value": 17.714287,
            "category": 14
          },
          {
            "id": "38",
            "name": "秋千架",
            "symbolSize": 15,
            "x": -446.7876,
            "y": 123.38005,
            "value": 17.714287,
            "category": 14
          }
        ],
        "links": [
          {"source": "4",  "target": "0"},
{"source": "25",  "target": "1"},{"source": "29",  "target": "1"},{"source": "35",  "target": "1"},{"source": "37",  "target": "1"},
{"source": "38",  "target": "1"},
{"source": "10",  "target": "2"},{"source": "30",  "target": "2"},
{"source": "0",  "target": "3"},{"source": "8",  "target": "3"},{"source": "17",  "target": "3"},{"source": "18",  "target": "3"},
{"source": "22",  "target": "3"},
{"source": "1",  "target": "4"},{"source": "5",  "target": "4"},{"source": "9",  "target": "4"},{"source": "18",  "target": "4"},
{"source": "22",  "target": "4"},{"source": "35",  "target": "4"},
{"source": "7",  "target": "5"},{"source": "15",  "target": "5"},{"source": "36",  "target": "5"},
{"source": "0",  "target": "6"},{"source": "15",  "target": "6"},
{"source": "11",  "target": "7"},{"source": "12",  "target": "7"},
{"source": "7",  "target": "8"},
{"source": "20",  "target": "9"},{"source": "30",  "target": "9"},
{"source": "16",  "target": "10"},{"source": "22",  "target": "10"},{"source": "28",  "target": "10"},
{"source": "14",  "target": "11"},{"source": "16",  "target": "11"},{"source": "19",  "target": "11"},{"source": "20",  "target": "11"},
{"source": "24",  "target": "11"},{"source": "28",  "target": "11"},{"source": "29",  "target": "11"},
{"source": "10",  "target": "12"},{"source": "13",  "target": "12"},{"source": "15",  "target": "12"},{"source": "17",  "target": "12"},
{"source": "36",  "target": "12"},
{"source": "7",  "target": "13"},{"source": "10",  "target": "13"},{"source": "18",  "target": "13"},{"source": "19",  "target": "13"},
{"source": "23",  "target": "13"},{"source": "27",  "target": "13"},{"source": "34",  "target": "13"},{"source": "38",  "target": "13"},

{"source": "7",  "target": "14"},{"source": "8",  "target": "14"},{"source": "13",  "target": "14"},{"source": "20",  "target": "14"},

{"source": "38",  "target": "15"},
{"source": "4",  "target": "16"},{"source": "20",  "target": "16"},{"source": "35",  "target": "16"},
{"source": "1",  "target": "17"},{"source": "8",  "target": "17"},{"source": "11",  "target": "17"},{"source": "14",  "target": "17"},
{"source": "20",  "target": "17"},
{"source": "3",  "target": "18"},{"source": "16",  "target": "18"},{"source": "24",  "target": "18"},{"source": "33",  "target": "18"},
{"source": "36",  "target": "18"},
{"source": "6",  "target": "19"},{"source": "32",  "target": "19"},{"source": "36",  "target": "19"},
{"source": "4",  "target": "20"},{"source": "10",  "target": "20"},{"source": "28",  "target": "20"},{"source": "34",  "target": "20"},
{"source": "37",  "target": "20"},{"source": "38",  "target": "20"},

{"source": "23",  "target": "22"},{"source": "29",  "target": "22"},{"source": "30",  "target": "22"},
{"source": "12",  "target": "23"},{"source": "13",  "target": "23"},{"source": "16",  "target": "23"},{"source": "32",  "target": "23"},

{"source": "15",  "target": "24"},{"source": "28",  "target": "24"},{"source": "35",  "target": "24"},
{"source": "3",  "target": "25"},{"source": "6",  "target": "25"},{"source": "12",  "target": "25"},{"source": "23",  "target": "25"},
{"source": "30",  "target": "25"},
{"source": "4",  "target": "26"},{"source": "9",  "target": "26"},{"source": "27",  "target": "26"},
{"source": "13",  "target": "27"},{"source": "18",  "target": "27"},
{"source": "21",  "target": "28"},{"source": "23",  "target": "28"},{"source": "30",  "target": "28"},
{"source": "3",  "target": "29"},{"source": "8",  "target": "29"},{"source": "9",  "target": "29"},{"source": "10",  "target": "29"},
{"source": "34",  "target": "29"},
{"source": "4",  "target": "30"},{"source": "6",  "target": "30"},{"source": "9",  "target": "30"},{"source": "27",  "target": "30"},

{"source": "3",  "target": "31"},{"source": "15",  "target": "31"},{"source": "23",  "target": "31"},{"source": "35",  "target": "31"},

{"source": "0",  "target": "32"},{"source": "10",  "target": "32"},{"source": "21",  "target": "32"},
{"source": "7",  "target": "33"},{"source": "26",  "target": "33"},{"source": "30",  "target": "33"},
{"source": "23",  "target": "34"},{"source": "26",  "target": "34"},
{"source": "1",  "target": "35"},{"source": "6",  "target": "35"},{"source": "10",  "target": "35"},{"source": "19",  "target": "35"},
{"source": "24",  "target": "35"},{"source": "29",  "target": "35"},{"source": "33",  "target": "35"},
{"source": "7",  "target": "36"},{"source": "23",  "target": "36"},{"source": "24",  "target": "36"},{"source": "29",  "target": "36"},
{"source": "32",  "target": "36"},
{"source": "17",  "target": "37"},{"source": "25",  "target": "37"},{"source": "27",  "target": "37"},{"source": "30",  "target": "37"},
{"source": "34",  "target": "37"},
{"source": "6",  "target": "38"},{"source": "8",  "target": "38"},{"source": "12",  "target": "38"},{"source": "16",  "target": "38"},
{"source": "24",  "target": "38"},{"source": "28",  "target": "38"},        
        ],
        "categories": [
          {
            "name": "1952年"
          },
          {
            "name": "1953年"
          },
          {
            "name": "1954年"
          },
          {
            "name": "1955年"
          },
          {
            "name": "1957年"
          },
          {
            "name": "1958年"
          },
          {
            "name": "1959年"
          },
          {
            "name": "1984年"
          },
          {
            "name": "1986年"
          },
          {
            "name": "1989年"
          },
          {
            "name": "1990年"
          },
          {
            "name": "1991年"
          },
          {
            "name": "1996年"
          },
          {
            "name": "1997年"
          },
          {
            "name": "1998年"
          }
        ]
      }

    graph.nodes.forEach(function (node) {
        node.label = {
            show: node.symbolSize > 30
        };
    });

    option = {
        title: {
            text: '戏曲编年关系',
            subtext: 'Circular layout',
            top: 'bottom',
            left: 'right'
        },
        tooltip: {},
        legend: [{
            data: graph.categories.map(function (a) {
                return a.name;
            }),
            position: 'right',
        },
      ],
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [
            {
                name: '戏曲编年关系',
                type: 'graph',
                layout: 'circular',
                circular: {
                    rotateLabel: true
                },
                data: graph.nodes,
                links: graph.links,
                categories: graph.categories,
                roam: false,
                label: {
                    position: 'right',
                    formatter: '{b}'
                },
                lineStyle: {
                    color: 'source',
                    curveness: 0.3
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
})();