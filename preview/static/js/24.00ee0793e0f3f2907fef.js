webpackJsonp([24],{"25lh":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={name:"",inject:["rem"],props:{id:String,selectRangeDate:Array},data:function(){return{}},methods:{setData:function(e){var t=[];switch(e){case"x":for(var i=0;i<this.selectRangeDate.length;i++)t.push(this.selectRangeDate[i][1]+"."+this.selectRangeDate[i][2]);break;case"s":for(var r=0;r<this.selectRangeDate.length;r++)t.push((250*Math.random()).toFixed(0))}return t},setChart:function(){var e={tooltip:{trigger:"axis",axisPointer:{type:"line"},backgroundColor:"#11367a",textStyle:{color:"#6dd0e3",fontSize:.5*this.rem}},grid:{top:"12%",bottom:"12%",left:"5%",right:"5%"},legend:{right:"5%",top:"10%",itemWidth:.35*this.rem,itemHeight:.35*this.rem,textStyle:{color:"#5CB1C1"}},xAxis:{type:"category",boundaryGap:!1,axisLabel:{color:"#61B9C8",fontSize:.5*this.rem},axisLine:{symbol:["none","arrow"],symbolSize:[6,6],symbolOffset:[0,5],lineStyle:{color:"#122C49"}},axisTick:{color:"#122C49",inside:!0},z:2,data:this.setData("x")},yAxis:{type:"value",interval:50,min:0,max:400,splitNumber:7,axisLine:{symbol:["none","arrow"],symbolSize:[6,6],lineStyle:{color:"#122C49"}},axisLabel:{color:"#61B9C8",showMaxLabel:!1,fontSize:.5*this.rem},splitLine:{show:!1},name:"(个)",nameGap:-10,nameTextStyle:{color:"#61B9C8",fontSize:.45*this.rem,align:"right",padding:[0,.3*this.rem,0,0]}},series:[{name:"朋友圈个数",type:"line",symbol:"none",smooth:!0,data:this.setData("s"),lineStyle:{width:1,color:new this.$echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(178,19,86,1)"},{offset:.4,color:"rgba(178,19,86,1)"},{offset:1,color:"rgba(245,145,17,1)"}])},itemStyle:{color:"rgb(212,37,43)"},areaStyle:{color:new this.$echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(164,27,104,1)"},{offset:.5,color:"rgba(112,20,82,1)"},{offset:1,color:"rgba(112,20,82,0)"}]),origin:"start"}}]},t=this.$echarts.init(document.getElementById(this.id));t.clear(),t.resize({width:document.getElementById(this.id).offsetWidth,height:document.getElementById(this.id).offsetHidth}),t.setOption(e)}},mounted:function(){this.setChart()}},a={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"singleAreaChart",attrs:{id:this.id}})},staticRenderFns:[]};var o=i("VU/8")(r,a,!1,function(e){i("jWAv")},"data-v-723972b4",null);t.default=o.exports},jWAv:function(e,t){}});