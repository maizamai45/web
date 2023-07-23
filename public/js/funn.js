let totalMoney1 = 0;
let totalMoney2 = 0;
let totalMoney3 = 0;
let totalMoney4 = 0;
let countdownTime1 = 5; 
let countdownTime2 = 5;
let countdownTime3 = 5;
let countdownTime4 = 5;   
let countdownInterval1;
let countdownInterval2;
let countdownInterval3;
let countdownInterval4;

function addMoney(machine) {
  if (machine === 1 && totalMoney1 < 50) {
    totalMoney1 += 10;
    document.getElementById("total1").innerText = totalMoney1;

    if (totalMoney1 >= 50) {
      startCountdown(1);
    }
  } else if (machine === 2 && totalMoney2 < 50) {
    totalMoney2 += 10;
    document.getElementById("total2").innerText = totalMoney2;

    if (totalMoney2 >= 50) {
      startCountdown(2);
    }
  }else if (machine === 3 && totalMoney3 < 50) {
    totalMoney3 += 10;
    document.getElementById("total3").innerText = totalMoney3;

    if (totalMoney3 >= 50) {
      startCountdown(3);
    }
  }else if (machine === 4 && totalMoney4 < 50) {
    totalMoney4 += 10;
    document.getElementById("total4").innerText = totalMoney4;

    if (totalMoney4 >= 50) {
      startCountdown(4);
    }
  }
  
}

function startCountdown(machine) {
  if (machine === 1) {
    clearInterval(countdownInterval1);
    countdownInterval1 = setInterval(updateCountdown, 1000, 1);
    updateCountdown(1);
  } else if (machine === 2) {
    clearInterval(countdownInterval2);
    countdownInterval2 = setInterval(updateCountdown, 1000, 2);
    updateCountdown(2);
  } else if (machine === 3) {
    clearInterval(countdownInterval3);
    countdownInterval3 = setInterval(updateCountdown, 1000, 3);
    updateCountdown(3);
  }
  else if (machine === 4) {
    clearInterval(countdownInterval4);
    countdownInterval4 = setInterval(updateCountdown, 1000, 4);
    updateCountdown(4);
  }
}

function updateCountdown(machine) {
  if (machine === 1) {
    const minutes = Math.floor(countdownTime1 / 60);
    const seconds = countdownTime1 % 60;
    document.getElementById("countdown1").innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    if (countdownTime1 === 0) {
      clearInterval(countdownInterval1);
      document.getElementById("countdown1").innerText = "ซักผ้าเสร็จ 1";
    } else {
      countdownTime1--;
    }
  } else if (machine === 2) {
    const minutes = Math.floor(countdownTime2 / 60);
    const seconds = countdownTime2 % 60;
    document.getElementById("countdown2").innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    if (countdownTime2 === 0) {
      clearInterval(countdownInterval2);
      document.getElementById("countdown2").innerText = "ซักผ้าเสร็จ 2";
    } else {
      countdownTime2--;
    }
  } else if (machine === 3) {
    const minutes = Math.floor(countdownTime3 / 60);
    const seconds = countdownTime3 % 60;
    document.getElementById("countdown3").innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    if (countdownTime3 === 0) {
      clearInterval(countdownInterval3);
      document.getElementById("countdown3").innerText = "ซักผ้าเสร็จ 3";
    } else {
      countdownTime3--;
    }
  }
  else if (machine === 4) {
    const minutes = Math.floor(countdownTime4 / 60);
    const seconds = countdownTime4 % 60;
    document.getElementById("countdown4").innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    if (countdownTime4 === 0) {
      clearInterval(countdownInterval4);
      document.getElementById("countdown4").innerText = "ซักผ้าเสร็จ 4";
    } else {
      countdownTime4--;
    }
  }
}
