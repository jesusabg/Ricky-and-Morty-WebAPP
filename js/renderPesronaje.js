const renderPersonaje = (personajes) => {
    document.querySelector("#contenedorPrincipal").innerHTML = "";
    personajes.forEach((personaje) => {
      let div = document.createElement("div");
      let title = document.createElement("h4");
      let status = document.createElement("p");
      let species = document.createElement("p");
      let gender = document.createElement("p");
      let origin = document.createElement("p");
      let divbodycard = document.createElement("div");
      let containerImg = document.createElement("div");
      title.innerHTML = `${personaje.name}`;
      status.innerHTML = `Status: ${personaje.status}`;
      species.innerHTML =`Specie: ${personaje.species}`;
      gender.innerHTML = `Gender: ${personaje.gender}`;
      origin.innerHTML = `Origin: ${personaje.origin.name}`;
      div.classList.add("col-sm-7","col-md-3" , "col-lg-2", "mb-5", "card", "cardcontainer");
      divbodycard.classList.add("card-body");
      let img = document.createElement("img");
      img.classList.add("card-img-top");
      img.classList.add("img-fluid");
      img.setAttribute("src", personaje.image);
      img.setAttribute("id", "img-personaje");
      img.setAttribute("loading", "lazy");
      status.setAttribute('class','status-personaje');
      origin.setAttribute('class','origin-personaje');
      gender.setAttribute('class','status-personaje');
      if (personaje.status == "Alive") {
        status.style.background = "rgb(0 128 0 / 56%)";
      }else if(personaje.status == "Dead"){
        status.style.background = "rgb(172 21 21 / 67%)";
      }else{
        status.style.background = "rgb(32 80 115 / 38%)";
      }

      if(personaje.gender == "Male"){
        gender.style.background = "#4c5dacde";
      }else if(personaje.gender == "Female"){
        gender.style.background = "rgb(204 89 206 / 69%)";
      }else{
        gender.style.background = "rgb(163 158 163 / 58%)";
      }
      containerImg.setAttribute("id", "id-containerimg");
      containerImg.append(img);
      div.append(containerImg);
      div.append(divbodycard);
      divbodycard.append(title);
      divbodycard.append(status);
      divbodycard.append(species);
      divbodycard.append(gender);
      divbodycard.append(origin);
      document.querySelector("#contenedorPrincipal").append(div);
    });
  };


  