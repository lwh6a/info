(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{372:function(e,t,r){"use strict";r.r(t);var s=r(25),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"docker安装es"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker安装es"}},[e._v("#")]),e._v(" docker安装es")]),e._v(" "),r("ul",[r("li",[e._v("创建用户定义的网络（用于连接到连接到同一网络的其他服务（如Kibana））：\n"),r("ul",[r("li",[e._v("docker network create somenetwork")])])]),e._v(" "),r("li",[e._v("运行es\n"),r("ul",[r("li",[e._v('docker run -d --name elasticsearch --net somenetwork -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" elasticsearch:tag')])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);