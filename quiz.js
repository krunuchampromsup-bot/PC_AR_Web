function checkQuiz(lessonKey){
  const radios = document.querySelectorAll("input[name='q']");
  let gained = 0;

  radios.forEach(r => {
    if(r.checked){
      gained = parseInt(r.value);
    }
  });

  if(gained > 0){
    addScore(gained, lessonKey); // ใช้ระบบคะแนนกลาง
    alert("✅ ถูกต้อง ได้ " + gained + " คะแนน");
  }else{
    alert("❌ ยังไม่ถูก");
  }
}
