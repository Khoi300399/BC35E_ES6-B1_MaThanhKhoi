let tinhDiemTrungBinh = (...arrDiem) => {
  let soMonHoc = arrDiem.length;
  let tinhTong = 0;
  let tinhDiemTB = 0;
  for (let value of arrDiem) {
    tinhTong += value;
    tinhDiemTB = tinhTong / soMonHoc;
  }
};

let hienThiDiemTB = (elementShow, value) => {
  document.querySelector(elementShow).innerHTMl = value;
};

document.querySelector("#btnKhoi1").addEventListener("click", (event) => {
  //chặn sự kiện reload browser*1
  event.preventDefault();
  //   lấy thông tin khối 1 toán-lý-hóa
  let diemToan = document.querySelector("#inpToan").value * 1;
  let diemLy = document.querySelector("#inpLy").value * 1;
  let diemHoa = document.querySelector("#inpHoa").value * 1;
  let diemTB = tinhDiemTrungBinh(diemToan, diemLy, diemHoa);
  hienThiDiemTB("#tbKhoi1", diemTB);
});

document.querySelector("#btnKhoi2").addEventListener("click", (event) => {
  //chặn sự kiện reload browser
  event.preventDefault();
  //   lấy thông tin khối 1 toán-lý-hóa
  let diemVan = document.querySelector("#inpVan").value;
  let diemSu = document.querySelector("#inpSu").value;
  let diemDia = document.querySelector("#inpDia").value;
  let diemEng = document.querySelector("#inpEnglish").value;
  let diemTB = tinhDiemTrungBinh(diemVan, diemSu, diemDia, diemEng);
  hienThiDiemTB("#tbKhoi2", diemTB);
});
