a = 0
function sleep(ms) {
    const wakeUpTime = Date.now() + ms;
    while (Date.now() < wakeUpTime) {}
}
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
scaleStr = ["낮은 라", "낮은 시", "중간 도", "중간 레", 
                "중간 미", "중간 파", "중간 솔", "중간 라", 
                "중간 시", "높은 도", "높은 레", "높은 미",
                "높은 파", "높은 솔", "높은 라", "높은 시", "더 높은 도"];
// 음표 생성
coordinates = [];
document.addEventListener("DOMContentLoaded", function () {
    var staff2 = document.querySelector(".staff2");

    staff2.addEventListener("click", function (event) {
        console.log("Clicked!")
        var y = event.clientY - 60 - staff2.getBoundingClientRect().top;
        console.log(y)
        var x = 80 + a;
        
        if (x > 864) {
            return;
        }

        if (y > 16.5) y = 16.5
        var idx = Math.round(Math.abs(y - 16.5) / 5);
        y = 19 - idx * 5;
        console.log(scaleStr[idx]);
        var audio = new Audio('/static/sounds/scales/' + scaleStr[idx] + '.mp3');
        audio.play();

        // 클릭한 좌표를 서버로 전송
        fetch("/clicked_coordinates", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ idx: idx}),
        });
                            // x y img width
        var drawData = {"-51":[77, 42, "upper_removed", 24], 
                        "-56":[75, 42, "upper_removed1", 26],
                        "-61":[77, 42, "upper_removed2", 26],
                        "-21":[80, 41, "m", 15],
                        "-26":[80, 41, "m", 15],
                        "-31":[80, 41, "m", 15],
                        "-36":[80, 41, "m", 15],
                        "-41":[80, 41, "m", 15],
                        "-46":[80, 41, "m", 15],
                        "9":[75, 12, "rm", 30],
                        "14":[75, 5, "rm1", 30],
                        "19":[75, 5, "rm2", 30],
                        //"":[66, 12, "8min", 54]
        };

        // 음표 생성
        var note = document.createElement("div");
        note.className = "note";
        
        yStr = y.toString()
        console.log(yStr)

        if (drawData[yStr] == undefined) {
            y += 12
            x = 66 + a
            a += 27
            note.innerHTML =
                '<img src="/static/imagi/8min.png"  style="width: 54px; height: auto;">';
        } else {
            y += drawData[yStr][1]
            x = drawData[yStr][0] + a
            a += 27
            note.innerHTML = '<img src="/static/imagi/' + drawData[yStr][2] + '.png"  style="width:' + drawData[yStr][3] + 'px; height: auto;">';
              
        }

/*
        if (y == -51) {
            // y가 -51이면 rm.png 생성
            y += 42
            x = 77 + a
            a += 27
            note.innerHTML =
                '<img src="/static/imagi/upper_removed.png"  style="width: 24px; height: auto;">';
         
        } else if (y == -56) {
            // y가 -56이면 m.png 생성
            y += 42
            x = 75 + a
            a += 27
            note.innerHTML =
                '<img src="/static/imagi/upper_removed1.png"  style="width: 26px; height: auto;">';

         
        } else if (y == -61) {
            // y가 -61이면 m.png 생성
            y += 42
            x = 77 + a
            a += 27
            note.innerHTML =
                '<img src="/static/imagi/upper_removed2.png"  style="width: 26px; height: auto;">';
        } else if (y <= -21) {
            // y가 -21보다 작으면 m.png 생성
            y += 41;
            x = 80 + a
            a += 27
            note.innerHTML =
                '<img src="/static/imagi/m.png"  style="width: 15px; height: auto;">';
        } else if (y == 9) {
            // y가 -61이면 m.png 생성
            y += 12
            x = 75 + a
            a += 27
            note.innerHTML =
                '<img src="/static/imagi/rm.png"  style="width: 30px; height: auto;">';
        } else if (y == 14) {
            // y가 -61이면 m.png 생성
            y += 5
            x = 75 + a
            a += 27
            note.innerHTML =
                '<img src="/static/imagi/rm1.png"  style="width: 30px; height: auto;">';
        } else if (y == 19) {
            // y가 -61이면 m.png 생성
            y += 5
            x = 75 + a
            a += 27
            note.innerHTML =
                '<img src="/static/imagi/rm2.png"  style="width: 30px; height: auto;">';

        } else {
            // 그 외에는 음표 생성
            y += 12
            x = 66 + a
            a += 27
            note.innerHTML =
                '<img src="/static/imagi/8min.png"  style="width: 54px; height: auto;">';

            //♩
        }
        */
        note.style.position = "absolute";
        note.style.left = x + "px";
        note.style.top = y + "px";
        staff2.appendChild(note);

        // 클릭한 좌표들을 저장하는 배열에 추가
        coordinates.push({ idx : idx});
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
        // coordinates.sort(function (a, b) {
        //     return a.x - b.x;
        // });
        console.log(coordinates)
        // 정렬된 좌표 출력
        coordinates.forEach(function (coord) {
            console.log("Y 좌표:", 19 - coord.idx * 5);
            
        });
        
        function playSound(idx) {
            y = 19 - idx * 5;
            console.log(scaleStr[idx]);
            var audio = new Audio('/static/sounds/scales/' + scaleStr[idx] + '.mp3');
            audio.play();
        }
        
        async function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        
        async function processCoordinates() {
            for (const coord of coordinates) {
                await sleep(1500);
                playSound(coord.idx);
            }
        }
        
        processCoordinates();

        
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