        // 检查是否已经保存了今天的人品值
        if (localStorage.getItem("luck") !== null) {
            var savedDate = new Date(localStorage.getItem("date"));
            var currentDate = new Date();

            if (savedDate.getDate() !== currentDate.getDate()) {
                generateLuck();
            }

            displayResult();
        } else {
            generateLuck();
            displayResult();
        }

        function generateLuck() {
            var luck = Math.floor(Math.random() * 101);
            localStorage.setItem("luck", luck);

            var currentDate = new Date();
            localStorage.setItem("date", currentDate.toDateString());
        }

        function displayResult() {
            var luck = parseInt(localStorage.getItem("luck"));
            var resultDiv = document.getElementById("result");
            resultDiv.innerText = luck;

            // 根据人品值设置背景颜色和相应的话语
            var messageDiv = document.getElementById("message");
            var message = "";

            if (luck >= 80) {
                resultDiv.classList.add("green");
                message = "今天的运气真好！继续保持吧！";
            } else if (luck >= 60) {
                resultDiv.classList.add("yellow");
                message = "你的运气还不错，加油！";
            } else if (luck >= 40) {
                resultDiv.classList.add("orange");
                message = "今天可能会遇到些许波折，但坚持下去就会好起来！";
            } else if (luck >= 20) {
                resultDiv.classList.add("orange-yellow");
                message = "今天可能会遇到一些挑战，要有信心！";
            } else {
                resultDiv.classList.add("red");
                message = "今天运气不太好，不过别灰心，明天会更好！";
            }
            messageDiv.innerText = message;
            }