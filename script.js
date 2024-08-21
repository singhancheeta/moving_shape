const container = document.querySelector('.container');
        const shape = document.querySelector('.shape');
        let shapeW = shape.clientWidth;
        let conwidth = container.clientWidth;
        let conheight = container.clientHeight;
        let x = conwidth - shapeW;
        let y = Math.random() * (conheight - shapeW);
        let speed = 3;

        function move() {
            x -= speed;
            if (x < 0) {
                x = conwidth - shapeW;
                y = Math.random() * (conheight - shapeW);
            }
            shape.style.transform = `translate(${x}px, ${y}px)`;
            requestAnimationFrame(move);
        }

        function box() {
            shapeW = shape.clientWidth;
            conwidth = container.clientWidth;
            conheight = container.clientHeight;
            x = conwidth - shapeW;
        }

        window.addEventListener('resize', box);

        move();