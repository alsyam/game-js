const board = document.querySelector(".board");
console.log(board)

// const randomPosition = () => ~~(Math.random() * 15) + 1
function randomPosition() {
    return ~~(Math.random() * 15) + 1
}

let config = {
    speed: 175,
    player: {
        x: randomPosition(),
        y: randomPosition(),
    },
    food: {
        x: randomPosition(),
        y: randomPosition(),
    },
    velocity: {
        x: 0,
        y: 0,
    },
    showTitle() {
        const title = document.getElementById("title__1");
        title.style.opacity = "0";
        title.style.visibility = "visible";
        title.style.zIndex = "1"

        setTimeout(function ()){
            title.style.opacity = "0";
            title.style.visibility = "hidden";
            title.style.zIndex = "1"
        }
    }
}

const games = {
    createFood() {
        board.innerHTML = `<div class="food" style="grid-area: ${config.food.y} / ${config.food.x}"></div>`
    },
    createPlayer() {
        board.innerHTML += `<div class="player" id="player" style="grid-area: ${config.player.y} / ${config.player.x}"></div>`
    },
    resetPlayerPosition() {
        if (config.player.x <= 0 || config.player.x > 15 || config.player.y <= 0 || config.player.y > 15) {
            console.log('kalah');
            config.player.x = 7;
            config.player.y = 7;
        }
    },
    movePlayer() {
        config.player.x += config.velocity.x
        config.player.y += config.velocity.y
    },
    isWin() {
        const title = document.getElementById("title__1");

        if (config.player.x === config.food.x && config.player.y === config.food.y) {
            return true
                ;
        }
        return false
    },
    randomFoodPosition() {
        config.food.x = randomPosition()
        config.food.y = randomPosition()
    }
}

// sebuah triger untuk bergerak
function movement(listen) {
    switch (listen.key) {
        case "w":
            config.velocity.y = -1;
            config.velocity.x = 0;
            break;
        case "s":
            config.velocity.y = 1;
            config.velocity.x = 0;
            break;
        case "a":
            config.velocity.x = -1;
            config.velocity.y = 0;
            break;
        case "d":
            config.velocity.x = 1;
            config.velocity.y = 0;
            break;
        default:
            break;
    }
}

function headMovement() {
    const playerEl = document.getElementById("player")
    if (config.velocity.x == 1) {
        playerEl.style.transform = "scaleX(-1);"
    }
    if (config.velocity.y == -1) {
        playerEl.style.transform = "rotate(90deg);"
    }
    if (config.velocity.y == 1) {
        playerEl.style.transform = "rotate(-90deg);"
    }

}



function start() {
    games.createFood()
    games.createPlayer()
    games.movePlayer()
    headMovement()

    games.resetPlayerPosition()
    const win = games.isWin()
    if (win) games.randomFoodPosition()
}


setInterval(start, config.speed)
document.addEventListener("keydown", movement)