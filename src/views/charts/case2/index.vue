<template>
  <div id="case2">
    <div class="main clearfix">
      <div class="main-left">
        <div class="border-container containertop">
          <h5 class="name-title tile-size-color">设备状态</h5>
          <div id="radar">
            <div class="radarkong">
              <p class="tile-size-color">
                设备总数 :<span class="Totalequipment"> 660个</span>统计时间
                :<span> 2020.03.26 15:28</span>
              </p>
            </div>
            <div class="pie-chart" id="pie-chart"></div>
            <ul class="SiteStatusList">
              <li>
                <i class="Statusnormal Statussame"></i>正常：<span>556</span>
              </li>
              <li>
                <i class="Statusemergency Statussame"></i>告警：<span>40</span>
              </li>
              <li>
                <i class="StatusOffline Statussame"></i>离线：<span>30</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="border-container containerbottom">
          <div class="name-title tile-size-color">设备类型分布</div>
          <div class="graduateyear">
            <div class="bar-chart" id="bar-chart"></div>
            <ul class="SiteStatusList">
              <li>本周数据</li>
              <li class="DataSwitch">
                <i class="ThisweekData Datasame" onClick="DataSwitch(this,1)"></i><i class="ThisweekData"
                  onClick="DataSwitch(this,2)"></i>
              </li>
              <li class="Defaultgray">本月数据</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="main-middle">
        <div class="border-container containertop">
          <div class="name-title tile-size-color">故障设备区域分布情况</div>
          <div id="mapadd">
            <div class="mapleft">
              <div class="progress2-chart" id="progress2-chart"></div>
              <a href="###" class="progressMore">更多&gt;</a>
            </div>

            <div class="map-chart" id="map-chart"></div>
            <ul class="Devicestatus-List">
              <li class="Online2">
                65.5%
                <span class="DevicestatusName">在线</span>
              </li>
              <li class="Online2">
                10.5%
                <span class="DevicestatusName">离线</span>
              </li>
              <li class="Online2">
                10.5%
                <span class="DevicestatusName">维护</span>
              </li>
              <li class="Online2">
                9.5%
                <span class="DevicestatusName">故障</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="border-container containerbottom borderno-container">
          <ul class="teacher-pie clearfix">
            <li class="teacherList">
              <div class="name-title tile-size-color">故障时段分布</div>
              <div id="courserate">
                <div class="line-chart" id="line-chart"></div>
                <ul class="SiteStatusList">
                  <li>
                    <i class="Statusnormal Statussame"></i>合计故障次数
                    <span>556</span>
                  </li>
                </ul>
              </div>
            </li>
            <li class="teacherList">
              <div class="name-title tile-size-color">故障类型分布</div>
              <div class="bars-chart" id="bars-chart"></div>
            </li>
          </ul>
        </div>
      </div>
      <div class="main-right">
        <div class="border-container containertop">
          <div class="name-title tile-size-color">优秀区域排名</div>
          <div class="progress1-chart" id="progress1-chart"></div>
        </div>
        <div class="border-container containerbottom">
          <div class="name-title tile-size-color">故障类型分布</div>
          <div id="radar-chart" class="radar-chart"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import * as echarts from "echarts";

  export default {
    name: 'ChartsCase2',
    data() {
      return {
        pieChart: null,
        lineChart: null,
        barChart: null,
        bar2Chart: null,
        radarChart: null,
        progress1Chart: null,
        progress2Chart: null,
        mapChart: null,
      };
    },
    mounted() {
      this.pieChar();
      this.barChar([20, 60, 82, 60]);
      this.progress1Char();
      this.progress2Char();
      this.mapChar();

      this.lineChar();
      this.bar2Char();
      this.radarChar();
    },
    methods: {
      pieChar() {
        this.pieChart = echarts.init(document.getElementById("pie-chart"));
        let option = {
          color: ["#4f8bf9", "#fea31e", "#959595"],
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b}: {c} ({d}%)",
          },
          series: [
            {
              name: "访问来源",
              type: "pie",
              selectedMode: "single",
              radius: [0, "60%"],
              center: ["50%", "42%"],
              label: {
                normal: {
                  position: "outside",
                  formatter: "{b}:{d}%",
                },
              },
              data: [
                { value: 556, name: "正常" },
                { value: 100, name: "告警", selected: true },
                { value: 30, name: "离线" },
              ],
            },
          ],
        };
        this.pieChart.setOption(option, true);
      },
      barChar(data) {
        this.barChart = echarts.init(document.getElementById("bar-chart"));
        let option = {
          tooltip: {
            formatter: "{b}:{c}",
          },
          grid: {
            left: "15%",
            right: "15%",
            bottom: "20%",
            top: "20%",

            containLabel: true,
            z: 22,
          },
          xAxis: {
            data: ["NHN", "TP", "NP", "COD"], //横坐标
            axisLabel: {
              textStyle: {
                color: "#fff",
                fontSize: 12,
              },
            },
            axisLine: {
              lineStyle: {
                type: "solid",
                color: "#24214e",
                width: "1  ", //坐标线的宽度
              },
            },
          },
          yAxis: {
            name: "（数次）",
            nameTextStyle: {
              color: "#fff",
            },
            nameLocation: "center",
            nameGap: 30,
            nameRotate: -270,
            axisLabel: {
              textStyle: {
                color: "#fff",
                fontSize: 12, //坐标值得具体的颜色
              },
            },
            axisLine: {
              lineStyle: {
                type: "solid",
                color: "#24214e",
                width: "1  ", //坐标线的宽度
              },
            },
            splitLine: {
              lineStyle: {
                color: "#24214e",
              },
            },
          },
          series: [
            {
              type: "bar",
              barWidth: 20,
              data: data,
              /*label: {
                  normal: {
                      show: true,
                      position: "top",
                      textStyle: {
                          color: "#fffff",
                          fontSize: 12
                      }
                  }
              },*/
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: "#4f92fa" }, //柱图渐变色
                    { offset: 0.5, color: "#565cf8" }, //柱图渐变色
                    { offset: 1, color: "#5d29f7" }, //柱图渐变色
                  ]),
                },
              },
            },
          ],
        };
        this.barChart.setOption(option, true);
      },
      progress2Char() {
        this.progress2Chart = echarts.init(
          document.getElementById("progress2-chart")
        );
        var baifenbi = [0.333, 0.444, 0.555, 0.777, 0.888];
        var grayBar = [1, 1, 1, 1, 1];
        var xingm = ["宁波", "台州", "焦作", "邢台", "嘉兴"];
        let option = {
          title: {
            text: "设备故障率排名",
            left: "20%",
            top: "20%",
            textStyle: {
              color: "#fff",
              fontSize: 12,
            },
          },
          grid: {
            left: "32%", //如果离左边太远就用这个......
            right: "25%",
            bottom: "35%",
            top: "25%",
            containLabel: true,
          },
          xAxis: [
            {
              show: false,
            },
            {
              show: false,
            },
          ],
          yAxis: {
            type: "category",
            axisLabel: {
              show: true, //让Y轴数据不显示
            },

            axisTick: {
              show: false, //隐藏Y轴刻度
            },
            axisLine: {
              show: false, //隐藏Y轴线段
            },
          },
          series: [
            //背景色
            {
              show: true,
              type: "bar",
              barGap: "-100%",
              barWidth: "10%", //统计条宽度
              itemStyle: {
                normal: {
                  barBorderRadius: 50,
                  color: "rgba(41, 55, 94)",
                },
              },
              label: {
                normal: {
                  show: true,
                  textStyle: {
                    color: "#fff", //百分比颜色
                  },
                  position: "right",
                  formatter: function (data) {
                    return baifenbi[data.dataIndex] + "%";
                  },
                },
              },
              z: 1,
              data: grayBar,
            },
            //蓝条
            {
              show: true,
              type: "bar",
              barGap: "-100%",
              barWidth: "10%", //统计条宽度
              itemStyle: {
                normal: {
                  barBorderRadius: 50, //统计条弧度
                  color: "#ffa322",
                },
              },
              max: 1,
              label: {
                normal: {
                  show: true,
                  textStyle: {
                    color: "#fff", //百分比颜色
                  },
                  position: "left",
                  formatter: function (data) {
                    //富文本固定格式{colorName|这里填你想要写的内容}
                    return xingm[data.dataIndex];
                  },
                },
              },
              data: baifenbi,
            },
          ],
        };
        this.progress2Chart.setOption(option, true);
      },
      mapChar() {
        var data = [
          { name: "焦作", value: 75 },
          { name: "北京", value: 79 },
          { name: "天津", value: 79 },
          { name: "上海", value: 80 },
          { name: "西安", value: 80 },
          { name: "广州", value: 80 },
          { name: "深圳", value: 84 },
        ];

        var geoCoordMap = {
          海门: [121.15, 31.89],
          鄂尔多斯: [109.781327, 39.608266],
          招远: [120.38, 37.35],
          舟山: [122.207216, 29.985295],
          齐齐哈尔: [123.97, 47.33],
          盐城: [120.13, 33.38],
          赤峰: [118.87, 42.28],
          青岛: [120.33, 36.07],
          乳山: [121.52, 36.89],
          金昌: [102.188043, 38.520089],
          泉州: [118.58, 24.93],
          莱西: [120.53, 36.86],
          日照: [119.46, 35.42],
          胶南: [119.97, 35.88],
          南通: [121.05, 32.08],
          拉萨: [91.11, 29.97],
          云浮: [112.02, 22.93],
          梅州: [116.1, 24.55],
          文登: [122.05, 37.2],
          上海: [121.48, 31.22],
          攀枝花: [101.718637, 26.582347],
          威海: [122.1, 37.5],
          承德: [117.93, 40.97],
          厦门: [118.1, 24.46],
          汕尾: [115.375279, 22.786211],
          潮州: [116.63, 23.68],
          丹东: [124.37, 40.13],
          太仓: [121.1, 31.45],
          曲靖: [103.79, 25.51],
          烟台: [121.39, 37.52],
          福州: [119.3, 26.08],
          瓦房店: [121.979603, 39.627114],
          即墨: [120.45, 36.38],
          抚顺: [123.97, 41.97],
          玉溪: [102.52, 24.35],
          张家口: [114.87, 40.82],
          阳泉: [113.57, 37.85],
          莱州: [119.942327, 37.177017],
          湖州: [120.1, 30.86],
          汕头: [116.69, 23.39],
          昆山: [120.95, 31.39],
          宁波: [121.56, 29.86],
          湛江: [110.359377, 21.270708],
          揭阳: [116.35, 23.55],
          荣成: [122.41, 37.16],
          连云港: [119.16, 34.59],
          葫芦岛: [120.836932, 40.711052],
          常熟: [120.74, 31.64],
          东莞: [113.75, 23.04],
          河源: [114.68, 23.73],
          淮安: [119.15, 33.5],
          泰州: [119.9, 32.49],
          南宁: [108.33, 22.84],
          营口: [122.18, 40.65],
          惠州: [114.4, 23.09],
          江阴: [120.26, 31.91],
          蓬莱: [120.75, 37.8],
          韶关: [113.62, 24.84],
          嘉峪关: [98.289152, 39.77313],
          广州: [113.23, 23.16],
          延安: [109.47, 36.6],
          太原: [112.53, 37.87],
          清远: [113.01, 23.7],
          中山: [113.38, 22.52],
          昆明: [102.73, 25.04],
          寿光: [118.73, 36.86],
          盘锦: [122.070714, 41.119997],
          长治: [113.08, 36.18],
          深圳: [114.07, 22.62],
          珠海: [113.52, 22.3],
          宿迁: [118.3, 33.96],
          咸阳: [108.72, 34.36],
          铜川: [109.11, 35.09],
          平度: [119.97, 36.77],
          佛山: [113.11, 23.05],
          海口: [110.35, 20.02],
          江门: [113.06, 22.61],
          章丘: [117.53, 36.72],
          肇庆: [112.44, 23.05],
          大连: [121.62, 38.92],
          临汾: [111.5, 36.08],
          吴江: [120.63, 31.16],
          石嘴山: [106.39, 39.04],
          沈阳: [123.38, 41.8],
          苏州: [120.62, 31.32],
          茂名: [110.88, 21.68],
          嘉兴: [120.76, 30.77],
          长春: [125.35, 43.88],
          胶州: [120.03336, 36.264622],
          银川: [106.27, 38.47],
          张家港: [120.555821, 31.875428],
          三门峡: [111.19, 34.76],
          锦州: [121.15, 41.13],
          南昌: [115.89, 28.68],
          柳州: [109.4, 24.33],
          三亚: [109.511909, 18.252847],
          自贡: [104.778442, 29.33903],
          吉林: [126.57, 43.87],
          阳江: [111.95, 21.85],
          泸州: [105.39, 28.91],
          西宁: [101.74, 36.56],
          宜宾: [104.56, 29.77],
          呼和浩特: [111.65, 40.82],
          成都: [104.06, 30.67],
          大同: [113.3, 40.12],
          镇江: [119.44, 32.2],
          桂林: [110.28, 25.29],
          张家界: [110.479191, 29.117096],
          宜兴: [119.82, 31.36],
          北海: [109.12, 21.49],
          西安: [108.95, 34.27],
          金坛: [119.56, 31.74],
          东营: [118.49, 37.46],
          牡丹江: [129.58, 44.6],
          遵义: [106.9, 27.7],
          绍兴: [120.58, 30.01],
          扬州: [119.42, 32.39],
          常州: [119.95, 31.79],
          潍坊: [119.1, 36.62],
          重庆: [106.54, 29.59],
          台州: [121.420757, 28.656386],
          南京: [118.78, 32.04],
          滨州: [118.03, 37.36],
          贵阳: [106.71, 26.57],
          无锡: [120.29, 31.59],
          本溪: [123.73, 41.3],
          克拉玛依: [84.77, 45.59],
          渭南: [109.5, 34.52],
          马鞍山: [118.48, 31.56],
          宝鸡: [107.15, 34.38],
          焦作: [113.21, 35.24],
          句容: [119.16, 31.95],
          北京: [116.46, 39.92],
          徐州: [117.2, 34.26],
          衡水: [115.72, 37.72],
          包头: [110, 40.58],
          绵阳: [104.73, 31.48],
          乌鲁木齐: [87.68, 43.77],
          枣庄: [117.57, 34.86],
          杭州: [120.19, 30.26],
          淄博: [118.05, 36.78],
          鞍山: [122.85, 41.12],
          溧阳: [119.48, 31.43],
          库尔勒: [86.06, 41.68],
          安阳: [114.35, 36.1],
          开封: [114.35, 34.79],
          济南: [117, 36.65],
          德阳: [104.37, 31.13],
          温州: [120.65, 28.01],
          九江: [115.97, 29.71],
          邯郸: [114.47, 36.6],
          临安: [119.72, 30.23],
          兰州: [103.73, 36.03],
          沧州: [116.83, 38.33],
          临沂: [118.35, 35.05],
          南充: [106.110698, 30.837793],
          天津: [117.2, 39.13],
          富阳: [119.95, 30.07],
          泰安: [117.13, 36.18],
          诸暨: [120.23, 29.71],
          郑州: [113.65, 34.76],
          哈尔滨: [126.63, 45.75],
          聊城: [115.97, 36.45],
          芜湖: [118.38, 31.33],
          唐山: [118.02, 39.63],
          平顶山: [113.29, 33.75],
          邢台: [114.48, 37.05],
          德州: [116.29, 37.45],
          济宁: [116.59, 35.38],
          荆州: [112.239741, 30.335165],
          宜昌: [111.3, 30.7],
          义乌: [120.06, 29.32],
          丽水: [119.92, 28.45],
          洛阳: [112.44, 34.7],
          秦皇岛: [119.57, 39.95],
          株洲: [113.16, 27.83],
          石家庄: [114.48, 38.03],
          莱芜: [117.67, 36.19],
          常德: [111.69, 29.05],
          保定: [115.48, 38.85],
          湘潭: [112.91, 27.87],
          金华: [119.64, 29.12],
          岳阳: [113.09, 29.37],
          长沙: [113, 28.21],
          衢州: [118.88, 28.97],
          廊坊: [116.7, 39.53],
          菏泽: [115.480656, 35.23375],
          合肥: [117.27, 31.86],
          武汉: [114.31, 30.52],
          大庆: [125.03, 46.58],
        };
        var convertData = function (data) {
          var res = [];
          for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
              res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value),
              });
            }
          }
          return res;
        };
        this.mapChart = echarts.init(document.getElementById("map-chart"));
        fetch("./data/china.json")
          .then((r) => {
            return r.json();
          })
          .then((geoJson) => {
            echarts.registerMap("china", geoJson);
            let option = {
              tooltip: {
                trigger: "item",
                formatter: function (params) {
                  if (typeof params.value[2] == "undefined") {
                    return params.name;
                  } else {
                    return params.name + " : " + params.value[2];
                  }
                },
              },
              geo: {
                show: true,
                map: "china",
                label: {
                  emphasis: {
                    show: false,
                  },
                },
                roam: true,
                left: "6%",
                right: "5%",
                top: "8%",
                itemStyle: {
                  normal: {
                    borderColor: "#4085d3",
                    borderWidth: 2,
                    shadowColor: "#000",
                    shadowBlur: 50,
                    areaColor: "#565cf8",
                  },
                  emphasis: {
                    areaColor: "#4f92fa", //鼠标移上每一省份的颜色
                  },
                },
              },
              series: [
                {
                  type: "map",
                  map: "zhongguo",
                  geoIndex: 0,
                },
                {
                  name: "Tooltip Test",
                  type: "effectScatter",
                  coordinateSystem: "geo",
                  data: convertData(data),
                  symbolSize: function (val) {
                    return val[2] / 5;
                  },
                  showEffectOn: "render",
                  rippleEffect: {
                    brushType: "stroke",
                  },
                  hoverAnimation: true,
                  label: {
                    normal: {
                      formatter: "{b}",
                      position: "right",
                      show: true,
                    },
                  },
                  itemStyle: {
                    normal: {
                      color: "#f4e925",
                      shadowBlur: 10,
                      shadowColor: "#333",
                    },
                  },
                  zlevel: 1,
                },
              ],
            };
            //myChart.setOption(option);
            this.mapChart.setOption(option);
            this.mapChart.on("click", function (params) {
              //点击事件
              console.log(params);
            });
          });
      },
      lineChar() {
        this.lineChart = echarts.init(document.getElementById("line-chart"));
        let option = {
          tooltip: {
            formatter: "{b}&nbsp; {c}次",
          },
          grid: {
            left: "15%",
            right: "15%",
            bottom: "20%",
            top: "20%",

            containLabel: true,
            z: 22,
          },
          xAxis: {
            data: ["00:00", "06:00", "12:00", "18:00", "24:00"],
            axisLabel: {
              textStyle: {
                color: "#fff",
                fontSize: 12,
              },
            },
            axisLine: {
              lineStyle: {
                type: "solid",
                color: "#24214e",
                width: "1",
              },
            },
          },
          yAxis: {
            name: "（数次）",
            nameTextStyle: {
              color: "#fff",
            },
            nameLocation: "center",
            nameGap: 30,
            nameRotate: -270,
            axisLabel: {
              textStyle: {
                color: "#fff",
                fontSize: 12,
              },
            },
            axisLine: {
              lineStyle: {
                type: "solid",
                color: "#24214e",
                width: "1  ",
              },
            },
            splitLine: {
              lineStyle: {
                color: "#24214e",
              },
            },
          },
          series: [
            {
              type: "line",
              data: [40, 182, 191, 234, 290],
              itemStyle: {
                normal: {
                  lineStyle: {
                    width: 3, //折线宽度
                  },
                  color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    1,
                    0,
                    [
                      {
                        offset: 1,
                        color: "#508ff6", // 0% 处的颜色
                      },
                      {
                        offset: 0,
                        color: "#2c137a", // 100% 处的颜色
                      },
                    ],
                    false
                  ),
                  opacity: 0.4,
                },
              },
            },
          ],
        };
        this.lineChart.setOption(option, true);
      },
      bar2Char() {
        this.bar2Chart = echarts.init(document.getElementById("bars-chart"));
        let option = {
          color: ["#fd8f1e", "#7cb5ec", "#4280f1", "#957bde"],
          tooltip: {
            trigger: "axis",
            axisPointer: {
              // 坐标轴指示器，坐标轴触发有效
              type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
            },
          },
          grid: {
            left: "10%",
            right: "15%",
            bottom: "20%",
            top: "20%",
            containLabel: true,
            z: 22,
          },

          legend: {
            data: ["进样异常", "缺试剂A", "缺试剂B", "消解异常"],
            textStyle: {
              fontSize: 12,
              color: "#fff",
            },
            icon: "rect",
            itemWidth: 10,
            itemHeight: 10,
            bottom: "9%",
          },
          xAxis: {
            name: "次数",
            nameTextStyle: {
              color: "#fff",
            },
            axisLabel: {
              textStyle: {
                color: "#fff",
                fontSize: 12,
              },
            },
            splitLine: {
              lineStyle: {
                color: "#24214e",
              },
            },
            axisLine: {
              lineStyle: {
                type: "solid",
                color: "#24214e",
                width: "1  ",
              },
            },
          },
          yAxis: {
            data: ["2018.11", "2018.12", "2019.01", "2019.02", "2019.03"],
            axisLabel: {
              textStyle: {
                color: "#fff",
                fontSize: 12, //坐标值得具体的颜色
              },
            },
            axisLine: {
              lineStyle: {
                type: "solid",
                color: "#24214e",
                width: "1  ",
              },
            },
          },
          series: [
            {
              name: "进样异常",
              type: "bar",
              stack: "总量",
              barWidth: 20,
              label: {
                normal: {
                  show: false,
                  position: "insideRight",
                },
              },
              data: [6, 4, 10, 8, 7],
            },
            {
              name: "缺试剂A",
              type: "bar",
              barWidth: 20,
              stack: "总量",
              label: {
                normal: {
                  show: false,
                  position: "insideRight",
                },
              },
              data: [8, 10, 4, 5, 6],
            },
            {
              name: "缺试剂B",
              type: "bar",
              stack: "总量",
              barWidth: 20,
              label: {
                normal: {
                  show: false,
                  position: "insideRight",
                },
              },
              data: [6, 4, 10, 8, 7],
            },
            {
              name: "消解异常",
              type: "bar",
              stack: "总量",
              barWidth: 20,
              label: {
                normal: {
                  show: false,
                  position: "insideRight",
                },
              },
              data: [6, 4, 10, 8, 7],
            },
          ],
        };
        this.bar2Chart.setOption(option, true);
      },
      radarChar() {
        this.radarChart = echarts.init(document.getElementById("radar-chart"));
        let option = {
          color: ["#623ad1", "#3383fc"],
          tooltip: {},
          radar: [
            {
              indicator: [
                {
                  text: "进样异常",
                  max: 100,
                },
                {
                  text: "缺试剂A",
                  max: 100,
                },
                {
                  text: "消解异常",
                  max: 100,
                },
                {
                  text: "缺纯水",
                  max: 100,
                },
                {
                  text: "缺试剂B",
                  max: 100,
                },
              ],
              center: ["50%", "60%"],
              radius: "65%",
              startAngle: 90,
              name: {
                formatter: "{value}",
                textStyle: {
                  fontSize: 12, //外圈标签字体大小
                  color: "#FFF", //外圈标签字体颜色
                },
              },
              splitArea: {
                // 坐标轴在 grid 区域中的分隔区域，默认不显示。
                show: true,
                areaStyle: {
                  // 分隔区域的样式设置。
                  color: [], // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
                },
              },
              axisLine: {
                //指向外圈文本的分隔线样式
                lineStyle: {
                  color: "#24214e",
                },
              },
              splitLine: {
                lineStyle: {
                  color: "#24214e", // 分隔线颜色
                  width: 1, // 分隔线线宽
                },
              },
            },
          ],
          series: [
            {
              name: "雷达图",
              type: "radar",
              data: [
                {
                  name: "2016",
                  value: [85, 65, 55, 90, 82],
                  areaStyle: {
                    normal: {
                      // 单项区域填充样式
                      opacity: 1, // 区域透明度
                    },
                  },
                  symbolSize: 0, // 单个数据标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10。
                },
                {
                  name: "2017",
                  value: [50, 80, 45, 30, 75],
                  symbolSize: 0,
                  areaStyle: {
                    normal: {
                      // 单项区域填充样式
                      color: {
                        type: "linear",
                        x: 0, //右
                        y: 0, //下
                        x2: 1, //左
                        y2: 1, //上
                        colorStops: [
                          {
                            offset: 0,
                            color: "#3cd2f3",
                          },
                          {
                            offset: 1,
                            color: "#306eff",
                          },
                        ],
                        globalCoord: false,
                      },
                      opacity: 1, // 区域透明度
                    },
                  },
                },
              ],
            },
          ],
        };
        this.radarChart.setOption(option, true);
      },
      progress1Char() {
        this.progress1Chart = echarts.init(
          document.getElementById("progress1-chart")
        );
        var baifenbi = [0.333, 0.444, 0.555, 0.777, 0.888];
        var grayBar = [1, 1, 1, 1, 1];
        var paiming = [5, 4, 3, 2, 1];
        var xingm = ["宁波", "台州", "焦作", "邢台", "嘉兴"];
        let option = {
          title: {
            text: "2020年 第一季度",
            left: "75%",
            top: "20",
            textStyle: {
              color: "#fff",
              fontSize: 12,
            },
          },
          grid: {
            left: "15%", //如果离左边太远就用这个......
            right: "15%",
            bottom: "5%",
            top: "20%",
            containLabel: true,
          },
          xAxis: [
            {
              show: false,
            },
            {
              show: false,
            },
          ],
          yAxis: {
            type: "category",
            axisLabel: {
              show: true, //让Y轴数据不显示
            },

            axisTick: {
              show: false, //隐藏Y轴刻度
            },
            axisLine: {
              show: false, //隐藏Y轴线段
            },
          },
          series: [
            //背景色
            {
              show: true,
              type: "bar",
              barGap: "-100%",
              barWidth: "10%", //统计条宽度
              itemStyle: {
                normal: {
                  barBorderRadius: 50,
                  color: "rgba(41, 55, 94)",
                },
              },
              z: 1,
              data: grayBar,
            },
            //蓝条
            {
              show: true,
              type: "bar",
              barGap: "-100%",
              barWidth: "10%", //统计条宽度
              itemStyle: {
                normal: {
                  barBorderRadius: 50, //统计条弧度
                  color: {
                    colorStops: [
                      {
                        offset: 0,
                        color: "#5d29f7", // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: "#5093fb", // 100% 处的颜色
                      },
                    ],
                    globalCoord: false, // 缺省为 false
                  },
                },
              },
              max: 1,
              label: {
                normal: {
                  show: true,
                  textStyle: {
                    color: "#fff", //百分比颜色
                  },
                  position: [0, "-35"],
                  rich: {
                    //富文本
                    yellow: {
                      color: "#FEC735",
                    },
                  },
                  formatter: function (data) {
                    //富文本固定格式{colorName|这里填你想要写的内容}
                    if (
                      paiming[data.dataIndex] == 1 ||
                      paiming[data.dataIndex] == 2 ||
                      paiming[data.dataIndex] == 3
                    ) {
                      return (
                        "{yellow|" +
                        paiming[data.dataIndex] +
                        "  " +
                        xingm[data.dataIndex] +
                        "}"
                      );
                    } else {
                      return (
                        paiming[data.dataIndex] + "  " + xingm[data.dataIndex]
                      );
                    }
                  },
                },
              },
              data: baifenbi,
            },
          ],
        };

        this.progress1Chart.setOption(option, true);
      },
    },
  };
</script>

<style lang="less" scoped>
  .main {
    height: 100%;
    width: 100%;
  }

  #case2 {
    background: #040f3c;
    height: 100vh;

    * {
      box-sizing: border-box;
    }
  }

  .main-left,
  .main-right {
    float: left;
    width: 28%;
    height: 100%;
    padding: 0 5px;
  }

  .main-middle {
    float: left;
    width: 44%;
    height: 100%;
    padding: 0 5px;
  }

  .border-container {
    position: relative;
    margin-top: 10px;
    /* padding: 10px;*/
    border: 1px solid #24214e;
  }

  .main-middle .borderno-container {
    border-top: none;
    border-bottom: none;
  }

  .name-title {
    background: #4545e3;
    padding: 8px 14px;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
    position: absolute;
    left: 5%;
    margin: 0;
  }

  .tile-size-color {
    font-size: 12px;
    color: #fff;
  }

  .containertop {
    height: 50%;
  }

  .containerbottom {
    height: 47%;
  }

  #radar,
  .graduateyear,
  .bar-chart,
  #courserate,
  .line-chart,
  .bars-chart,
  .radar-chart,
  .progress1-chart,
  #mapadd,
  .progress2-chart {
    height: 100%;
  }

  #mapadd {
    position: relative;
  }

  #radar .radarkong {
    height: 17%;
    position: relative;
  }

  .Totalequipment {
    margin-right: 18px;
  }

  #radar .radarkong p {
    position: absolute;
    bottom: 0;
    text-align: center;
    width: 100%;
  }

  .SiteStatusList {
    position: absolute;
    bottom: 10%;
    color: #fff;
    font-size: 12px;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
  }

  .SiteStatusList li:first-child {
    margin-left: 22px;
  }

  .SiteStatusList li {
    margin-right: 20px;
  }

  .SiteStatusList .Statussame {
    float: left;
    padding: 5px;
    margin-top: 2px;
    margin-right: 5px;
  }

  .SiteStatusList .Statusnormal {
    background: #4f8bf9;
  }

  .SiteStatusList .Statusemergency {
    background: #fea31e;
  }

  .SiteStatusList .StatusOffline {
    background: #959595;
  }

  .SiteStatusList .ThisweekData,
  .SiteStatusList .ThisweekData {
    padding: 7px;
    border-radius: 50%;
    float: left;
    cursor: pointer;
  }

  .SiteStatusList .Datasame {
    background: #39c1f5;
  }

  .SiteStatusList .Defaultgray {
    color: #959595;
  }

  .SiteStatusList .DataSwitch {
    background: #555474;
    border-radius: 10px;
  }

  .teacher-pie,
  .teacher-pie .teacherList {
    height: 100%;
  }

  .teacher-pie .teacherList {
    border: 1px solid #24214e;
    position: relative;
  }

  .teacher-pie .teacherList:first-child {
    width: 50%;
    border-left: none;
    float: left;
  }

  .teacher-pie .teacherList .name-title {
    padding-left: 10px;
  }

  .teacher-pie .teacherList:last-child {
    width: 49%;
    border-right: none;
    float: right;
  }

  .number-show {
    position: absolute;
    top: 20%;
    right: 5%;
  }

  #mapadd .mapleft {
    width: 33%;
    height: 100%;
    float: left;
    position: relative;
    /*background: #009688;*/
  }

  #mapadd .progressMore {
    color: #fff;
    font-size: 12px;
    position: absolute;
    right: 7%;
    top: 60%;
    text-decoration: underline;
  }

  #mapadd .map-chart {
    width: 65%;
    height: 100%;
    float: left;
  }

  #mapadd .Devicestatus-List {
    width: 50%;
    position: absolute;
    bottom: 12%;
    left: 4%;
    color: #fff;
  }

  #mapadd .Devicestatus-List li {
    float: left;
    height: 35px;
    margin-right: 1%;
    line-height: 35px;
    position: relative;
  }

  #mapadd .Devicestatus-List li:nth-of-type(1) {
    width: 65.5%;
    border: 1px solid #3ae034;
    background: rgba(58, 224, 52, 0.5);
  }

  #mapadd .Devicestatus-List li:nth-of-type(2) {
    width: 10.5%;
    border: 1px solid #778699;
    background: rgba(199, 134, 153, 0.5);
  }

  #mapadd .Devicestatus-List li:nth-of-type(3) {
    width: 10.5%;
    border: 1px solid #1b9fff;
    background: rgba(27, 159, 255, 0.5);
  }

  #mapadd .Devicestatus-List li:nth-of-type(4) {
    width: 9.5%;
    border: 1px solid #e77407;
    background: rgba(213, 116, 7, 0.5);
  }

  .Devicestatus-List .DevicestatusName {
    position: absolute;
    top: -35px;
    left: 0;
  }

  .pie-chart {
    width: 100%;
    height: 82%;
  }

  ul {
    margin: 0;
    padding: 0;

    li {
      list-style: none;
    }
  }
</style>
