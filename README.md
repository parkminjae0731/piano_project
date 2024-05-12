# piano_project


4분음표,음표간거리,쉼표

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Piano Sheet</title>
    <style>
        
        .staff {
            /* 악보 전체 요소 */
            margin: 20px auto; /* 상하단 20px여백 */
            position: relative;
            width: 900px; /* 오선지의 너비 900px */
            height: 100px; /* 오선 한 줄의 높이 100px */
        }

        .line {
            /* 오선 요소 */
            position: absolute;
            width: 100%; /* 상위 요소인 satff의 가로길의 100%인 선의 길이 */
            border-bottom: 1px solid rgb(0, 0, 0);
        }

        .line:nth-child(1) {
            top: 20%;
        } /* 첫 번째 오선 */
        .line:nth-child(2) {
            top: 30%;
        } /* 두 번째 오선 */
        .line:nth-child(3) {
            top: 40%;
        } /* 세 번째 오선 */
        .line:nth-child(4) {
            top: 50%;
        } /* 네 번째 오선 */
        .line:nth-child(5) {
            top: 60%;
        } /* 다섯 번째 오선 */

        .note {
            /* 음자리표 요소 */
            position: absolute;
            font-size: 56px; /* 음자리표 크기 */
            top: 10%; /* 음자리표의 기본 위치 */
            left: 10px; /* 음자리표의 기본 위치 */
        }
    </style>
    <script>
        // 높은 음자리, 낮은 음자리 생성
        document.addEventListener("DOMContentLoaded", function () {
            var staff = document.querySelector(".staff");

            // 높은 음자리표 추가 버튼
            var highNoteButton = document.createElement("button");
            highNoteButton.textContent = "높은 음자리표 추가";
            highNoteButton.addEventListener("click", function () {
                var existingLowNote = document.querySelector(
                    '.note[data-type="low"]'
                );
                if (existingLowNote) {
                    existingLowNote.remove();
                }

                var existingHighNote = document.querySelector(
                    '.note[data-type="high"]'
                );
                if (!existingHighNote) {
                    var note = document.createElement("div");
                    note.className = "note";
                    note.textContent = "𝄞";
                    note.setAttribute("data-type", "high");
                    note.style.top = "-3%"; // 높은 음자리표의 위치
                    staff.appendChild(note);
                } else {
                    existingHighNote.remove();
                }
            });
            document.body.appendChild(highNoteButton);

            // 낮은 음자리표 추가 버튼
            var lowNoteButton = document.createElement("button");
            lowNoteButton.textContent = "낮은 음자리표 추가";
            lowNoteButton.addEventListener("click", function () {
                var existingHighNote = document.querySelector(
                    '.note[data-type="high"]'
                );
                if (existingHighNote) {
                    existingHighNote.remove();
                }

                var existingLowNote = document.querySelector(
                    '.note[data-type="low"]'
                );
                if (!existingLowNote) {
                    var note = document.createElement("div");
                    note.className = "note";
                    note.textContent = "𝄢";
                    note.setAttribute("data-type", "low");
                    note.style.top = "0%"; // 낮은 음자리표의 위치
                    staff.appendChild(note);
                } else {
                    existingLowNote.remove();
                }
            });
            document.body.appendChild(lowNoteButton);
        });

        // 음표 생성
        coordinates = [];
        document.addEventListener("DOMContentLoaded", function () {
            var staff = document.querySelector(".staff");

            staff.addEventListener("click", function (event) {
                var x = event.clientX - 10 - staff.getBoundingClientRect().left;
                var y = event.clientY - 60 - staff.getBoundingClientRect().top;

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
                } else if (y >= 11.5 && y <= 16.4) {
                    y = 14; // 낮은시
                    console.log('낮은시')
                } else if (y >= 6.5 && y <= 11.4) {
                    y = 9; // 도
                    console.log('도')
                } else if (y >= 1.5 && y <= 6.4) {
                    y = 4; // 레
                    console.log('레')
                } else if (y >= -3.5 && y <= 1.4) {
                    y = -1; // 미
                    console.log('미')
                } else if (y >= -8.5 && y <= -3.4) {
                    y = -6; // 파
                    console.log('파')
                } else if (y >= -13.5 && y <= -8.4) {
                    y = -11; // 솔
                    console.log('솔')
                } else if (y >= -18.5 && y <= -13.4) {
                    y = -16; // 라
                    console.log('라')
                } else if (y >= -23.5 && y <= -18.4) {
                    y = -21; // 시
                    console.log('시')
                } else if (y >= -28.5 && y <= -23.4) {
                    y = -26; // 도
                    console.log('높은 도')
                } else if (y >= -33.5 && y <= -28.4) {
                    y = -31; // 레
                    console.log('레')
                } else if (y >= -38.5 && y <= -33.4) {
                    y = -36; // 미
                    console.log('미')
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
                    x -= 3;
                    note.innerHTML =
                        '<img src="/static/upper_removed.png"  style="width: 24px; height: auto;">';
                } else if (y == -56) {
                    // y가 -56이면 m.png 생성
                    y += 42
                    x -= 5;
                    note.innerHTML =
                        '<img src="/static/upper_removed1.png"  style="width: 26px; height: auto;">';
                } else if (y == -61) {
                    // y가 -61이면 m.png 생성
                    y += 42
                    x -= 3;
                    note.innerHTML =
                        '<img src="/static/upper_removed2.png"  style="width: 26px; height: auto;">';
                } else if (y <= -21) {
                    // y가 -21보다 작으면 m.png 생성
                    y += 41;
                    note.innerHTML =
                        '<img src="/static/m.png"  style="width: 15px; height: auto;">';
                } else if (y == 9) {
                    // y가 -61이면 m.png 생성
                    y += 12
                    x -= 5
                    note.innerHTML =
                        '<img src="/static/rm.png"  style="width: 30px; height: auto;">';
                } else if (y == 14) {
                    // y가 -61이면 m.png 생성
                    y += 5
                    x -= 5
                    note.innerHTML =
                        '<img src="/static/rm1.png"  style="width: 30px; height: auto;">';
                } else if (y == 19) {
                    // y가 -61이면 m.png 생성
                    y += 5
                    x -= 5
                    note.innerHTML =
                        '<img src="/static/rm2.png"  style="width: 30px; height: auto;">';
                } else {
                    // 그 외에는 음표 생성
                    y += 12
                    x -= 14
                    note.innerHTML =
                        '<img src="/static/8min.png"  style="width: 54px; height: auto;">';
                    //♩
                }
                
                note.style.position = "absolute";
                note.style.left = x + "px";
                note.style.top = y + "px";
                staff.appendChild(note);

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
    </script>
</head>
<body>
<div class="staff">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>

</div>
<button id="printButton">출력</button>
<script>
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

        function addHighNoteAutomatically() {
            var staff = document.querySelector(".staff");

            var existingfourNote = document.querySelector(
                '.note[data-type="four"]'
            );
            if (!existingfourNote) {
                var note = document.createElement("div");
                note.className = "note";
                note.innerHTML =
                        '<img src="/static/4.png"  style="width: 66px; height: auto;">';;
                note.setAttribute("data-type", "four");
                note.style.top = "4%"
                note.style.left = "25px";

                staff.appendChild(note);
            }
        }

        document.addEventListener("DOMContentLoaded", addHighNoteAutomatically);
</script>

</body>
</html>