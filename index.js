var main = function () {
	//シーン
	var scene = new THREE.Scene();

	//カメラ
	var width = 600;
	var height = 400;
	var fov = 60;
	var aspect = width / height;
	var near = 1;
	var far = 1000;
	var camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
	//手前に50
	camera.position.set( 0, 0, 50 );

	//レンダラーをDOMに設置
	var renderer = new THREE.WebGLRenderer();
	renderer.setSize( width, height );
	document.body.appendChild( renderer.domElement );

	//光源を追加
	//DirectionalLight( 光の色, 光の強さ);
	var directionalLight = new THREE.DirectionalLight( 0xffffff );
	//光の角度
	directionalLight.position.set( 0, 0.7, 0.7 );
	scene.add( directionalLight );

	//物体を追加（ジオメトリと、マテリアルを用意した上でメッシュを作成する）
	var geometry = new THREE.CubeGeometry( 30, 30, 30 );
	var material = new THREE.MeshPhongMaterial( { color: 0xff0000 } );
	var mesh = new THREE.Mesh( geometry, material );
	scene.add( mesh );

	//表示する
	renderer.render( scene, camera );

	//回転アニメーション
	( function renderLoop () {
		requestAnimationFrame( renderLoop );
		mesh.rotation.set(
			mesh.rotation.x + 0.01,
			0,
			0
		);
		renderer.render( scene, camera );
	} )();
};

window.addEventListener( 'DOMContentLoaded', main, false );