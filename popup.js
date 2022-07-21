alert('HAI')
var sdh = ''
while (sdh === ''){
  var kabar = prompt('apa kabar? baik/biasa/nggak')
  if (kabar === 'baik'){
    alert('good then')
    alert('kalo mau nnti call ya')
    var sdh = 'q'
  } else if (kabar === 'biasa'){
    alert('hmm')
    alert('kayaknya gak mugnkin biasa deh')
    var alesan = prompt('kenapa biasa?')
    var sdh = 'q'
    alert('yaudah, pokoke aku callable ya hihihi')
  } else if (kabar === 'nggak'){
    alert('lho?')
    var alesan = prompt('kenapa?')
    alert('it will be okay, im here bro')
    alert('me callable anytime')
    var sdh = 'q'
  } else {
    alert('salah jawaban :(')
  }
}
alert('anyways')
alert('its about time for us to sleep bro')
alert('udah malem juga')
alert('dan...')
alert('kamu juga kurang enak badan toh?')
alert('get well sooon :)')