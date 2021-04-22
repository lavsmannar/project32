const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

var hour;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg);
    background(backgroundImg);
    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here
    var time=hour+'AM';
    if(time>=13){
        time=time-12+'PM';
    }
    textSize(50);
    text('Time'+time,200,200);
    

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response=await fetch('http://worldtimeapi.org/api/timezone/America/Los_Angeles')
    //change the data in JSON format
    var responseJSON=await response.json();
    // write code slice the datetime
    var datetime=responseJSON.datetime;
    hour=datetime.slice(11,13);
    // add conditions to change the background images from sunrise to sunset
    if(hour<5||hour>=22){bg='sunset12.png';
    }else if(7>hour>=5){bg='sunrise1.png';
    }else if(9>hour>=7){bg='sunrise2.png';
    }else if(10>hour>=9){bg='sunrise3.png';
    }else if(12>hour>=10){bg='sunrise4.png';
    }else if(13>hour>=12){bg='sunrise5.png';
    }else if(15>hour>=13){bg='sunrise6.png';
    }else if(16>hour>=15){bg='sunset7.png';
    }else if(17>hour>=16){bg='sunset8.png';
    }else if(19>hour>=17){bg='sunset9.png';
    }else if(21>hour>=19){bg='sunset10.png';
    }else{bg='sunset11.png'}

    //load the image in backgroundImg variable here
    backgroundImg=loadImage(bg);
}
