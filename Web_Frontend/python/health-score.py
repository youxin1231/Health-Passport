import sys
print (sys.path)
sys.path.append('c:/users/105/appdata/roaming/python/python38/site-packages')
sys.path.append('c:/python38/lib/site-packages')
import pandas as pd
# print('lskdjfslf')


import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.svm import SVC
from sklearn.ensemble import RandomForestClassifier
import pickle
import pymysql



score_df = pd.read_csv(r"C:\wamp64\www\Health-Passport\Web_Frontend\raw_data.csv")
# score_df = pd.read_csv(r"C:\Users\105\Downloads\Patient Severity Score for Electronic Health Records.csv")
score_df.head()


if(score_df.shape[1]==7):
    X = score_df.drop('SCORE',axis=1)
else:
    X = score_df

scalar = StandardScaler()
X_test = X
X_test = scalar.fit_transform(X_test)
name = 'Support Vector Machine.sav'
model = pickle.load(open('./model/Support Vector Machine.sav', 'rb'))
y_pred = model.predict(X_test)
pd.DataFrame(y_pred).to_csv("C://wamp64//www//Health-Passport//Web_Frontend//result.csv")


con = pymysql.connect(host='localhost', port=3306, user='root', passwd='', db='health_passport', charset='utf8')
sql = "select * from data;"
col_name = ['id']
df = pd.read_sql(sql, con)
df = df[col_name]
print(df.shape[0])
with con.cursor() as cursor:
    for i in range(df.shape[0]):
        name =  df['id'][i]
        command = f"UPDATE data SET health_score = {y_pred[i]} WHERE id = {name};"
        cursor.execute(command)
        con.commit()
con.close()