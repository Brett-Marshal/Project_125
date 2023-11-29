leftWrist = 0;
rightWrist = 0;
difference = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(500, 450);

    canvas = createCanvas(650, 450);
    canvas.position(675, 150);

    poseNet = ml5.poseNet(video, ModelLoaded);
    poseNet.on("pose", gotPoses);
}

function ModelLoaded()
{
    console.log("Model is Inizialised");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        leftWrist = results[0].pose.leftWrist.x;
        rightWrist = results[0].pose.rightWrist.x;
        difference = floor(leftWrist - rightWrist);

        console.log("The Height and the Width of the Text is " + difference + " px");
    }
}

function draw()
{
    background("gray")

    document.getElementById("font-size_updating").innerHTML = "The height and width of the Text is " + difference + " px";

    textSize(difference);
    fill("red");
    text("Marshal", 50, 300);
}