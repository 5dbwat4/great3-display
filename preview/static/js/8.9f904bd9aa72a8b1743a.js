webpackJsonp([8],{Lm9Q:function(t,e){},wyww:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={name:"areaChart",props:["id","config","selectRangeDate"],inject:["rem"],data:function(){return{}},methods:{setData:function(t){var e=[];switch(t){case"x":for(var i=0;i<this.selectRangeDate.length;i++)e.push(this.selectRangeDate[i][1]+"."+this.selectRangeDate[i][2]);break;case"s":for(var o=0;o<this.selectRangeDate.length;o++)e.push((250*Math.random()).toFixed(0))}return e},setSeriesData:function(){var t=this,e=[];return this.config.data.forEach(function(i){var o={name:i.name,type:"line",smooth:!0,symbol:"none",areaStyle:{opacity:1,color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:i.color[0]},{offset:.4,color:i.color[0]},{offset:1,color:i.color[1]}],global:!1}},lineStyle:{width:0},itemStyle:{color:i.color[0]},data:t.setData("s")};e.push(o)}),e},setChart:function(){var t={title:{show:!!this.config.title,text:this.config.title,textStyle:{color:this.config.color,fontSize:.6*this.rem,fontWeight:"normal"},top:"12%",left:"38%"},tooltip:{trigger:"axis",axisPointer:{type:"none"},backgroundColor:"#11367a",textStyle:{color:"#6dd0e3",fontSize:.5*this.rem},formatter:function(t){var e=t[0].name;return t.forEach(function(t){e+="<br> "+t.seriesName+": "+t.value}),e}},legend:{top:this.config.title?"23%":"11%",left:"center",itemWidth:.35*this.rem,itemHeight:.35*this.rem,textStyle:{color:this.config.color,fontSize:.6*this.rem}},grid:{top:this.config.title?"40%":"14%",left:"5%",right:"5%",bottom:"5%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,axisLabel:{interval:0,color:this.config.color,fontSize:.45*this.rem,align:"center"},axisLine:{show:!0,lineStyle:{color:"#1a3c58",width:2}},axisTick:{show:!1},data:this.setData("x")},yAxis:[{type:"value",min:0,max:300,axisLine:{show:!0,lineStyle:{color:"#1a3c58"}},axisLabel:{color:this.config.color,fontSize:.45*this.rem,showMaxLabel:!1},axisTick:{length:3},name:this.config.name[0],nameGap:-5,nameTextStyle:{color:this.config.color,fontSize:.45*this.rem,align:"right"},splitLine:{show:!1}},{type:"value",min:0,max:300,axisLine:{show:!0,lineStyle:{color:"#1a3c58"}},axisTick:{length:3},axisLabel:{color:this.config.color,fontSize:.45*this.rem,showMaxLabel:!1},name:this.config.name[1],nameTextStyle:{color:this.config.color,fontSize:.45*this.rem,align:"left"},nameGap:-5,splitLine:{show:!1}}],series:this.setSeriesData()};this.selectRangeDate.length>7&&(t.xAxis.axisLabel.interval=3,t.xAxis.axisLabel.showMaxLabel=!1,t.xAxis.axisLabel.align="left");var e=this.$echarts.init(document.getElementById(this.id));e.clear(),e.resize({width:document.getElementById(this.id).offsetWidth,height:document.getElementById(this.id).offsetHidth}),e.setOption(t)}},mounted:function(){this.setChart()}},a={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"area",attrs:{id:this.id}})},staticRenderFns:[]};var n=i("VU/8")(o,a,!1,function(t){i("Lm9Q")},"data-v-2d85e97d",null);e.default=n.exports}});