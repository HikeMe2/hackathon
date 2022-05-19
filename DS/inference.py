import numpy as np
import pandas as pd
from sklearn.neighbors import NearestNeighbors
from flask import Flask, request, jsonify

app = Flask(__name__)
# load our data
data = pd.read_csv('hike_data.csv')
data = data.set_index('Unnamed: 0')
data.index.name = 'index'

# load our data means and stds
not_norm_data = pd.read_csv('not_normalized_mean_std.csv')
print(not_norm_data)
not_norm_data = not_norm_data.set_index('Unnamed: 0').drop(columns=['Unnamed: 0.1'], axis=1)
not_norm_data.index.name = 'index'
print(not_norm_data)
mean_data = not_norm_data.loc['mean', :]
std_data = not_norm_data.loc['std', :]

nn = None

features = ['length_3d', 'max_elevation', 'uphill', 'moving_time', 'difficulty', 'min_elevation', 'downhill']
# fake_json = {"length_3d": 10, "max_elevation": 1000, "uphill": 300, "moving_time": 2, "difficulty": 3,
# "min_elevation": 0, "downhill": 200, "country": "Austria", "Hiking Environment": "Mountain"}


@app.route('/predict', methods=['POST'])
def json_pred():
    global nn
    # preprocessing (feature scaling)
    if request.is_json:
        to_predict = dict()
        to_predict_list = []
        observation = request.get_json()
        for key in observation:
            if key not in ['country', 'Hiking Environment']:
                m = mean_data[key]
                s = std_data[key]
                normalized = (observation[key] - m) / s
                to_predict[key] = normalized
                to_predict_list.append(normalized)
            else:
                to_predict[key] = observation[key]

        to_predict_arr = np.array([to_predict_list])

        # recreating the column country
        client_country = "country_" + observation['country']

        # recreating the colum environment
        client_hiking_environment = "Hiking Environment_" + observation['Hiking Environment']

        data_filter_county = data[data[client_country] == 1]
        data_filter_env = data_filter_county[data_filter_county[client_hiking_environment] == 1]

        if data_filter_env.shape[0] == 0:
            data_to_pred = data[data[client_country] == 1]
        else:
            data_to_pred = data_filter_env[data_filter_env[client_hiking_environment] == 1]

        if nn is None:
            nn = NearestNeighbors(n_neighbors=10, metric="minkowski")
            nn.fit(data_to_pred[features])

        # calculate the top 10 suggestions.
        distances, indices = nn.kneighbors(to_predict_arr)
        pred_ind = []
        df_to_pred = data_to_pred.reset_index()
        for i in range(len(indices[0])):
            pred_ind.append(df_to_pred.iloc[indices[0][i]]['index'])
        pred_ind = list(map(int, pred_ind))
        return jsonify(pred_ind)

    else:
        return jsonify({"Error": 400, "message": "Request was not JSON"})


def main():
    # model = get_model()
    app.run(host='0.0.0.0', port=8888)


if __name__ == '__main__':
    main()
