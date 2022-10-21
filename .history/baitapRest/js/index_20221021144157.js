let tinhDiemTrungBinh = (...arrDiem) => {
  for (let i in arrDiem) {
    tinhTong += arrDiem[i];
    tinhDiemTB = tinhTong / arrDiem.length;
  }
};

document.querySelector("btnKhoi1").addEventListener("click", (event) => {
  //chặn sự kiện reload browser
  event.preventDefault();
  //   lấy thông tin khối 1 toán-lý-hóa
  let diemToan = document.querySelector("#inpToan").value;
  let diemLy = document.querySelector("#inpLy").value;
  let diemHoa = document.querySelector("#inpHoa").value;
  tinhDiemTrungBinh();
});

document.querySelector("btnKhoi2").addEventListener("click", (event) => {
  //chặn sự kiện reload browser
  event.preventDefault();
  //   lấy thông tin khối 1 toán-lý-hóa
  let diemToan = document.querySelector("#inpVan").value;
  let diemLy = document.querySelector("#inpSu").value;
  let diemHoa = document.querySelector("#inpDia").value;
  let diemHoa = document.querySelector("#inpEnglish").value;
  tinhDiemTrungBinh();
});
