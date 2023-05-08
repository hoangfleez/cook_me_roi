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
                              <button class="btn btn-primary col-12 col-md-12 btn-lg" type="button" id="login" onclick="login()">Đăng nhập
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
                <div class="modal-content" >
                    <div class="modal-header">
                        <div class="modal-header-text">
                            <h2 class="modal-title" id="exampleModalLabel"><b>Đăng ký</b></h2>
                            <small>Nhanh chóng và dễ dàng.</small>
                        </div>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="modal-body-main">
                        
                        <form id="modal-validate">
                            <div class="form-group">
                                    <input type="text"  class="input-box" id="nameRegister"  placeholder="Tên">
                                    <small id="nameRegister-err" style="font-size:13px"></small>
                            </div>
                            <div class="form-group">
                                <input type="email" class="input-box" id="emailRegister"  placeholder="Tên tài khoản" required>
                                <small id="emailRegister-err" style="font-size:13px"></small>
                            </div>
                            <div class="form-group">
                                <div class="form-password">
                                    <input type="password" class="input-box" placeholder="Mật khẩu mới" id="passwordRegister" name="psw"required>
                                    <i id="eye-register" class="fa-solid fa-eye" style="margin-right: 10px"></i>
                                </div>
                                <small id="passwordRegister-err" style="font-size:13px" ></small>
                            </div>
                        
                            
                             
                                
                                <select class="input-box" id="genderRegister" value="Giới tính">
                                  <option selected disabled>Giới tính</option>
                                  <option>Nam</option>
                                  <option>Nữ</option>
                                  <option>Khác</option>
                                </select>
                            
                          
                            <small style="font-size: 12px;font-weight: 500;" >Những người dùng dịch vụ của chúng tôi có thể đã tải thông tin liên hệ của bạn lên Facebook. <a href="">Tìm hiểu thêm</a>. 
                            </br>    
                            Bằng cách nhấp vào Đăng ký, bạn đồng ý với <a href=""> Điều khoản</a>,<a href=""> Chính sách quyền riêng tư</a> và <a href=""> Chính sách cookie</a> của chúng tôi. Bạn có thể nhận được thông báo của chúng tôi qua SMS và hủy nhận bất kỳ lúc nào.
                            </small>
                    </div>
                    
                </div>
                <div class="modal-footer">
                    <button type="button" id="button" class="btn btn-success" register()>Tạo tài khoản</button>
                </div>  
        </div>
    </div>
</div>
<script src="./login_logout/login_logout.js" ></script>
<script src="https://code.jquery.com/jquery-1.11.1.min.js"></script>
<script src="https://cdn.jsdelivr.net/jquery.validation/1.16.0/jquery.validate.min.js"></script>
<script src="https://cdn.jsdelivr.net/jquery.validation/1.16.0/additional-methods.min.js"></script>

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
      console.log(data);
      if (data.message) {
        $("#login-status").text(data.message);
      } else {
        showHomePage();
        localStorage.setItem("authorization", data);
      }
    },
  });
}


 

$(document).ready(function () {
  $("#button").on("click",function () {
      let email = $("#emailRegister").val();
      let password = $("#passwordRegister").val();
      let name = $("#nameRegister").val();
      let gender = $("#genderRegister").val();

      if (email === "" && password === "" && name === "" ){
        $("#nameRegister-err").text("Tên bạn là gi?").css("color", "red");
        $("#emailRegister-err").text("Không được để trống!").css("color", "red");
        $("#passwordRegister-err").text("Không được để trống!") .css("color", "red");
      }else if (name !== "" && password === "" && email === "" ) {
        $("#emailRegister-err").text("Không được để trống!").css("color", "red");
        $("#passwordRegister-err").text("Không được để trống!") .css("color", "red");
      }else if (name === "" && password !== "" && email === ""){
        $("#nameRegister-err").text("Tên bạn là gi?").css("color", "red");
        $("#passwordRegister-err").text("Không được để trống!") .css("color", "red");
      }else if(name === "" && password === "" && email !== ""){
        $("#nameRegister-err").text("Tên bạn là gi?").css("color", "red");
        $("#emailRegister-err").text("Không được để trống!").css("color", "red");
      }
      else {
        $("#nameRegister-err").text("");
        $("#emailRegister-err").text("");
        $("#passwordRegister-err").text("");
      }
    }
  );
  $('#nameRegister').on('input', function(){
    let name = $(this).val();
    if (name === ""){
      $("#nameRegister-err").text("Tên bạn là gì?").css("color", "red");
    }else{
      $("#nameRegister-err").text("")
    }
  });
  $('#passwordRegister').on('input', function(){
    let password = $("#passwordRegister").val();
    let regexPassword = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!regexPassword.test(password)){
      $("#passwordRegister-err").text("Mật khẩu phải có ít nhất 6 ký tự, 1 số và 1 chữ viết hoa") .css("color", "red");
    }else{
      $("#passwordRegister-err").text("");
    }
  });

  $('#emailRegister').on('input', function(){
    let email = $("#emailRegister").val();
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!regexEmail.test(email)){
      $("#emailRegister-err").text("Email không hợp lệ").css("color", "red")
    }else{
      $("#emailRegister-err").text("");
    }
  });

  $('#button').on('click', register = ()=>{
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
    if(email.trim()!==""){
      $.ajax({
        type: "POST",
        url: "http://localhost:3000/auth/",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify(user),
        success: function (data) {
          console.log(data);

            $("#emailRegister-err").text(data.messages).css("color", "red")
            $("#exampleModal").modal("hide");
          
        },
    
      });
    }
  })
});
