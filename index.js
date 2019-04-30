$('button').click(function() {
  $('#you p').removeClass('blink');
  $('#pc p').removeClass('blink');
  $('#you p').text('YOU');
  $('#pc p').text('PC');  
  imgYouRotate();
  $('button').prop('disabled', true);
  setTimeout(function() {
    imgPcRotate();
    setTimeout(function() {
      $('button').prop('disabled', false);
    }, 2000)
  }, 2000);
  setTimeout(function() {
    youVsPc();
  }, 4000);
});

//抽取2个图片，分别定义
var imgYou = $('#you img'),
  degree1 = 0,
  timer1;
var imgPc = $('#pc img'),
  degree2 = 0,
  timer2;
//定义全局变量，取到最后的随机数
var pngYou;
var pngPc;
var count = 0

//you图片旋转
function youRotate() {
  imgYou.css({
    'transform': ' rotate(' + degree1 + 'deg)'
  });
  timer1 = setTimeout(function() {
    degree1 = degree1 + 60;
    youRotate();
    var pngName = getRandom();
    pngYou = pngName;
    imgYou.attr('src', 'images/dice' + pngName + '.png');
  }, 50);
}
//pc图片旋转
function pcRotate() {
  imgPc.css({
    'transform': ' rotate(' + degree2 + 'deg)'
  });
  timer2 = setTimeout(function() {
    degree2 = degree2 + 60;
    pcRotate();
    var pngName = getRandom();
    pngPc = pngName;
    imgPc.attr('src', 'images/dice' + pngName + '.png');
  }, 50);
}
//you图片旋转停止
function imgYouRotate() {
  youRotate();
  setTimeout(function() {
    clearTimeout(timer1);
    imgYou.css({
      'transform': ' rotate(0deg)'
    });
  }, 2000);
  //
}
//pc图片旋转停止
function imgPcRotate() {
  pcRotate();
  setTimeout(function() {
    clearTimeout(timer2);
    imgPc.css({
      'transform': ' rotate(0deg)'
    });
  }, 2000);
  //
}
//随机数字生成
function getRandom() {
  return Math.ceil(Math.random() * 6);
}
//图片对应关系（没用）
var diceNames = {
  1: 'dice1',
  2: 'dice2',
  3: 'dice3',
  4: 'dice4',
  5: 'dice5',
  6: 'dice6',
  7: 'dice7'
};
//点数判定
function youVsPc() {
  count = 0;
  if (pngYou > pngPc) {
    $('#you p').text('YOU WON!');
    var stopGo = setInterval(function(){
      $('#you p').toggleClass('blink');
      count++
      if ( count > 6){
        clearInterval(stopGo);
      }
    },200);
  } else if (pngYou < pngPc) {
    $('#pc p').text('PC WON!');
    var stopGo = setInterval(function(){
      $('#pc p').toggleClass('blink');
      count++
      if ( count > 6){
        clearInterval(stopGo);
      }
    },200);
  } else if (pngYou === pngPc) {
  }
}

/*
$("button").toggle(function() {
    clearTimeout(timer);
}, function() {
    rotate();
});

$('button').click(function() {
  imgGo();
});
function imgRorate(){
  $("img").css({
    'transform': 'rotate(60deg)',
  })
}
var img = $('img');
function imgGo(){
img.animate(
  imgRorate(),1000);
}




  imgRorate1()
, 30).animate(
  imgRorate2()
, 1150);
}

  // var img = $('img');
  // $('img').rotate(90);

  img.animate({
    img.rotate(90)
  }, 50).animate({
    transform: rotate(30)
  }, 50);

$("img").css({
  'transform': 'rotate(60deg)'
})
*/
