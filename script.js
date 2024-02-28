function pickCharMerah(character){
  $("#text-field-merah").text(character);
  $("#char-merah").val(character);
}

function pickCharBiru(character) {
  $("#text-field-biru").text(character);
  $("#char-biru").val(character);
}

function randomCharMerah(){
  const char = ["A", "B", "C", "D", "E"];
  let randomChar = char[Math.floor(Math.random() * char.length)];
  pickCharMerah(randomChar);
}

function randomCharBiru() {
  const char = ["F", "G", "H", "I", "J"];
  let randomChar = char[Math.floor(Math.random() * char.length)];
  pickCharBiru(randomChar);
}

function startBattle(){
  var charMerah = $("#char-merah").val();
  var charBiru = $("#char-biru").val();

  $(".character").attr("disabled", true);
  $(".random-button-char-merah").attr("disabled", true);
  $(".random-button-char-biru").attr("disabled", true);

  let stepMerah = Math.floor(Math.random() * 2) + 1;
  $("#text-step-merah").text(stepMerah);
  checkStepMerah(stepMerah);

  let stepBiru = stepMerah == 1 ? 2 : 1
  $("#text-step-biru").text(stepBiru);

  $("#start-battle-button").attr("disabled", true);
}

function checkStepMerah(step){
  if(step == 1){
    $("#skill-button-merah-1, #skill-button-merah-2, #skill-button-merah-3").attr(
      "disabled",
      false
    );
    $(".random-button-skill-merah").attr("disabled", false);
  }else{
    $(
      "#skill-button-biru-1, #skill-button-biru-2, #skill-button-biru-3"
    ).attr("disabled", false);
    $(".random-button-skill-biru").attr("disabled", false);
  }
}

function randomSkillMerah(){
  let skill = [1,2,3];
  let randomSkill = skill[Math.floor(Math.random() * skill.length)];

  skillMerah(randomSkill);
}

function randomSkillBiru() {
  let skill = [1, 2, 3];
  let randomSkill = skill[Math.floor(Math.random() * skill.length)];

  skillBiru(randomSkill);
}

function skillMerah(number){
  $("#skill-button-merah-1, #skill-button-merah-2, #skill-button-merah-3").attr(
    "disabled",
    true
  );
  $(".random-button-skill-merah").attr("disabled", true);

  $("#skill-button-biru-1, #skill-button-biru-2, #skill-button-biru-3").attr(
    "disabled",
    false
  );
  $(".random-button-skill-biru").attr("disabled", false);

  var skill = {
    1: {
      damage: randomIntFromInterval(1, 5)
    },
    2: {
      damage: randomIntFromInterval(5, 10)
    },
    3: {
      damage: randomIntFromInterval(10, 15)
    }
  }

  var defense = $('#defend-biru').val()
  var damage = skill[number].damage;
  var hpBiru = $("#hp-biru").val()
  var hitung = defense - damage;
  if(defense > 0){
    if(hitung < 0){
      $("#defend-biru").val(0);
      $(".defend-point-biru").text(`Def : 0`);

      var hitungHp = hpBiru - Math.abs(hitung);

      $(".health-point-biru").text(`HP : ${hitungHp}`);
      $("#hp-biru").val(hitungHp);
    }else{
      $("#defend-biru").val(hitung);
      $(".defend-point-biru").text(`Def : ${hitung}`);
    }
  }else if(defense == 0){
    if(hpBiru > 0){
      var hitungHp = hpBiru - Math.abs(hitung);

      if(hitungHp > 0){
        $(".health-point-biru").text(`HP : ${hitungHp}`);
        $("#hp-biru").val(hitungHp);
      }else{
        $(".health-point-biru").text(`HP : 0`);
        $("#hp-biru").val(0);

        alert("Tim Biru Kalah")
      }
    }
  }

  $("#log-list-merah").append(`<li>Memberikan Damage ${damage}</li>`);
}

function skillBiru(number) {
  $("#skill-button-biru-1, #skill-button-biru-2, #skill-button-biru-3").attr(
    "disabled",
    true
  );
  $(".random-button-skill-biru").attr("disabled", true);

  $("#skill-button-merah-1, #skill-button-merah-2, #skill-button-merah-3").attr(
    "disabled",
    false
  );
  $(".random-button-skill-merah").attr("disabled", false);

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

        alert("Tim merah Kalah");
      }
    }
  }

  $("#log-list-biru").append(`<li>Memberikan Damage ${damage}</li>`);
}

function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}
