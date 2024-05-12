// 높은 음자리, 낮은 음자리 생성
a = 0
document.addEventListener("DOMContentLoaded", function () {
    var staff2 = document.querySelector(".staff2");

    // 높은 음자리표 추가
    var note = document.createElement("div");
    note.className = "note";
    note.textContent = "𝄞";
    note.setAttribute("data-type", "high");
    note.style.top = "-3%"; // 높은 음자리표의 위치
    staff2.appendChild(note);

});

// 음표 생성
coordinates = [];
document.addEventListener("DOMContentLoaded", function () {
    var staff2 = document.querySelector(".staff2");

    staff2.addEventListener("click", function (event) {
        var y = event.clientY - 60 - staff2.getBoundingClientRect().top;
        console.log(y)
        var x = 80 + a;
        // x 좌표가 80보다 작으면 음표 생성하지 않음
        if (x < 80) {
            return;
        }
        else if (x > 864) {
            return;
        }
        // y 좌표를 조건에 따라 설정
        if (y >= 16.5 && y <= 100) {
            y = 19; // 낮은라
            console.log('낮은라')
            var audio = new Audio('/static/sounds/scales/낮은 라.mp3'); // 경로 수정
            audio.play();
        } else if (y >= 11.5 && y <= 16.4) {
            y = 14; // 낮은시
            console.log('낮은시')
            var audio = new Audio('/static/sounds/scales/낮은 시.mp3'); // 경로 수정
            audio.play();
        } else if (y >= 6.5 && y <= 11.4) {
            y = 9; // 도
            console.log('도')

            // 도 음표를 재생하는 오디오 요소 추가
            var audio = new Audio('/static/sounds/scales/중간 도.mp3'); // 경로 수정
            audio.play();
        } else if (y >= 1.5 && y <= 6.4) {
            y = 4; // 레
            console.log('레')
            var audio = new Audio('/static/sounds/scales/중간 레.mp3'); // 경로 수정
            audio.play();
        } else if (y >= -3.5 && y <= 1.4) {
            y = -1; // 미
            console.log('미')
            var audio = new Audio('/static/sounds/scales/중간 미.mp3'); // 경로 수정
            audio.play();
        } else if (y >= -8.5 && y <= -3.4) {
            y = -6; // 파
            console.log('파')
            var audio = new Audio('/static/sounds/scales/중간 파.mp3'); // 경로 수정
            audio.play();
        } else if (y >= -13.5 && y <= -8.4) {
            y = -11; // 솔
            console.log('솔')
            var audio = new Audio('/static/sounds/scales/중간 솔.mp3'); // 경로 수정
            audio.play();
        } else if (y >= -18.5 && y <= -13.4) {
            y = -16; // 라
            console.log('라')
            var audio = new Audio('/static/sounds/scales/중간 라.mp3'); // 경로 수정
            audio.play();
        } else if (y >= -23.5 && y <= -18.4) {
            y = -21; // 시
            console.log('시')
            var audio = new Audio('/static/sounds/scales/중간 시.mp3'); // 경로 수정
            audio.play();
        } else if (y >= -28.5 && y <= -23.4) {
            y = -26; // 도
            console.log('높은 도')
            var audio = new Audio('/static/sounds/scales/높은 도.mp3'); // 경로 수정
            audio.play();
        } else if (y >= -33.5 && y <= -28.4) {
            y = -31; // 레
            console.log('레')
            var audio = new Audio('/static/sounds/scales/높은 레.mp3'); // 경로 수정
            audio.play();
        } else if (y >= -38.5 && y <= -33.4) {
            y = -36; // 미
            console.log('미')
            var audio = new Audio('/static/sounds/scales/높은 미.mp3'); // 경로 수정
            audio.play();
        } else if (y >= -43.5 && y <= -38.4) {
            y = -41; // 파
            console.log('파')
        } else if (y >= -48.5 && y <= -43.4) {
            y = -46; // 솔
            console.log('솔')
        } else if (y >= -53.5 && y <= -48.4) {
            y = -51; // 라
            console.log('라')
        } else if (y >= -58.5 && y <= -53.4) {
            y = -56; // 시
            console.log('시')
        } else if (y >= -100 && y <= -58.4) {
            y = -61
            console.log('짱 높은도')
        }

        // 클릭한 좌표를 서버로 전송
        fetch("/clicked_coordinates", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ x: x, y: y }),
        });

        // 음표 생성
        var note = document.createElement("div");
        note.className = "note";
        if (y == -51) {
            // y가 -51이면 rm.png 생성
            y += 42
            x=80
            x += a
            a += 27
            x -= 3;
            note.innerHTML =
                '<img src="/static/imagi/upper_removed.png"  style="width: 24px; height: auto;">';
        } else if (y == -56) {
            // y가 -56이면 m.png 생성
            y += 42
            x=80
            x += a
            a += 27
            x -= 5;
            note.innerHTML =
                '<img src="/static/imagi/upper_removed1.png"  style="width: 26px; height: auto;">';
        } else if (y == -61) {
            // y가 -61이면 m.png 생성
            y += 42
            x=80
            x += a
            a += 27
            x -= 3;
            note.innerHTML =
                '<img src="/static/imagi/upper_removed2.png"  style="width: 26px; height: auto;">';
        } else if (y <= -21) {
            // y가 -21보다 작으면 m.png 생성
            y += 41;
            x=80
            x += a
            a += 27
            note.innerHTML =
                '<img src="/static/imagi/m.png"  style="width: 15px; height: auto;">';
        } else if (y == 9) {
            // y가 -61이면 m.png 생성
            y += 12
            x=80
            x += a
            a += 27
            x -= 5
            note.innerHTML =
                '<img src="/static/imagi/rm.png"  style="width: 30px; height: auto;">';
        } else if (y == 14) {
            // y가 -61이면 m.png 생성
            y += 5
            x=80
            x += a
            a += 27
            x -= 5
            note.innerHTML =
                '<img src="/static/imagi/rm1.png"  style="width: 30px; height: auto;">';
        } else if (y == 19) {
            // y가 -61이면 m.png 생성
            y += 5
            x=80
            x += a
            a += 27
            x -= 5
            note.innerHTML =
                '<img src="/static/imagi/rm2.png"  style="width: 30px; height: auto;">';
        } else {
            // 그 외에는 음표 생성
            y += 12
            x=80
            x += a
            a += 27
            x -= 14
            note.innerHTML =
                '<img src="/static/imagi/8min.png"  style="width: 54px; height: auto;">';
            //♩
        }
        
        note.style.position = "absolute";
        note.style.left = x + "px";
        note.style.top = y + "px";
        staff2.appendChild(note);

        // 클릭한 좌표들을 저장하는 배열에 추가
        coordinates.push({ x: x, y: y });
    });
    window.addEventListener('beforeunload', function () {
        fetch('/reset_coordinates', {
            method: 'POST'
        });
    });
    // 출력 버튼 클릭 시 서버로부터 좌표 받아와 출력
    var printButton = document.getElementById("printButton");
    printButton.addEventListener("click", function () {
        // 좌표를 x 좌표 기준 오름차순 정렬
        coordinates.sort(function (a, b) {
            return a.x - b.x;
        });
        console.log(coordinates)
        // 정렬된 좌표 출력
        coordinates.forEach(function (coord) {
            console.log("Y 좌표:", coord.y);
        });

        // 서버로부터 좌표를 성공적으로 받아왔다는 메시지를 alert로 출력
        alert("좌표를 성공적으로 받아왔습니다.");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document
    .getElementById("printButton")
    .addEventListener("click", function () {
        fetch("/print_coordinates")
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    alert(data.message);
                } else {
                    alert("데이터를 가져오는 데 문제가 발생했습니다.");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("서버에 연결할 수 없습니다.");
            });
    });
});

// 박자 지정(4/4 8/16.. 등등)
function addHighNoteAutomatically() {
   var staff2 = document.querySelector(".staff2");
   console.log(staff2)
   
   

       var note = document.createElement("div");
       note.className = "note";
       note.innerHTML =
               '<img src="/static/imagi/4.png"  style="width: 66px; height: auto;">';;
       note.setAttribute("data-type", "four");
       note.style.top = "4%"
       note.style.left = "25px";

       staff2.appendChild(note);
   
}
document.addEventListener("DOMContentLoaded", addHighNoteAutomatically);