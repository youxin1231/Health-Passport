import sys
print (sys.path)
sys.path.append('c:/users/105/appdata/roaming/python/python38/site-packages')

import pandas as pd

import pymysql

# print("asdfsf")

con = pymysql.connect(host='localhost', port=3306, user='root', passwd='', db='health_passport', charset='utf8')
sql = "select * from data;"
col_name = ['TEMPF','PULSE','RESPR','BPSYS','BPDIAS','POPCT']

df = pd.read_sql(sql, con)
df = df[col_name]
df.to_csv('C://wamp64//www//Health-Passport//Web_Frontend//raw_data.csv',index=False)

con.close()


