

// const downloadLink = document.getElementById('download');
//   const stopButton = document.getElementById('stop');


//   const handleSuccess = function(stream) {
//     const options = {mimeType: 'audio/webm'};
//     const recordedChunks = [];
//     const mediaRecorder = new MediaRecorder(stream, options);

//     mediaRecorder.addEventListener('dataavailable', function(e) {
//       if (e.data.size > 0) recordedChunks.push(e.data);
//     });

//     mediaRecorder.addEventListener('stop', function() {
//       downloadLink.href = URL.createObjectURL(new Blob(recordedChunks));
//       downloadLink.download = 'acetest.wav';
//     });

//     stopButton.addEventListener('click', function() {
//       mediaRecorder.stop();
//     });

//     mediaRecorder.start();
//   };

//   function record() {
//     alert("hi");
//     navigator.mediaDevices.getUserMedia({ audio: true, video: false })
//       .then(handleSuccess);
// }


var i = 1;
let = dog = "";
let audioArray = [];
let tempAudio; 


document.getElementById("record").addEventListener("click",record);


// const captureUserMedia = callback => {
//     navigator.mediaDevices.getUserMedia({ audio: true, video: false })
//       .then(callback)
//       .catch(err => {
//         window.chrome.tabs.create({
//           url: 'request-mic.html'
//         });
//       });
//   };

const recordAudio = () =>
  new Promise(async resolve => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream);
    const audioChunks = [];

    mediaRecorder.addEventListener("dataavailable", event => {
      audioChunks.push(event.data);
    });

    const start = () => mediaRecorder.start();

    const stop = () =>
      new Promise(resolve => {
        mediaRecorder.addEventListener("stop", () => {
          const audioBlob = new Blob(audioChunks);
          const audioUrl = URL.createObjectURL(audioBlob);
          const audio = new Audio(audioUrl);
          dog = audioUrl;

          const play = () => audio.play();
          resolve({ audioBlob, audioUrl, play });
        });

        mediaRecorder.stop();
      });

    resolve({ start, stop });
  });

const sleep = time => new Promise(resolve => setTimeout(resolve, time));

// (async () => {
//   const recorder = await recordAudio();
//   recorder.start();
//   await sleep(3000);
//   const audio = await recorder.stop();
//   audio.play();
// })();

function record(){
    (async () => {
        const recorder = await recordAudio();
        recorder.start();
        await sleep(4000);
        const audio = await recorder.stop();
        audio.play();
        tempAudio = audio;
        audioArray.push(tempAudio);
        
        
        var tag = document.createElement("button");
        var text = document.createTextNode(i);
        tag.appendChild(text);
        tag.setAttribute("onclick", `buttonClick(${i-1})`)
        var element = document.getElementById("new");
        element.appendChild(tag);
        i++;

      })();
}

function stop(){

    
}

function buttonClick(i){

audioArray[i].play();  
}