// J'abandonne j'en ai marre de votre exo à la con

class Vec2 {
    constructor(x = 0, y = 0) {
        this.setVec(x, y);
    }

    getVec() {
        return [this.x, this.y];
    }

    setVec(x, y) {
        this.x = x;
        this.y = y;
    }

    add(v) {
        this.x += v.x;
        this.y += v.y;
    }

    mult(scalar) {
        this.x *= scalar;
        this.y *= scalar;
    }

    div(scalar) {
        this.x /= scalar;
        this.y /= scalar;
    }
}

window.onload = () => {
    const footer = document.querySelector('footer');
    const [sky, water, box] = footer.querySelectorAll('div');

    const g = 9.81;
    box.mass = 0.01; //kg
    box.volume = box.offsetWidth * box.offsetHeight;
    box.density = box.mass / box.volume;
    box.position = new Vec2(box.offsetLeft, box.offsetTop);
    box.velocity = new Vec2(0, 0);
    box.acceleration = new Vec2(0, 0);
    box.draw = () => {
        box.style.left = box.position.x + 'px';
        box.style.top = box.position.y + 'px';
    }
    box.applyForce = (force) => {
        // box.acceleration.add(new Vec2(...force.getVec()).div(force, box.mass).getVec());
        let vec = force.getVec();
        box.acceleration.add(new Vec2(vec[0] /= box.mass, vec[1] /= box.mass));
    }


    water.mass = 10; //kg
    water.volume = water.offsetWidth * water.offsetHeight;
    water.density = water.mass / water.volume;
    water.contains = (box) => {
        console.log(box.offsetTop + box.offsetHeight, water.offsetTop)
        return (box.offsetTop + box.offsetHeight) > water.offsetTop;
    }


    box.addEventListener('click', () => {
        // box.mass++;
        update()
    })
    function update() {
        const gravityForce = box.mass * g;
        console.log("Gravity force: ", gravityForce);
        box.applyForce(new Vec2(0, gravityForce));


        const liquidResistance = 500
        console.log(water.contains(box));
        if (water.contains(box)) {
            const submergedVolume = Math.min((box.offsetTop + box.offsetHeight - water.offsetTop) * box.offsetWidth, box.volume);
            // const submergedVolume = box.volume * Math.min(box.offsetTop + box.offsetHeight - water.offsetTop, box.offsetHeight)
            const buoyantForce = water.density * submergedVolume * g;
            box.applyForce(new Vec2(0, -buoyantForce));

            console.log("Buoyant force: ", buoyantForce);
            console.log("Submerged volume: ", submergedVolume);
            // let stokesForce = -liquidResistance * box.offsetWidth * box.velocity.getVec()[1];
            // box.applyForce(new Vec2(0, stokesForce));
            // console.log("Stokes force: ", stokesForce);
        }
        box.velocity.add(box.acceleration);
        box.position.add(box.velocity);

        console.log("Box acceleration: ", box.acceleration.getVec())
        console.log("Box velocity: ", box.velocity.getVec())
        console.log("Box volume: ", box.volume, "box density: ", box.density, "box mass: ", box.mass);
        console.log("Water volume: ", water.volume, "water density: ", water.density, "water mass: ", water.mass);
        console.log("Box position: ", box.position.getVec());
        console.log("Box height: ", box.offsetHeight, "Box width: ", box.offsetWidth);

        box.draw();
    }

    setInterval(update, 1000 / 10);


}