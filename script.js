function pickCharMerah(character){
  $("#text-field-merah").text(character);
}

function pickCharBiru(character) {
  $("#text-field-biru").text(character);
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
    $("#skill-button-biru-1, #skill-button-biru-2, #skill-button-biru-3").attr(
      "disabled",
      true
    );
    $(".random-button-skill-biru").attr("disabled", true);
  }else{
    $("#skill-button-merah-1, #skill-button-merah-2, #skill-button-merah-3").attr(
      "disabled",
      true
    );
    $(".random-button-skill-merah").attr("disabled", true);
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
}

