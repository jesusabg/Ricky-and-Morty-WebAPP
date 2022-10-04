const getPaginaSiguiente = (event) =>{
  if (identificadorPagina == 1) {
    if (contadorPaginas < 42) {
      contadorPaginas += 1;
      getPersonajes();
    } else {
      alert("Número máximo de páginas");
    }
  } else if (identificadorPagina == 2) {
    if (contadorPaginaslive < 22) {
      contadorPaginaslive += 1;
      getPersonajeLive(event);
    } else {
      alert("Número máximo de páginas");
    }
  } else if (identificadorPagina == 3) {
    if (contadorPaginasDead < 15) {
      contadorPaginasDead += 1;
      getPersonajeDead(event);
    } else {
      alert("Número máximo de páginas");
    }
  } else if (identificadorPagina == 4) {
    if (contadorPaginasMale < 31) {
      contadorPaginasMale += 1;
      getPersonajeGeneroM(event);
    } else {
      alert("Número máximo de páginas");
    }
  } else if (identificadorPagina == 5) {
    if (contadorPaginasFemale < 8) {
      contadorPaginasFemale += 1;
      getPersonajeGeneroF(event);
    } else {
      alert("Número máximo de páginas");
    }
  }
};


const getPaginaAnterior = (event) =>{
  if (identificadorPagina == 1) {
    if (contadorPaginas > 1) {
      contadorPaginas -= 1;
      getPersonajes();
    } else {
      alert("Ya te emcuentras en la pagina incial");
    }
  } else if (identificadorPagina == 2) {
    if (contadorPaginaslive > 1) {
      contadorPaginaslive -= 1;
      getPersonajeLive(event);
    } else {
      alert("Ya te emcuentras en la pagina incial");
    }
  } else if (identificadorPagina == 3) {
    if (contadorPaginasDead > 1) {
      contadorPaginasDead -= 1;
      getPersonajeDead(event);
    } else {
      alert("Ya te emcuentras en la pagina incial");
    }
  } else if (identificadorPagina == 4) {
    if (contadorPaginasMale > 1) {
      contadorPaginasMale -= 1;
      getPersonajeGeneroM(event);
    } else {
      alert("Ya te emcuentras en la pagina incial");
    }
  } else if (identificadorPagina == 5) {
    if (contadorPaginasFemale > 1) {
      contadorPaginasFemale -= 1;
      getPersonajeGeneroF(event);
    } else {
      alert("Ya te emcuentras en la pagina incial");
    }
  }
};

const getInicio = (event) => {
    event.preventDefault();
    switch (identificadorPagina) {
      case (identificadorPagina = 1):
        contadorPaginas = 1;
        getPersonajes(event)
        break;
      case (identificadorPagina = 2):
        contadorPaginaslive=1;
        getPersonajeLive(event)
        break;
      case (identificadorPagina = 3):
        contadorPaginasDead=1;
        getPersonajeDead(event);
        break;
      case (identificadorPagina = 4):
        contadorPaginasMale = 1;
        getPersonajeGeneroM(event);
        break;
      case (identificadorPagina = 5):
        contadorPaginasFemale = 1;
        getPersonajeGeneroF(event);
        break;
      default:
        console.log('Error');
        break;
    }
  };
  
  const getIFin = (event) => {
    event.preventDefault();
    switch (identificadorPagina) {
      case (identificadorPagina = 1):
        contadorPaginas = 42;
        getPersonajes(event)
        break;
      case (identificadorPagina = 2):
        contadorPaginaslive = 22;
        getPersonajeLive(event)
        break;
      case (identificadorPagina = 3):
        contadorPaginasDead = 15;
        getPersonajeDead(event);
        break;
      case (identificadorPagina = 4):
        contadorPaginasMale = 31;
        getPersonajeGeneroM(event);
        break;
      case (identificadorPagina = 5):
        contadorPaginasFemale = 8;
        getPersonajeGeneroF(event);
        break;
      default:
        console.log('Error');
        break;
    }
  };
  