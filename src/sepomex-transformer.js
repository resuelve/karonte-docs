const fs = require('fs')
const file = fs.readFileSync('./CPdescarga.txt', 'utf8')
const [, header, ...lines] = file.split('\n')
const items = {}
lines
  .filter(line => line !== '')
  .forEach(line => {
    const [
      cp,
      settlementName,
      ,
      municipalityName,
      stateName,
      cityName,
      ,
      stateCode,
      ,
      ,
      ,
      municipalityCode,
      settementCode,
      ,
      cityCode
    ] = line.replace('\r', '').split('|')
    if (!items[cp]) items[cp] = {}
    items[cp].city = { value: cityCode, label: cityName }
    items[cp].minicipality = { value: municipalityCode, label: municipalityName }
    if (!items[cp].settlements) items[cp].settlements = []
    items[cp].settlements.push({ value: settementCode, label: settlementName })
    items[cp].state = { value: stateCode, label: stateName }
  })

fs.writeFileSync('../postalCode.js', JSON.stringify(items, false, 2))
console.log('done')
