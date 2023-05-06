function showFormLogin() {
  let html = `
  <div>    <link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
  crossorigin="anonymous"
/></div>
 <div><link rel="stylesheet" href="./login_logout/login_logout.css"></div>
 <div class="body">
    <div class="row">
        <div class="col-12 col-md-6">
            <div class=" form-logo">
                <div class="logo">
                    <h1><b>facebook</b></h1>
                </div>
                <h3>
                    Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của bạn
                </h3>
            </div>
        </div>
        <div class="col-12 col-md-6">
            <div class="col-12 col-md-8 form-login ">
                <div class="card shadow-lg">
                    <div class="card-body mt-2">
                            <div class="input-group-lg ">
                                <input type="text" class="form-control border border-dark-subtle" id="email" placeholder="Tài khoản đăng nhập" required>
                            </div>
                            <div class="input-group input-group-lg mt-2 border border-dark-subtle rounded-3">
                                <input type="password" id="password" class="form-control " placeholder="Mật khẩu"  aria-label="Recipient's username" aria-describedby="password-eye">
                                <span class="input-group-text" id="password-eye">
                                    <i id="sp-pw-eye" class="fa-solid fa-eye-slash"></i>
                                </span>
                            </div>
                            <div class=" mt-2" style="height: 25px;" >
                              <span id="login-status" style="color: red"></span> 
                            </div>
                            <div class=" mt-2 mb-2">
                              <button class="btn btn-primary col-12 col-md-12 btn-lg" type="button" onclick="login()">Đăng nhập
                            </button>
                            </div>
                            <div class="col-12 col-md-12 text-center mt-2">
                                <a class="" href="#">Quên mật khẩu</a>
                            </div>
                            <hr>
                        <div class="col-12 col-md-12 mt-4 text-center">
                            <button class="btn btn-success btn-lg text-opacity-50" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal">Tạo tài khoản mới
                            </button>
                        </div>

                    </div>

                </div>
                <div class="col-12 col-md-12 text-center mt-4">
                    <p><span class="fw-bold">Tạo Trang </span>dành cho người nổi tiếng, thương hiệu hoặc doanh nghiệp.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <div class="modal-header-text">
                            <h2 class="modal-title" id="exampleModalLabel"><b>Đăng ký</b></h2>
                            <small>Nhanh chóng và dễ dàng.</small>
                        </div>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="modal-body-main">
                            <div class="form-group">
                                    <input type="text"  class="input-box" id="nameRegister"  placeholder="Tên">
                                    <p id="name-status"></p>
                            </div>
                            <div class="form-group">
                                <input type="email" class="input-box" id="emailRegister"  placeholder="Tên tài khoản" required>
                                <p id="user-status"></p>
                            </div>
                            <div class="form-group">
                                <div class="form-password">
                                    <input type="password" class="input-box" placeholder="Mật khẩu mới" id="passwordRegister" name="psw"pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"title="Phải chứa ít nhất một số và một chữ hoa và chữ thường và ít nhất 6 ký tự trở lên" required>
                                    <i id="eye-register" class="fa-solid fa-eye" style="margin-right: 10px"></i>
                                    <p></p>
                                </div>
                            </div>
                            
                            
                                <div class="form-group  my-4">
                                <label for="exampleFormControlSelect1">Giới tính</label>
                                <select class="input-box" id="genderRegister" value="Giới tính">
                                  <option selected>Giới tính </option>
                                  <option>Nam</option>
                                  <option>Nữ</option>
                                  <option>Khác</option>
                                </select>
                              </div>
                          
                            <small style="font-size: 12px;font-weight: 500;" >Những người dùng dịch vụ của chúng tôi có thể đã tải thông tin liên hệ của bạn lên Facebook. <a href="">Tìm hiểu thêm</a>. 
                            </br>    
                            Bằng cách nhấp vào Đăng ký, bạn đồng ý với <a href=""> Điều khoản</a>,<a href=""> Chính sách quyền riêng tư</a> và <a href=""> Chính sách cookie</a> của chúng tôi. Bạn có thể nhận được thông báo của chúng tôi qua SMS và hủy nhận bất kỳ lúc nào.
                            </small>
                    </div>
                    
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-success" onclick="register()">Tạo tài khoản</button>
                </div>  
        </div>
    </div>
</div>
 <script src="./login_logout/login_logout.js" ></script>
 <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
         crossorigin="anonymous"></script>`;

  $("#body").html(html);
}
showFormLogin();

function login() {
  let email = $("#email").val();
  let password = $("#password").val();
  let user = {
    email: email,
    password: password,
  };
  $.ajax({
    type: "POST",
    url: "http://localhost:3000/auth/login",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(user),
    success(data) {
      if(data.message){
        $('#login-status').text(data.message);
      }else{
        showHomePage();
        localStorage.setItem("authorization", data);
      }
    },
  });
}

function register() {
  let email = $("#emailRegister").val();
  let password = $("#passwordRegister").val();
  let name = $("#nameRegister").val();
  let gender = $("#genderRegister").val();
  let user = {
    email: email,
    password: password,
    name: name,
    gender: gender,
  };
  $.ajax({
    type: "POST",
    url: "http://localhost:3000/auth/",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(user),
    success: function(message) {
      alert(message);
      $("#exampleModal").modal("hide");
    },
  });
}


