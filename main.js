(()=>{"use strict";const e=function(e,t=null,n=null){const a=document.createElement(e);return null!==t&&(a.innerText=t),null!==n&&a.classList.add(n),a},t=function(){const t=document.querySelector(".content");t.textContent="",t.appendChild(function(){const t=document.createElement("div");t.classList.add("content--home");const n=document.createElement("img");return n.src="./img/home-img.jpg",n.alt="Dish served in restaurant",n.classList.add("main-img"),t.appendChild(n),t.appendChild(e("h2","Heaven on earth, we deliver it to you")),t.appendChild(e("p","What is heaven, if not the glorious fireworks that explode on your tastebuds? \n \n We at Mook's restaurant believe that heaven on earth exists, and that we can deliver it to you through our dedication and love for cooking. \n \n Our world-renowned chefs and passionate staff are here to make your savory experience something that your heart and mind keep coming  back to, every day, whenever meal time comes.")),t}())},n=function(t){const n=e("div",null,"menus"),i=e("h3",t,"menus--title");n.appendChild(i);const d=e("div",null,"menus--container");return n.appendChild(d),"Pizzas"===t?(d.appendChild(a("./img/pepperoni.jpg","Pepperoni","Pepperoni Pizza","$11.99")),d.appendChild(a("./img/meatlover.jpg","Meatlovers","Meat Lovers Pizza","$13.99")),d.appendChild(a("./img/mozzarella.jpg","Mozzarella","Mozzarella Pizza","$11.99")),d.appendChild(a("./img/vegetable.jpg","Vegetable","Vegetable Pizza","$12.99")),d.appendChild(a("./img/mushroom.jpg","Mushroom","Mushroom Pizza","$12.99")),d.appendChild(a("./img/supreme.jpg","Super Supreme","Super Supreme","$15.99"))):(d.appendChild(a("./img/milkshake.jpg","Strawberry Milkshake","Strawberry Milkshake","$4.99")),d.appendChild(a("./img/lychee.jpg","Ice Lychee Tea","Ice Lychee Tea","$4.99")),d.appendChild(a("./img/coke.jpg","Coke","Coca-Cola","$3.99")),d.appendChild(a("./img/water.jpg","Water","Mineral Water","$1.99"))),n},a=function(t,n,a,i){const d=e("div",null,"menu"),o=e("img",null,null);o.src=t,o.alt=n,d.appendChild(o);const l=e("h3",a,null);d.appendChild(l);const c=e("p",i,null);return d.appendChild(c),d},i=function(){const a=document.createElement("main");return a.classList.add("main"),a.appendChild(function(){const a=document.createElement("div");a.classList.add("tabs");const i=document.createElement("button");i.classList.add("btn","tab__1","tab__active"),i.textContent="HOME",i.addEventListener("click",(e=>{e.target.classList.contains("tab__active")||(t(),d(i))}));const o=document.createElement("button");o.classList.add("btn","tab__2"),o.textContent="MENU",o.addEventListener("click",(t=>{t.target.classList.contains("tab__active")||(function(){const t=document.querySelector(".content");t.textContent="",t.appendChild(function(){const t=e("div",null,"content--menu"),a=e("h2","Our Delicacies","menu--title");return t.appendChild(a),t.appendChild(n("Pizzas")),t.appendChild(n("Drinks")),t}())}(),d(o))}));const l=document.createElement("button");return l.classList.add("btn","tab__2"),l.textContent="CONTACTS",l.addEventListener("click",(e=>{e.target.classList.contains("tab__active")||(t(),d(l))})),a.appendChild(i),a.appendChild(o),a.appendChild(l),a}()),a.appendChild(function(){const e=document.createElement("div");return e.classList.add("content"),e}()),a},d=function(e){document.querySelectorAll(".btn").forEach((t=>{t!=e&&(t.classList.remove("tab__active"),console.log("done")),e.classList.add("tab__active")}))};!function(){const n=document.getElementById("content");n.appendChild(function(){const t=document.createElement("nav");t.classList.add("nav");const n=document.createElement("div");return n.classList.add("title"),t.appendChild(n),n.appendChild(e("h1","Mook's Restaurant")),t}()),n.appendChild(i()),t()}()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTQyxjQUFjLE9BTXJDLE9BTEFvQixFQUFNbEIsVUFBVUMsSUFBSSxTQUNwQjhDLEVBQUkzQyxZQUFZYyxHQUVoQkEsRUFBTWQsWUFBWVosRUFBUyxLQUFNLHNCQUUxQnVELEVBdUVhQyxJQUNwQjlDLEVBQVFFLFlBQVltQixLQUNwQixJQUdGMEIsSSIsInNvdXJjZXMiOlsid2VicGFjazovL3BlcnNvbmFsLXByb2plY3RfcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcHJvamVjdF9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC1wcm9qZWN0X3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3BlcnNvbmFsLXByb2plY3RfcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBjcmVhdGVFbCA9IGZ1bmN0aW9uICh0eXBlLCB0ZXh0ID0gbnVsbCwgY2xhc3NOYW1lID0gbnVsbCkge1xuICBjb25zdCB0ZXh0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gIGlmICh0ZXh0ICE9PSBudWxsKSB7XG4gICAgdGV4dENvbnRlbnQuaW5uZXJUZXh0ID0gdGV4dDtcbiAgfVxuICBpZiAoY2xhc3NOYW1lICE9PSBudWxsKSB7XG4gICAgdGV4dENvbnRlbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICB9XG4gIHJldHVybiB0ZXh0Q29udGVudDtcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVFbCB9IGZyb20gXCIuL2hlbHBlcnNcIjtcblxuY29uc3QgY3JlYXRlSG9tZSA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgY29udGVudEhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250ZW50SG9tZS5jbGFzc0xpc3QuYWRkKFwiY29udGVudC0taG9tZVwiKTtcblxuICBjb25zdCBob21lSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBob21lSW1hZ2Uuc3JjID0gXCIuL2ltZy9ob21lLWltZy5qcGdcIjtcbiAgaG9tZUltYWdlLmFsdCA9IFwiRGlzaCBzZXJ2ZWQgaW4gcmVzdGF1cmFudFwiO1xuICBob21lSW1hZ2UuY2xhc3NMaXN0LmFkZChcIm1haW4taW1nXCIpO1xuICBjb250ZW50SG9tZS5hcHBlbmRDaGlsZChob21lSW1hZ2UpO1xuXG4gIGNvbnRlbnRIb21lLmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZUVsKFwiaDJcIiwgXCJIZWF2ZW4gb24gZWFydGgsIHdlIGRlbGl2ZXIgaXQgdG8geW91XCIpXG4gICk7XG5cbiAgY29udGVudEhvbWUuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlRWwoXG4gICAgICBcInBcIixcbiAgICAgIFwiV2hhdCBpcyBoZWF2ZW4sIGlmIG5vdCB0aGUgZ2xvcmlvdXMgZmlyZXdvcmtzIHRoYXQgZXhwbG9kZSBvbiB5b3VyIHRhc3RlYnVkcz8gXFxuIFxcbiBXZSBhdCBNb29rJ3MgcmVzdGF1cmFudCBiZWxpZXZlIHRoYXQgaGVhdmVuIG9uIGVhcnRoIGV4aXN0cywgYW5kIHRoYXQgd2UgY2FuIGRlbGl2ZXIgaXQgdG8geW91IHRocm91Z2ggb3VyIGRlZGljYXRpb24gYW5kIGxvdmUgZm9yIGNvb2tpbmcuIFxcbiBcXG4gT3VyIHdvcmxkLXJlbm93bmVkIGNoZWZzIGFuZCBwYXNzaW9uYXRlIHN0YWZmIGFyZSBoZXJlIHRvIG1ha2UgeW91ciBzYXZvcnkgZXhwZXJpZW5jZSBzb21ldGhpbmcgdGhhdCB5b3VyIGhlYXJ0IGFuZCBtaW5kIGtlZXAgY29taW5nICBiYWNrIHRvLCBldmVyeSBkYXksIHdoZW5ldmVyIG1lYWwgdGltZSBjb21lcy5cIlxuICAgIClcbiAgKTtcblxuICByZXR1cm4gY29udGVudEhvbWU7XG59O1xuXG5jb25zdCBsb2FkSG9tZSA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcbiAgY29udGVudC50ZXh0Q29udGVudCA9IFwiXCI7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSG9tZSgpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRIb21lO1xuIiwiaW1wb3J0IHsgY3JlYXRlRWwgfSBmcm9tIFwiLi9oZWxwZXJzXCI7XG5cbmNvbnN0IGNyZWF0ZU1lbnUgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGNvbnRlbnRNZW51ID0gY3JlYXRlRWwoXCJkaXZcIiwgbnVsbCwgXCJjb250ZW50LS1tZW51XCIpO1xuXG4gIGNvbnN0IGgyID0gY3JlYXRlRWwoXCJoMlwiLCBcIk91ciBEZWxpY2FjaWVzXCIsIFwibWVudS0tdGl0bGVcIik7XG4gIGNvbnRlbnRNZW51LmFwcGVuZENoaWxkKGgyKTtcblxuICBjb250ZW50TWVudS5hcHBlbmRDaGlsZChjcmVhdGVNZW51cyhcIlBpenphc1wiKSk7XG4gIGNvbnRlbnRNZW51LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVzKFwiRHJpbmtzXCIpKTtcblxuICByZXR1cm4gY29udGVudE1lbnU7XG59O1xuXG5jb25zdCBjcmVhdGVNZW51cyA9IGZ1bmN0aW9uIChjYXRlZ29yeSkge1xuICBjb25zdCBtZW51cyA9IGNyZWF0ZUVsKFwiZGl2XCIsIG51bGwsIFwibWVudXNcIik7XG5cbiAgY29uc3QgaDMgPSBjcmVhdGVFbChcImgzXCIsIGNhdGVnb3J5LCBcIm1lbnVzLS10aXRsZVwiKTtcbiAgbWVudXMuYXBwZW5kQ2hpbGQoaDMpO1xuXG4gIGNvbnN0IG1lbnVzQ29udGFpbmVyID0gY3JlYXRlRWwoXCJkaXZcIiwgbnVsbCwgXCJtZW51cy0tY29udGFpbmVyXCIpO1xuICBtZW51cy5hcHBlbmRDaGlsZChtZW51c0NvbnRhaW5lcik7XG5cbiAgaWYgKGNhdGVnb3J5ID09PSBcIlBpenphc1wiKSB7XG4gICAgbWVudXNDb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgICAgXCIuL2ltZy9wZXBwZXJvbmkuanBnXCIsXG4gICAgICAgIFwiUGVwcGVyb25pXCIsXG4gICAgICAgIFwiUGVwcGVyb25pIFBpenphXCIsXG4gICAgICAgIFwiJDExLjk5XCJcbiAgICAgIClcbiAgICApO1xuICAgIG1lbnVzQ29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICAgIFwiLi9pbWcvbWVhdGxvdmVyLmpwZ1wiLFxuICAgICAgICBcIk1lYXRsb3ZlcnNcIixcbiAgICAgICAgXCJNZWF0IExvdmVycyBQaXp6YVwiLFxuICAgICAgICBcIiQxMy45OVwiXG4gICAgICApXG4gICAgKTtcbiAgICBtZW51c0NvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICAgIGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgICBcIi4vaW1nL21venphcmVsbGEuanBnXCIsXG4gICAgICAgIFwiTW96emFyZWxsYVwiLFxuICAgICAgICBcIk1venphcmVsbGEgUGl6emFcIixcbiAgICAgICAgXCIkMTEuOTlcIlxuICAgICAgKVxuICAgICk7XG4gICAgbWVudXNDb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgICAgXCIuL2ltZy92ZWdldGFibGUuanBnXCIsXG4gICAgICAgIFwiVmVnZXRhYmxlXCIsXG4gICAgICAgIFwiVmVnZXRhYmxlIFBpenphXCIsXG4gICAgICAgIFwiJDEyLjk5XCJcbiAgICAgIClcbiAgICApO1xuICAgIG1lbnVzQ29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICAgIFwiLi9pbWcvbXVzaHJvb20uanBnXCIsXG4gICAgICAgIFwiTXVzaHJvb21cIixcbiAgICAgICAgXCJNdXNocm9vbSBQaXp6YVwiLFxuICAgICAgICBcIiQxMi45OVwiXG4gICAgICApXG4gICAgKTtcbiAgICBtZW51c0NvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICAgIGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgICBcIi4vaW1nL3N1cHJlbWUuanBnXCIsXG4gICAgICAgIFwiU3VwZXIgU3VwcmVtZVwiLFxuICAgICAgICBcIlN1cGVyIFN1cHJlbWVcIixcbiAgICAgICAgXCIkMTUuOTlcIlxuICAgICAgKVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgbWVudXNDb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgICAgXCIuL2ltZy9taWxrc2hha2UuanBnXCIsXG4gICAgICAgIFwiU3RyYXdiZXJyeSBNaWxrc2hha2VcIixcbiAgICAgICAgXCJTdHJhd2JlcnJ5IE1pbGtzaGFrZVwiLFxuICAgICAgICBcIiQ0Ljk5XCJcbiAgICAgIClcbiAgICApO1xuICAgIG1lbnVzQ29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICAgIFwiLi9pbWcvbHljaGVlLmpwZ1wiLFxuICAgICAgICBcIkljZSBMeWNoZWUgVGVhXCIsXG4gICAgICAgIFwiSWNlIEx5Y2hlZSBUZWFcIixcbiAgICAgICAgXCIkNC45OVwiXG4gICAgICApXG4gICAgKTtcbiAgICBtZW51c0NvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICAgIGNyZWF0ZU1lbnVJdGVtKFwiLi9pbWcvY29rZS5qcGdcIiwgXCJDb2tlXCIsIFwiQ29jYS1Db2xhXCIsIFwiJDMuOTlcIilcbiAgICApO1xuICAgIG1lbnVzQ29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgICAgY3JlYXRlTWVudUl0ZW0oXCIuL2ltZy93YXRlci5qcGdcIiwgXCJXYXRlclwiLCBcIk1pbmVyYWwgV2F0ZXJcIiwgXCIkMS45OVwiKVxuICAgICk7XG4gIH1cblxuICByZXR1cm4gbWVudXM7XG59O1xuXG5jb25zdCBjcmVhdGVNZW51SXRlbSA9IGZ1bmN0aW9uIChpbWdzcmMsIGltZ2FsdCwgdGl0bGUsIHByaWNlKSB7XG4gIGNvbnN0IGl0ZW0gPSBjcmVhdGVFbChcImRpdlwiLCBudWxsLCBcIm1lbnVcIik7XG5cbiAgY29uc3QgaW1nID0gY3JlYXRlRWwoXCJpbWdcIiwgbnVsbCwgbnVsbCk7XG4gIGltZy5zcmMgPSBpbWdzcmM7XG4gIGltZy5hbHQgPSBpbWdhbHQ7XG4gIGl0ZW0uYXBwZW5kQ2hpbGQoaW1nKTtcblxuICBjb25zdCBoMyA9IGNyZWF0ZUVsKFwiaDNcIiwgdGl0bGUsIG51bGwpO1xuICBpdGVtLmFwcGVuZENoaWxkKGgzKTtcblxuICBjb25zdCBwID0gY3JlYXRlRWwoXCJwXCIsIHByaWNlLCBudWxsKTtcbiAgaXRlbS5hcHBlbmRDaGlsZChwKTtcblxuICByZXR1cm4gaXRlbTtcbn07XG5cbmNvbnN0IGxvYWRNZW51ID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuICBjb250ZW50LnRleHRDb250ZW50ID0gXCJcIjtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVNZW51KCkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZE1lbnU7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY3JlYXRlRWwgfSBmcm9tIFwiLi9oZWxwZXJzXCI7XG5pbXBvcnQgbG9hZEhvbWUgZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IGxvYWRNZW51IGZyb20gXCIuL21lbnVcIjtcblxuY29uc3QgY3JlYXRlTmF2ID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICBuYXYuY2xhc3NMaXN0LmFkZChcIm5hdlwiKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgbmF2LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICB0aXRsZS5hcHBlbmRDaGlsZChjcmVhdGVFbChcImgxXCIsIFwiTW9vaydzIFJlc3RhdXJhbnRcIikpO1xuXG4gIHJldHVybiBuYXY7XG59O1xuXG5jb25zdCBjcmVhdGVUYWJzID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCB0YWJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGFicy5jbGFzc0xpc3QuYWRkKFwidGFic1wiKTtcblxuICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgaG9tZUJ0bi5jbGFzc0xpc3QuYWRkKFwiYnRuXCIsIFwidGFiX18xXCIsIFwidGFiX19hY3RpdmVcIik7XG4gIGhvbWVCdG4udGV4dENvbnRlbnQgPSBcIkhPTUVcIjtcbiAgaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGFiX19hY3RpdmVcIikpIHJldHVybjtcbiAgICBsb2FkSG9tZSgpO1xuICAgIHRvZ2dsZUFjdGl2ZUJ0bihob21lQnRuKTtcbiAgfSk7XG5cbiAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG1lbnVCdG4uY2xhc3NMaXN0LmFkZChcImJ0blwiLCBcInRhYl9fMlwiKTtcbiAgbWVudUJ0bi50ZXh0Q29udGVudCA9IFwiTUVOVVwiO1xuICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0YWJfX2FjdGl2ZVwiKSkgcmV0dXJuO1xuICAgIGxvYWRNZW51KCk7XG4gICAgdG9nZ2xlQWN0aXZlQnRuKG1lbnVCdG4pO1xuICB9KTtcblxuICBjb25zdCBjb250YWN0c0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnRhY3RzQnRuLmNsYXNzTGlzdC5hZGQoXCJidG5cIiwgXCJ0YWJfXzJcIik7XG4gIGNvbnRhY3RzQnRuLnRleHRDb250ZW50ID0gXCJDT05UQUNUU1wiO1xuICBjb250YWN0c0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGFiX19hY3RpdmVcIikpIHJldHVybjtcbiAgICBsb2FkSG9tZSgpO1xuICAgIHRvZ2dsZUFjdGl2ZUJ0bihjb250YWN0c0J0bik7XG4gIH0pO1xuXG4gIHRhYnMuYXBwZW5kQ2hpbGQoaG9tZUJ0bik7XG4gIHRhYnMuYXBwZW5kQ2hpbGQobWVudUJ0bik7XG4gIHRhYnMuYXBwZW5kQ2hpbGQoY29udGFjdHNCdG4pO1xuXG4gIHJldHVybiB0YWJzO1xufTtcblxuY29uc3QgY3JlYXRlQ29udGVudCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRcIik7XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59O1xuXG5jb25zdCBjcmVhdGVNYWluID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XG5cbiAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVUYWJzKCkpO1xuICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRlbnQoKSk7XG5cbiAgcmV0dXJuIG1haW47XG59O1xuXG5jb25zdCB0b2dnbGVBY3RpdmVCdG4gPSBmdW5jdGlvbiAoYnV0dG9uKSB7XG4gIGNvbnN0IGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJ0blwiKTtcbiAgYnRucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICBpZiAoYnRuICE9IGJ1dHRvbikge1xuICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJ0YWJfX2FjdGl2ZVwiKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiZG9uZVwiKTtcbiAgICB9XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJ0YWJfX2FjdGl2ZVwiKTtcbiAgfSk7XG59O1xuXG5jb25zdCBpbml0ID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU5hdigpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVNYWluKCkpO1xuICBsb2FkSG9tZSgpO1xufTtcblxuaW5pdCgpO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUVsIiwidHlwZSIsInRleHQiLCJjbGFzc05hbWUiLCJ0ZXh0Q29udGVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVyVGV4dCIsImNsYXNzTGlzdCIsImFkZCIsImNvbnRlbnQiLCJxdWVyeVNlbGVjdG9yIiwiYXBwZW5kQ2hpbGQiLCJjb250ZW50SG9tZSIsImhvbWVJbWFnZSIsInNyYyIsImFsdCIsImNyZWF0ZUhvbWUiLCJjcmVhdGVNZW51cyIsImNhdGVnb3J5IiwibWVudXMiLCJoMyIsIm1lbnVzQ29udGFpbmVyIiwiY3JlYXRlTWVudUl0ZW0iLCJpbWdzcmMiLCJpbWdhbHQiLCJ0aXRsZSIsInByaWNlIiwiaXRlbSIsImltZyIsInAiLCJjcmVhdGVNYWluIiwibWFpbiIsInRhYnMiLCJob21lQnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ0YXJnZXQiLCJjb250YWlucyIsInRvZ2dsZUFjdGl2ZUJ0biIsIm1lbnVCdG4iLCJjb250ZW50TWVudSIsImgyIiwiY3JlYXRlTWVudSIsImNvbnRhY3RzQnRuIiwiY3JlYXRlVGFicyIsImNyZWF0ZUNvbnRlbnQiLCJidXR0b24iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImJ0biIsInJlbW92ZSIsImNvbnNvbGUiLCJsb2ciLCJnZXRFbGVtZW50QnlJZCIsIm5hdiIsImNyZWF0ZU5hdiIsImluaXQiXSwic291cmNlUm9vdCI6IiJ9