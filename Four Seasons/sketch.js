// variable to hold a reference to our A-Frame world
var world;

var springassets = ["spballerina1","spballerina3","spballerina4","spballerina5","spballerina6","spballerina7","spballerina8"]
var summerassets = ["suballerina1","suballerina3","suballerina4","suballerina5","suballerina6","suballerina7","suballerina8"]
var autumnassets = ["aballerina1","aballerina3","aballerina4","aballerina5","aballerina6","aballerina7","aballerina8"]
var winterassets = ["ballerina1","ballerina3","ballerina4","ballerina5","ballerina6","ballerina7","ballerina8"]

var framecount = 0;

function preload() {
  springmusic = loadSound("sounds/spring.mp3");
  autumnmusic = loadSound("sounds/autumn.mp3");
  summermusic = loadSound("sounds/summer.mp3");
  wintermusic = loadSound("sounds/winter.mp3");
}

var ballerina1 = new Plane({
  x:0, y:0, z:-5.5,
  width:2, height:4,
  asset:"spballerina1",
  transparent:"true",
  side:"double",
  clickFunction:function(c){
    if(music!=springmusic) {
      music.stop();
      music = springmusic;
      music.play();
      var sky = select('#theSky');
      sky.attribute('src','#springsky');
      platform.setAsset("springtexture");
      world.setUserPosition(0,0,1);
      randomspringasset = springassets[int(random(springassets.length))]
      randomsummerasset = summerassets[int(random(summerassets.length))]
      randomautumnasset = autumnassets[int(random(autumnassets.length))]
      randomwinterasset = winterassets[int(random(winterassets.length))]
      ballerina1.setAsset(randomspringasset);
      ballerina2.setAsset(randomsummerasset);
      ballerina3.setAsset(randomautumnasset);
      ballerina4.setAsset(randomwinterasset);
    }
  }
});

var ballerina2 = new Plane({
  x:0, y:0, z:5.5,
  width:2, height:4,
  asset:"suballerina3",
  transparent:"true",
  side:"double",
  clickFunction:function(c){
    if(music!=summermusic) {
      music.stop();
      music = summermusic;
      music.play();
      var sky = select('#theSky');
      sky.attribute('src','#summersky');
      platform.setAsset("summertexture");
      world.setUserPosition(0,0,1);
      randomspringasset = springassets[int(random(springassets.length))]
      randomsummerasset = summerassets[int(random(summerassets.length))]
      randomautumnasset = autumnassets[int(random(autumnassets.length))]
      randomwinterasset = winterassets[int(random(winterassets.length))]
      ballerina1.setAsset(randomspringasset);
      ballerina2.setAsset(randomsummerasset);
      ballerina3.setAsset(randomautumnasset);
      ballerina4.setAsset(randomwinterasset);
    }
  }
});

var ballerina3 = new Plane({
  x:-5.5, y:0, z:0,
  width:2, height:4,
  asset:"aballerina4",
  transparent:"true",
  side:"double",
  clickFunction:function(c){
    if(music!=autumnmusic) {
      music.stop();
      music = autumnmusic;
      music.play();
      var sky = select('#theSky');
      sky.attribute('src','#autumnsky');
      platform.setAsset("autumntexture");
      world.setUserPosition(0,0,1);
      randomspringasset = springassets[int(random(springassets.length))]
      randomsummerasset = summerassets[int(random(summerassets.length))]
      randomautumnasset = autumnassets[int(random(autumnassets.length))]
      randomwinterasset = winterassets[int(random(winterassets.length))]
      ballerina1.setAsset(randomspringasset);
      ballerina2.setAsset(randomsummerasset);
      ballerina3.setAsset(randomautumnasset);
      ballerina4.setAsset(randomwinterasset);
    }
  }
});

var ballerina4 = new Plane({
  x:5.5, y:0, z:0,
  width:2, height:4,
  asset:"ballerina5",
  transparent:"true",
  side:"double",
  clickFunction:function(c){
    if(music!=wintermusic) {
      music.stop();
      music = wintermusic;
      music.play();
      var sky = select('#theSky');
      sky.attribute('src','#wintersky');
      platform.setAsset("wintertexture");
      world.setUserPosition(0,0,1);
      randomspringasset = springassets[int(random(springassets.length))]
      randomsummerasset = summerassets[int(random(summerassets.length))]
      randomautumnasset = autumnassets[int(random(autumnassets.length))]
      randomwinterasset = winterassets[int(random(winterassets.length))]
      ballerina1.setAsset(randomspringasset);
      ballerina2.setAsset(randomsummerasset);
      ballerina3.setAsset(randomautumnasset);
      ballerina4.setAsset(randomwinterasset);
    }
  }
});

var platform = new Circle({
  x:0, y:-2, z:0,
  radius:6,
  asset:'springtexture',
  rotationX:-90
})

var blackhole = new Circle({
  x:0,y:-1.9,z:0,
  radius:1,
  asset:'blackhole',
  rotationX:-90,
  clickFunction:function(c){
    open("https://i6.cims.nyu.edu/~jk4704/interactive/virtualmusic/");
  }
})

function setup() {
  
  world = new World('VRScene');
  
  // create a container that holds other objects and moves them around
	level1 = new Container3D({x:0, y:0, z:0});
	level1.addChild(ballerina1);
	level1.addChild(ballerina2);
	level1.addChild(ballerina3);
	level1.addChild(ballerina4);
	level1.addChild(platform);
	level1.addChild(blackhole);
	
	
	// add the container to the world
	world.add(level1);

  music = springmusic;
  
  music.play();
  
  world.setUserPosition(0,0,1);
  
  amplitude = new p5.Amplitude();
  
}

function draw() {
  
  framecount+=1
  ballerina1.spinY(amplitude.getLevel()*50);
  ballerina2.spinY(amplitude.getLevel()*50);
  ballerina3.spinY(amplitude.getLevel()*50);
  ballerina4.spinY(amplitude.getLevel()*50);
  blackhole.spinY(-100);
  level1.spinY(0.5);
  
  
}