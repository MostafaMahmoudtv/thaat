const jobTab = document.getElementById("jobSeekerTabRegister");
const companyTab = document.getElementById("companyTabRegister");
const jobForm = document.getElementById("jobForm");
const companyForm = document.getElementById("companyForm");
const registerTitle = document.getElementById("registerTitle");

let activeTab = "job";

jobTab.addEventListener("click", () => {
  if (activeTab !== "job") {
    activeTab = "job";

     jobTab.className =
      "w-1/2 py-3 !bg-white ml-6 inline-flex items-center justify-center text-center rounded-t-lg text-[#5090C7] transition duration-200";
  
    companyTab.className =
      "w-1/2 py-3 inline-flex items-center justify-center rounded-t-lg bg-gray-300 text-gray-600 font-medium transition duration-200";
 
    registerTitle.textContent = "تسجيل حساب باحث عن عمل";
    registerTitle.className = "text-center text-[#5090C7] text-xl mb-6";

     jobForm.classList.remove("hidden");
    companyForm.classList.add("hidden");
  }
});

companyTab.addEventListener("click", () => {
  if (activeTab !== "company") {
    activeTab = "company";

     companyTab.className =
      "w-1/2 py-3 inline-flex items-center justify-center rounded-t-lg bg-white text-[#3F4595] font-medium transition duration-200";
     jobTab.className =
      "w-1/2 py-3 !bg-gray-300 ml-6 inline-flex items-center justify-center text-center rounded-t-lg text-gray-600 transition duration-200";

     registerTitle.textContent = "تسجيل حساب الشركات";
    registerTitle.className = "text-center text-[#3F4595] text-xl mb-6";

     jobForm.classList.add("hidden");
    companyForm.classList.remove("hidden");
  }
});
 document.querySelectorAll('a[href="#companyTab"]').forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); 
    const companyBtn = document.getElementById("companyTab");
    if (companyBtn) companyBtn.click(); 
  });
});
window.addEventListener("DOMContentLoaded", () => {

  if (window.location.hash === "#companyTabRegister") {
    companyTab.click(); 
  } else {
    jobTab.click(); 
  }
});
const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

   menuBtn.addEventListener("click", (e) => {
    e.stopPropagation(); 
    mobileMenu.classList.toggle("hidden");
  });


  document.addEventListener("click", (e) => {
    if (
      !mobileMenu.classList.contains("hidden") && 
      !mobileMenu.contains(e.target) && 
      e.target !== menuBtn 
    ) {
      mobileMenu.classList.add("hidden");
    }
  });


  const menuLinks = mobileMenu.querySelectorAll("a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });