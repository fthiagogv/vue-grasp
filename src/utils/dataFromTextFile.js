export default {
  getArrayData (text) {
    text = this.getLinesFromText(text)
    return text
  },
  getLinesFromText (text) {
    let _text = text.replace(/\\n|\\t/g, '').split(/\n/g)
    var i = 0
    for (let line of _text) {
      _text[i] = []
      line = line.replace(/[^\s\w]/g, '').replace(/^\s|\s$/g, '').replace(/\s{2,10}/g, ' ')
      _text[i] = line.split(' ')
      i++
    }
    i = null
    return _text
  },
  getJsonData (arrayData) {
    var lineSetup = arrayData[0]
    var _objects = arrayData.slice(1)
    var setup = {
      lengthBin: lineSetup[0],
      widthBin: lineSetup[1],
      amount: lineSetup[2],
      isGuillotined: lineSetup[3],
      isRotated: lineSetup[4],
      haveDemand: lineSetup[5],
      haveRestrictOcorrence: lineSetup[6],
      haveItemValue: lineSetup[7]
    }

    var objects = []
    for (let object of _objects) {
      if (object[0] === undefined || object[1] === undefined) {
        continue
      }

      objects.push({
        lengthBin: object[0],
        widthBin: object[1],
        demand: object[2],
        maxOcorrence: object[3],
        value: object[4]
      })
    }

    return Object.assign({}, {
      setup: setup,
      items: objects
    })
  }
}
