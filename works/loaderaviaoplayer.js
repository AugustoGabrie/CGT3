loader.load( './assets/aviao.gltf', function ( gltf ) {
var loader = new GLTFLoader();
  var obj = gltf.scene;
  obj.name = 'aviao';
  obj.visible = true;
  obj.castShadow = true;
  obj.traverse( function ( child ) {
    if ( child ) {
        child.castShadow = true;
    }
  });
  obj.position.set(0,5,0);
  obj.scale.set(0.05,0.05,0.05);
  scene.add ( obj );
  }, null, null);