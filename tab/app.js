const list = document.querySelectorAll('.tab-list a');

for (let item of list) {
  item.addEventListener("click", tabFunction);
}

function tabFunction() {
  let tabBtn = this.getAttribute("href").slice(1);

  let tabContent = Array.from(document.querySelectorAll('.tab-content'));
  let tabFilter = tabContent.filter(item => (item.getAttribute('id') === tabBtn));
  let tabActive = document.querySelector('.tab-content.active');
  tabActive.classList.remove("active");
  tabFilter[0].classList.add('active');
}