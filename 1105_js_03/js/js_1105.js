//1.Save クリックイベント

// var array = [];
// saveのボタンが押されたら、実行したい
$("#save").on("click",function(){
    // jQueryでinputのhtmlの記述された文字を取得する方法
    // val();
    // $("#xx").val();  inputタグにしか使えない
    // input text email textarea tel

    // let key = $("#key").val();
    // let memo = $("#memo").val();
    let songtitle = $("#song-title").val();
    let composer = $("#composer").val();
    let songage = $("#song-age").val();
    let level = $("#level").val();
    console.log(songtitle,"データが取れているかチェック")
    console.log(composer,"データが取れているかチェック")
    console.log(songage,"データが取れているかチェック")
    console.log(level,"データが取れているかチェック")

    // データを保存します→localStrageを使います
    // localStorage.setItem(key, memo)
    var datalist = {
        data1 : songtitle,
        data2 : composer,
        data3 : songage,
        data4 : level
    };
    var datalist = JSON.stringify(datalist);
    localStorage.setItem("datalist",datalist);

    console.log(datalist,"データが取れているかチェック")

    const html = `
                <tr>
                    <td>${songtitle}</td>
                    <td>${composer}</td>
                    <td>${songage}</td>
                    <td>${level}</td>
                </tr>    

            `;

    $("#list").append(html);
});




//2.clear クリックイベント

$("#clear").on("click",function(){
    localStorage.clear();

    // これだけだとhtmlが残ってしまうのでそれも削除
    $("#list").empty();

    //ここに、ヘッダーは再出力する処理を追加する。
    const html = `
    <tr>
        <th>曲名</th>
        <th>作曲家</th>
        <th>年代</th>
        <th>難易度</th>
    </tr>   
    `;
    $("#list").append(html);
})




//3.ページ読み込み：保存データ取得表示

for(let i = 0; i < localStorage.length; i++){
   
    // JSON.parse(localStorage.getItem("datalist"))  // -> {"data1":"hoge1", "data2":"hoge2"}

    // const key = localStorage.key(i);
    // const value = localStorage.getItem(key);
    // var key = localStorage.key(i)
    var jsonObj = localStorage.getItem('datalist');
    var jsObj = JSON.parse(jsonObj);

    console.log(jsObj);
    console.log(localStorage.length);

    const html =`
        <tr>
            <td>${jsObj.data1}</td>
            <td>${jsObj.data2}</td>
            <td>${jsObj.data3}</td>
            <td>${jsObj.data4}</td>
        </tr>    
    `
    // 画面上に埋め込み
    $("#list").append(html)
}


