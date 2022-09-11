// text color

        let btn = document.getElementById("btn");
        function changeColor() {
            let color = document.getElementById("colorText");
            document.body.style.color = color.value;

        }
        btn.addEventListener("click", changeColor);