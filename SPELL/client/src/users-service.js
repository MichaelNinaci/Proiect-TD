function users() {
  get = function () {
    return axios.get('http://localhost:3000/spells');
  };

  remove = function (index) {
    return axios.delete('http://localhost:3000/spells/'+index);
  };

  return {
    get: get,
    remove: remove
  };
}
