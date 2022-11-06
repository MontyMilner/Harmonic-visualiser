let col = [
  [255, 0, 0],
  [255, 128, 0],
  [255, 255, 0],
  [128, 255, 0],
  [0, 255, 0],
  [0, 255, 128],
  [0, 255, 255],
  [0, 128, 255],
  [0, 0, 255],
  [128, 0, 255],
  [255, 0, 255],
  [255, 0, 128]
]

let A = 440;
let oc = 12
let keyrad = 3
let lig = 0;
let stick = true;

let play = true;
let lighton = false;
let fr = true;
let scaleType = 11
let texsiz = 10

function setup() {
  createCanvas(800, 600);
  slist = [
    ["1", "2", "3", "3/2", "4", "4/3", "5", "5/2", "5/3", "5/4", "6", "6/5", "7", "7/2"], //0
    ["1", "9/8", "5/4", "4/3", "3/2", "5/3", "15/8", "2"], //1-major
    ["1", "9/8", "5/4", "4/3", "3/2", "5/3", "7/4", "9/5", "2"], //2-dom. 7th
    ["1", "9/8", "6/5", "4/3", "3/2", "8/5", "7/4", "2"], //3-minor
    [1, 13 / 12, 7 / 6, 5 / 4, 4 / 3, 17 / 12, 3 / 2, 19 / 12, 5 / 3, 7 / 4, 11 / 6, 23 / 12, 2], //4
    [pow(2, -12 / 12), pow(2, -11 / 12), pow(2, -10 / 12), pow(2, -9 / 12), pow(2, -8 / 12), pow(2, -7 / 12), pow(2, -6 / 12), pow(2, -5 / 12), pow(2, -4 / 12), pow(2, -3 / 12), pow(2, -2 / 12), pow(2, -1 / 12), pow(2, 0 / 12), pow(2, 1 / 12), pow(2, 2 / 12), pow(2, 3 / 12), pow(2, 4 / 12), pow(2, 5 / 12), pow(2, 6 / 12), pow(2, 7 / 12), pow(2, 8 / 12), pow(2, 9 / 12), pow(2, 10 / 12), pow(2, 11 / 12), pow(2, 12 / 12)], //5-Equal temperament
    [1, 5 / 4, 3 / 2, 2], //6-A major chord
    [1, 9 / 8, 81 / 64, 4 / 3, 3 / 2, 27 / 16, 243 / 128, 2], //7-Pythagorean tuning just scale
    [pow(2, 0 / 12), pow(2, 2 / 12), pow(2, 4 / 12), pow(2, 5 / 12), pow(2, 7 / 12), pow(2, 9 / 12), pow(2, 11 / 12), pow(2, 12 / 12)], //8-Equal temp. major notes
    [pow(2 / 3, 6) * pow(2, 4), pow(2 / 3, 5) * pow(2, 3), pow(2 / 3, 4) * pow(2, 3), pow(2 / 3, 3) * pow(2, 2), pow(2 / 3, 2) * pow(2, 2), pow(2 / 3, 1) * pow(2, 1), pow(2 / 3, 0) * pow(2, 0), pow(2 / 3, -1) * pow(2, 0), pow(2 / 3, -2) * pow(2, -1), pow(2 / 3, -3) * pow(2, -1), pow(2 / 3, -4) * pow(2, -2), pow(2 / 3, -5) * pow(2, -2), 2], //9-Pythagorean all chromatics
    [pow(2, -24 / 24), pow(2, -23 / 24), pow(2, -22 / 24), pow(2, -21 / 24), pow(2, -20 / 24), pow(2, -19 / 24), pow(2, -18 / 24), pow(2, -17 / 24), pow(2, -16 / 24), pow(2, -15 / 24), pow(2, -14 / 24), pow(2, -13 / 24), pow(2, -12 / 24), pow(2, -11 / 24), pow(2, -10 / 24), pow(2, -9 / 24), pow(2, -8 / 24), pow(2, -7 / 24), pow(2, -6 / 24), pow(2, -5 / 24), pow(2, -4 / 24), pow(2, -3 / 24), pow(2, -2 / 24), pow(2, -1 / 24), pow(2, 0 / 24), pow(2, 1 / 24), pow(2, 2 / 24), pow(2, 3 / 24), pow(2, 4 / 24), pow(2, 5 / 24), pow(2, 6 / 24), pow(2, 7 / 24), pow(2, 8 / 24), pow(2, 9 / 24), pow(2, 10 / 24), pow(2, 11 / 24), pow(2, 12 / 24), pow(2, 13 / 24), pow(2, 14 / 24), pow(2, 15 / 24), pow(2, 16 / 24), pow(2, 17 / 24), pow(2, 18 / 24), pow(2, 19 / 24), pow(2, 20 / 24), pow(2, 21 / 24), pow(2, 22 / 24), pow(2, 23 / 24), pow(2, 24 / 24)], //10- 24TET
    ["1","3/2","2","5/2","3","7/2","4","9/2","5","11/2","6","13/2"] //11 harmonic series
  ]
  nlist = [
    [1, 2, 3, 3 / 2, 4, 4 / 3, 5, 5 / 2, 5 / 3, 5 / 4, 6, 6 / 5, 7, 7 / 2], //0
    [1, 9 / 8, 5 / 4, 4 / 3, 3 / 2, 5 / 3, 15 / 8, 2], //1-major
    [1, 9 / 8, 5 / 4, 4 / 3, 3 / 2, 5 / 3, 7 / 4, 9 / 5, 2], //2-dom. 7th
    [1, 9 / 8, 6 / 5, 4 / 3, 3 / 2, 8 / 5, 7 / 4, 2], //3-minor
    [1, 13 / 12, 7 / 6, 5 / 4, 4 / 3, 17 / 12, 3 / 2, 19 / 12, 5 / 3, 7 / 4, 11 / 6, 23 / 12, 2], //4
    [pow(2, -12 / 12), pow(2, -11 / 12), pow(2, -10 / 12), pow(2, -9 / 12), pow(2, -8 / 12), pow(2, -7 / 12), pow(2, -6 / 12), pow(2, -5 / 12), pow(2, -4 / 12), pow(2, -3 / 12), pow(2, -2 / 12), pow(2, -1 / 12), pow(2, 0 / 12), pow(2, 1 / 12), pow(2, 2 / 12), pow(2, 3 / 12), pow(2, 4 / 12), pow(2, 5 / 12), pow(2, 6 / 12), pow(2, 7 / 12), pow(2, 8 / 12), pow(2, 9 / 12), pow(2, 10 / 12), pow(2, 11 / 12), pow(2, 12 / 12)], //5-Equal temperament
    [1, 5 / 4, 3 / 2, 2], //6-A major chord
    [1, 9 / 8, 81 / 64, 4 / 3, 3 / 2, 27 / 16, 243 / 128, 2], //7-Pythagorean tuning
    [pow(2, 0 / 12), pow(2, 2 / 12), pow(2, 4 / 12), pow(2, 5 / 12), pow(2, 7 / 12), pow(2, 9 / 12), pow(2, 11 / 12), pow(2, 12 / 12)], //8-Equal temp. major notes
    [pow(2 / 3, 6) * pow(2, 4), pow(2 / 3, 5) * pow(2, 3), pow(2 / 3, 4) * pow(2, 3), pow(2 / 3, 3) * pow(2, 2), pow(2 / 3, 2) * pow(2, 2), pow(2 / 3, 1) * pow(2, 1), pow(2 / 3, 0) * pow(2, 0), pow(2 / 3, -1) * pow(2, 0), pow(2 / 3, -2) * pow(2, -1), pow(2 / 3, -3) * pow(2, -1), pow(2 / 3, -4) * pow(2, -2), pow(2 / 3, -5) * pow(2, -2), 2], //9-Pythagorean all chromatics
    [pow(2, -24 / 24), pow(2, -23 / 24), pow(2, -22 / 24), pow(2, -21 / 24), pow(2, -20 / 24), pow(2, -19 / 24), pow(2, -18 / 24), pow(2, -17 / 24), pow(2, -16 / 24), pow(2, -15 / 24), pow(2, -14 / 24), pow(2, -13 / 24), pow(2, -12 / 24), pow(2, -11 / 24), pow(2, -10 / 24), pow(2, -9 / 24), pow(2, -8 / 24), pow(2, -7 / 24), pow(2, -6 / 24), pow(2, -5 / 24), pow(2, -4 / 24), pow(2, -3 / 24), pow(2, -2 / 24), pow(2, -1 / 24), pow(2, 0 / 24), pow(2, 1 / 24), pow(2, 2 / 24), pow(2, 3 / 24), pow(2, 4 / 24), pow(2, 5 / 24), pow(2, 6 / 24), pow(2, 7 / 24), pow(2, 8 / 24), pow(2, 9 / 24), pow(2, 10 / 24), pow(2, 11 / 24), pow(2, 12 / 24), pow(2, 13 / 24), pow(2, 14 / 24), pow(2, 15 / 24), pow(2, 16 / 24), pow(2, 17 / 24), pow(2, 18 / 24), pow(2, 19 / 24), pow(2, 20 / 24), pow(2, 21 / 24), pow(2, 22 / 24), pow(2, 23 / 24), pow(2, 24 / 24)], //10- 24TET
    [1,3/2,2,5/2,3,7/2,4,9/2,5,11/2,6,13/2] //11 harmonic series
  ]
  slis = slist[scaleType]
  nlis = nlist[scaleType]

  osc = new p5.Oscillator();
  osc.setType('sine');
  osc.freq(A);
  osc.amp(0);
  osc.start();
}

function draw() {
  background(250);
  fill(0)
  textSize(50)
  text('Harmonic Analyzer', width / 2, 70)
  textSize(15)
  if (fr) {
    text('Frequency=' + int(A * pow(2 * oc, ((mouseX - width / 2) * 2 / width))), width - 60, 30)
  }
  notes()
  light()
  if (play) {
    if (!lighton) {
      osc.freq(A * pow(2 * oc, ((mouseX - width / 2) * 2 / width)))
    }
    osc.amp(0.5, 0.5);
  } else {
    osc.amp(0, 0.5);
  }
}

function keyPressed() {
  if (play) {
    play = false;
  } else {
    play = true;
  }
}

function notes() {
  noFill()
  rectMode(CORNER)
  rect(0, 0, width, height - 1)
  rect(0, height / 2, width, height / 2)
  textAlign(CENTER, BOTTOM)
  rectMode(CENTER)
  for (let i = 0; i < slis.length; i++) {
    fill(0)
    textSize(texsiz)
    text(slis[i], revFre(nlis[i] * A), height / 2)

    noFill()
    rect(revFre(nlis[i] * A), height * 3 / 4, keyrad * 2, height / 2)
  }
}

function light() {
  if (mouseY >= height / 2) {
    //A

    for (i = 0; i < nlis.length; i++) {
      if (check(revFre(nlis[i] * A))) {
        lighton = true
        fill(col[i % col.length])
        rect(revFre(nlis[i] * A), height * 3 / 4, keyrad * 2, height / 2)
        osc.freq(A * nlis[i])
        print(A * nlis[i])
      } else {
        lig += 1

      }
    }
    if (!stick) {
      if (lig >= nlis.length) {
        lighton = false
        lig = 0
      } else {
        lig = 0
      }
    }
  } else {
    lighton = false
    lig = 0
  }
}

function check(a) {
  if ((mouseX >= a - keyrad) && (mouseX <= a + keyrad)) {
    return true
  } else {
    return false
  }
}

function revFre(a) {
  return getBaseLog(2 * oc, a / A) * width / 2 + width / 2
}

function getBaseLog(x, y) {
  return log(y) / log(x);
}
