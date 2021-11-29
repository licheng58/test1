(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b060849"],{"1dda":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-card",{staticClass:"filter-container",attrs:{shadow:"never"}},[n("div",[n("i",{staticClass:"el-icon-search"}),n("span",[t._v("筛选搜索")]),n("el-button",{staticStyle:{float:"right"},attrs:{type:"primary",size:"small"},on:{click:function(e){return t.handleSearchList()}}},[t._v(" 查询结果 ")]),n("el-button",{staticStyle:{float:"right","margin-right":"15px"},attrs:{size:"small"},on:{click:function(e){return t.handleResetSearch()}}},[t._v(" 重置 ")])],1),n("div",{staticStyle:{"margin-top":"15px"}},[n("el-form",{attrs:{inline:!0,model:t.listQuery,size:"small","label-width":"140px"}},[n("el-form-item",{attrs:{label:"输入搜索："}},[n("el-input",{staticStyle:{width:"203px"},attrs:{placeholder:"商品名称"},model:{value:t.listQuery.keyword,callback:function(e){t.$set(t.listQuery,"keyword",e)},expression:"listQuery.keyword"}})],1),n("el-form-item",{attrs:{label:"商品货号："}},[n("el-input",{staticStyle:{width:"203px"},attrs:{placeholder:"商品货号"},model:{value:t.listQuery.productSn,callback:function(e){t.$set(t.listQuery,"productSn",e)},expression:"listQuery.productSn"}})],1),n("el-form-item",{attrs:{label:"商品分类："}},[n("el-cascader",{attrs:{clearable:"",options:t.productCateOptions},model:{value:t.selectProductCateValue,callback:function(e){t.selectProductCateValue=e},expression:"selectProductCateValue"}})],1),n("el-form-item",{attrs:{label:"商品品牌："}},[n("el-select",{attrs:{placeholder:"请选择品牌",clearable:""},model:{value:t.listQuery.brandId,callback:function(e){t.$set(t.listQuery,"brandId",e)},expression:"listQuery.brandId"}},t._l(t.brandOptions,(function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),n("el-form-item",{attrs:{label:"上架状态："}},[n("el-select",{attrs:{placeholder:"全部",clearable:""},model:{value:t.listQuery.publishStatus,callback:function(e){t.$set(t.listQuery,"publishStatus",e)},expression:"listQuery.publishStatus"}},t._l(t.publishStatusOptions,(function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),n("el-form-item",{attrs:{label:"审核状态："}},[n("el-select",{attrs:{placeholder:"全部",clearable:""},model:{value:t.listQuery.verifyStatus,callback:function(e){t.$set(t.listQuery,"verifyStatus",e)},expression:"listQuery.verifyStatus"}},t._l(t.verifyStatusOptions,(function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)],1)],1)]),n("el-card",{staticClass:"operate-container",attrs:{shadow:"never"}},[n("i",{staticClass:"el-icon-tickets"}),n("span",[t._v("数据列表")]),n("el-button",{staticClass:"btn-add",attrs:{size:"mini"},on:{click:function(e){return t.handleAddProduct()}}},[t._v(" 添加 ")])],1),n("div",{staticClass:"table-container"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],ref:"productTable",staticStyle:{width:"100%"},attrs:{data:t.list,border:""},on:{"selection-change":t.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"60",align:"center"}}),n("el-table-column",{attrs:{label:"编号",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.id))]}}])}),n("el-table-column",{attrs:{label:"商品图片",width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return[n("img",{staticStyle:{height:"80px"},attrs:{src:t.row.pic}})]}}])}),n("el-table-column",{attrs:{label:"商品名称",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("p",[t._v(t._s(e.row.name))]),n("p",[t._v("品牌："+t._s(e.row.brandName))])]}}])}),n("el-table-column",{attrs:{label:"价格/货号",width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("p",[t._v("价格：￥"+t._s(e.row.price))]),n("p",[t._v("货号："+t._s(e.row.productSn))])]}}])}),n("el-table-column",{attrs:{label:"标签",width:"140",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("p",[t._v(" 上架： "),n("el-switch",{attrs:{"active-value":1,"inactive-value":0},on:{change:function(n){return t.handlePublishStatusChange(e.$index,e.row)}},model:{value:e.row.publishStatus,callback:function(n){t.$set(e.row,"publishStatus",n)},expression:"scope.row.publishStatus"}})],1),n("p",[t._v(" 新品： "),n("el-switch",{attrs:{"active-value":1,"inactive-value":0},on:{change:function(n){return t.handleNewStatusChange(e.$index,e.row)}},model:{value:e.row.newStatus,callback:function(n){t.$set(e.row,"newStatus",n)},expression:"scope.row.newStatus"}})],1),n("p",[t._v(" 推荐： "),n("el-switch",{attrs:{"active-value":1,"inactive-value":0},on:{change:function(n){return t.handleRecommendStatusChange(e.$index,e.row)}},model:{value:e.row.recommandStatus,callback:function(n){t.$set(e.row,"recommandStatus",n)},expression:"scope.row.recommandStatus"}})],1)]}}])}),n("el-table-column",{attrs:{label:"排序",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.sort))]}}])}),n("el-table-column",{attrs:{label:"SKU库存",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"primary",icon:"el-icon-edit",circle:""},on:{click:function(n){return t.handleShowSkuEditDialog(e.$index,e.row)}}})]}}])}),n("el-table-column",{attrs:{label:"销量",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.sale))]}}])}),n("el-table-column",{attrs:{label:"审核状态",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("p",[t._v(t._s(t._f("verifyStatusFilter")(e.row.verifyStatus)))]),n("p",[n("el-button",{attrs:{type:"text"},on:{click:function(n){return t.handleShowVerifyDetail(e.$index,e.row)}}},[t._v("审核详情 ")])],1)]}}])}),n("el-table-column",{attrs:{label:"操作",width:"160",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("p",[n("el-button",{attrs:{size:"mini"},on:{click:function(n){return t.handleShowProduct(e.$index,e.row)}}},[t._v("查看 ")]),n("el-button",{attrs:{size:"mini"},on:{click:function(n){return t.handleUpdateProduct(e.$index,e.row)}}},[t._v("编辑 ")])],1),n("p",[n("el-button",{attrs:{size:"mini"},on:{click:function(n){return t.handleShowLog(e.$index,e.row)}}},[t._v("日志 ")]),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){return t.handleDelete(e.$index,e.row)}}},[t._v("删除 ")])],1)]}}])})],1)],1),n("div",{staticClass:"batch-operate-container"},[n("el-select",{attrs:{size:"small",placeholder:"批量操作"},model:{value:t.operateType,callback:function(e){t.operateType=e},expression:"operateType"}},t._l(t.operates,(function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),n("el-button",{staticClass:"search-button",staticStyle:{"margin-left":"20px"},attrs:{type:"primary",size:"small"},on:{click:function(e){return t.handleBatchOperate()}}},[t._v(" 确定 ")])],1),n("div",{staticClass:"pagination-container"},[n("el-pagination",{attrs:{background:"",layout:"total, sizes,prev, pager, next,jumper","page-size":t.listQuery.pageSize,"page-sizes":[5,10,15],"current-page":t.listQuery.pageNum,total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){return t.$set(t.listQuery,"pageNum",e)},"update:current-page":function(e){return t.$set(t.listQuery,"pageNum",e)}}})],1),n("el-dialog",{attrs:{title:"编辑货品信息",visible:t.editSkuInfo.dialogVisible,width:"40%"},on:{"update:visible":function(e){return t.$set(t.editSkuInfo,"dialogVisible",e)}}},[n("span",[t._v("商品货号：")]),n("span",[t._v(t._s(t.editSkuInfo.productSn))]),n("el-input",{staticStyle:{width:"50%","margin-left":"20px"},attrs:{placeholder:"按sku编号搜索",size:"small"},model:{value:t.editSkuInfo.keyword,callback:function(e){t.$set(t.editSkuInfo,"keyword",e)},expression:"editSkuInfo.keyword"}},[n("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:t.handleSearchEditSku},slot:"append"})],1),n("el-table",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:t.editSkuInfo.stockList,border:""}},[n("el-table-column",{attrs:{label:"SKU编号",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-input",{model:{value:e.row.skuCode,callback:function(n){t.$set(e.row,"skuCode",n)},expression:"scope.row.skuCode"}})]}}])}),t._l(t.editSkuInfo.productAttr,(function(e,a){return n("el-table-column",{key:e.id,attrs:{label:e.name,align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t.getProductSkuSp(e.row,a))+" ")]}}],null,!0)})})),n("el-table-column",{attrs:{label:"销售价格",width:"80",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-input",{model:{value:e.row.price,callback:function(n){t.$set(e.row,"price",n)},expression:"scope.row.price"}})]}}])}),n("el-table-column",{attrs:{label:"商品库存",width:"80",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-input",{model:{value:e.row.stock,callback:function(n){t.$set(e.row,"stock",n)},expression:"scope.row.stock"}})]}}])}),n("el-table-column",{attrs:{label:"库存预警值",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-input",{model:{value:e.row.lowStock,callback:function(n){t.$set(e.row,"lowStock",n)},expression:"scope.row.lowStock"}})]}}])})],2),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.editSkuInfo.dialogVisible=!1}}},[t._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:t.handleEditSkuConfirm}},[t._v("确 定")])],1)],1)],1)},u=[],r=(n("b0c0"),n("2b3d"),n("d3b7"),n("3ca3"),n("ddb0"),n("c4c8")),l=n("b775");function o(t,e){return Object(l["a"])({url:"/sku/"+t,method:"get",params:e})}function i(t,e){return Object(l["a"])({url:"/sku/update/"+t,method:"post",data:e})}var s=n("c8aa"),c=n("9add"),d=n("d1f3"),p={keyword:null,pageNum:1,pageSize:5,publishStatus:null,verifyStatus:null,productSn:null,productCategoryId:null,brandId:null},f={name:"productList",data:function(){return{editSkuInfo:{dialogVisible:!1,productId:null,productSn:"",productAttributeCategoryId:null,stockList:[],productAttr:[],keyword:null},operates:[{label:"商品上架",value:"publishOn"},{label:"商品下架",value:"publishOff"},{label:"设为推荐",value:"recommendOn"},{label:"取消推荐",value:"recommendOff"},{label:"设为新品",value:"newOn"},{label:"取消新品",value:"newOff"},{label:"转移到分类",value:"transferCategory"},{label:"移入回收站",value:"recycle"}],operateType:null,listQuery:Object.assign({},p),list:null,total:null,listLoading:!0,selectProductCateValue:null,multipleSelection:[],productCateOptions:[],brandOptions:[],publishStatusOptions:[{value:1,label:"上架"},{value:0,label:"下架"}],verifyStatusOptions:[{value:1,label:"审核通过"},{value:0,label:"未审核"}]}},created:function(){this.getList(),this.getBrandList(),this.getProductCateList()},watch:{selectProductCateValue:function(t){null!=t&&2==t.length?this.listQuery.productCategoryId=t[1]:this.listQuery.productCategoryId=null}},filters:{verifyStatusFilter:function(t){return 1===t?"审核通过":"未审核"}},methods:{getProductSkuSp:function(t,e){var n=JSON.parse(t.spData);return null!=n&&e<n.length?n[e].value:null},getList:function(){var t=this;this.listLoading=!0,Object(r["b"])(this.listQuery).then((function(e){t.listLoading=!1,t.list=e.data.list,t.total=e.data.total}))},getBrandList:function(){var t=this;Object(c["c"])({pageNum:1,pageSize:100}).then((function(e){t.brandOptions=[];for(var n=e.data.list,a=0;a<n.length;a++)t.brandOptions.push({label:n[a].name,value:n[a].id})}))},getProductCateList:function(){var t=this;Object(d["d"])().then((function(e){var n=e.data;t.productCateOptions=[];for(var a=0;a<n.length;a++){var u=[];if(null!=n[a].children&&n[a].children.length>0)for(var r=0;r<n[a].children.length;r++)u.push({label:n[a].children[r].name,value:n[a].children[r].id});t.productCateOptions.push({label:n[a].name,value:n[a].id,children:u})}}))},handleShowSkuEditDialog:function(t,e){var n=this;this.editSkuInfo.dialogVisible=!0,this.editSkuInfo.productId=e.id,this.editSkuInfo.productSn=e.productSn,this.editSkuInfo.productAttributeCategoryId=e.productAttributeCategoryId,this.editSkuInfo.keyword=null,o(e.id,{keyword:this.editSkuInfo.keyword}).then((function(t){n.editSkuInfo.stockList=t.data})),null!=e.productAttributeCategoryId&&Object(s["c"])(e.productAttributeCategoryId,{type:0}).then((function(t){n.editSkuInfo.productAttr=t.data.list}))},handleSearchEditSku:function(){var t=this;o(this.editSkuInfo.productId,{keyword:this.editSkuInfo.keyword}).then((function(e){t.editSkuInfo.stockList=e.data}))},handleEditSkuConfirm:function(){var t=this;null==this.editSkuInfo.stockList||this.editSkuInfo.stockList.length<=0?this.$message({message:"暂无sku信息",type:"warning",duration:1e3}):this.$confirm("是否要进行修改","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){i(t.editSkuInfo.productId,t.editSkuInfo.stockList).then((function(e){t.$message({message:"修改成功",type:"success",duration:1e3}),t.editSkuInfo.dialogVisible=!1}))}))},handleSearchList:function(){this.listQuery.pageNum=1,this.getList()},handleAddProduct:function(){this.$router.push({path:"/addProduct"})},handleBatchOperate:function(){var t=this;null!=this.operateType?null==this.multipleSelection||this.multipleSelection.length<1?this.$message({message:"请选择要操作的商品",type:"warning",duration:1e3}):this.$confirm("是否要进行该批量操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){for(var e=[],n=0;n<t.multipleSelection.length;n++)e.push(t.multipleSelection[n].id);switch(t.operateType){case t.operates[0].value:t.updatePublishStatus(1,e);break;case t.operates[1].value:t.updatePublishStatus(0,e);break;case t.operates[2].value:t.updateRecommendStatus(1,e);break;case t.operates[3].value:t.updateRecommendStatus(0,e);break;case t.operates[4].value:t.updateNewStatus(1,e);break;case t.operates[5].value:t.updateNewStatus(0,e);break;case t.operates[6].value:break;case t.operates[7].value:t.updateDeleteStatus(1,e);break;default:break}t.getList()})):this.$message({message:"请选择操作类型",type:"warning",duration:1e3})},handleSizeChange:function(t){this.listQuery.pageNum=1,this.listQuery.pageSize=t,this.getList()},handleCurrentChange:function(t){this.listQuery.pageNum=t,this.getList()},handleSelectionChange:function(t){this.multipleSelection=t},handlePublishStatusChange:function(t,e){var n=[];n.push(e.id),this.updatePublishStatus(e.publishStatus,n)},handleNewStatusChange:function(t,e){var n=[];n.push(e.id),this.updateNewStatus(e.newStatus,n)},handleRecommendStatusChange:function(t,e){var n=[];n.push(e.id),this.updateRecommendStatus(e.recommandStatus,n)},handleResetSearch:function(){this.selectProductCateValue=[],this.listQuery=Object.assign({},p)},handleDelete:function(t,e){var n=this;this.$confirm("是否要进行删除操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var t=[];t.push(e.id),n.updateDeleteStatus(1,t)}))},handleUpdateProduct:function(t,e){this.$router.push({path:"/updateProduct",query:{id:e.id}})},handleShowProduct:function(t,e){console.log("handleShowProduct",e)},handleShowVerifyDetail:function(t,e){console.log("handleShowVerifyDetail",e)},handleShowLog:function(t,e){console.log("handleShowLog",e)},updatePublishStatus:function(t,e){var n=this,a=new URLSearchParams;a.append("ids",e),a.append("publishStatus",t),Object(r["h"])(a).then((function(t){n.$message({message:"修改成功",type:"success",duration:1e3})}))},updateNewStatus:function(t,e){var n=this,a=new URLSearchParams;a.append("ids",e),a.append("newStatus",t),Object(r["f"])(a).then((function(t){n.$message({message:"修改成功",type:"success",duration:1e3})}))},updateRecommendStatus:function(t,e){var n=this,a=new URLSearchParams;a.append("ids",e),a.append("recommendStatus",t),Object(r["i"])(a).then((function(t){n.$message({message:"修改成功",type:"success",duration:1e3})}))},updateDeleteStatus:function(t,e){var n=this,a=new URLSearchParams;a.append("ids",e),a.append("deleteStatus",t),Object(r["e"])(a).then((function(t){n.$message({message:"删除成功",type:"success",duration:1e3})})),this.getList()}}},h=f,b=n("2877"),m=Object(b["a"])(h,a,u,!1,null,null,null);e["default"]=m.exports},"9add":function(t,e,n){"use strict";n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return r})),n.d(e,"g",(function(){return l})),n.d(e,"f",(function(){return o})),n.d(e,"b",(function(){return i})),n.d(e,"d",(function(){return s})),n.d(e,"e",(function(){return c}));var a=n("b775");function u(t){return Object(a["a"])({url:"/brand/list",method:"get",params:t})}function r(t){return Object(a["a"])({url:"/brand/create",method:"post",data:t})}function l(t){return Object(a["a"])({url:"/brand/update/showStatus",method:"post",data:t})}function o(t){return Object(a["a"])({url:"/brand/update/factoryStatus",method:"post",data:t})}function i(t){return Object(a["a"])({url:"/brand/delete/"+t,method:"get"})}function s(t){return Object(a["a"])({url:"/brand/"+t,method:"get"})}function c(t,e){return Object(a["a"])({url:"/brand/update/"+t,method:"post",data:e})}},c4c8:function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return r})),n.d(e,"e",(function(){return l})),n.d(e,"f",(function(){return o})),n.d(e,"i",(function(){return i})),n.d(e,"h",(function(){return s})),n.d(e,"a",(function(){return c})),n.d(e,"g",(function(){return d})),n.d(e,"d",(function(){return p}));var a=n("b775");function u(t){return Object(a["a"])({url:"/product/list",method:"get",params:t})}function r(t){return Object(a["a"])({url:"/product/simpleList",method:"get",params:t})}function l(t){return Object(a["a"])({url:"/product/update/deleteStatus",method:"post",params:t})}function o(t){return Object(a["a"])({url:"/product/update/newStatus",method:"post",params:t})}function i(t){return Object(a["a"])({url:"/product/update/recommendStatus",method:"post",params:t})}function s(t){return Object(a["a"])({url:"/product/update/publishStatus",method:"post",params:t})}function c(t){return Object(a["a"])({url:"/product/create",method:"post",data:t})}function d(t,e){return Object(a["a"])({url:"/product/update/"+t,method:"post",data:e})}function p(t){return Object(a["a"])({url:"/product/updateInfo/"+t,method:"get"})}},c8aa:function(t,e,n){"use strict";n.d(e,"c",(function(){return u})),n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return l})),n.d(e,"f",(function(){return o})),n.d(e,"d",(function(){return i})),n.d(e,"e",(function(){return s}));var a=n("b775");function u(t,e){return Object(a["a"])({url:"/productAttribute/list/"+t,method:"get",params:e})}function r(t){return Object(a["a"])({url:"/productAttribute/delete",method:"post",data:t})}function l(t){return Object(a["a"])({url:"/productAttribute/create",method:"post",data:t})}function o(t,e){return Object(a["a"])({url:"/productAttribute/update/"+t,method:"post",data:e})}function i(t){return Object(a["a"])({url:"/productAttribute/"+t,method:"get"})}function s(t){return Object(a["a"])({url:"/productAttribute/attrInfo/"+t,method:"get"})}},d1f3:function(t,e,n){"use strict";n.d(e,"c",(function(){return u})),n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return l})),n.d(e,"g",(function(){return o})),n.d(e,"e",(function(){return i})),n.d(e,"h",(function(){return s})),n.d(e,"f",(function(){return c})),n.d(e,"d",(function(){return d}));var a=n("b775");function u(t,e){return Object(a["a"])({url:"/productCategory/list/"+t,method:"get",params:e})}function r(t){return Object(a["a"])({url:"/productCategory/delete/"+t,method:"post"})}function l(t){return Object(a["a"])({url:"/productCategory/create",method:"post",data:t})}function o(t,e){return Object(a["a"])({url:"/productCategory/update/"+t,method:"post",data:e})}function i(t){return Object(a["a"])({url:"/productCategory/"+t,method:"get"})}function s(t){return Object(a["a"])({url:"/productCategory/update/showStatus",method:"post",data:t})}function c(t){return Object(a["a"])({url:"/productCategory/update/navStatus",method:"post",data:t})}function d(){return Object(a["a"])({url:"/productCategory/list/withChildren",method:"get"})}}}]);
//# sourceMappingURL=chunk-6b060849.d3f68b7d.js.map