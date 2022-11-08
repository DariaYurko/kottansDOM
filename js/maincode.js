const familyItems = document.querySelectorAll(".menu-family__link");
const lordsLits = document.querySelectorAll(".lords__list");
const lordsNames = document.querySelectorAll(".lords__link")
const lordInfo = document.querySelectorAll(".lord")
const burgerIcon = document.querySelector(".burger")
const familyMenu = document.querySelector(".menu-family")

const idTtargarians = "#targarians"
const idLannisters = "#lannisters"
const idBaratheons = "#baratheons"
const idStarks = "#starks"

let lordTargarian = 0
let lordLannister = 0
let lordBaratheon = 0
let lordStark = 0

// ----------- Удаление класса -----------------------------------
function removeClass(elementName, className) {
   elementName.forEach(function (item) {
      item.classList.remove(className)
   })
}
// ---------------------------------------------------------------

document.addEventListener("click", function (clickItem) {

   let currentItem = clickItem.target;

   // ================ Событие при клике на бургер ===========================================
   
   if (currentItem.closest(".burger")) {
      familyMenu.classList.toggle("active")
      burgerIcon.classList.toggle("active")
   }
   // =======================================================================================


   // ================= Событие при клике на имя лорда ======================================
   if (currentItem.classList.contains("lords__link")) {

      removeClass(lordsNames, "active")
      currentItem.classList.add("active")

      let nameId = currentItem.getAttribute("data-name")
      let currentLordInfo = document.querySelector(nameId)
      removeClass(lordInfo, "active")
      currentLordInfo.classList.add("active")

      // ---------------------- Запоминаем лорда в переменную ----------------------------
      if (currentItem.closest(idTtargarians)) {
         lordTargarian = currentItem.getAttribute("data-name")
      }

      if (currentItem.closest(idLannisters)) {
         lordLannister = currentItem.getAttribute("data-name")
      }

      if (currentItem.closest(idBaratheons)) {
         lordBaratheon = currentItem.getAttribute("data-name")
      }

      if (currentItem.closest(idStarks)) {
         lordStark = currentItem.getAttribute("data-name")
      }
      // --------------------------------------------------------------------------------

      clickItem.preventDefault()
   }
   // ======================================================================================


   // ========== Событие при клике на ссылку в меню "семейство" ============================
   if (currentItem.classList.contains("menu-family__link")) {

      removeClass(familyItems, "active")
      currentItem.classList.add("active")

      let familyId = currentItem.getAttribute("data-family")
      let curentLordsList = document.querySelector(familyId)
      removeClass(lordsLits, "active")
      curentLordsList.classList.add("active")

      // ------ Если в семействе выбран лорд, возвращаем его при клике на его семейство ---

      function showsLord(lord, familyName) {
         if (familyId === familyName) {
            removeClass(lordInfo, "active")

            lordsNames.forEach(function (lordName) {
               let name = lordName.getAttribute("data-name")
               if (name === lord) {
                  lordName.classList.add("active")
                  let info = document.querySelector(lord)
                  info.classList.add("active")
               }
            })
         }
      }

      showsLord(lordTargarian, idTtargarians)
      showsLord(lordLannister, idLannisters)
      showsLord(lordBaratheon, idBaratheons)
      showsLord(lordStark, idStarks)

      clickItem.preventDefault()
   }
   // ===========================================================================================
});

