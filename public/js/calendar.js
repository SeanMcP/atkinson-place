document.addEventListener("DOMContentLoaded", function () {
  let todayDate = new Date();
  document.querySelectorAll(".calendar-sc time").forEach((node) => {
    let itemDate = new Date(node.getAttribute("datetime"));
    if (itemDate < todayDate && !node.parentElement.getAttribute("data-past")) {
      node.parentElement.setAttribute("data-past", "client");
    }
  });
});
