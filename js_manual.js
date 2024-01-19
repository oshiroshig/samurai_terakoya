//----------------------------------------------------------

//★ 変数
//値の定義（更新可能）
let hensuu = '変数実行';
hensuu ='変数上書き';
console.log(hensuu);

let hensuuHukusuu = ['変数0','変数1','変数2','変数3'];
console.log(hensuuHukusuu[0]);

//----------------------------------------------------------

//★ 定数
//値の定義（更新不可）
const teisuu = '定数実行';
console.log(teisuu);

//----------------------------------------------------------

//★ ループ文
//繰り返したい命令
let ruupu = ['ループ0','ループ1','ループ2','ループ3'];
let index = 0;
while(index < ruupu.length){
    console.log(ruupu[index]);
    index++;
}

//----------------------------------------------------------

//★ if文 else文
//もし～ならば等の条件分岐
if(hensuuHukusuu.length > 12){
    console.log('if表示');
}else{
    console.log('else表示')
}

//----------------------------------------------------------

// ★ 関数
// 1 同じ命令を何度も使いたいとき
// 2 任意のタイミングで命令を実行させたいとき
//function() という書き方もある
//letでもいいけど上書きするものでもないからconstでいい
//(arg) ← 引数 同じ命令を一部だけ変えてつかいまわしたい時に引数が有効
const test = (arg) => {
    if(hensuuHukusuu.length > arg){
        console.log('関数if');
    }else{
        console.log('関数else')
    }
}
test(5); //これで関数実行（何回でも可）
test(1);

//----------------------------------------------------------

//★ オブジェクト
//変数や定数と違って複数の値を持てる
const obuje = {
    ob1:'オブジェクト1',
    ob2:'オブジェクト2',
    ob3:'オブジェクト3'
};
console.log(obuje.ob1);
//オブジェクトに関数を入れる
const obuje2 = {
    obkan1:'オブジェクト関数1',
    obkan2:'オブジェクト関数2',
    obkan3:'オブジェクト関数3',
    obkan4:() => {
        console.log('オブジェクト関数');
    }
};
console.log(obuje2.obkan4());

//----------------------------------------------------------

// ★元々存在してるオブジェクト
//ウィンドウ、WEBブラウザ全体の情報
console.log(window);
//ウィンドウ、WEBブラウザの幅
console.log(window.innerHeight);
//★aler ポップアップを出してくれる 使えるらしい
window.alert('アラートでポップアップ');
//★document ドキュメント Webブラウザの情報
//★getElementsByTagName HTMLの何かを指定・参照したい時に使う
//★getElementsById HTMLのIdを指定・参照したい時に使う
console.log(document.getElementsByTagName('button')[0]);
//★Event ブラウザの情報に命令（今回はボタン）
//★addEventListenerは引数を2つ手に入る
document.getElementsByTagName('button')[0].addEventListener('click', ()=> {
    window.alert('ドキュメントにより実行');
});

//----------------------------------------------------------





















