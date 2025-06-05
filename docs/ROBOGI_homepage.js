document.addEventListener('DOMContentLoaded', function() {
    // 「activities」セクション内のすべてのli要素を取得
    var items = document.querySelectorAll('#activities ul li');

    // 画像を表示するコンテナを取得
    var imageDisplay = document.getElementById('imageDisplay');

    // 各項目にクリックイベントリスナーを追加
    items.forEach(function(item) {
        item.addEventListener('click', function() {
            // data-img属性から画像URLを取得
            var imgUrl = item.getAttribute('data-img');
            
            // 画像表示コンテナの中身を更新
            imageDisplay.innerHTML = '<img src="' + imgUrl + '" alt="活動画像" style="max-width: 100%; height: auto;">';
        });
    });
});