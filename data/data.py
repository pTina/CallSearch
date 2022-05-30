import os
import json
# 현재 디렉토리 경로 가져옴
CUR_PATH = os.path.dirname(__file__)

filePath = f'{CUR_PATH}/data.json'

with open(filePath, 'r', encoding="utf8", errors='ignore') as file:
    data = file.read()
    # loads() => 문자열을 읽을 때 사용
    # load() => 파일을 읽을 때 사용
    myJSON = json.loads(data)

items = myJSON['items']

# 관내운행지역 insideOpratArea
# 관외운행지역 outsideOpratArea
# 이용요금 useCharge
chargeList = [ x['useCharge'] for x in items]
# useCharge = dict(zip(range(1, len(chargeList) + 1), chargeList))
# print(useCharge)
# with open(f'{CUR_PATH}/useCharge.txt','w',encoding='utf8') as file:
#     file.write(str(useChargeList))
