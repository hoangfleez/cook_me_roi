function uploadImage(e) {
  let fbBucketName = "images";
  let uploader = document.getElementById("uploader");
  let file = e.target.files[0];
  let storageRef = firebase.storage().ref(`${fbBucketName}/${file.name}`);
  let uploadTask = storageRef.put(file);
  uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      function (snapshot) {
        uploader.value =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED:
            break;
          case firebase.storage.TaskState.RUNNING:
            break;
        }
      },
      function (error) {
        switch (error.code) {
          case "storage/unauthorized":
            break;
          case "storage/canceled":
            break;
          case "storage/unknown":
            break;
        }
      },
      function () {
        let downloadURL = uploadTask.snapshot.downloadURL;
        console.log(downloadURL);
        document.getElementById(
            "imgDiv"
        ).innerHTML = `<img src="${downloadURL}" alt="" style="width: 450px; height: 180px" >`;
        document.getElementById("image").value = downloadURL;
      }
  );
}


function settingsMenuToggle() {
  const settingsmenu = document.querySelector(".settings-menu");
  settingsmenu.classList.toggle("settings-menu-height");
}

function changeBackground(){
  const darkBtn = document.getElementById("dark-btn");
  darkBtn.classList.toggle("dark-btn-on");
  document.body.classList.toggle("dark-theme");
  if (localStorage.getItem("theme") == "light") {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}


if (localStorage.getItem("theme") == "light") {
  darkBtn.classList.remove("dark-btn-on");
  document.body.classList.remove("dark-theme");
} else if (localStorage.getItem("theme") == "dark") {
  darkBtn.classList.add("dark-btn-on");
  document.body.classList.add("dark-theme");
} else {
  localStorage.setItem("theme", "light");
}





// like comment
function like(){

  let icon = document.getElementById("like");
  let likes = icon.getAttribute("class");
  let newClassLikes = (likes === 'fa-light fa-thumbs-up') ? 'fa-solid fa-thumbs-up' : 'fa-light fa-thumbs-up'
  icon.setAttribute("class", newClassLikes)
}
function likeInBox(){

  let icon = document.getElementById("likeInBox");
  let likes = icon.getAttribute("class");
  let newClassLikes = (likes === 'fa-light fa-thumbs-up') ? 'fa-solid fa-thumbs-up' : 'fa-light fa-thumbs-up'
  icon.setAttribute("class", newClassLikes)
}