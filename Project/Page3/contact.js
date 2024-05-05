const title = document.querySelector("div.title");
const text = document.querySelector("div.text");
const form1a = document.querySelector("form#form1a");
const btnClick = document.querySelector("button.btnClick");

// addEventListener: sẽ thêm 1 hàm thực thi mới (có thể có nhiều hàm trong cùng 1 sự kiện)
// gán trực tiếp thuộc tính onclick -> chỉ có 1 hàm được gán
// tạo ra 1 biến trung gian để kiểm tra thứ tự click
// dùng biến boolean (chỉ có 2 giá trị true || false)
let check = true;

// nếu true -> là mặc định: trong trường hợp là mặc định -> thực hiện yêu cầu
// nếu false -> là thay đổi: trong trường hợp yêu cầu -> về mặc định

btnClick.onclick = function () {
  //     console.log('click me');
  //     // nội dung thay đổi
  //     // style thay đổi

  //     // khi kích lại 1 lần nữa -> thì phải reset lại nội dung ban đầu

  if (check) {
    title.innerHTML = "Message sent. We'll contact you soon.";
    text.style.display = "none";
    form1a.style.display = "none";
    btnClick.innerHTML = "GO BACK";
  } else {
    title.innerHTML = "We would love to hear from you.";
    text.style.display = "block";
    form1a.style.display = "block";
    btnClick.innerHTML = "SEND MESSAGE";
  }
  check = !check;
};
