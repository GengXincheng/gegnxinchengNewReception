import request from "./ajax.js";
//部分暴露
export const reqCategoryList = () => {
  return request({
    url: "/product/getBaseCategoryList",
    method: "GET",
  });
};
// 验证请求调用
reqCategoryList()  //要调用
//axios的三种参数，params参数  query参数   请求体参数
// 、、params参数是在url中携带的，属于路径的一部分
// 、、query参数，可以在url中携带  ？号分隔，后面就是query参数
//   也可以在配置对象中配置，配置的属性名叫params
// 请求体参数，在配置对象当中的data里面配置，请求方式是put和post才有请求体参数
// axios({
//     url:'locahost:8080/userinfo/1?name=zhogliying',
//     method:,
//     params:{
// 代表的是query参数
//         name:'sdfger'
//     },
//     data:{
//配置的是请求体参数
//     }
// })
