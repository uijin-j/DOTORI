var myTimer;
swal("향학로에 사는 귀여운 청설모를 위해 도로리를 주워주세요!")
.then((value) => {
    makeDotori();
    myTimer = setInterval(fallDotori, 1000); //1초마다 반복
    timer();
});

var count=0;

function makeDotori() {
    var dotori = document.createElement('img');
    dotori.src = "./img/acorn.png";
    dotori.id = "dotori";
    dotori.className = "dotori";

    //랜덤위치에 나오도록
    var width = Math.random()*window.innerWidth;
    dotori.style.left = width + "px";

    dotori.onclick = function() {
        pickSnd.play();
        dotori.parentNode.removeChild(dotori);
        count += 1;
    }

    dotori.addEventListener('transitionend', function() {
        console.log(dotori);
        dotori.parentNode.removeChild(dotori);
    });

    container.appendChild(dotori);
}

function fallDotori() {
    var class_cnt = document.getElementsByClassName('dotori').length;
    if(class_cnt < 5) {
        makeDotori();
    }
}

var sec = 20;
var t;

function timer() {
    t = setTimeout(add, 1000);
}

function add() {
    tick();
    time.textContent = "00:" + (sec > 9 ? sec : "0" + sec);
    if(sec == 0) {
        document.getElementsByClassName('dotori').remove();
        clearTimeout(t);
        clearInterval(myTimer);
        swal(count+"개나 주우셨네요!", "청설모들이 따뜻한 겨울을 보낼 수 있게 되었어요:)");
    } else {
        timer();
    }
}

function tick(){
    sec--;
    console.log(sec);
}

Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}

NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}