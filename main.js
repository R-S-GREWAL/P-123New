function setup()
{ 
    canvas = createCanvas(900,325);
    canvas.position(250,500)
    canvas.parent('canvas');
    video = createCapture(VIDEO);
    
    video.size(900,325);
   
}
