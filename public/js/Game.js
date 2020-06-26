//const Physics = require('./physics');
let GameObjects = [];

// Start PIXI
//Rendering();
// Start running physics engine
Physics();

/*
// add sprites
let huskyTexture = new PIXI.Texture.from("../img/husky.png");
let husky = new PIXI.Sprite(huskyTexture);

husky.position.x = 100;
husky.position.y = 100;
stage.addChild(husky);

let huskyObj = createObj({name: "husky", position: boxB.position, physics: boxB});
GameObjects.push(huskyObj);

let moveSprites = () => {
    for(let i = 0; i < GameObjects.length; i++){
        let obj = GameObject[i];
        renderObject(obj);
    }
}

pixiApp.ticker.add(moveSprites);
*/