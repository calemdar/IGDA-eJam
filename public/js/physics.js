// module aliases
let Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;
let engine, renderer;

let Physics = function(){

    // create an engine
    engine = Engine.create();

    // create a renderer
    renderer = Render.create({
        element: document.body,
        engine: engine,
        options: {
            width: window.innerWidth,
            height: window.innerHeight,
            background: "#2282bb",
            wireframes: false,
            showPositions: true,
            showMousePosition: true
        }
        

    });
    

    // create two boxes and a ground
    let boxA = Bodies.rectangle(400, 200, 80, 80, {
        render: {
            sprite: {
                texture: "../img/husky.png",
                xScale: 0.25,
                yScale: 0.25
            }
        }
    });
    let boxB = Bodies.rectangle(450, 50, 80, 80);
    let ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

    // add textures


    // add all of the bodies to the world
    World.add(engine.world, [boxA, boxB, ground]);

    // run the engine
    Engine.run(engine);

    // run the renderer
    Render.run(renderer);
}
//module.exports = Physics;