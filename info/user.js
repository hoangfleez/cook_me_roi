function showInfo(id){
    $.ajax({
            type: 'GET',
              url:`http://localhost:3000/auth/user?id=${id}`,
              headers:{
                  "Content-Type": "application/json",
                  'Authorization':  'Bearer ' + localStorage.getItem('authorization')
              },success(data){

                $.ajax({
                    type: 'GET',
                    url:`http://localhost:3000/auth/user?id=${id}`,
                    headers:{
                        "Content-Type": "application/json",
                        'Authorization':  'Bearer ' + localStorage.getItem('authorization')
                    },success(postList){
                        let posts=``
                        postList.map(item=>{
                            posts+=`<div class="posts">
                            <div class="posts-top">
                              <div class="posts-top-user">
                                <img
                                  src="${item.user.avatar}"
                                  alt=""
                                />
                                <div class="posts-top-user-name">
                                  <a><span>${item.user.name}</span></a>
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
                        });
                        let html=`
                        <div>
                        <link rel="stylesheet" href="./info/user.css" />
                        </div>
                        <body>
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
                                            src="${data.background}"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <!-- -------------------settings-menu----------------------- -->
                                <div class="settings-menu">
                                    <div id="dark-btn">
                                        <span></span>
                                    </div>
                        
                                </div>
                            </div>
                        </nav>
                        
                        <div class="body">
                            <div class="main-body">
                                <div class="background-img">
                                    <label for="background-img">
                                        <img src="../img/champagne-beach-espiritu-santo-island-vanuatu-royalty-free-image-1655672510.jpg" alt="">
                                        <input type="file" id="background-img" style="display: none" >
                                    </label>
                                </div>
                                <div class="information">
                                    <div class="user-avt">
                                        <label for="user-avt">
                                            <img src="${data.avatar}" alt="">
                                            <input type="file" id="user-avt" style="display: none">
                                        </label>
                                    </div>
                                    <div class="user-name">
                                        <span>Tên tài khoản</span>
                                    </div>
                                </div>
                                <div class="post">
                                    jádgạgdạgdjádjhạdg
                                </div>
                            </div>
                        
                        </div>
                        <script src="scrip.js"></script>
                        </body>`;
                        $("#body").html(html);
                }        
            })
        }
    })
}