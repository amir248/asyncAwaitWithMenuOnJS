// Create a class for the element
class MyCustomElement extends HTMLElement {
  static observedAttributes = ["color", "size"];
  constructor() {
    // Always call super first in constructor
    super();
  }
  connectedCallback() {
    console.log("Custom element added to page.");
  }
  disconnectedCallback() {
    console.log("Custom element removed from page.");
  }
  adoptedCallback() {
    console.log("Custom element moved to new page.");
  }
  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`Attribute ${name} has changed.`);
  }
}
customElements.define("gallery-element", MyCustomElement);

class WordCount extends HTMLElement {
  constructor() {
    // Всегда первым делом вызываем super() в конструкторе
    super();

    // ниже следует функциональность элемента

  }
}
customElements.define("gallery-ok", WordCount, { extends: "section" });

let countIMG=document.querySelectorAll('picture > img').length;
console.log(countIMG);
for(let i=1;i<=countIMG;i++){
  console.log(i);
}
const count={ i:1,j:0};
    document.querySelector('gallery-element').addEventListener('click',()=>{
      count.i++;
      count.j++;
      if(count.i==1){
        count.j=countIMG;
      }
      if(count.i>countIMG){
        count.i=1;
        count.x=countIMG;
        console.log('click '+document.querySelector('picture:nth-child('+`${count.i}`+')')+" i: "+count.i + " j: " + count.j);
  
      document.querySelector('picture:nth-child('+`${count.x}`+') > img').style.cssText="display:block;transition: all 3s ease-out;opacity:0;left:-100%;width:100%;max-width:1300px;overflow:hidden;";

      setTimeout(()=>{
        document.querySelector('#gallery > picture:nth-child('+`${count.x}`+') > img:nth-child(1)').style.cssText="display:none;transition: all 3s ease-out;opacity:1;right:100%;width:100%;max-width:1300px;";

      },700);
      document.querySelector('picture:nth-child('+`${count.i}`+') > img').style.cssText="display:block;all 3s ease-out;opacity:1;left:100%;width:100%;max-width:1300px;";
      setTimeout(()=>{
        document.querySelector('picture:nth-child('+`${count.i}`+') > img').style.cssText="display:block;width:100%;max-width:1300px;all 3s ease-out;opacity:1;left:0;";
      },300);
      count.i=1;
      count.j=0;
      }else{
       
       
        console.log(countIMG + " " + count.j + " " + count.i);
      
        // console.log('click '+document.querySelector('picture:nth-child('+`${count.i}`+')')+" i: "+count.i);
    
        document.querySelector('picture:nth-child('+`${count.j}`+') > img').style.cssText="display:block;transition: all 3s ease-out;opacity:0;left:-100%;width:100%;max-width:1300px;overflow:hidden;";

        setTimeout(()=>{
          document.querySelector('picture:nth-child('+`${count.j}`+') > img').style.cssText="display:none;transition: all 3s ease-out;opacity:1;right:100%;width:100%;max-width:1300px;";

        },1000);
        document.querySelector('picture:nth-child('+`${count.i}`+') > img').style.cssText="display:block;all 3s ease-out;opacity:1;left:100%;width:100%;max-width:1300px;";
        setTimeout(()=>{
          document.querySelector('picture:nth-child('+`${count.i}`+') > img').style.cssText="display:block;width:100%;max-width:1300px;all 3s ease-out;opacity:1;left:0;";
        },1300);
      }
      
 
      });
    


  // document.querySelector('body > main > gallery-element:nth-child(2) > picture:nth-child(3) > img:nth-child(1)').style.disply="block";




// document.querySelector('picture:nth-child('+`${i}`+') > img').addEventListener('click',()=>{
//   i++;
//   let count.j=i-1;
//   console.log('click'+document.querySelector('picture:nth-child('+`${i}`+')')+i);
//   setTimeout(()=>{
//    document.querySelector('picture:nth-child('+`${j}`+') > img').style.cssText="display:none;transition: all 1s ease-out;";
//   },300);
//   setTimeout(()=>{
//     document.querySelector('picture:nth-child('+`${j}`+') > img').style.cssText="width:0;transition: all 1s ease-out;";
//    },100);
//   // document.querySelector('#gallery').src='site/img/1726571948265.jpg';
//    document.querySelector('picture:nth-child('+`${i}`+') > img').style.cssText="display:block;width:100%;max-width:1300px;transition: all 1s ease-out;";
//   });

  
  
