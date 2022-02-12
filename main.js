Webcam.attach('#camera');
camera=document.getElementById("camera");

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'">';
    });

}
console.log("ml5 version",ml5.version);
classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/znwebWmIL/model.json',modelLoaded);
function modelLoaded(){
    console.log("model loaded");
}
function check(){
    img=document.getElementById("captured_image");
    classifier.classify(img,gotResult);
}
function gotResult(){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("res_obj_name").innerHTML=results[0].label;
        document.getElementById("res_obj_accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}