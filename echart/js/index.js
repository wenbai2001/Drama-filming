// 听戏的戏种柱状图
(function() {
  // 实例化对象
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  // 指定配置和数据
  var option = {
    legend:{
      data:['max', 'min'],
      right:'5%',
      textStyle:{

      }
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    //修改大小
    grid: {
      x:50,
      y:50,
      x2:50,
      y2:50,
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        name:"日期",
        nameTextStyle:{
            padding:-10
        },
        data: [{
          value:"5-23",
          textStyle:{
            color:'black'
          }
        },
          "5-24",
          "5-25",
          "5-26",
          "5-27",
          "5-28",
          "5-29",
          "5-30"
        ],
        axisTick: {
          alignWithLabel: true
        },
        //坐标轴刻度标签
        axisLabel: {
          textStyle: {
            color: "rgba(0,0,0,.6)",
            fontSize: "12"
          }
        },
        //x轴样式不显示
        axisLine: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: "value",
        name:"角度(°)",
        nameTextStyle:{
            padding:10,
            color:"black"
        },
        maxInterval: 5,
        axisLabel: {
          textStyle: {
            color: "rgba(0,0,0,.6)",
            fontSize: "12"
          }
        },
        
        axisLine: {
          lineStyle: {
            color: "rgba(255,64,64,.1)",
            width: 1
            // type: "solid"
          }
        },
        //y轴分割线
        splitLine: {
          lineStyle: {
            color: "rgba(255,64,64,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: "max",
        type: "bar",
        barWidth: "35%",
        data: [73, 63, 69, 75, 80, 82, 87, 92],
        itemStyle: {
          barBorderRadius: 5,
          //循环取色
          color:function(params){
            var colorlist = ['#0000FF','#0000FF','#0000FF','#0000FF','#0000FF','#0000FF',"#0000FF","#0000FF"];
            return colorlist[params.dataIndex];
          }
        }
      },
      {
        name: "min",
        type: "bar",
        barWidth: "35%",
        data: [-5, -7, -9, -13, -10, -15, -8, -3],
        itemStyle: {
          barBorderRadius: 5,
          //循环取色
          color:function(params){
            var colorlist = ['#FFFF00','#FFFF00','#FFFF00','#FFFF00','#FFFF00','#FFFF00',"#FFFF00","#FFFF00"];
            return colorlist[params.dataIndex];
          }
        }
      },
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

// 饼形图年龄分布
(function() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".pie .chart"));

  option = {
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}: {c} ({d}%)",
      position: function(p) {
        //其中p为当前鼠标的位置
        return [p[0] + 10, p[1] - 10];
      }
    },
    legend: {
      top: "80%",
      itemWidth: 20,
      itemHeight: 20,
      
      data: ["15岁以下", "16-25岁", "26-35岁", "36-45岁","\n","46-55岁", "56-65岁", "66-75岁", "75岁以上"],
      textStyle: {
        color: "rgba(0,0,0,.5)",
        fontSize: "12"
      }
    },
    series: [
      {
        name: "年龄分布",
        type: "pie",
        center: ["50%", "42%"],
        radius: ["40%", "60%"],
        color: [
          "#FF425E",
          "#CDA86A", 
          "#CE3C4F",
          "#FF425E",
          "#C84834",
          "#585E5C",
          "#C6EDE8",
          "#D2910F"
        ],
        label: { show: false },
        labelLine: { show: false },
        data: [
          { value: 10, name: "15岁以下" },
          { value: 12, name: "16-25岁" },
          { value: 15, name: "26-35岁" },
          { value: 18, name: "36-45岁" },
          { value: 33, name: "46-55岁" },
          { value: 48, name: "56-65岁" },
          { value: 54, name: "66-75岁" },
          { value: 71, name: "75岁以上" }
        ]
      }
    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();


// 职业分布堆叠柱状图模块
(function() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".bar1 .chart"));

  option = {
    angleAxis: {
        type: 'category',
        data: ["学生", "专家、技术人员\n及有关工作者", "政府官员和企业经理", "事务工作者和有关工作者", "销售工作者及服务工作者", "农业、牧业、林业工作者\n及渔民、猎人", "生产和有关工作者、\n运输设备操作者和劳动者", "退休"]
    },
    radiusAxis: {
    },
    polar: {
    },
    grid:{
      x:70,
      y:70,
      x2:70,
      y2:70
    },
    series: [{
        type: 'bar',
        data: [7, 7, 7, 7, 7, 7, 7, 7],
        coordinateSystem: 'polar',
        name: '0-7人',
        stack: 'a',
        color:'#99699B',
        emphasis: {
            focus: 'series'
        }
    }, {
        type: 'bar',
        data: [11, 11, 10, 3, 5, 2, 0, 11],
        coordinateSystem: 'polar',
        name: '8-18人',
        stack: 'a',
        color:'#AFD7EE',
        emphasis: {
            focus: 'series'
        }
    }, {
        type: 'bar',
        data: [0, 4, 0, 0, 0, 0, 0, 4],
        coordinateSystem: 'polar',
        name: '19-22人',
        stack: 'a',
        color:'#C55084',
        emphasis: {
            focus: 'series'
        }
    },{
      type: 'bar',
      data: [0, 0, 0, 0, 0, 0, 0, 15],
      coordinateSystem: 'polar',
      name: '23-173人',
      stack: 'a',
      color:'#71AFA4',
      emphasis: {
          focus: 'series'
      }
  }
  ],
    legend: {
        show: true,
        data: ['0-7人', '8-18人', '19-22人', '23-173人']
    }
};

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();
//相关性用地区统计和听戏人数进行对比
(function() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".line1 .chart"));

  option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        lineStyle: {
          color: "#dddc6b"
        }
      }
    },
    legend: {
      top: "0%",
      textStyle: {
        color: "rgba(0,0,0,.5)",
        fontSize: "12"
      }
    },
    grid: {
      x:50,
      y:50,
      x2:50,
      y2:30,
      containLabel: true
    },

    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        axisLabel: {
          textStyle: {
            color: "rgba(0,0,0,.6)",
            fontSize: 12
          }
        },
        axisLine: {
          lineStyle: {
            color: "rgba(0,0,0,.2)"
          }
        },

        data: [
          "华北",
          "东北",
          "华东",
          "华中",
          "华南",
          "西南",
          "西北"
        ]
      },
      {
        axisPointer: { show: false },
        axisLine: { show: false },
        position: "bottom",
        offset: 20
      }
    ],

    yAxis: [
      {
        type: "value",
        axisTick: { show: false },
        axisLine: {
          lineStyle: {
            color: "rgba(0,0,0,.1)"
          }
        },
        axisLabel: {
          textStyle: {
            color: "rgba(0,0,0,.6)",
            fontSize: 12
          }
        },

        splitLine: {
          lineStyle: {
            color: "rgba(0,0,0,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: "调查人数(单位：百)",
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
          normal: {
            color: "#FAE372",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(250, 227, 113, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(250, 227, 113, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        itemStyle: {
          normal: {
            color: "#FAE372",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12
          }
        },
        data: [
          12.84,
          13.07,
          13.36,
          12.45,
          12.20,
          12.77,
          13.31

        ]
      },
      {
        name: "看黄梅戏的人数",
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
          normal: {
            color: "#92E0FE",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(146, 224, 254, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(146, 224, 254, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        itemStyle: {
          normal: {
            color: "#92E0FE",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12
          }
        },
        data: [
          0,
          0,
          22,
          4,
          1,
          1,
          1
        ]
      },
      {
        name: "听其它戏的人数(单位：十)",
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
          normal: {
            color:"#FF425E",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(255, 66, 94, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(255, 66, 94, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        itemStyle: {
          normal: {
            color: "#FF425E",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12
          }
        },
        data: [
          5.4,
          0.8,
          0.4,
          1.4,
          2.8,
          5.1,
          7.2
        ]
      }
    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();

//地区分布模块
(function() {
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".pie1  .chart"));
  // 2. 指定配置项和数据
  var option = {
    legend: {
      top: "85%",
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: "rgba(0,0,0,.5)",
        fontSize: "12"
      }
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    // 注意颜色写的位置
    color: [
      "#FAE372",
      "#92E0FE",
      "#FF425E",
      "#FF425E",
      "",
      "#C6EDE8",
      "#AFD7EE",
      "#5CA7BA",
    ],
    series: [
      {
        name: "点位统计",
        type: "pie",
        // 如果radius是百分比则必须加引号
        radius: ["10%", "70%"],
        center: ["50%", "45%"],
        roseType: "radius",
        data: [
          { value: 54, name: "华北地区" },
          { value:8, name: "东北地区" },
          { value: 4, name: "华东地区" },
          { value: 14, name: "华中地区" },
          {name:"\n"},
          { value: 28, name: "华南地区" },
          { value: 51, name: "西南地区" },
          { value: 72, name: "西北地区" }
        ],
        // 修饰饼形图文字相关的样式 label对象
        label: {
          fontSize: 10
        },
        // 修饰引导线样式
        labelLine: {
          // 连接到图形的线长度
          length: 10,
          // 连接到文字的线长度
          length2: 10
        }
      }
    ]
  };

  // 3. 配置项和数据给我们的实例化对象
  myChart.setOption(option);
  // 4. 当我们浏览器缩放的时候，图表也等比例缩放
  window.addEventListener("resize", function() {
    // 让我们的图表调用 resize这个方法
    myChart.resize();
  });
})();

// 听戏的戏种柱状图
(function() {
  // 实例化对象
  var myChart = echarts.init(document.querySelector(".except .chart"));
  // 指定配置和数据
  option = {
    series: [{
        type: 'gauge',
        axisLine: {
            lineStyle: {
                width: 20,
                color: [
                    [0.3, '#67e0e3'],
                    [0.7, '#37a2da'],
                    [1, '#fd666d']
                ]
            }
        },
        pointer: {
            itemStyle: {
                color: 'auto'
            }
        },
        axisTick: {
            distance: -50,
            length: 8,
            lineStyle: {
                color: '#fff',
                width: 2
            }
        },
        splitLine: {
            distance: -30,
            length: 30,
            lineStyle: {
                color: '#fff',
                width: 4
            }
        },
        axisLabel: {
            color: 'auto',
            distance: 10,
            fontSize: 10
        },
        detail: {
            valueAnimation: true,
            formatter: '{value} 人',
            color: 'auto',
            fontSize:20
        },
        data: [{
            value: 261
        }]
    }],
};
i = 0;
setInterval(function () {

    m = i % 3;
    if(m == 0)
    {option.series[0].data[0].value = 60.1;
    option.series[0].detail.formatter = '{value}%会了解';}
    else if(m == 1)
    {option.series[0].data[0].value = 5.7;
    option.series[0].detail.formatter = '{value}%不会了解';}
    else
    {option.series[0].data[0].value = 34.1;
    option.series[0].detail.formatter = '{value}%有可能了解';}
    i = i + 1;
    myChart.setOption(option, true);
}, 2000);

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();
