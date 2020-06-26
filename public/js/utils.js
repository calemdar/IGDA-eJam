let resize = function() {

    if (window.innerWidth / window.innerHeight >= ratio) {
        let w = window.innerHeight * ratio;
        let h = window.innerHeight;
    } else {
        let w = window.innerWidth;
        let h = window.innerWidth / ratio;
    }
    pixiApp.renderer.view.style.width = w + 'px';
    pixiApp.renderer.view.style.height = h + 'px';
}

let createObj = function({name, position=vec2(0,0), scale=vec2(1.0, 1.0), anchor=1, mass=1, sprite=1, followSprite=1, physics=1}){
    let object = {};

		if(!name || typeof(name) != "string") {
			object.errorMessage = "name not a String";
			return object;
		}

		object = { name, position, scale, anchor, mass, sprite, followSprite, physics };

		return object;
}

let renderObject = (object) => {

    let physicsPos = object.physics.getPosition();
    object.sprite.anchor = object.anchor;
    object.sprite.position.x = physicsPos.x;
    object.sprite.position.y = physicsPos.y;

    object.followSprite.anchor = object.anchor;
    object.followSprite.position.x = physicsPos.x;
    object.followSprite.position.y = physicsPos.y;
};
window.onresize = resize;