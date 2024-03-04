function pickCharMerah(character) {
  var lowerCase = character.toLowerCase();
  if ($(`#char-${lowerCase}`).prop("disabled") === true) {
    randomCharMerah();
  } else {
    $("#text-field-merah").text(character);
    $("#char-merah").val(character);
  }
}

function pickCharBiru(character) {
  var lowerCase = character.toLowerCase();
  if ($(`#char-${lowerCase}`).prop("disabled") === true) {
    randomCharBiru();
  } else {
    $("#text-field-biru").text(character);
    $("#char-biru").val(character);
  }
}

function randomCharMerah() {
  const char = ["A", "B", "C", "D", "E"];
  let randomChar = char[Math.floor(Math.random() * char.length)];
  pickCharMerah(randomChar);
}

function randomCharBiru() {
  const char = ["F", "G", "H", "I", "J"];
  let randomChar = char[Math.floor(Math.random() * char.length)];
  pickCharBiru(randomChar);
}

function startBattle() {
  var charMerah = $("#char-merah").val();
  var charBiru = $("#char-biru").val();

  if (charMerah == "null" && charBiru == "null") {
    alert("Harap pilih character!");
  } else {
    $(".character").attr("disabled", true);
    $(".random-button-char-merah").attr("disabled", true);
    $(".random-button-char-biru").attr("disabled", true);

    let stepMerah = Math.floor(Math.random() * 2) + 1;
    $("#text-step-merah").text(stepMerah);
    checkStepMerah(stepMerah);

    let stepBiru = stepMerah == 1 ? 2 : 1;
    $("#text-step-biru").text(stepBiru);

    $("#start-battle-button").attr("disabled", true);
    itemHistoryBiru("clear")
    itemHistoryMerah("clear");
    attributeChar();
  }
}

function attributeChar() {
  $("#defend-biru").val(10);
  $(".defend-point-biru").text(`Def : 10`);
  $(".health-point-biru").text(`HP : 50`);
  $("#hp-biru").val(50);

  $("#defend-merah").val(10);
  $(".defend-point-merah").text(`Def : 10`);
  $(".health-point-merah").text(`HP : 50`);
  $("#hp-merah").val(50);
}

function checkStepMerah(step) {
  if (step == 1) {
    $(
      "#skill-button-merah-1, #skill-button-merah-2, #skill-button-merah-3"
    ).attr("disabled", false);
    $(".random-button-skill-merah").attr("disabled", false);
    $(
      "#item-button-merah-1, #item-button-merah-2, #item-button-merah-3, #item-button-merah-4, #item-button-merah-5"
    ).attr("disabled", false);
  } else {
    $("#skill-button-biru-1, #skill-button-biru-2, #skill-button-biru-3").attr(
      "disabled",
      false
    );
    $(".random-button-skill-biru").attr("disabled", false);
    $(
      "#item-button-biru-1, #item-button-biru-2, #item-button-biru-3, #item-button-biru-4, #item-button-biru-5"
    ).attr("disabled", false);
  }
}

function randomSkillMerah() {
  let skill = [1, 2, 3];
  let randomSkill = skill[Math.floor(Math.random() * skill.length)];

  skillMerah(randomSkill);
}

function randomSkillBiru() {
  let skill = [1, 2, 3];
  let randomSkill = skill[Math.floor(Math.random() * skill.length)];

  skillBiru(randomSkill);
}

function skillMerah(number) {
  $("#skill-button-merah-1, #skill-button-merah-2, #skill-button-merah-3").attr(
    "disabled",
    true
  );
  $(".random-button-skill-merah").attr("disabled", true);
  $(
    "#item-button-merah-1, #item-button-merah-2, #item-button-merah-3, #item-button-merah-4, #item-button-merah-5"
  ).attr("disabled", true);

  $("#skill-button-biru-1, #skill-button-biru-2, #skill-button-biru-3").attr(
    "disabled",
    false
  );
  $(".random-button-skill-biru").attr("disabled", false);
  $(
    "#item-button-biru-1, #item-button-biru-2, #item-button-biru-3, #item-button-biru-4, #item-button-biru-5"
  ).attr("disabled", false);

  var checkHistoryItem = itemHistoryBiru("check");
  checkHistoryItem.forEach((item) => {
    $(`#item-button-biru-${item}`).attr("disabled", true);
  });

  var skill = {
    1: {
      damage: randomIntFromInterval(1, 5),
    },
    2: {
      damage: randomIntFromInterval(5, 10),
    },
    3: {
      damage: randomIntFromInterval(10, 15),
    },
  };

  var defense = $("#defend-biru").val();
  var damage = skill[number].damage;
  var hpBiru = $("#hp-biru").val();
  var hitung = defense - damage;
  if (defense > 0) {
    if (hitung < 0) {
      $("#defend-biru").val(0);
      $(".defend-point-biru").text(`Def : 0`);

      var hitungHp = hpBiru - Math.abs(hitung);

      $(".health-point-biru").text(`HP : ${hitungHp}`);
      $("#hp-biru").val(hitungHp);
    } else {
      $("#defend-biru").val(hitung);
      $(".defend-point-biru").text(`Def : ${hitung}`);
    }
  } else if (defense == 0) {
    if (hpBiru > 0) {
      var hitungHp = hpBiru - Math.abs(hitung);

      if (hitungHp > 0) {
        $(".health-point-biru").text(`HP : ${hitungHp}`);
        $("#hp-biru").val(hitungHp);
      } else {
        $(".health-point-biru").text(`HP : 0`);
        $("#hp-biru").val(0);

        alert("Tim Merah Menang!");
        endGame("merah");
      }
    }
  }

  $("#log-list-merah").append(
    `<li>Memberikan Damage ${damage}, dengan skill ${number}</li>`
  );
}

function skillBiru(number) {
  $("#skill-button-biru-1, #skill-button-biru-2, #skill-button-biru-3").attr(
    "disabled",
    true
  );
  $(".random-button-skill-biru").attr("disabled", true);
  $(
    "#item-button-biru-1, #item-button-biru-2, #item-button-biru-3, #item-button-biru-4, #item-button-biru-5"
  ).attr("disabled", true);

  $("#skill-button-merah-1, #skill-button-merah-2, #skill-button-merah-3").attr(
    "disabled",
    false
  );
  $(".random-button-skill-merah").attr("disabled", false);
  $(
    "#item-button-merah-1, #item-button-merah-2, #item-button-merah-3, #item-button-merah-4, #item-button-merah-5"
  ).attr("disabled", false);

  var checkHistoryItem = itemHistoryMerah("check");
  checkHistoryItem.forEach((item) => {
    $(`#item-button-merah-${item}`).attr("disabled", true);
  });

  var skill = {
    1: {
      damage: randomIntFromInterval(1, 5),
    },
    2: {
      damage: randomIntFromInterval(5, 10),
    },
    3: {
      damage: randomIntFromInterval(10, 15),
    },
  };

  var defense = $("#defend-merah").val();
  var damage = skill[number].damage;
  var hpMerah = $("#hp-merah").val();
  var hitung = defense - damage;
  if (defense > 0) {
    if (hitung < 0) {
      $("#defend-merah").val(0);
      $(".defend-point-merah").text(`Def : 0`);

      var hitungHp = hpMerah - Math.abs(hitung);

      $(".health-point-merah").text(`HP : ${hitungHp}`);
      $("#hp-merah").val(hitungHp);
    } else {
      $("#defend-merah").val(hitung);
      $(".defend-point-merah").text(`Def : ${hitung}`);
    }
  } else if (defense == 0) {
    if (hpMerah > 0) {
      var hitungHp = hpMerah - Math.abs(hitung);

      if (hitungHp > 0) {
        $(".health-point-merah").text(`HP : ${hitungHp}`);
        $("#hp-merah").val(hitungHp);
      } else {
        $(".health-point-merah").text(`HP : 0`);
        $("#hp-merah").val(0);

        alert("Tim Biru Menang");
        endGame("biru");
      }
    }
  }

  $("#log-list-biru").append(
    `<li>Memberikan Damage ${damage}, dengan skill ${number}</li>`
  );
}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function endGame(team) {
  $("#skill-button-merah-1, #skill-button-merah-2, #skill-button-merah-3").attr(
    "disabled",
    true
  );
  $(".random-button-skill-merah").attr("disabled", true);

  $("#skill-button-biru-1, #skill-button-biru-2, #skill-button-biru-3").attr(
    "disabled",
    true
  );
  $(".random-button-skill-biru").attr("disabled", true);

  $(
    "#item-button-biru-1, #item-button-biru-2, #item-button-biru-3, #item-button-biru-4, #item-button-biru-5"
  ).attr("disabled", true);

  $(
    "#item-button-merah-1, #item-button-merah-2, #item-button-merah-3, #item-button-merah-4, #item-button-merah-5"
  ).attr("disabled", true);

  var roundValue = parseInt($(`#value-round-${team}`).val());
  var hitungWin = roundValue + 1;
  $(`#text-round-${team}`).text(hitungWin);
  $(`#value-round-${team}`).val(hitungWin);
  enableButtonChar();

  var loseTeam = team == "merah" ? "biru" : "merah";
  disableLoseChar(loseTeam);

  $("#text-field-biru").text("");
  $("#text-field-merah").text("");
}

function enableButtonChar() {
  $(".character").attr("disabled", false);
  $(".random-button-char-merah").attr("disabled", false);
  $(".random-button-char-biru").attr("disabled", false);
  $("#start-battle-button").attr("disabled", false);
}

function disableLoseChar(team) {
  var loseTeam = $(`#char-${team}`).val();
  var charLowerCase = loseTeam.toLowerCase();
  const historyLose = charHistoryLose(charLowerCase);
  historyLose.forEach((character) => {
    $(`#char-${character}`).attr("disabled", true);
  });

  $("#char-merah").val("null");
  $("#char-biru").val("null");
}

function charHistoryLose(character) {
  // Membuat variabel lokal untuk menyimpan array karakter
  let characterArray = [];

  // // Mengecek apakah elemen memiliki data sebelumnya, jika ada, mengambilnya
  if ($(this).data("characterArray")) {
    characterArray = $(this).data("characterArray");
  }

  // Menambahkan karakter baru ke dalam array
  characterArray.push(character);

  // Menyimpan array karakter ke dalam data elemen
  $(this).data("characterArray", characterArray);

  // Mengembalikan array karakter yang telah diperbarui
  return characterArray;
}

function itemMerah(number) {
  const item = {
    1: {
      hp: 5,
    },
    2: {
      defense: 5,
    },
    3: {
      hp: 10,
    },
    4: {
      defense: randomIntFromInterval(5, 10),
    },
    5: {
      hp: randomIntFromInterval(10, 20),
    },
  };

  itemHistoryMerah("add", number)
  var useItem = item[number];
  var hpMerah = parseInt($("#hp-merah").val());
  var defMerah = parseInt($("#defend-merah").val());
  if (useItem.hp) {
    var hitung = hpMerah + useItem.hp;
    $("#hp-merah").val(hitung);
    $(".health-point-merah").text(`HP : ${hitung}`);
    $("#log-list-merah").append(
      `<li>Menggunakan item ${number}, mengisi Hp ${useItem.hp}</li>`
    );
  } else if (useItem.defense) {
    var hitung = defMerah + useItem.defense;
    $("#defend-merah").val(hitung);
    $(".defend-point-merah").text(`Def : ${hitung}`);
    $("#log-list-merah").append(
      `<li>Menggunakan item ${number}, mengisi def ${useItem.defense}</li>`
    );
  }

  // Disable kembali button merah
  $("#skill-button-merah-1, #skill-button-merah-2, #skill-button-merah-3").attr(
    "disabled",
    true
  );
  $(".random-button-skill-merah").attr("disabled", true);
  $(
    "#item-button-merah-1, #item-button-merah-2, #item-button-merah-3, #item-button-merah-4, #item-button-merah-5"
  ).attr("disabled", true);

  // Enable kembali button biru
  $("#skill-button-biru-1, #skill-button-biru-2, #skill-button-biru-3").attr(
    "disabled",
    false
  );
  $(".random-button-skill-biru").attr("disabled", false);
  $(
    "#item-button-biru-1, #item-button-biru-2, #item-button-biru-3, #item-button-biru-4, #item-button-biru-5"
  ).attr("disabled", false);

  var checkHistoryItem = itemHistoryBiru("check");
  checkHistoryItem.forEach((item) => {
    $(`#item-button-biru-${item}`).attr("disabled", true);
  });
}

function itemBiru(number) {
  const item = {
    1: {
      hp: 5,
    },
    2: {
      defense: 5,
    },
    3: {
      hp: 10,
    },
    4: {
      defense: randomIntFromInterval(5, 10),
    },
    5: {
      hp: randomIntFromInterval(10, 20),
    },
  };

  itemHistoryBiru("add", number)
  var useItem = item[number];
  var hpBiru = parseInt($("#hp-biru").val());
  var defBiru = parseInt($("#defend-biru").val());
  if (useItem.hp) {
    var hitung = hpBiru + useItem.hp;
    $("#hp-biru").val(hitung);
    $(".health-point-biru").text(`HP : ${hitung}`);
    $("#log-list-biru").append(
      `<li>Menggunakan item ${number}, mengisi Hp ${useItem.hp}</li>`
    );
  } else if (useItem.defense) {
    var hitung = defBiru + useItem.defense;
    $("#defend-biru").val(hitung);
    $(".defend-point-biru").text(`Def : ${hitung}`);
    $("#log-list-biru").append(
      `<li>Menggunakan item ${number}, mengisi def ${useItem.defense}</li>`
    );
  }

  // Disable kembali button biru
  $("#skill-button-biru-1, #skill-button-biru-2, #skill-button-biru-3").attr(
    "disabled",
    true
  );
  $(".random-button-skill-biru").attr("disabled", true);
  $(
    "#item-button-biru-1, #item-button-biru-2, #item-button-biru-3, #item-button-biru-4, #item-button-biru-5"
  ).attr("disabled", true);

  // Enable kembali button merah
  $("#skill-button-merah-1, #skill-button-merah-2, #skill-button-merah-3").attr(
    "disabled",
    false
  );
  $(".random-button-skill-merah").attr("disabled", false);
  $(
    "#item-button-merah-1, #item-button-merah-2, #item-button-merah-3, #item-button-merah-4, #item-button-merah-5"
  ).attr("disabled", false);

  var checkHistoryItem = itemHistoryMerah("check");
  checkHistoryItem.forEach(item => {
    $(`#item-button-merah-${item}`).attr("disabled", true)
  })
}

function itemHistoryMerah(action, number) {
  // Membuat variabel lokal untuk menyimpan array item
  let itamArrayMerah = [];

  // // Mengecek apakah elemen memiliki data sebelumnya, jika ada, mengambilnya
  if ($(this).data("itamArrayMerah")) {
    itamArrayMerah = $(this).data("itamArrayMerah");
  }

  if (action == "add") {
    itamArrayMerah.push(number);
  } else if (action == "clear") {
    itamArrayMerah = [];
  }

  // Menyimpan array karakter ke dalam data elemen
  $(this).data("itamArrayMerah", itamArrayMerah);

  // Mengembalikan array karakter yang telah diperbarui
  return itamArrayMerah;
}

function itemHistoryBiru(action, number) {
  // Membuat variabel lokal untuk menyimpan array item
  let itamArrayBiru = [];

  // // Mengecek apakah elemen memiliki data sebelumnya, jika ada, mengambilnya
  if ($(this).data("itamArrayBiru")) {
    itamArrayBiru = $(this).data("itamArrayBiru");
  }

  if (action == "add") {
    itamArrayBiru.push(number);
  } else if (action == "clear") {
    itamArrayBiru = [];
  }

  // Menyimpan array karakter ke dalam data elemen
  $(this).data("itamArrayBiru", itamArrayBiru);

  // Mengembalikan array karakter yang telah diperbarui
  return itamArrayBiru;
}
