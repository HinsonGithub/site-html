// main.js

// 共用的 JavaScript 部分，比如貨物檢查功能等等
function checkCargo() {
  const cargoId = document.getElementById('cargoId').value;
  
  // 在這裡，你可以使用 AJAX 或 fetch 來從 JSON 或後端 API 中取得資料
  // 這裡是一個示例 JSON，你需要替換成你的實際資料
  const cargoData = {
    "12345": "已發貨",
    "67890": "運輸中",
    "a" : "正在等待賣家回應（審核中）"
    "XbDk" : "已完成訂單”
    // 更多貨物狀態資料...
  };

  const result = document.getElementById('result');
  if (cargoData[cargoId]) {
    result.innerHTML = `貨物編號 ${cargoId} 的狀態為： ${cargoData[cargoId]}`;
  } else {
    result.innerHTML = `找不到貨物編號 ${cargoId} 的資料(必須依照大小寫)`;
  }
}

// 管理介面的 JavaScript 部分，比如新增和更新貨物狀態等等
document.getElementById('addCargoForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const cargoId = document.getElementById('cargoId').value;
  const cargoStatus = document.getElementById('cargoStatus').value;

  // 在這裡執行新增貨物的相關操作，可以是 AJAX 或其他後端處理方式
  // 範例中只是簡單的 Log 輸出
  console.log(`新增貨物：編號 ${cargoId}，狀態 ${cargoStatus}`);
});

document.getElementById('updateCargoForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const updateCargoId = document.getElementById('updateCargoId').value;
  const newStatus = document.getElementById('newStatus').value;

  // 在這裡執行更新貨物狀態的相關操作，可以是 AJAX 或其他後端處理方式
  // 範例中只是簡單的 Log 輸出
  console.log(`更新貨物 ${updateCargoId} 狀態為 ${newStatus}`);
});
