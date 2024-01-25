

let resourceHTML = "";

const firstResource = resources[0];

const sourcesHTML = firstResource.sources.map(source => `<li><a href="${source.url}">${source.title}</a></li>`).join('');

resourceHTML += `
<article">

    <h2>${resources[0].category}</h2>
    <p>${resources[0].text}</p>
    <ul>
        ${sourcesHTML}
    </ul>
</article>
`;
console.log(resources[1])
if(firstResource.category == "HTML")
{
    document.getElementById("test").style.backgroundColor = "white";
}if(firstResource.category== "CSS"){
    console.log("detfunker")
}

function showContent(category){
    const htmlButton = document.querySelector("#HTML button");
    const cssButton = document.querySelector("#CSS button");
    const jsButton = document.querySelector("#js button");
    const reactButton = document.querySelector("#react button")
    const sahcButton = document.querySelector("#sahc button")
    const article = document.getElementById("test")

    const resetStyles = (button) => {
        htmlButton.style.backgroundColor = "#2A324B";
        htmlButton.style.color = "white";
        cssButton.style.backgroundColor = "#2A324B";
        cssButton.style.color = "white";
        jsButton.style.backgroundColor = "#2A324B";
        jsButton.style.color = "white";
        reactButton.style.backgroundColor = "#2A324B";
        reactButton.style.color = "white";
        sahcButton.style.backgroundColor = "#2A324B";
        sahcButton.style.color = "white";
    };

    const activeStyle = (button) => {
        button.style.backgroundColor = "white";
        button.style.color = "black";

    }
   

    if(category == "HTML"){
        resetStyles();
        activeStyle(htmlButton)
        document.getElementById(firstResource[0])
        article.innerHTML = `
            <h2>${resources[0].category}</h2>
            <p>${resources[0].text}</p>
            <ul>${resources[0].sources.map(source => `<li><a href="${source.url}">${source.title}</a></li>`).join('')}</ul>
        `;
    }else if(category == "CSS"){
        console.log("CSS button clicked");
        if (cssButton) {
            resetStyles();
            activeStyle(cssButton)
            article.innerHTML = `
            <h2>${resources[1].category}</h2>
            <p>${resources[1].text}</p>
            <ul>${resources[1].sources.map(source => `<li><a href="${source.url}">${source.title}</a></li>`).join('')}</ul>
        `;
        }
        
    }else if(category === "js"){
        console.log("JS button clicked");
        if (jsButton) {
            resetStyles();
            activeStyle(jsButton)
            article.innerHTML = `
            <h2>${resources[2].category}</h2>
            <p>${resources[2].text}</p>
            <ul>${resources[2].sources.map(source => `<li><a href="${source.url}">${source.title}</a></li>`).join('')}</ul>
        `;
        }
    
    }else if(category === "react"){
        console.log("react button clicked");
        if (reactButton) {
            resetStyles();
            activeStyle(reactButton)
            article.innerHTML = `
            <h2>${resources[3].category}</h2>
            <p>${resources[3].text}</p>
            <ul>${resources[3].sources.map(source => `<li><a href="${source.url}">${source.title}</a></li>`).join('')}</ul>
        `;
        }
    
    }else if(category === "sahc"){
        console.log("sahc button clicked");
        if (sahcButton) {
            resetStyles();
            activeStyle(sahcButton)
            article.innerHTML = `
            <h2>${resources[4].category}</h2>
            <p>${resources[4].text}</p>
            <ul>${resources[4].sources.map(source => `<li><a href="${source.url}">${source.title}</a></li>`).join('')}</ul>
        `;
        }
    
    }
}








const main = document.getElementsByTagName("article")


main[0].innerHTML = resourceHTML;
    

