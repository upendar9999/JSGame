class Ledge {
    constructor(n, x, y, imgUrl='https://i.ibb.co/HXVKCrW/block.png') {
        this.n = n;
        this.space = {x, y};
        this.rock = new Image;
        this.rock.src = imgUrl;
    }

    update() {
        for(let i=0; i<this.n; i++)
            ctx.drawImage(this.rock, this.space.x+this.rock.width*i, this.space.y)
    }

    collide(player) {
        let curX = this.space.x;
        let curY = this.space.y;
        if (curX <= player.space.x && player.space.x <= curX+ (this.rock.width*this.n)) {
            let diff =  curY - player.space.y;
            if(0 <= diff && diff <= player.space.h) {
                player.on_rest();
                player.space.y = curY - player.space.h;
            }
            else if (diff < 0 && Math.abs(diff) <= this.rock.height && player.speed.dy <= 0) {
                player.speed.dy = 3;
            }
        }
    }
}