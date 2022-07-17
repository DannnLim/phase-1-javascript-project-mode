const WhiteKeys = ["a", 's', 'd', 'f', 'g', 'h', 'j', 'k']
const BlackKeys = ['w', 'e', 'y', 'u', 'i']
// const notes = ['C', 'C#/Db', 'D', 'D#/Eb', 'E,', 'F', 'F#/Gb', 'G,', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C2']

const keys = document.querySelectorAll('.key')
const White_Keys = document.querySelectorAll('.key.White')
const Black_Keys = document.querySelectorAll('.key.Black')



keys.forEach(key => {
    key.addEventListener('click', () => playNote(key))
})
document.addEventListener('keydown', a => {
    const key = a.key
    const WhiteKeysIndex = WhiteKeys.indexOf(key)
    const BlackKeyIndex = BlackKeys.indexOf(key)

    if (WhiteKeysIndex > -1) playNote(White_Keys[WhiteKeysIndex])
    if (BlackKeyIndex > -1) playNote(Black_Keys[BlackKeyIndex])
})

function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.sound)
    noteAudio.currentTime = 0
    noteAudio.play()
    key.classList.add('active')
    noteAudio.addEventListener('ended', () => {
        key.classList.remove('active');
        const keyNote = key.getAttribute("data-sound");
        notes.innerHTML = keyNote;

    })

}


$(".Like-Unlike").click(function (e) {
    if ($(this).html() == "Like") {
        $(this).html('Unlike');
    }
    else {
        $(this).html('Like');
    }
    
    return false;
    
    
});
























// const Piano = new Howl({
//     "src": [
//         "./Piano-Samples/Piano.webm",
//         "./Piano-Samples/Piano.mp3"
//     ],
//     "sprite": {
//         "Ab": [
//             0,
//             750
//         ],
//         "A": [
//             2000,
//             750
//         ],
//         "Bb": [
//             4000,
//             750
//         ],
//         "B": [
//             6000,
//             750
//         ],
//         "C": [
//             8000,
//             750
//         ],
//         "C2": [
//             10000,
//             750
//         ],
//         "Db": [
//             12000,
//             750
//         ],
//         "D": [
//             14000,
//             750
//         ],
//         "Eb": [
//             16000,
//             750
//         ],
//         "E": [
//             18000,
//             739.7278911564626
//         ],
//         "F": [
//             20000,
//             750
//         ],
//         "Gb": [
//             22000,
//             750
//         ],
//         "G": [
//             24000,
//             750
//         ]
//     }
// });

// // Piano.play("A");


// const keys = document.querySelector('.piano');

// keys.addEventListener('click', () => {
//     if (event.target.classList.contains('key')) {
//         let soundToPLay = event.target.dataset.sound;
//         keys.style.backgroundColor = "#333";
//         Piano.play(soundToPLay);

//     }
// });

