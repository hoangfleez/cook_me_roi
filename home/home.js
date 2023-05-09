function showForm(){
  let html=` <body>
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
            src="https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg"
            alt=""
          />
        </div>
      </div>
      <!-- -------------------settings-menu----------------------- -->
      <div class="settings-menu">
        <div id="dark-btn">
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
              <div class="settings-links-left-icon">
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
              <div style="display: flex;flex-wrap: wrap; column-gap: 10px">
                  <div class="content">
                      <div class="content-img">
                          <img src="https://happyshop.com.vn/wp-content/uploads/2019/09/do-lot-bikini-sexy-den-DL487-6.jpg"
                               alt="">
                      </div>
                      <div style="margin:10px ">
                          <p>Name</p>
                      </div>
                      <div class="button">
                          <div class="confirm">Đồng ý</div>
                          <div class="no">Đéo</div>
                      </div>
                  </div>
                  <div class="content">
                      <div class="content-img">
                          <img src="https://happyshop.com.vn/wp-content/uploads/2019/09/do-lot-bikini-sexy-den-DL487-6.jpg"
                               alt="">
                      </div>
                      <div style="margin:10px ">
                          <p>Name</p>
                      </div>
                      <div class="button">
                          <div class="confirm">Đồng ý</div>
                          <div class="no">Đéo</div>
                      </div>
                  </div>
                  <div class="content">
                      <div class="content-img">
                          <img src="https://happyshop.com.vn/wp-content/uploads/2019/09/do-lot-bikini-sexy-den-DL487-6.jpg"
                               alt="">
                      </div>
                      <div style="margin:10px ">
                          <p>Name</p>
                      </div>
                      <div class="button">
                          <div class="confirm">Đồng ý</div>
                          <div class="no">Đéo</div>
                      </div>
                  </div>
                  <div class="content">
                      <div class="content-img">
                          <img src="https://happyshop.com.vn/wp-content/uploads/2019/09/do-lot-bikini-sexy-den-DL487-6.jpg"
                               alt="">
                      </div>
                      <div style="margin:10px ">
                          <p>Name</p>
                      </div>
                      <div class="button">
                          <div class="confirm">Đồng ý</div>
                          <div class="no">Đéo</div>
                      </div>
                  </div>
                  <div class="content">
                      <div class="content-img">
                          <img src="https://happyshop.com.vn/wp-content/uploads/2019/09/do-lot-bikini-sexy-den-DL487-6.jpg"
                               alt="">
                      </div>
                      <div style="margin:10px ">
                          <p>Name</p>
                      </div>
                      <div class="button">
                          <div class="confirm">Đồng ý</div>
                          <div class="no">Đéo</div>
                      </div>
                  </div>
                  <div class="content">
                      <div class="content-img">
                          <img src="https://happyshop.com.vn/wp-content/uploads/2019/09/do-lot-bikini-sexy-den-DL487-6.jpg"
                               alt="">
                      </div>
                      <div style="margin:10px ">
                          <p>Name</p>
                      </div>
                      <div class="button">
                          <div class="confirm">Đồng ý</div>
                          <div class="no">Đéo</div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="introduce">
              <div style="padding: 10px">
                      <h2>Những người bạn có thể biết!</h2>
                  </div>
              <div style="display: flex;flex-wrap: wrap;column-gap: 10px">
                  <div class="content">
                          <div class="content-img">
                              <img src="https://happyshop.com.vn/wp-content/uploads/2019/09/do-lot-bikini-sexy-den-DL487-6.jpg"
                                   alt="">
                          </div>
                          <div style="margin:10px ">
                              <p>Name</p>
                          </div>
                          <div>
                              <div class="send">Gửi lời mời</div>
                              <div class="no">Đéo</div>
                          </div>
                      </div>
                  <div class="content">
                      <div class="content-img">
                          <img src="https://happyshop.com.vn/wp-content/uploads/2019/09/do-lot-bikini-sexy-den-DL487-6.jpg"
                               alt="">
                      </div>
                      <div style="margin:10px ">
                          <p>Name</p>
                      </div>
                      <div>
                          <div class="send">Gửi lời mời</div>
                          <div class="no">Đéo</div>
                      </div>
                  </div>
                  <div class="content">
                      <div class="content-img">
                          <img src="https://happyshop.com.vn/wp-content/uploads/2019/09/do-lot-bikini-sexy-den-DL487-6.jpg"
                               alt="">
                      </div>
                      <div style="margin:10px ">
                          <p>Name</p>
                      </div>
                      <div>
                          <div class="send">Gửi lời mời</div>
                          <div class="no">Đéo</div>
                      </div>
                  </div>
                  <div class="content">
                      <div class="content-img">
                          <img src="https://happyshop.com.vn/wp-content/uploads/2019/09/do-lot-bikini-sexy-den-DL487-6.jpg"
                               alt="">
                      </div>
                      <div style="margin:10px ">
                          <p>Name</p>
                      </div>
                      <div>
                          <div class="send">Gửi lời mời</div>
                          <div class="no">Đéo</div>
                      </div>
                  </div>
                  <div class="content">
                      <div class="content-img">
                          <img src="https://happyshop.com.vn/wp-content/uploads/2019/09/do-lot-bikini-sexy-den-DL487-6.jpg"
                               alt="">
                      </div>
                      <div style="margin:10px ">
                          <p>Name</p>
                      </div>
                      <div>
                          <div class="send">Gửi lời mời</div>
                          <div class="no">Đéo</div>
                      </div>
                  </div>
                  <div class="content">
                      <div class="content-img">
                          <img src="https://happyshop.com.vn/wp-content/uploads/2019/09/do-lot-bikini-sexy-den-DL487-6.jpg"
                               alt="">
                      </div>
                      <div style="margin:10px ">
                          <p>Name</p>
                      </div>
                      <div>
                          <div class="send">Gửi lời mời</div>
                          <div class="no">Đéo</div>
                      </div>
                  </div>
                  <div class="content">
                      <div class="content-img">
                          <img src="https://happyshop.com.vn/wp-content/uploads/2019/09/do-lot-bikini-sexy-den-DL487-6.jpg"
                               alt="">
                      </div>
                      <div style="margin:10px ">
                          <p>Name</p>
                      </div>
                      <div>
                          <div class="send">Gửi lời mời</div>
                          <div class="no">Đéo</div>
                      </div>
                  </div>
                  <div class="content">
                      <div class="content-img">
                          <img src="https://happyshop.com.vn/wp-content/uploads/2019/09/do-lot-bikini-sexy-den-DL487-6.jpg"
                               alt="">
                      </div>
                      <div style="margin:10px ">
                          <p>Name</p>
                      </div>
                      <div>
                          <div class="send">Gửi lời mời</div>
                          <div class="no">Đéo</div>
                      </div>
                  </div>

              </div>
          </div>

      </div>
  </div>
  <script src="scrip.js"></script>
</body>`

}