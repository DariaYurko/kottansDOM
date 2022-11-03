
// ----------- Удаление класса -----------------------------------
function removeClass(elementName, className) {
   elementName.forEach(function(item) {
      item.classList.remove(className)
   })
}
// --------------------------------------------------------------

const familyItems = document.querySelectorAll(".menu-family__item");
const lordsLits = document.querySelectorAll(".lords__list");
const lordsNames = document.querySelectorAll(".lords__link")
const lordInfo = document.querySelectorAll(".family-lords__info")

let forTargarians
let forLannisters
let forBaratheons
let forStarks

document.addEventListener("click", function(clickItem) {

   let currentItem = clickItem.target;

// ----- Событие при клике на пункт из меню "семейство" ---------------------------------
   if (currentItem.classList.contains("menu-family__item")) {
      removeClass(familyItems, "active")
      currentItem.classList.add("active")

      let familyId = currentItem.getAttribute("data-family");
      let curentLordsList = document.querySelector(familyId); 

      removeClass(lordsLits, "active")
      curentLordsList.classList.add("active")  


      // Убираем текстовый блок лорда
      lordInfo.forEach(function(i) {
         if (i.classList.contains("active")) {
            removeClass(lordInfo, "active")
         }
      })

      // Убираем активный класс у имени
      lordsNames.forEach(function(i) {
         if (i.classList.contains("active")) {
            removeClass(lordsNames, "active")
         }
      })

      //---------------------- TEST
      
      //----------------------------

      clickItem.preventDefault()
   }
// --------------------------------------------------------------------------------------

// --------------- Событие при клике на имя лорда ---------------------------------------
   if (currentItem.classList.contains("lords__link")) {

      removeClass(lordsNames, "active")
      currentItem.classList.add("active")

      // --------------------------- TEST ----------------------------

      if (currentItem.closest("#targarians")) {
         forTargarians = currentItem.getAttribute("data-name")
         console.log(forTargarians)
      } else if (currentItem.closest("#lannisters")) {
         forLannisters = currentItem.getAttribute("data-name")
         console.log(forLannisters)
      } else if (currentItem.closest("#baratheons")) {
         forBaratheons = currentItem.getAttribute("data-name")
         console.log(forBaratheons)
      } else if (currentItem.closest("#starks")) {
         forStarks = currentItem.getAttribute("data-name")
         console.log(forStarks)
      }
 
   
      // -------------------------------------------------------

      let nameId = currentItem.getAttribute("data-name")
      let currentLordInfo = document.querySelector(nameId)
      
      removeClass(lordInfo, "active")
      currentLordInfo.classList.add("active")

      clickItem.preventDefault()
   }
// --------------------------------------------------------------------------------------

});















// // ==================================================================
// familyItems.forEach(function(item) {

// // -------- Если семейство содержит активный класс, даем активный класс боковому меню лордов ---------------------------------
//    if (item.classList.contains("active")) {
//       let itemIsActive = item
//       let activeId = itemIsActive.getAttribute("data-family")
//       let activeLordsList = document.querySelector(activeId)
//       activeLordsList.classList.add("active")
//    }

// // --------------------Событие при клике на меню семейство ---------------------------------
//    item.addEventListener("click", function (event) {

//       let currentFamilyItem = item;
//       let familyId = currentFamilyItem.getAttribute("data-family");
//       let curentLordsList = document.querySelector(familyId);

//       if (!currentFamilyItem.classList.contains("active")) {

//          familyItems.forEach(function(i) {
//             if(i.classList.contains("active")) {
//                i.classList.remove("active")
//             }
//          });
//          currentFamilyItem.classList.add("active");
   
//          lordsLits.forEach(function(item){
//             if (item.classList.contains("active")) {
//                item.classList.remove("active")
//             }
//          });
//          curentLordsList.classList.add("active");

//          lordInfo.forEach(function(i) {
//             if (i.classList.contains("active")) {
//                i.classList.remove("active")
//             }
//          })
//       }

//       event.preventDefault();
//    })
// // ---------------------------------------------------------------------------------------
// })

// lordsNames.forEach(function(lordNname) {
// // ------------------------Событие при клике на имя лорда --------------------------------------
//    lordNname.addEventListener("click", function(e) {

//       let currentLordName = lordNname;
//       let familyId = currentLordName.getAttribute("data-name");
//       let currentLordInfo = document.querySelector(familyId);

//       if (!currentLordName.classList.contains("active")) {

//          lordsNames.forEach(function(item) {
//             if (item.classList.contains("active")) {
//                item.classList.remove("active")
//             }
//          })
//          currentLordName.classList.add("active")
   
//          lordInfo.forEach(function(item) {
//             if (item.classList.contains("active")) {
//                item.classList.remove("active")
//             }
//          })
//          currentLordInfo.classList.add("active")
//       }

//       e.preventDefault();
//    })
// // ---------------------------------------------------------------------------
// })


