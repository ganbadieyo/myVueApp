const tableItem = {
  date: "2022-6-6", // 日期
  name: "斯国一", // 姓名
  phone: "13119981002", // 电话
  address: "重庆市渝北区重庆理工大学" // 地址
};
// 此处先以 tableItem 为数据源，拷贝生成 20 个数据，然后再根据索引 index 添加上 id
const tableData = Array(20)
  .fill(tableItem)
  .map((x, i) => {
    return { id: i + 1, ...x };
  });
export default tableData;