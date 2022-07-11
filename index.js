// const vol = new Tone.Volume(-22).toDestination();
// const osc = new Tone.Oscillator().connect(vol).start();

// const { application } = require("express")();

// const { Tone } = require("tone/build/esm/core/Tone")();
// const Port = 8080;
// app.listen(
//     Port,
//     () => console.log(`it's a;ive on http://localhost:${Port}`)
// )


function sequencer() {
    const Kick = new Tone.Player('./Drums/Kick(Rock).wav').toMaster();
    const Snare = new Tone.Player('./Drums/Snare(Rock).wav').toMaster();
    const ClosedHH = new Tone.Player('./Drums/ClosedHH.wav').toMaster();
    const OpenHH = new Tone.Player('./Drums/OpenHH.wav').toMaster();
    const RideCymbal = new Tone.Player('./Drums/RideCymbal.wav').toMaster();
    let index = 0;

    Tone.Master.volume.value = 0;
    Tone.Transport.scheduleRepeat(repeat, '16n');
    Tone.Transport.start()

    function repeat() {
        let step = index % 16;
        console.log(step);

        let kickInputs = document.querySelector(
            `.Kick input:nth-child(${step + 1})`

        );

        // let volInputs = document.querySelector(
        //     `.slider input()`
        // )
        console.log(kickInputs)
        let snareInputs = document.querySelector(
            `.Snare input:nth-child(${step + 1})`
        );

        let ClosedHHInputs = document.querySelector(
            `.ClosedHH input:nth-child(${step + 1})`
        );

        let OpenHHInputs = document.querySelector(
            `.OpenHH input:nth-child(${step + 1})`
        );

        let RideCymbalInputs = document.querySelector(
            `.RideCym input:nth-child(${step + 1})`
        );

        if (kickInputs.checked) {
            Kick.start();

        };


        if (snareInputs.checked) {
            Snare.start();
        };

        if (ClosedHHInputs.checked) {
            ClosedHH.start();
        };

        if (OpenHHInputs.checked) {
            OpenHH.start();
        };

        if (RideCymbalInputs.checked) {
            RideCymbal.start();
        };

        index++;

    }
}


sequencer();






// console.log(Kick(Rock));









