
const startParseObject = require('../main')

const testPattern_1 = {
  type: 'object',
  properties: {
    obj: {
      type: 'object',
      properties: {
        string_1: {
          type: 'string'
        },
        string_2: {
          type: 'string'
        }
      }
    }
  }
}

const testPattern_2 = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      string_1: {
        type: 'string'
      },
      string_2: {
        type: 'string'
      }
    }
  }
}

const testPattern_3 = {
  type: 'string'
}

const ans_1 = {
  obj: {
    string_1: 'string',
    string_2: 'string'
  }
}

const ans_2 = [
  {
    string_1: 'string',
    string_2: 'string'
  }
]

const ans_3 = 'string'

describe('parsing schema', () => {
  it('it should parse object root schema', () => {
    expect(startParseObject(testPattern_1)).to.eql(ans_1)
  })

  it('it should parse object root schema', () => {
    expect(startParseObject(testPattern_2)).to.eql(ans_2)
  })

  it('it should parse type schema', () => {
    console.log(startParseObject(testPattern_3))
    expect(startParseObject(testPattern_3)).to.eql(ans_3)
  })
})
