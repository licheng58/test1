(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-68bcc7be"],{"1f27":function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return s})),n.d(t,"g",(function(){return a})),n.d(t,"e",(function(){return l})),n.d(t,"f",(function(){return o})),n.d(t,"d",(function(){return c}));var r=n("b775");function u(e,t){return Object(r["a"])({url:"/menu/list/"+e,method:"get",params:t})}function i(e){return Object(r["a"])({url:"/menu/delete/"+e,method:"post"})}function s(e){return Object(r["a"])({url:"/menu/create",method:"post",data:e})}function a(e,t){return Object(r["a"])({url:"/menu/update/"+e,method:"post",data:t})}function l(e){return Object(r["a"])({url:"/menu/"+e,method:"get"})}function o(e,t){return Object(r["a"])({url:"/menu/updateHidden/"+e,method:"post",params:t})}function c(){return Object(r["a"])({url:"/menu/treeList",method:"get"})}},7024:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-card",{staticClass:"form-container",attrs:{shadow:"never"}},[n("el-form",{ref:"menuFrom",attrs:{model:e.menu,rules:e.rules,"label-width":"150px"}},[n("el-form-item",{attrs:{label:"菜单名称：",prop:"title"}},[n("el-input",{model:{value:e.menu.title,callback:function(t){e.$set(e.menu,"title",t)},expression:"menu.title"}})],1),n("el-form-item",{attrs:{label:"上级菜单："}},[n("el-select",{attrs:{placeholder:"请选择菜单"},model:{value:e.menu.parentId,callback:function(t){e.$set(e.menu,"parentId",t)},expression:"menu.parentId"}},e._l(e.selectMenuList,(function(e){return n("el-option",{key:e.id,attrs:{label:e.title,value:e.id}})})),1)],1),n("el-form-item",{attrs:{label:"前端名称：",prop:"name"}},[n("el-input",{model:{value:e.menu.name,callback:function(t){e.$set(e.menu,"name",t)},expression:"menu.name"}})],1),n("el-form-item",{attrs:{label:"前端图标：",prop:"icon"}},[n("el-input",{staticStyle:{width:"80%"},model:{value:e.menu.icon,callback:function(t){e.$set(e.menu,"icon",t)},expression:"menu.icon"}}),n("svg-icon",{staticStyle:{"margin-left":"8px"},attrs:{"icon-class":e.menu.icon}})],1),n("el-form-item",{attrs:{label:"是否显示："}},[n("el-radio-group",{model:{value:e.menu.hidden,callback:function(t){e.$set(e.menu,"hidden",t)},expression:"menu.hidden"}},[n("el-radio",{attrs:{label:0}},[e._v("是")]),n("el-radio",{attrs:{label:1}},[e._v("否")])],1)],1),n("el-form-item",{attrs:{label:"排序："}},[n("el-input",{model:{value:e.menu.sort,callback:function(t){e.$set(e.menu,"sort",t)},expression:"menu.sort"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.onSubmit("menuFrom")}}},[e._v("提交")]),e.isEdit?e._e():n("el-button",{on:{click:function(t){return e.resetForm("menuFrom")}}},[e._v("重置")])],1)],1)],1)},u=[],i=n("1f27"),s={title:"",parentId:0,name:"",icon:"",hidden:0,sort:0},a={name:"MenuDetail",props:{isEdit:{type:Boolean,default:!1}},data:function(){return{menu:Object.assign({},s),selectMenuList:[],rules:{title:[{required:!0,message:"请输入菜单名称",trigger:"blur"},{min:2,max:140,message:"长度在 2 到 140 个字符",trigger:"blur"}],name:[{required:!0,message:"请输入前端名称",trigger:"blur"},{min:2,max:140,message:"长度在 2 到 140 个字符",trigger:"blur"}],icon:[{required:!0,message:"请输入前端图标",trigger:"blur"},{min:2,max:140,message:"长度在 2 到 140 个字符",trigger:"blur"}]}}},created:function(){var e=this;this.isEdit?Object(i["e"])(this.$route.query.id).then((function(t){e.menu=t.data})):this.menu=Object.assign({},s),this.getSelectMenuList()},methods:{getSelectMenuList:function(){var e=this;Object(i["c"])(0,{pageSize:100,pageNum:1}).then((function(t){e.selectMenuList=t.data.list,e.selectMenuList.unshift({id:0,title:"无上级菜单"})}))},onSubmit:function(e){var t=this;this.$refs[e].validate((function(n){if(!n)return t.$message({message:"验证失败",type:"error",duration:1e3}),!1;t.$confirm("是否提交数据","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.isEdit?Object(i["g"])(t.$route.query.id,t.menu).then((function(e){t.$message({message:"修改成功",type:"success",duration:1e3}),t.$router.back()})):Object(i["a"])(t.menu).then((function(n){t.$refs[e].resetFields(),t.resetForm(e),t.$message({message:"提交成功",type:"success",duration:1e3}),t.$router.back()}))}))}))},resetForm:function(e){this.$refs[e].resetFields(),this.menu=Object.assign({},s),this.getSelectMenuList()}}},l=a,o=n("2877"),c=Object(o["a"])(l,r,u,!1,null,"30007d15",null);t["a"]=c.exports},"93c2":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("menu-detail",{attrs:{"is-edit":!1}})},u=[],i=n("7024"),s={name:"addMenu",components:{MenuDetail:i["a"]}},a=s,l=n("2877"),o=Object(l["a"])(a,r,u,!1,null,null,null);t["default"]=o.exports}}]);
//# sourceMappingURL=chunk-68bcc7be.5ceea9b4.js.map