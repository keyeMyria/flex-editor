import { observable, action, computed } from 'mobx';

export default class App { 
  constructor () {
    this.resetContainerStyle();
    this.addItem();
    this.addItem();
    this.addItem();
  }

  @observable num = 3
  @observable containerStyle = {}

  @observable itemsStyle = {
    width: 150,
    height: 150,
    margin: 5,
  }
  @observable itmes = []

  @action resetContainerStyle () {
    this.containerStyle = {
      flexDirection: 'row',
      flexWrap: 'nowrap',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      marginTop: '30px',
      display: 'flex',
      background: '#ddd',
      minHeight: 350
    }
  }

  @action getContainerStyleToCopyJS () {
    let style = Object.assign({}, this.containerStyle)

    delete style.minHeight;
    delete style.background;
    delete style.marginTop;

    return JSON.stringify(style, null, 2)
  }

  @action getContainerStyleToCopyCSS () {
    var hyphenateRE = /([^-])([A-Z])/g;

    return this
      .getContainerStyleToCopyJS()
      .replace(/"/g, "")
      .replace(hyphenateRE, '$1-$2')
      .replace(hyphenateRE, '$1-$2')
      .toLowerCase()
  }

  @action addItem (item) {
    this.itmes.push(item || {

    })
  }

  @action removeItem(item) {
    this.itmes.pop()
  }

  @action setNum(num) {
    this.num = num
  }

  @action setContainerStyle(containerStyle) {
    this.containerStyle = containerStyle
  }

  @action updateContainerStyle(style){
    Object.assign(this.containerStyle, style)
  }
  
  @action updateItemsStyle(style){
    Object.assign(this.itemsStyle, style)
  }
}