import pickle
import numpy as np
from flask import Flask
from flask import request

from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report

app = Flask(__name__)
with open('churn_model.pkl', 'rb') as f:
    model = pickle.load(f)


@app.route('/')
def homepage():
    return "Enter /predict_churn?[is_male, num_inters, late_on_payment, age, years_in_contract] for churn prediction"


@app.route('/predict_churn')
def predict_churn():
    # model = get_model()
    is_male = request.args.get("is_male")
    num_inters = request.args.get("num_inters")
    late_on_payment = request.args.get("late_on_payment")
    age = request.args.get("age")
    years_in_contract = request.args.get("years_in_contract")
    to_predict = np.array([[is_male, num_inters, late_on_payment, age, years_in_contract]])
    result = model.predict(to_predict)[0]
    return f'{result}'


def main():
    # model = get_model()
    app.run(host='0.0.0.0', port=8080)


if __name__ == '__main__':
    main()
