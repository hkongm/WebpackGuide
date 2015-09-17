let multiLineStr = `这是ES6多行字符串
第二行
第三行
`
alert(multiLineStr);

class People {

  constructor() {
    this.name = 'people'
  }

  stand() {
    alert(this.name + ' is standing.')
  }

  sit() {
    alert(this.name + ' is sitting.')
  }
}

let caichao = new People()
caichao.stand()
caichao.name = 'caichao'
caichao.stand()
