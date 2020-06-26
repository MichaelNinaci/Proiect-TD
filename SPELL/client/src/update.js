function run() {
    new Vue({
      el: '#update',
      data: {
        id: '',
        message: '',
        spell: {}
      },
      created: function () {

        let uri = window.location.search.substring(1);
        let params = new URLSearchParams(uri);
        this.id = params.get("id");

        axios.get('http://localhost:3000/spells/'+this.id).then(
            (response) => {
                this.spell = response.data;
            }
        );
      },
      methods: {
        update: function(id){

            console.log(this.spell,id);

            return axios.post('http://localhost:3000/spells/'+id, this.spell).then(
                (response) => {
                    this.message = response.data; // saved
                }
            );


        }
      }
    });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    run();
  });
  