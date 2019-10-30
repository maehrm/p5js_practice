let angle1 = 0;                 // 大きな円上の角度
let r1 = 100;                   // 円周(大)の半径
let angle2 = 0;                 // 小さな円上の角度
let r2 = 15;                    // 円周（小）の半径

function setup() {
    createCanvas(640, 480);
    noStroke();
}

function draw() {
    background(255);
    push();                // 座標をcanvasの中心にするため一時的に保存
    translate(width / 2, height / 2);
    fill(127);
    ellipse(0, 0, r1 * 2, r1 * 2); // 円周（大）の描画
    x = r1 * cos(radians(angle1)); // 円周上（大）のX座標の位置
    y = r1 * sin(radians(angle1)); // 円周上（大）のY座標の位置
    push();                        // 座標を円周上（大）の(X,Y)座標にするため一時的に保存
    translate(x, y);            
    for (let i = 0; i < 8; i++) {
        x = r2 * cos(radians(angle2 - (i * 45))); // 円周上のX座標の位置
        y = r2 * sin(radians(angle2 - (i * 45))); // 円周上のY座標の位置
        fill(35 * i);
        ellipse(x, y, 10 - i, 10 - i); // アニメーションする円の描画
    }
    pop();
    angle2 += 7;
    pop();
    angle1 += 1;
}
