import sys
import pandas as pd
import pymysql

con = pymysql.connect(host='localhost', port=3306, user='root', passwd='', db='health_passport', charset='utf8')
sql = "select * from data;"
col_name = ['TEMPF','PULSE','RESPR','BPSYS','BPDIAS','POPCT']

df = pd.read_sql(sql, con)
df = df[col_name]
df.to_csv('../../Web_Frontend/raw_data.csv',index=False)

con.close()
