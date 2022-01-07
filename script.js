const menuBtn = document.queryselector(".menu-icon span");
const searchBtn = document.queryselector(".search-icon ");
const cancelBtn = document.queryselector(".cancel-icon");
const items = document.queryselector(".nav-items");
const form = document.queryselector("form");
menuBtn.onclick = ()=>{
    items.classList.add("active");
    this.classList.add("hide");
    searchBtn.classList.add("hide");
    cancelBtn.classList.add("show");
}

