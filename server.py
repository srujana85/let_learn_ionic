from flask import Flask,request,jsonify,request
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
@app.route("/api", methods=['GET'])
def get():
    return jsonify({'message' : 'Hello World'}) , 200
@app.route('/api',methods=['POST'])
def post():
	if request.method == 'POST':
		data = request.json
		result= { 'data' : data ,'method':'POST','message':'success'}
		return jsonify(result),200
@app.route('/api',methods=['PUT'])
def put():
	if request.method == 'PUT':
		data = request.json
		result= { 'data' : data ,'method':'PUT','message':'success'}
		return jsonify(result),200
if __name__ == '__main__':
	app.run(debug=True)