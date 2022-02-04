function loadEvent(eventObject){
    //console.log(eventObject);
    const rootElement = document.getElementById("root");
    //console.dir(document);
    console.dir(rootElement);

    const listOfSectionElements = document.querySelectorAll("section"); //a felsorolásba is belekerül a tszám miatt
    console.log(listOfSectionElements);

    //rootElement.classList.add("newClass");
    /*listOfSectionElements[0].classList.add("newClass");  //0.elem a welcome, ezzel tudjuk kiválasztani
    listOfSectionElements[1].classList.add("newClass");
    listOfSectionElements[2].classList.add("newClass");
    listOfSectionElements[3].classList.add("newClass");*/



    let anchors = "";



    for (const sectionElement of listOfSectionElements) {
        //sectionElement.classList.add("newClass");
      //anchors = anchors + `<a>${ sectionElement.id }</a>`  
      if (sectionElement.getAttribute("data-show") === "1"){

        anchors += `<a href="#${ sectionElement.id }"> ${ sectionElement.getAttribute("data-title") } </a>`;

      }

    }


    console.log(anchors);

    rootElement.insertAdjacentHTML("afterbegin", `<header>${ anchors }</header>`)

}

window.addEventListener("load", loadEvent);