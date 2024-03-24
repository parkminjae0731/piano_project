from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('dsz.html')

@app.route('/clicked_coordinates', methods=['POST'])
def clicked_coordinates():
    data = request.json
    x = data['x']
    y = data['y']
    print("Clicked coordinates - X:", x, "Y:", y)

    # 여기서 좌표를 처리하거나 필요한 작업을 수행합니다.

    return {'message': 'Received clicked coordinates successfully.'}

if __name__ == '__main__':
    app.run(debug=True)