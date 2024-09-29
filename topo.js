const body = document.body

const estilotopo =
  "display: flex;"+
  "justify-content: space-between;"+
  "align-items: center;"+
  "background-color: #eee;"


const topo = document.createElement('div')
topo.setAttribute('id','topo')
topo.setAttribute('style',estilotopo)

body.prepend(topo)


const estiloh1  =
  "font-size: 100px;"+
  "color: blue;"
const logo =
    "<div id='logo' class='logo'>"+
        "<h1 style="+estiloh1+">CFB Cursos</h1>"+
    "</div>"
topo.innerHTML += logo

const login =
  "<div id='login' class='login'>" +
    "<p id='matricula'>Matricula:<span</span></p>" +
    "<p id='nome'>Nome:<span</span></p>";
  "</div>";

  topo.innerHTML += login