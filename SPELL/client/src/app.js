function run() {
  let indexComponent = new Vue({
    el: '#app',
    data: {
      spells: [],
      usersService: null,
      message: ''
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
       // 
      },
      addspell:function(){
        window.open("additem.html","_self")
      }

    }
  });

 // indexComponent.use(VueMaterial);

}

document.addEventListener('DOMContentLoaded', () => {
  run();
});
