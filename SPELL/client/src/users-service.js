function users() {
  get = function () {
    return axios.get('http://localhost:3000/spells');
  };

  remove = function (index) {
    return axios.delete('http://localhost:3000/spells/'+index);
  };
  put = function (id, name,shortdescripyion, type, items, description, difficulty) {
    return axios.put('http://localhost:3000/spells/', { id:id, name:name,shortdescription:shortdescription, type:type, items:items, description:description, difficulty:difficulty});
  };
  return {
    get: get,
    remove: remove,
    put: put
  };
}
