let { observable, computed } = require('mobx');
class Store {
  @observable name = 'zfpx';
  @observable age = 9;
  @observable area = '010';
  @observable number = "18910092296"

  @observable province = "广东";
  @observable city = "东莞";
  @computed get home() {
    return this.province + this.city;
  }
}

let store = new Store();
let cell = computed(function () {
  return store.area + '-' + store.number;
});

cell.observe(change => console.log(change));
console.log(cell.get());
store.area = '020';
store.number = '15718856132';
console.log(cell.get());
console.log(store.home);
store.province = '山东';
store.city = '济南';
console.log(store.home);
