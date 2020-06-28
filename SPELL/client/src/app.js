function run() {
  let indexComponent = new Vue({
    el: '#app',
    data: {
      spells: [],
      usersService: null
    },
    created: function () {
      this.usersService = users();
      this.usersService.get().then(response => {(this.spells = response.data),console.log(response.data)});
    },
    methods: {
      deletespell: function(id) {
        console.log('HTTP DELETE spre backend, spell: '+id);
        this.usersService.remove(id).then(response => {console.log(response.data)
          this.usersService.get().then(response => (this.spells = response.data));
        });
       
      },
      addspell:function(){
        window.open("additem.html","_self")
      },
      save: function(id, name,shortdescription, type, items, description, difficulty){
        this.spellsService.put(id, name,shortdescription, type, items, description, difficulty).then(response => {
          this.spellsService.get().then(response => (this.spells= response.data));
        });
      }
    }
  });

 // indexComponent.use(VueMaterial);

}

document.addEventListener('DOMContentLoaded', () => {
  run();
});
