const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

c.fillRect(0, 0, canvas.width, canvas.height)

const gravity = 0.7

const characters = {
  samurai: new Fighter({
    position: {
      x: 0,
      y: 0
    },
    velocity: {
      x: 0,
      y: 0
    },
    offset: {
      x: 0,
      y: 0
    },
    flipped: 0,
    imageSrc: './img/characters/samuraiMack/Idle.png',
    imageSrcFlipped: './img/characters/samuraiMack/Idle-flipped.png',
    framesMax: 8,
    scale: 2.5,
    offset: {
      x: 220,
      y: 157
    },
    sprites: {
      idle: {
        imageSrc: './img/characters/samuraiMack/Idle.png',
        imageSrcFlipped: './img/characters/samuraiMack/Idle-flipped.png',
        framesMax: 8
      },
      run: {
        imageSrc: './img/characters/samuraiMack/Run.png',
        imageSrcFlipped: './img/characters/samuraiMack/Run-flipped.png',
        framesMax: 8
      },
      jump: {
        imageSrc: './img/characters/samuraiMack/Jump.png',
        imageSrcFlipped: './img/characters/samuraiMack/Jump-flipped.png',
        framesMax: 2
      },
      fall: {
        imageSrc: './img/characters/samuraiMack/Fall.png',
        imageSrcFlipped: './img/characters/samuraiMack/Fall-flipped.png',
        framesMax: 2
      },
      attack1: {
        imageSrc: './img/characters/samuraiMack/Attack1.png',
        imageSrcFlipped: './img/characters/samuraiMack/Attack1-flipped.png',
        framesMax: 6
      },
      takeHit: {
        imageSrc: './img/characters/samuraiMack/Take Hit - white silhouette.png',
        imageSrcFlipped: './img/characters/samuraiMack/Take Hit - white silhouette-flipped.png',
        framesMax: 4
      },
      death: {
        imageSrc: './img/characters/samuraiMack/Death.png',
        imageSrcFlipped: './img/characters/samuraiMack/Death-flipped.png',
        framesMax: 6
      }
    },
    attackBox: {
      damage: 12,
      offset: {
        x: 100,
        y: 50
      },
      width: 160,
      height: 50,
      frameHit: 4,
    }
  }),
  kenji: new Fighter({
    position: {
      x: 400,
      y: 100
    },
    velocity: {
      x: 0,
      y: 0
    },
    color: 'blue',
    flipped:0,
    imageSrc: './img/characters/kenji/Idle.png',
    imageSrcFlipped: './img/characters/kenji/Idle-flipped.png',
    framesMax: 4,
    scale: 2.5,
    offset: {
      x: 230,
      y: 167
    },
    sprites: {
      idle: {
        imageSrc: './img/characters/kenji/Idle.png',
        imageSrcFlipped: './img/characters/kenji/Idle-flipped.png',
        framesMax: 4
      },
      run: {
        imageSrc: './img/characters/kenji/Run.png',
        imageSrcFlipped: './img/characters/kenji/Run-flipped.png',
        framesMax: 8
      },
      jump: {
        imageSrc: './img/characters/kenji/Jump.png',
        imageSrcFlipped: './img/characters/kenji/Jump-flipped.png',
        framesMax: 2
      },
      fall: {
        imageSrc: './img/characters/kenji/Fall.png',
        imageSrcFlipped: './img/characters/kenji/Fall-flipped.png',
        framesMax: 2
      },
      attack1: {
        imageSrc: './img/characters/kenji/Attack1.png',
        imageSrcFlipped: './img/characters/kenji/Attack1-flipped.png',
        framesMax: 4
      },
      takeHit: {
        imageSrc: './img/characters/kenji/Take hit.png',
        imageSrcFlipped: './img/characters/kenji/Take hit-flipped.png',
        framesMax: 3
      },
      death: {
        imageSrc: './img/characters/kenji/Death.png',
        imageSrcFlipped: './img/characters/kenji/Death-flipped.png',
        framesMax: 7
      }
    },
    attackBox: {
      damage: 15,
      offset: {
        x: 50,
        y: 50
      },
      width: 170,
      height: 50,
      frameHit: 2
    }
  }),
  wizard: new Fighter({
    position: {
      x: 150,
      y: 100
    },
    velocity: {
      x: 0,
      y: 0
    },
    color: 'blue',
    flipped: 0,
    imageSrc: './img/characters/wizard/Idle.png',
    imageSrcFlipped: './img/characters/wizard/Idle-flipped.png',
    framesMax: 6,
    scale: 1.63,
    offset: {
      x: 160,
      y: 80
    },
    sprites: {
      idle: {
        imageSrc: './img/characters/wizard/Idle.png',
        imageSrcFlipped: './img/characters/wizard/Idle-flipped.png',
        framesMax: 6
      },
      run: {
        imageSrc: './img/characters/wizard/Run.png',
        imageSrcFlipped: './img/characters/wizard/Run-flipped.png',
        framesMax: 8
      },
      jump: {
        imageSrc: './img/characters/wizard/Jump.png',
        imageSrcFlipped: './img/characters/wizard/Jump-flipped.png',
        framesMax: 2
      },
      fall: {
        imageSrc: './img/characters/wizard/Fall.png',
        imageSrcFlipped: './img/characters/wizard/Fall-flipped.png',
        framesMax: 2
      },
      attack1: {
        imageSrc: './img/characters/wizard/Attack1.png',
        imageSrcFlipped: './img/characters/wizard/Attack1-flipped.png',
        framesMax: 8
      },
      takeHit: {
        imageSrc: './img/characters/wizard/Hit.png',
        imageSrcFlipped: './img/characters/wizard/Hit-flipped.png',
        framesMax: 4
      },
      death: {
        imageSrc: './img/characters/wizard/Death.png',
        imageSrcFlipped: './img/characters/wizard/Death-flipped.png',
        framesMax: 7
      }
    },
    attackBox: {
      damage: 20,
      offset: {
        x: 50,
        y: -10
      },
      width: 120,
      height: 80,
      frameHit: 5
    }
  })
};
const background = new Sprite({
  position: {
    x: 0,
    y: 0
  },
  imageSrc: './img/background.png'
})

const shop = new Sprite({
  position: {
    x: 650,
    y: 128
  },
  imageSrc: './img/shop.png',
  scale: 2.75,
  framesMax: 6
})

var player = characters.samurai;
var enemy = characters.kenji;

const keys = {
  a: {
    pressed: false
  },
  d: {
    pressed: false
  },
  ArrowRight: {
    pressed: false
  },
  ArrowLeft: {
    pressed: false
  }
}


function animate() {
  window.requestAnimationFrame(animate)
  c.fillStyle = 'black'
  c.fillRect(0, 0, canvas.width, canvas.height)
  background.update()
  shop.update()
  c.fillStyle = 'rgba(255, 255, 255, 0.15)'
  c.fillRect(0, 0, canvas.width, canvas.height)
  player.update()
  enemy.update()

  player.velocity.x = 0
  enemy.velocity.x = 0

  // player movement

  if (keys.a.pressed && player.lastKey === 'a') {
    player.velocity.x = -5
    player.switchSprite('run')
  } else if (keys.d.pressed && player.lastKey === 'd') {
    player.velocity.x = 5
    player.switchSprite('run')
  } else {
    player.switchSprite('idle')
  }

  // jumping
  if (player.velocity.y < 0) {
    player.switchSprite('jump')
  } else if (player.velocity.y > 0) {
    player.switchSprite('fall')
  }

  // Enemy movement
  if (keys.ArrowLeft.pressed && enemy.lastKey === 'ArrowLeft') {
    enemy.velocity.x = -5
    enemy.switchSprite('run')
  } else if (keys.ArrowRight.pressed && enemy.lastKey === 'ArrowRight') {
    enemy.velocity.x = 5
    enemy.switchSprite('run')
  } else {
    enemy.switchSprite('idle')
  }

  // jumping
  if (enemy.velocity.y < 0) {
    enemy.switchSprite('jump')
  } else if (enemy.velocity.y > 0) {
    enemy.switchSprite('fall')
  }

  // detect for collision & enemy gets hit
  if (
    rectangularCollision({
      rectangle1: player,
      rectangle2: enemy
    }) &&
    player.isAttacking &&
    player.framesCurrent === player.attackBox.frameHit
  ) {
    enemy.takeHit(player.attackBox.damage)
    player.isAttacking = false

    gsap.to('#enemyHealth', {
      width: enemy.health + '%'
    })
  }

  // if player misses
  if (player.isAttacking && player.framesCurrent === player.attackBox.frameHit) {
    player.isAttacking = false
  }

  // this is where our player gets hit
  if (
    rectangularCollision({
      rectangle1: enemy,
      rectangle2: player
    }) &&
    enemy.isAttacking &&
    enemy.framesCurrent === enemy.attackBox.frameHit
  ) {
    player.takeHit(enemy.attackBox.damage)
    enemy.isAttacking = false

    gsap.to('#playerHealth', {
      width: player.health + '%'
    })
  }

  // if enemy misses
  if (enemy.isAttacking && enemy.framesCurrent === enemy.attackBox.frameHit) {
    enemy.isAttacking = false
  }

  // end game based on health
  if (enemy.health <= 0 || player.health <= 0) {
    determineWinner({ player, enemy, timerId })
  }
}

function getCursorPosition(canvas, event) {
  const rect = canvas.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top
  console.log("x: " + x + " y: " + y)

  return {x, y}
}
const char1 = characters.samurai;
const char2 = characters.wizard;
const char3 = characters.kenji;

let playerSelected = false;
function selectPlayer(e) {
  let cursorClick = getCursorPosition(canvas, e)
  // if click on character sprite coordinates
  if(
    cursorClick.x < char1.position.x + char1.width && cursorClick.x > char1.position.x &&
    cursorClick.y < char1.position.y + char1.height && cursorClick.y > char1.position.y
    ) {
    player = char1;
    playerSelected = true;
    char1.position.x = 50;
    char1.position.y = canvas.height + 20;
  }
  if(
    cursorClick.x < char2.position.x + char2.width && cursorClick.x > char2.position.x &&
    cursorClick.y < char2.position.y + char2.height && cursorClick.y > char2.position.y
    ) {
    player = char2;
    playerSelected = true;
    char2.position.x = 50;
    char2.position.y = canvas.height + 20;
  }
  if(
    cursorClick.x < char3.position.x + char3.width && cursorClick.x > char3.position.x &&
    cursorClick.y < char3.position.y + char3.height && cursorClick.y > char3.position.y
    ) {
    player = char3;
    playerSelected = true;
    char3.position.x = 50;
    char3.position.y = canvas.height + 20;
  }
  if(playerSelected){
    canvas.removeEventListener('mousedown', selectPlayer)

    document.querySelector('#displayText').innerHTML = 'Select Player 2'
    canvas.addEventListener('mousedown',selectEnemy)
  }
}

let enemySelected = false;
function selectEnemy(e) {
  let cursorClick = getCursorPosition(canvas, e)
  // if click on character sprite coordinates
  if(
    cursorClick.x < char1.position.x + char1.width && cursorClick.x > char1.position.x &&
    cursorClick.y < char1.position.y + char1.height && cursorClick.y > char1.position.y
    ) {
    enemy = char1;
    enemySelected = true;
  }
  if(
    cursorClick.x < char2.position.x + char2.width && cursorClick.x > char2.position.x &&
    cursorClick.y < char2.position.y + char2.height && cursorClick.y > char2.position.y
    ) {
    enemy = char2;
    enemySelected = true;

  }
  if(
    cursorClick.x < char3.position.x + char3.width && cursorClick.x > char3.position.x &&
    cursorClick.y < char3.position.y + char3.height && cursorClick.y > char3.position.y
    ) {
    enemy = char3;
    enemySelected = true;
  }
  if(enemySelected){
    enemy.flipped = 1;
    enemy.flipSprites(enemy.sprites);
    document.querySelector('#displayText').style.display = 'none'
    canvas.removeEventListener('mousedown', selectEnemy)
  }
}

canvas.addEventListener('mousedown',selectPlayer)

function chooseCharacter(){
  // paint characters in canvas
  if((playerSelected && enemySelected)) {
    player.position.x = 50;
    enemy.position.x = canvas.width - (2 * 50);
    //start game
    animate()
    decreaseTimer()
    return
  } else {
    window.requestAnimationFrame(chooseCharacter)
  }
  c.fillStyle = 'black'
  c.fillRect(0, 0, canvas.width, canvas.height)
  background.update()
  shop.update()
  c.fillStyle = 'rgba(255, 255, 255, 0.15)'
  c.fillRect(0, 0, canvas.width, canvas.height)

  char1.update()

  char2.update()

  char3.update()

}

char1.position.x = (canvas.width / 4) - 25
char2.position.x = (canvas.width * 2 / 4) - 25
char3.position.x = (canvas.width * 3 / 4) - 25
document.querySelector('#displayText').style.display = 'flex'
document.querySelector('#displayText').innerHTML = 'Select Player 1'
chooseCharacter()
// animate()

window.addEventListener('keydown', (event) => {
  if (!player.dead) {
    switch (event.key) {
      case 'd':
        keys.d.pressed = true
        player.lastKey = 'd'
        break
      case 'a':
        keys.a.pressed = true
        player.lastKey = 'a'
        break
      case 'w':
        player.velocity.y = -20
        break
      case ' ':
        player.attack()
        break
    }
  }

  if (!enemy.dead) {
    switch (event.key) {
      case 'ArrowRight':
        keys.ArrowRight.pressed = true
        enemy.lastKey = 'ArrowRight'
        break
      case 'ArrowLeft':
        keys.ArrowLeft.pressed = true
        enemy.lastKey = 'ArrowLeft'
        break
      case 'ArrowUp':
        enemy.velocity.y = -20
        break
      case 'ArrowDown':
        enemy.attack()

        break
    }
  }
})

window.addEventListener('keyup', (event) => {
  switch (event.key) {
    case 'd':
      keys.d.pressed = false
      break
    case 'a':
      keys.a.pressed = false
      break
  }

  // enemy keys
  switch (event.key) {
    case 'ArrowRight':
      keys.ArrowRight.pressed = false
      break
    case 'ArrowLeft':
      keys.ArrowLeft.pressed = false
      break
  }
})
