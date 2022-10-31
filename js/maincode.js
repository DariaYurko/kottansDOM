const familyItems = document.querySelectorAll(".menu-family__item");
console.log(familyItems)

const lordsLits = document.querySelectorAll(".lords__list");
console.log(lordsLits)


// --------------------Событие при клике на меню фамилии ---------------------------------
familyItems.forEach(function(item) {
   item.addEventListener("click", function () {
      event.preventDefault();

      let currentFamilyItem = item;
      let familyId = currentFamilyItem.getAttribute("data-family");
      let curentLordsList = document.querySelector(familyId);

      if (!currentFamilyItem.classList.contains("active")) {

         familyItems.forEach(function(familyItem) {
            if(familyItem.classList.contains("active")) {
               familyItem.classList.remove("active")
            }
         });
         currentFamilyItem.classList.add("active");
   
         lordsLits.forEach(function(item){
            if (item.classList.contains("active")) {
               item.classList.remove("active")
            }
         });
         curentLordsList.classList.add("active");
      }

   })
})
// ---------------------------------------------------------


const lordsNames = document.querySelectorAll(".lords__link")
console.log(lordsNames)

const lordInfo = document.querySelectorAll(".lord")
console.log(lordInfo)

lordsNames.forEach(function(name) {
   name.addEventListener("click", function() {
      event.preventDefault();

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
})
