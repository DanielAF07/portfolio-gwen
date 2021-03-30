navToggle.onclick = () => {
  sidenav.classList.toggle('show')
}

const $sidenavAnchors = [ ...sidenav.querySelectorAll('a') ]

window.onscroll = () => {
  let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
  const $sections = [ ...document.querySelectorAll('.section') ]
  const sectionsPos = $sections.map($section => $section.offsetTop)
  sectionsPos.forEach( (sectionPos, i) => {
    if(sectionPos <= scrollPosition+100){
      const anchors = [ ...document.querySelectorAll('.nav ul li a') ]
      anchors.forEach(a => { a.classList.remove('active')})
      $sidenavAnchors.forEach(anchor => anchor.classList.remove('active'))
      const actives = document.querySelectorAll(`a[href="#${$sections[i].id}"]`)
      actives.forEach( active => active.classList.add('active'))
    }
  })
}


$sidenavAnchors.forEach( anchor => {
  anchor.onclick = () => {
    document.querySelector('#sidenav').classList.remove('show')
  }
})