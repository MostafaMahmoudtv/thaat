const jobTab = document.getElementById("jobSeekerTabRegister");
const companyTab = document.getElementById("companyTabRegister");
const jobForm = document.getElementById("jobForm");
const companyForm = document.getElementById("companyForm");
const registerTitle = document.getElementById("registerTitle");

let activeTab = "job";

jobTab.addEventListener("click", () => {
  if (activeTab !== "job") {
    activeTab = "job";

    // الزر النشط (الباحث)
    jobTab.className =
      "w-1/2 py-3 !bg-white ml-6 inline-flex items-center justify-center text-center rounded-t-lg text-blue-600 transition duration-200";
    // الزر الآخر (الشركات)
    companyTab.className =
      "w-1/2 py-3 inline-flex items-center justify-center rounded-t-lg bg-gray-300 text-gray-600 font-medium transition duration-200";

    // العنوان
    registerTitle.textContent = "تسجيل حساب باحث عن عمل";
    registerTitle.className = "text-center text-blue-600 text-xl mb-6";

    // إظهار فورم الباحثين وإخفاء الشركات
    jobForm.classList.remove("hidden");
    companyForm.classList.add("hidden");
  }
});

companyTab.addEventListener("click", () => {
  if (activeTab !== "company") {
    activeTab = "company";

    // الزر النشط (الشركات)
    companyTab.className =
      "w-1/2 py-3 inline-flex items-center justify-center rounded-t-lg bg-white text-[#3F4595] font-medium transition duration-200";
    // الزر الآخر (الباحثين)
    jobTab.className =
      "w-1/2 py-3 !bg-gray-300 ml-6 inline-flex items-center justify-center text-center rounded-t-lg text-gray-600 transition duration-200";

    // العنوان
    registerTitle.textContent = "تسجيل حساب الشركات";
    registerTitle.className = "text-center text-[#3F4595] text-xl mb-6";

    // إظهار فورم الشركات وإخفاء الباحثين
    jobForm.classList.add("hidden");
    companyForm.classList.remove("hidden");
  }
});
// لما يضغط على الزر داخل الصفحة نفسها
document.querySelectorAll('a[href="#companyTab"]').forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // يمنع التنقل للـhash
    const companyBtn = document.getElementById("companyTab");
    if (companyBtn) companyBtn.click(); // يفعل تبويب الشركات مباشرة
  });
});
window.addEventListener("DOMContentLoaded", () => {
  // تحقق من وجود التبويبات الخاصة بالتسجيل
  if (window.location.hash === "#companyTabRegister") {
    companyTab.click(); // اضغط على تبويب الشركات مباشرة
  } else {
    jobTab.click(); // الافتراضي تبويب الباحثين
  }
});
const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  // فتح وغلق المينيو عند الضغط على الزر
  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // يمنع قفلها فور الضغط
    mobileMenu.classList.toggle("hidden");
  });

  // غلق المينيو عند الضغط خارجها
  document.addEventListener("click", (e) => {
    if (
      !mobileMenu.classList.contains("hidden") && // لو مفتوحة
      !mobileMenu.contains(e.target) && // والضغط مش داخلها
      e.target !== menuBtn // ولا على الزر نفسه
    ) {
      mobileMenu.classList.add("hidden");
    }
  });

  // غلق المينيو لما تضغط على أي لينك داخلها
  const menuLinks = mobileMenu.querySelectorAll("a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });