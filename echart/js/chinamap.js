(function() {
    var myChart = echarts.init(document.querySelector(".map .chart"));
	//西北 0 新疆 青海 甘肃 宁夏
	//西南 0 重庆 四川 贵州 云南 西藏
	//华南 2 广东 广西 海南 香港 澳门
	//华中 4 河南 湖北 湖南
	//华北 1 北京 天津 河北 山西 内蒙古
	//华东 18  上海 江苏 浙江 安徽 江西 福建 山东 台湾
	//东北 0  黑龙江 吉林 辽宁
	var mydata = [
		{name: '北京',value: 1 },{name: '天津',value: 0 },
		{name: '上海',value: 3 },{name: '重庆',value: 0 },
		{name: '河北',value: 0 },{name: '河南',value: 1 },
		{name: '云南',value: 0 },{name: '辽宁',value: 0 },
		{name: '黑龙江',value: 0 },{name: '湖南',value: 1 },
		{name: '安徽',value: 7 },{name: '山东',value: 1 },
		{name: '新疆',value: 0 },{name: '江苏',value: 3 },
		{name: '浙江',value: 2 },{name: '江西',value: 2 },
		{name: '湖北',value: 2 },{name: '广西',value: 1 },
		{name: '甘肃',value: 0 },{name: '山西',value: 0 },
		{name: '内蒙古',value: 0 },{name: '陕西',value: 0 },
		{name: '吉林',value: 0 },{name: '福建',value: 1 },
		{name: '贵州',value: 0 },{name: '广东',value: 1 },
		{name: '青海',value: 0 },{name: '西藏',value: 0 },
		{name: '四川',value: 0 },{name: '宁夏',value: 0 },
		{name: '海南',value: 0 },{name: '台湾',value: 0 },
		{name: '香港',value: 0 },{name: '澳门',value: 0 }
	];

	var geoCoordMap = 
	[
	{name: '北京', value: [116.405285, 39.904989, 1], visualMap: false},
	{name: '天津', value: [117.190182, 39.125596, 0]},
	{name: '上海', value: [121.472644, 31.231706, 3]},
	{name: '重庆', value: [106.504962, 29.533155, 0]},
	{name: '河北', value: [114.502461, 38.045474, 0]},
	{name: '河南', value: [113.665412, 34.757975, 1]},
	{name: '云南', value: [102.712251, 25.040609, 0]},
	{name: '辽宁', value: [123.429096, 41.796767, 0]},
	{name: '黑龙江', value: [126.642464, 45.756967, 0]},
	{name: '湖南', value: [112.982279, 28.19409, 1]},
	{name: '安徽', value: [117.283042, 31.86119, 7]},
	{name: '山东', value: [117.000923, 36.675807, 1]},
	{name: '新疆', value: [87.617733, 43.792818, 0]},
	{name: '江苏', value: [118.767413, 32.041544, 3]},
	{name: '浙江', value: [120.153576, 30.287459, 2]},
	{name: '江西', value: [115.892151, 28.676493, 2]},
	{name: '湖北', value: [114.298572, 30.584355, 2]},
	{name: '广西', value: [108.320004, 22.82402, 2]},
	{name: '甘肃', value: [103.823557, 36.058039, 1]},
	{name: '山西', value: [112.549248, 37.857014, 0]},
	{name: '内蒙古', value: [111.670801, 40.818311, 0]},
	{name: '陕西', value: [108.948024, 34.263161, 0]},
	{name: '吉林', value: [125.3245, 43.886841, 0]},
	{name: '福建', value: [119.306239, 26.075302, 0]},
	{name: '贵州', value: [106.713478, 26.578343, 1]},
	{name: '广东', value: [113.280637, 23.125178, 0]},
	{name: '青海', value: [101.778916, 36.623178, 1]},
	{name: '西藏', value: [91.132212, 29.660361, 0]},
	{name: '四川', value: [104.065735, 30.659462, 0]},
	{name: '宁夏', value: [106.278179, 38.46637, 0]},
	{name: '海南', value: [110.33119, 20.031971, 0]},
	{name: '台湾', value: [121.509062, 25.044332, 0]},
	{name: '香港', value: [114.173355, 22.320048, 0]},
	{name: '澳门', value: [112.54909, 22.198951, 0]},
	];



	var option = {
		title: {
			x:'center'
		},
		legend:{
			orient:"horizontal",
			x: 1100,
			y: 400,
			width:'100',
			// padding:[10, 30, 0, 0],
			itemWidth:30,
			textStyle:{
				 color:'#000',
			   },
		},
		//控制提示框的显示信息
		tooltip:{
			trigger:'item',
			formatter:function(params){
			var htmlStr = '<div>';
			htmlStr += '具体信息:<br/>';
			htmlStr +="地区:" +geoCoordMap[params.dataIndex].name +'<br/>';    //获取自定义信息
			htmlStr += "人数:" +geoCoordMap[params.dataIndex].value[2] +'<br/>';
			return htmlStr; 
			}
		},
		visualMap: {
			show : true,
			x: 100,
			y: 400,
			splitList: [ 
				{start: 7, end:10},
				{start: 3, end: 6},
				{start: 1, end: 2},
				{start: 0, end: 0},
			],
			color: [ '#FF0000','#FF8C69','#8B0000','#CD2626']
		},
		geo:{
			map:'china'
		},
		series: [{
			name: '人数',
			type: 'map',
			mapType: 'china', 
			roam: false,
			label: {
				normal: {
					show: false
				},
				emphasis: {
					show: true
				}
			},
			itemStyle:{
				normal:{label:{show: true},borderColor:"white"},
				emphasis:{label:{show: true}}
			},
			data:mydata
		},
		{
			name: '数量',
			type: 'scatter',
			coordinateSystem: 'geo',
			data: geoCoordMap,
			symbolSize:10,
			label: {
				normal: {
					show: false,
					/*formatter:function(params){ 
						str = '{a|'+ params.value[2] + '}{abg|}\n{hr|}\n  {b|'+params.name+'：}'
						return str
					},*/
					formatter:function(geoCoordMap){
						return geoCoordMap.name + ':' + geoCoordMap.value[2]
					},
					//控制散点标签的格式
					rich: {
                        a: {
                            color: '#999',
                            lineHeight: 22,
                            align: 'center'
                        },
                         abg: {
                             backgroundColor: '#333',
                             width: '100%',
                             align: 'right',
                             height: 22,
                             borderRadius: [4, 4, 0, 0]
                         },
                        hr: {
                            borderColor: '#aaa',
                            width: '100%',
                            borderWidth: 0.5,
                            height: 0
                        },
                        b: {
                            fontSize: 16,
                            lineHeight: 33
                        },
				}
			},
				emphasis: {
					show: true,
					formatter:function(params){
						return params.name + ':' + params.value[2]
					}
				},
			},
			itemStyle:{
				normal:{label:{show: true},color:"yellow"},
				emphasis:{label:{show: true},color:"yellow"},
			},
		}
]
	};


    myChart.setOption(option);
    window.addEventListener("resize", function() {
      myChart.resize();
    });
})();