function run() {
    new Vue({
      el: '#additem',
      data: {
        id: 'default',
        name:'',
        type: '',
        shortdescription:'',
        items:'',
        description:'',
        difficulty:'',
        spell: {},
      },
      created: function () {

        let uri = window.location.search.substring(1);
        let params = new URLSearchParams(uri);
        this.id = params.get("id");


      },
      methods: {
        
          
          
      }
    });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    run();
  });
  