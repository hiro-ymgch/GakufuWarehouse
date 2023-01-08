'user strict';

var ref = document.referrer;
print(ref[0])

if (ref.match(/index/) == -1) {
    //含まれない場合の処理
    location.href = "./index.html";
}