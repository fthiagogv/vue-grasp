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
      lengthBin: parseInt(lineSetup[0]),
      widthBin: parseInt(lineSetup[1]),
      amount: parseInt(lineSetup[2]),
      isGuillotined: Boolean(lineSetup[3]),
      isRotated: Boolean(lineSetup[4]),
      haveDemand: Boolean(lineSetup[5]),
      haveRestrictOcorrence: Boolean(lineSetup[6]),
      haveItemValue: Boolean(lineSetup[7])
    }

    var objects = []
    let id = 0
    for (let object of _objects) {
      if (object[0] === undefined || object[1] === undefined) {
        continue
      }

      objects.push({
        id: id,
        lengthBin: parseInt(object[0]),
        widthBin: parseInt(object[1]),
        demand: Boolean(object[2]),
        maxOcorrence: Boolean(object[3]),
        value: Boolean(object[4])
      })

      id++
    }

    return Object.assign({}, {
      setup: setup,
      items: objects
    })
  }
}
