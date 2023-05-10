

function addFriend(id){
  $.ajax({
    type: 'POST',
      url:`http://localhost:3000/friend?id=${id}`,
      headers:{
          "Content-Type": "application/json",
          'Authorization':  'Bearer ' + localStorage.getItem('authorization')
      },success(data){
        alert(data);
        getWaitList()
      }
    })
}

function confirmFriend(id){
  $.ajax({
    type: 'PATCH',
      url:`http://localhost:3000/friend?id=${id}`,
      headers:{
          "Content-Type": "application/json",
          'Authorization':  'Bearer ' + localStorage.getItem('authorization')
      },success(data){
        getWaitList()
      }
    })
}

function removeFriend(id){
  $.ajax({
    type: 'DELETE',
      url:`http://localhost:3000/friend?id=${id}`,
      headers:{
          "Content-Type": "application/json",
          'Authorization':  'Bearer ' + localStorage.getItem('authorization')
      },success(data){
        getWaitList()
      }
    })
}

function getWaitList(){
  $.ajax({
    type: 'GET',
      url:`http://localhost:3000/friend/wait`,
      headers:{
          "Content-Type": "application/json",
          'Authorization':  'Bearer ' + localStorage.getItem('authorization')
      }, 
      success(data){
        let waitList = ``
        data.map(item=>{
          waitList+=`
          <div class="content">
              <div class="content-img">
                  <img src="${item.user.avatar}"alt="">
              </div>
              <div style="margin:10px ">
                  <p>${item.user.name}</p>
              </div>
              <div class="button">
                  <div class="confirm" onclick="confirmFriend(${item.id})" >Đồng ý</div>
                  <div class="no" onclick="removeFriend(${item.id})">Đéo</div>
              </div>
              </div>
          `
        })

        $.ajax({
          type: 'GET',
          url:`http://localhost:3000/friend/not`,
          headers:{
            "Content-Type": "application/json",
            'Authorization':  'Bearer ' + localStorage.getItem('authorization')
          },
          success(data){
              let listNot =``
               data.map(item=>{
                  listNot+=` 
                  <div class="content">
                  <div class="content-img">
                      <img src="${item.avatar}"
                           alt="">
                  </div>
                  <div style="margin:10px ">
                      <p>${item.name}</p>
                  </div>
                  <div>
                      <div class="send" onclick="addFriend(${item.id})">Gửi lời mời</div>
                      <div class="no" onclick="removeFriend(${item.id})">éo</div>
                  </div>
              </div>`;
              showFriend(waitList,listNot)
               })
          }
        })

        
      }
  })
}


function showFriend(waitList,listNot){
  let html=` <body>
  <div> <link rel="stylesheet" href="frend.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.4.0/css/all.css"/>
        <link rel="stylesheet" href="./frend/frend.css" />
  </div>
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
        <a onclick="getUser()"><i class="fa-brands fa-facebook"></i></a>
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
            src="https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg"
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
              src="https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg"
              alt=""
            />
            <div class="user-name">
              <span>bawp dun</span>
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
              <div class="settings-links-left-icon" onclick="showFormLogin()" >
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
          <i class="fa-duotone fa-circle-xmark"></i>
        </div>
      </div>
      <div class="post-box-center">
        <div class="user">
          <div class="user-avata">
            <img
              src="https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg"
              alt=""
            />
          </div>
          <div class="user-name">
            <span>bawp dun</span>
            <small>public <i class="fa-solid fa-earth-americas"></i> </small>
          </div>
        </div>
        <div class="content">
          <textarea name="" id=""></textarea>
          <img
            src="https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg"
            alt=""
          />
          <div class="add">
            <span>Thêm vào bài đăng</span>
            <a href=""
              ><i
                class="fa-duotone fa-image"
                style="
                  --fa-primary-color: #45b526;
                  --fa-secondary-color: #adbdad;
                "
              ></i
            ></a>
          </div>
        </div>
      </div>
      <div class="post-box-bottom">
        <span>Đăng</span>
      </div>
    </div>
  </nav>

  <div class="body">
    
      <div class="left-body">
          <div class="left-body-top">
              <p>Friend</p>
          </div>

      </div>

      <div class="right-body">

          <div class="right-body-content">
              <div>
                  <h1>Lời mời kết bạn</h1>
              </div>
              <div style="display: flex;flex-wrap: wrap">
              ${waitList}
          
                 
              </div>
          </div>

          <div class="introduce">
              <div style="padding: 10px">
                      <h2>Những người bạn có thể biết!</h2>
                  </div>
              <div style="display: flex;flex-wrap: wrap">
              ${listNot}
              </div>
          </div>

      </div>
  </div>
  <script src="scrip.js"></script>
</body>`;
$("#body").html(html);

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