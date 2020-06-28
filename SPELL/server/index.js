var api = require('./src/api.js').app;
const fs = require('fs');
const spellsFilepath = './src/spells.json';
var spellsX = require('./src/spells.json');

api.get('/', function (request, response) {
  response.json('NodeJS REST API');
});

api.get('/spells', function (request, response) {
  response.json(getspells());
});

api.get('/spells/:id', function (request, response) {
  let spell = getspellById(request.params.id);
  if (spell) response.json(spell);
  response.json('not found');
});

api.put('/spells', function (request, response) {
  console.log(request.body)
  savespell(request.body);
  response.json('Spell was saved succesfully');
});

api.post('/spells/:id', function (request, response) {
  
  
  console.log(request.body,request.params.id);
  console.log(updatespellById(request.body,request.params.id))
  
  response.json('Spell was saved succesfully');
});

api.delete('/spells/:index', function (request, response) {
  // delete din fisier pe baza unui id
  console.log(request.params.index)
  spellsX.splice(request.params.index,1)
  const jsonString = JSON.stringify(spellsX,null,4)
  response.json(jsonString)
  
  fs.writeFileSync(spellsFilepath, jsonString, err => {
    if (err) {
        console.log('Error writing file', err)
    } else {
        console.log('Successfully wrote file ')
    }
                                                }
	             )
  
  

});

api.listen(3000, function () {
  console.log('Server running @ localhost:3000');
});

function getspells() {
  let spells = [];
  try {
    spells = JSON.parse(fs.readFileSync(spellsFilepath, 'utf8'));
  } catch (err) {
    console.error(err);
    return false;
  }
  return spells;
}

function savespell(spell) {
  let spells = getspells();// citire json din fisier
  let maxId = getMaxId(spells);  // get maximum id 
  spell.id = maxId+1;// generare id unic
  spells.push(spell);// adaugare in array
  try {
    fs.writeFileSync(spellsFilepath, JSON.stringify(spells,null,4));// salvare json array in fisier
  } catch (err) {
    console.error(err)
  }
}


function getMaxId(spells) {
  let max = 0;
  for (var i=0; i<spells.length;i++) {
    if(max < spells[i].id) {
      max = spells[i].id;
    }
  }
  return max;
}

function getspellById(id){
  let spells = getspells();// citire json din fisier
  let selectedspell = null;
  for(var i=0; i<spells.length; i++) {
    if(id == spells[i].id) selectedspell = spells[i];
  }
  return selectedspell;
}

function updatespellById(data,id){
  let spells = getspells();// citire json din fisier
  console.log(data,id)
  for(var i=0; i<spells.length; i++) {
    if(id == spells[i].id)
     spells[i]=data;
  }
  try {
    fs.writeFileSync(spellsFilepath, JSON.stringify(spells,null,4));// salvare json array in fisier
  } catch (err) {
    console.error(err)
  }
  
  
}
