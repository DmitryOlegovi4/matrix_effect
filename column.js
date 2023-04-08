const CHARACTERS = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトホモヨョロヲゴゾドボポヴッン";

export class Column {
    constructor(x,fontSize, cvsHeight, ctx) {
        this.x = x;
        this.y = 0;
        this.fontSize = fontSize;
        this.cvsHeight = cvsHeight;
        this.ctx = ctx;
    }
    drawSymbol(){
        if(this.y === 0 && Math.random() < .98){ return; }
        const charIndex = Math.floor(Math.random() * CHARACTERS.length)
        const symbol = CHARACTERS[charIndex];

        this.ctx.fillText(symbol, this.x,this.y);

        if(this.y > this.cvsHeight){
            this.y = 0;
        }else{
            this.y += this.fontSize;
        }
    }
}