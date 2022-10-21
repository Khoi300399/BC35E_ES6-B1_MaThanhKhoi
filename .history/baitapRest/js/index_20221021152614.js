let tinhDiemTrungBinh = (...arrDiem) => {
  let soMonHoc = arrDiem.length;
  let tinhTong = 0;
  for (let value of arrDiem) {
    tinhTong += value;
  }
  let tinhDiemTB = tinhTong / soMonHoc;
  return tinhDiemTB;
  //   console.log(tinhDiemTB);
};

let hienThiDiemTB = (elementShow, value) => {
  document.querySelector(elementShow).innerHTML = value;
  //   console.log(elementShow);
  //   console.log(value);
};

document.querySelector("#btnKhoi1").onclick = (event) => {
  //chặn sự kiện reload browser*1
  event.preventDefault();
  //   lấy thông tin khối 1 toán-lý-hóa
  let diemToan = document.querySelector("#inpToan").value * 1;
  let diemLy = document.querySelector("#inpLy").value * 1;
  let diemHoa = document.querySelector("#inpHoa").value * 1;
  let diemTB = tinhDiemTrungBinh(diemToan, diemLy, diemHoa);
  hienThiDiemTB("#tbKhoi1", diemTB);
  //   console.log("diemTb :", diemTB);
};

document.querySelector("#btnKhoi2").onclick = (event) => {
  //chặn sự kiện reload browser
  event.preventDefault();
  //   lấy thông tin khối 1 toán-lý-hóa
  let diemVan = document.querySelector("#inpVan").value * 1;
  let diemSu = document.querySelector("#inpSu").value * 1;
  let diemDia = document.querySelector("#inpDia").value * 1;
  let diemEng = document.querySelector("#inpEnglish").value * 1;
  let diemTB = tinhDiemTrungBinh(diemVan, diemSu, diemDia, diemEng);
  hienThiDiemTB("#tbKhoi2", diemTB);
  //   console.log(diemTB);
};
