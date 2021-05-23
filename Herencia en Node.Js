function Persona(nombreG, apellido, edad, genero, intereses) {
    this.nombre = {
      nombreG,
      apellido
    };
    this.edad = edad;
    this.genero = genero;
    this.intereses = intereses;
  };
  Persona.prototype.saludo = function() {
    alert('¡Hola! soy ' + this.nombre.nombreG + '.');
  };
  function Profesor(nombreG, apellido, edad, genero, intereses, materia) {
    Person.call(this, nombreG, apellido, edad, genero, intereses);
  
    this.materia = materia;
  }
  function Profesor(nombreG, apellido, edad, genero, intereses, materia) {
    this.nombre = {
      nombrePila,
      apellido
    };
    this.edad = edad;
    this.genero = genero;
    this.intereses = intereses;
    this.materia = materia;
  }
  function Brick() {
    this.width = 5;
    this.height = 10;
  }
  function BlueGlassBrick() {
    Brick.call(this);
  
    this.opacity = 0.5;
    this.color = 'blue';
  }
  Profesor.prototype = Object.create(Persona.prototype);

  Profesor.prototype.constructor = Profesor;

  