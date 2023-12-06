/**
 * Asincronía en JS
 * 
 * Una promesa es una objeto especial de JS que representa un valor que puede llegar a estar disponible ahora, en el futuro inmediato o en el futuro próximo. También es importante remarcar que la promesa puede que no esté disponible nunca, o que falle.
 * 
 * 
 * API (Aplication Programin Interface)
 * 
 * ¿Cómo hago/uso de una API
 * 
 * 
 */

//fetch

document.addEventListener('DOMContentLoaded', function(){
  const conteinerProjects = document.querySelector('#container_projects')
  const URL = 'https://fundametos-api-porfolios-dev-exsn.2.ie-1.fl0.io/api/v1/projects'

  const left = document.querySelector('.left')
  const rigth = document.querySelector('.rigth')
  const articleUl = document.querySelector('.article__ul')

  const data = fetch(URL)

  data
    .then((res) => res.json())
    .then((data) => {
      console.log(data)

      data.forEach(element => {
        conteinerProjects.innerHTML += `
        <li class='article__li'>
          <img src='${element.image}' alt='${element.title}' class='article__img'>
          <h3 data-translate-en="${element.title}" data-translate-es="${element.titulo}" class='article__h3'>${element.titulo}</h3>
          <p data-translate-en="${element.description}" data-translate-es="${element.descripcion}">${element.descripcion}</p>
          <h4 data-translate-en="${element.tecnologias}" data-translate-es="${element.tecnologias}" class='article__h4'>${element.tecnologias}</h4>
        </li>
        `
      });

      let index = 0

      left.addEventListener('click', function () {
        // window.alert('left')
        index = (index > 0) ? --index : data.length - 1
        articleUl.style.transform = `translateX(-${index * 100}%)`
      })
    
      rigth.addEventListener('click', function () {
        // window.alert('rigth')
        index = (index < data.length - 1) ? ++index : 0
        articleUl.style.transform = `translateX(-${index * 100}%)`
      })

    })
    .catch((err) => console.log(err))
    .finally(()=> console.log('Termine de hacer la petición'))

})