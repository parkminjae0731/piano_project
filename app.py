from flask import Flask, render_template, request, jsonify
import json

app = Flask(__name__, static_url_path='/static')


coordinates = []
staff = []
pitch_name = str

scaleStr = ["낮은 라", "낮은 시", "중간 도", "중간 레", 
                "중간 미", "중간 파", "중간 솔", "중간 라", 
                "중간 시", "높은 도", "높은 레", "높은 미",
                "높은 파", "높은 솔", "높은 라", "높은 시", "더 높은 도"]

@app.route('/', methods = ['POST','GET'])
def index():

    return render_template('dsz.html')

@app.route('/clicked_coordinates', methods=['POST'])
def clicked_coordinates():
    global pitch_name
    data = request.json
    print(data) # {'x': 242, 'y': -32}
    idx = data['idx']
    
    x = 80 + 27 * len(staff)
    y = 19 - idx * 5;
    pitch_name = scaleStr[idx];


    # if y == 19:
    #     pitch_name = "낮은 라"
    # elif y == 14:
    #     pitch_name = "낮은 시"
    # elif y == 9:
    #     pitch_name = "도"
    # elif y == 4:
    #     pitch_name = "레"
    # elif y == -1:
    #     pitch_name = "미"
    # elif y == -6:
    #     pitch_name = "파"    
    # elif y == -11:
    #     pitch_name = "솔"
    # elif y == -16:
    #     pitch_name = "라"
    # elif y == -21:
    #     pitch_name = "시"
    # elif y == -26:
    #     pitch_name = "높은 도"
    # elif y == -31:
    #     pitch_name = "높은 레"
    # elif y == -36:
    #     pitch_name = "높은 미"
    # elif y == -41:
    #     pitch_name = "높은 파"
    # elif y == -46:
    #     pitch_name = "높은 솔"     
    # elif y == -51:
    #     pitch_name = "높은 라"
    # elif y == -56:
    #     pitch_name = "높은 시"
    # elif y == -61:
    #     pitch_name = "더 높은 도"

    print(pitch_name)
    coordinates.append((x, y))
    staff.append(((x, y), pitch_name))
    return {'message': 'Received clicked coordinates successfully.'}
  
@app.route('/print_coordinates', methods=['GET'])
def print_coordinates():
    sorted_staff = staff #sorted(staff, key=lambda coord: coord[0][0])
    a_staff = [coord[1] for coord in sorted_staff]
    print("Y 좌표:", [item[0][1] for item in staff])
    print(a_staff)
    print(staff)
    mp3_files  = []
    for item in staff:
        coords, note = item
        x, y = coords
        print(x)
        print(y)
        print(note)
        if note == '미':
            mp3_files.append('sounds/scales/E3.mp3')
        
    return jsonify({"success": True, "message": str(a_staff)})


@app.route('/reset_coordinates', methods=['POST'])
def reset_coordinates():
    global coordinates
    global staff
    coordinates = []
    staff = []
    return {'message': 'Coordinates reset successfully.'}

if __name__ == '__main__':
    app.run(debug=True) 