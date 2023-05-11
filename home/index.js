

function createCmt(id){
  let content = $("#comment-content").val();
  console.log(content);
  let comment={
    content:content
  }
  $.ajax({
    type:'POST',
    url:`http://localhost:3000/comment?id=${id}`,
    headers:{
        "Content-Type": "application/json",
        'Authorization':  'Bearer ' + localStorage.getItem('authorization')
    },data: JSON.stringify(comment),
    success(){
      showCommentBox(id);
    }
})
}

function createPost(){
  let postContent = $('#postContent').val();
  let postImage = $(`#image`).val()
  let post = {
      postContent:postContent,
      postImage:postImage
  }
  $.ajax({
      type:'POST',
      url:`http://localhost:3000/post`,
      headers:{
          "Content-Type": "application/json",
          'Authorization':  'Bearer ' + localStorage.getItem('authorization')
      },
      data: JSON.stringify(post),
      success:()=>{
        closeCommentBox()
          getUser()
      }
  })
}

function getUser(){
  $.ajax({
      type: 'GET',
      url:`http://localhost:3000/auth/home`,
      headers:{
          "Content-Type": "application/json",
          'Authorization':  'Bearer ' + localStorage.getItem('authorization')
      }, 
      success(userLogin){
        console.log("userLogin:", userLogin);
              $.ajax({
                type: "GET",
                url:`http://localhost:3000/friend`,
                  headers:{
                      "Content-Type": "application/json",
                      'Authorization':  'Bearer ' + localStorage.getItem('authorization')
                  }, 
                  success(friendList){
                    $.ajax({
                      type: "GET",
                      url:`http://localhost:3000/post`,
                        headers:{
                            "Content-Type": "application/json",
                            'Authorization':  'Bearer ' + localStorage.getItem('authorization')
                        },
                        success(postList){
                            console.log("post list:",postList)
                          let posts=``
                          postList.map(item => {
                            posts+=`<div class="posts">
                            <div class="posts-top">
                              <div class="posts-top-user">
                                <img
                                  src="${item.avatar}"
                                  alt=""
                                />
                                <div class="posts-top-user-name">
                                  <a><span>${item.name}</span></a>
                                  <a 
                                    ><small
                                      >Public <i class="fa-solid fa-earth-americas"></i></small
                                  ></a>
                                </div>
                              </div>
                              <div class="posts-top-ntm">
                                <i class="fa-solid fa-ellipsis"></i>
                              </div>
                            </div>
                            <div class="posts-main">
                              <div class="posts-main-text">
                                <span>
                                ${item.postContent}
                                </span>
                              </div>
                              <div class="posts-main-img">
                                <img
                                  src="${item.postImage}"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div class="posts-bottom" >
                              <div class="posts-bottom-like" onclick="like(${item.id})">
                                <i class="fa-light fa-thumbs-up" id="like-${item.id}"></i>
                                <span>100</span>
                              </div>
                              <div class="posts-bottom-cmt" onclick="showCommentBox('${item.id}')">
                                <i class="fa-regular fa-message"></i>
                                <span> 0 </span>
                              </div>
                              <div class="posts-bottom-share">
                                <i class="fa-light fa-share"></i>
                                <span></span>
                              </div>
                            </div>
                          </div>`
                          })
                          showHomePage(userLogin[0],friendList,posts);
                        }
                  })
              }})
      }
  })
}


function showHomePage(user, friendList,posts) {
  let friendHtml=``
  friendList.map(item=>{
    friendHtml+=`<div class="user">
         <div class="user-avata online">
           <img
             src="${item.avatar}"
             alt=""
           />
         </div>
         <div class="user-name">
           <h4>${item.name}</h4>
         </div>
       </div>`
  })


  let html = `
 <div><link rel="stylesheet" href="./home/home.css"></div>
 
 <nav>
 <div class="nav-center">
   <ul>
     <li><i class="fa-solid fa-house" ></i></li>
     <li><i class="fa-solid fa-tv"></i></li>
     <li><i class="fa-solid fa-shop"></i></li>
     <li><i class="fa-solid fa-gamepad-modern"></i></li>
     <li><i class="fa-solid fa-face-icicles"></i></li>
   </ul>
 </div>
 <div class="nav-left">
   <div class="nav-left-inner">
     <a href=""><i class="fa-brands fa-facebook"></i></a>
     <div class="search">
       <i class="fa-regular fa-magnifying-glass"></i>
       <input type="search" placeholder="Tìm kiếm ..." />
     </div>
   </div>
 </div>
 <div class="search-box">
   <div class="search-box-inner">
     <i class="fa-solid fa-left-long"></i>
     <div class="search">
       <i class="fa-regular fa-magnifying-glass"></i>
       <input type="search" placeholder="Tìm kiếm ..." />
       
     </div>

   </div>
   <div class="search-box-over">
     <h1>a</h1>
     <h1>a</h1>
     <h1>a</h1>
     <h1>a</h1>
     <h1>a</h1>
     <h1>a</h1>
     <h1>a</h1>

   </div>
 </div>
 <div class="nav-right">
   <div class="icon">
     <div class="icon-menu"><i class="fa-solid fa-grip-dots"></i></div>
     <div class="icon-mess"><i class="fa-thin fa-message-heart"></i></div>
     <div class="icon-notification"><i class="fa-solid fa-bell"></i></div>
     <div class="icon-user" onclick="settingsMenuToggle()">
       <img
         src="${user.avatar}"
         alt=""
       />
     </div>
   </div>
   <!-- -------------------settings-menu----------------------- -->
   <div class="settings-menu">
     <div id="dark-btn" onclick="changeBackground()">
       <span></span>
     </div>
     <div class="settings-menu-inner">
       <div class="user">
         <img
           src="${user.avatar}"
           alt=""
         />
         <div class="user-name">
           <span>${user.name}</span>
           <a href=""> <small> See your profile</small></a>
         </div>
       </div>
       <hr />
       <div class="settings-links">
         <div class="settings-links-left">
           <div class="settings-links-left-icon">
             <i class="fa-solid fa-gear"></i>
           </div>
           <span>Settings & Pryvacy</span>
         </div>
         <div class="settings-links-right">
           <i class="fa-regular fa-chevron-right"></i>
         </div>
       </div>
       <div class="settings-links">
         <div class="settings-links-left">
           <div class="settings-links-left-icon">
             <i class="fa-light fa-circle-question"></i>
           </div>
           <span>Help & support</span>
         </div>
         <div class="settings-links-right">
           <i class="fa-regular fa-chevron-right"></i>
         </div>
       </div>
       <div class="settings-links">
         <div class="settings-links-left">
           <div class="settings-links-left-icon">
             <i class="fa-solid fa-moon"></i>
           </div>
           <span>Display & Accessibility</span>
         </div>
         <div class="settings-links-right">
           <i class="fa-regular fa-chevron-right"></i>
         </div>
       </div>
       <div class="settings-links">
         <div class="settings-links-left">
           <div class="settings-links-left-icon" onclick="showFormLogin()">
             <i class="fa-solid fa-right-from-bracket"></i>
           </div>
           <span>Log out</span>
         </div>
         <div class="settings-links-right">
           <i class="fa-regular fa-chevron-right"></i>
         </div>
       </div>
     </div>
   </div>
 </div>
 <div class="post-box">
   <div class="post-box-top">
     <div class="titel">
       <span>Tạo bài viết</span>
     </div>
     <div class="close" id="closeButton">
       <i class="fa-duotone fa-circle-xmark" onclick="hideModal()"></i>
     </div>
   </div>
   <div class="post-box-center">
     <div class="user">
       <div class="user-avata">
         <img
           src="${user.avatar}"
           alt=""
         />
       </div>
       <div class="user-name">
         <span>${user.name}</span>
         <small>public <i class="fa-solid fa-earth-americas"></i> </small>
       </div>
     </div>
     <div class="content">
       <textarea  id="postContent" placeholder="Bạn đang nghĩ gì thế ${user.name}?" value=""></textarea>
       <div id="imgDiv" val></div>
       <div class="add">
         <span>Thêm vào bài đăng</span>
          <input type="hidden" class="form-control"  name="image"placeholder="image" id="image" />
            <input
                style="display: none;"
                type="file"
                id="fileButton"
                onchange="uploadImage(event)"
              />    
              <label for="fileButton">
              <i class="fa-duotone fa-image" style=" --fa-primary-color: #45b526;--fa-secondary-color: #adbdad"></i></label>
         
       </div>
     </div>
   </div>
   <div class="post-box-bottom" onclick="createPost()">
     <span>Đăng</span>
   </div>
 </div>


<div id="comment"></div>

 <div class="comment-box">
      <div id="body-post">
        </div>
    </div>
</nav>

<div class="body">
 <!-- -----------------left-sidebar------------------- -->
 <div class="left-sidebar">
   <div class="imp-links">
     <div class="imp-links-frend" onclick="getWaitList()">
       <i
         class="fa-duotone fa-user-group"
         style="--fa-primary-color: #3974db; --fa-secondary-color: #23cbe1"
       ></i>
       <span>Friend</span>
     </div>
     <div class="imp-links-news">
       <i
         class="fa-duotone fa-newspaper"
         style="--fa-secondary-color: #266d58"
       ></i>
       <span>News</span>
     </div>
     <div class="imp-links-group">
       <i
         class="fa-duotone fa-people-group"
         style="--fa-primary-color: #1151c0; --fa-secondary-color: #c16782"
       ></i>
       <span>Group</span>
     </div>
     <div class="imp-links-bookmark">
       <i class="fa-solid fa-bookmark" style="color: #5765cb"></i>
       <span>Bookmark</span>
     </div>
     <div class="imp-links-home">
       <i
         class="fa-duotone fa-flag"
         style="--fa-primary-color: #237185; --fa-secondary-color: #ff8800"
       ></i>
       <span>Page</span>
     </div>
     <div class="imp-links-more">
       <i class="fa-duotone fa-circle-chevron-down"></i>
       <span>See More</span>
     </div>
   </div>
   <div class="shortcut-links">
     <span>Your Shortcut</span>
     <div class="imp-links-frend">
       <i class="fa-regular fa-user-group"></i>
       <span>Frend</span>
     </div>
     <div class="imp-links-frend">
       <i class="fa-regular fa-user-group"></i>
       <span>Frend</span>
     </div>
     <div class="imp-links-frend">
       <i class="fa-regular fa-user-group"></i>
       <span>Frend</span>
     </div>
   </div>
 </div>

 <!-- -----------------main-content------------------- -->
 <div class="main-content">
   <div class="story-gallery">
     <div class="story">
       <div class="story-img">
         <img src="" alt="" />
       </div>
       <div class="story-post">
         <i class="fa-solid fa-circle-plus" style="color: #467ddd"></i>
         <span>Post Story</span>
       </div>
     </div>
   </div>

   <div class="write-post-container">
     <div class="top">
       <img
         src="${user.avatar}"
         alt=""
       />
       <div class="top-input-box" id="input-box" onclick="showModal()">
         <span>Bạn đang nghĩ gì thế?</span>
       </div>
     </div>
     <div class="bottom">
       <div class="bottom-btn">
         <div class="bottom-btn-video">
           <i class="fa-solid fa-video-plus" style="color: #ca1c36"></i>
           <span>Live video</span>
         </div>
         <div class="bottom-btn-music">
           <i
             class="fa-solid fa-photo-film-music"
             style="color: #27a03b"
           ></i>
           <span>Image/video</span>
         </div>
         <div class="bottom-btn-smile">
           <i class="fa-solid fa-face-smile" style="color: #ddf335"></i>
           <span>Feeling</span>
         </div>
       </div>
     </div>
   </div>

   <div class="post-container">
   ${posts}
    
   </div>
 </div>'

 <!-- -----------------right-sidebar------------------- -->
 <div class="right-sidebar">
   <div class="birthday">
     <h3>Sinh nhật</h3>
     <div class="birthday-list">
       <i
         class="fa-duotone fa-gift"
         style="--fa-primary-color: #d93f3f; --fa-secondary-color: #1355be"
       ></i>
       <span>Hôm nay là sinh nhật của bắp đừn hhaha</span>
     </div>
   </div>
   <div class="frend">
     <div class="titel">
       <div class="titel-text">
         <h4>Người liên hệ</h4>
       </div>
       <div class="titel-icon">
         <div class="titel-icon-video">
           <i class="fa-solid fa-video"></i>
         </div>
         <div class="titel-icon-glass">
           <i class="fa-light fa-magnifying-glass"></i>
         </div>
         <div class="titel-icon-stroke">
           <i class="fa-solid fa-ellipsis-stroke"></i>
         </div>
       </div>
     </div>
     <div class="frends">
     ${friendHtml}
       
     </div>
   </div>
 </div>
</div>
<script src="./home/home.js" ></script>
 `;
  $("#body").html(html);
}

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


function showCommentBox(id){
  let open = document.querySelector(".comment-box");
  let nav = document.getElementById("a");

  $.ajax({
      type:'GET',
      url:`http://localhost:3000/post/comment?id=${id}`,
      headers:{
          "Content-Type": "application/json",
          'Authorization':  'Bearer ' + localStorage.getItem('authorization')
      },
      success(userPost){
          $.ajax({
            type:'GET',
            url:`http://localhost:3000/comment/post?id=${id}`,
            headers:{
                "Content-Type": "application/json",
                'Authorization':  'Bearer ' + localStorage.getItem('authorization')
                }
                ,success(comments){
                  let listComment=``
                  comments.map(item => {
                    listComment += `
                    <div class="comments">
                    <div class="user">
                      <div class="user-avata ">
                        <img
                          src="${item.user.avatar}"
                          alt=""
                        />
                      </div>
                      <div class="user-name">
                        <h4>${item.user.name}</h4>
                        <div class="text">
                        ${item.content}
                        </div>
                      </div>
                    </div>
                  </div>
                    `
                  })
                    $.ajax({
                        type:'GET',
                        url:`http://localhost:3000/auth/home`,
                        headers:{
                            "Content-Type": "application/json",
                            'Authorization':  'Bearer ' + localStorage.getItem('authorization')
                            },success(user){
                              $("#body-post").html(`
                              <div class="top">
                              <div class="top-titel">Bài viết của ${userPost[0].user.name} </div>
                              <div class="top-close" onclick="closeCommentBox()">
                                <i class="fa-duotone fa-circle-xmark"></i>
                              </div>
                            </div>
                            <div class="center">
                              <div class="posts">
                                <div class="posts-top">
                                  <div class="posts-top-user">
                                    <img
                                      src="${userPost[0].user.avatar}"
                                      alt=""
                                    />
                                    <div class="posts-top-user-name">
                                      <a href=""><span>${userPost[0].user.name}</span></a>
                                      <a href=""
                                        ><small
                                          >Public <i class="fa-solid fa-earth-americas"></i></small
                                      ></a>
                                    </div>
                                  </div>
                                  <div class="posts-top-ntm">
                                    <i class="fa-solid fa-ellipsis"></i>
                                  </div>
                                </div>
                                <div class="posts-main">
                                  <div class="posts-main-text">
                                    <span
                                      >
                                      ${userPost[0].postContent}
                            
                                    </span>
                                  </div>
                                  <div class="posts-main-img">
                                    <img
                                      src="${userPost[0].postImage}"
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                                   ${listComment}
                            </div>
                            <div class="bottom">
                              <div class="avata">
                                <img
                                  src="${user[0].avatar}"
                                  alt=""
                                />
                              </div>
                              <div class="comment">
                                <textarea
                                  id="comment-content"
                                  placeholder="Viết bình luận ..."
                                  required
                                  height()
                                ></textarea>
                                <div onclick="createCmt(${userPost[0].id})"><i class="fa-solid fa-paper-plane-top fa-xl" ></i></div>
                              </div>
                            </div>`)
                            }
                    })
                }
          })
      }
  })
  open.style.display = "block"
  nav.style.overflowY = "hidden"
}





function closeCommentBox(){
  let open = document.querySelector(".comment-box");
  let nav = document.getElementById("a");
  open.style.display = "none"
  nav.style.overflowY = "auto"
}
// like comment

function like(idPost){

  let icon = document.getElementById(`like-${idPost}`);
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


