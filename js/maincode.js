
const familyItems = document.querySelectorAll(".menu-family__item");
const lordsLits = document.querySelectorAll(".lords__list");

const lordsNames = document.querySelectorAll(".lords__link")
const lordInfo = document.querySelectorAll(".lords__info")

familyItems.forEach(function(item) {

// ------------------ Содержит ли фамилия активный класс---------------------------------
   if (item.classList.contains("active")) {
      let itemIsActive = item
      let activeId = itemIsActive.getAttribute("data-family")
      let activeLordsList = document.querySelector(activeId)
      activeLordsList.classList.add("active")
   }

// --------------------Событие при клике на меню фамилии ---------------------------------
   item.addEventListener("click", function (event) {
      event.preventDefault();

      let currentFamilyItem = item;
      let familyId = currentFamilyItem.getAttribute("data-family");
      let curentLordsList = document.querySelector(familyId);

      if (!currentFamilyItem.classList.contains("active")) {

         familyItems.forEach(function(i) {
            if(i.classList.contains("active")) {
               i.classList.remove("active")
            }
         });
         currentFamilyItem.classList.add("active");
   
         lordsLits.forEach(function(item){
            if (item.classList.contains("active")) {
               item.classList.remove("active")
            }
         });
         curentLordsList.classList.add("active");

         lordInfo.forEach(function(i) {
            if (i.classList.contains("active")) {
               i.classList.remove("active")
            }
         })
      }
   })
// ---------------------------------------------------------------------------------------
})


lordsNames.forEach(function(name) {
// ------------------------Событие при клике на меню имя --------------------------------------
   name.addEventListener("click", function(e) {
      e.preventDefault();

      let currentName = name;
      let nameId = currentName.getAttribute("data-name");
      let currentLordInfo = document.querySelector(nameId);

      if (!currentName.classList.contains("active")) {

         lordsNames.forEach(function(i) {
            if (i.classList.contains("active")) {
               i.classList.remove("active")
            }
         })
         currentName.classList.add("active")
   
         lordInfo.forEach(function(item) {
            if (item.classList.contains("active")) {
               item.classList.remove("active")
            }
         })
         currentLordInfo.classList.add("active")
      }
   })
// ---------------------------------------------------------------------------
})
