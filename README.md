# weather-webapi
Using node and express to create web apis.

```
git clone https://github.com/YiTingLee/weather-webapi.git
cd ./weather-webapi
npm install
node app.js
```

## Input
http://localhost:3000/api/weather?apiKey=key1&apiKey2=key2&address=New%20York

## Output (JSON)
```
{
  "location": "New York",
  "temperature": 38.24,
  "apparentTemperature": 34
}
```
