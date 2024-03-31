from flask import Flask, render_template, request

app = Flask(__name__)

coordinates = []
@app.route('/')
def index():
    return render_template('dsz.html')

@app.route('/clicked_coordinates', methods=['POST'])
def clicked_coordinates():
    data = request.json
    print(data) # {'x': 242, 'y': -32}
    x = data['x']
    y = data['y']
    coordinates.append((x, y))
    return {'message': 'Received clicked coordinates successfully.'}

@app.route('/print_coordinates', methods=['GET'])
def print_coordinates():
    
    print(request, 'egrs')
    data1 = request.json
    print(data1)
    
    sorted_coordinates = sorted(coordinates, key=lambda coord: coord[0], reverse=True)
    for _, y_coord in coordinates:
        print(f"Y 좌표: {y_coord}")
    return 'No Content'

if __name__ == '__main__':
    app.run(debug=True)