//holi aquí va js


//animaciónquímica-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//animación extraída de: https://codepen.io/Gwenole/pen/myvBWm y modificada 

// velocidad animación
var angularSpeed = 0.2; 
var lastTime = 0;

// función
function animate(){
  // update
  var time = (new Date()).getTime();
  var timeDiff = time - lastTime;
  var angleChange = angularSpeed * timeDiff * 2 * Math.PI / 750;
  cube.rotation.y += angleChange;
  pyr.rotation.y += angleChange;
  pyra.rotation.y += angleChange / 5;
  pyra.rotation.x += angleChange / 10;
  pyram.rotation.x += angleChange / 10;
  pyram.rotation.y += angleChange / 15;
  octa.rotation.y += angleChange;
  lastTime = time;

  // render
  renderer.render(scene, camera);

  // nouvelle frame
  requestAnimationFrame(function(){
      animate();
  });
}

// renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// camera
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);
camera.position.z = 500;

// scene
var scene = new THREE.Scene();          

// cube
var cube = new THREE.Mesh(new THREE.CubeGeometry(window.innerWidth / 15, window.innerWidth / 17, window.innerWidth / 17), new THREE.MeshBasicMaterial({
  wireframe: true
}));
cube.rotation.x = Math.PI * 0.1;
cube.translateX( -window.innerWidth / 7);
scene.add(cube);

// pyramide
var pyr = new THREE.Mesh(new THREE.TetrahedronGeometry(window.innerWidth / 15, 0), new THREE.MeshBasicMaterial({
  wireframe: true
}));
pyr.rotation.x = Math.PI * 0.1;
scene.add(pyr);


      //grande pyramide
var pyra = new THREE.Mesh(new THREE.TetrahedronGeometry(window.innerWidth / 1.5, 2), new THREE.MeshBasicMaterial({
  wireframe: true,
  color: 'gray'
}));
pyra.rotation.x = Math.PI * 0.7;
pyra.rotation.y = Math.PI * 0.3
scene.add(pyra);

 //grande pyramide 2
var pyram = new THREE.Mesh(new THREE.TetrahedronGeometry(window.innerWidth, 1), new THREE.MeshBasicMaterial({
  wireframe: true,
  color: '#BBBBBB'
}));
pyram.rotation.x = Math.PI * 0.2;
pyram.rotation.y = Math.PI * 0.3
scene.add(pyram);

// octahedron
var octa = new THREE.Mesh(new THREE.OctahedronGeometry(window.innerWidth / 20, 0), new THREE.MeshBasicMaterial({
  wireframe: true
}));
octa.rotation.x = Math.PI * 0.1;
octa.translateX(window.innerWidth / 7);
scene.add(octa);

// lancer l'animation
animate();

     //fin animación química-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------









//popup glossari-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        // Get the modal
        var modal = document.getElementsByClassName("myModal");

        // Get the button that opens the modal
        var btn = document.getElementsByClassName("myBtn");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on the button, open the modal
        btn.onclick = function() {
          modal.style.display = "block";
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
          modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        }


