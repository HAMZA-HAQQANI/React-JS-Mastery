const container = document.getElementById('root')


// function customRender(reactElement,container){
// const domElement = document.createElement(reactElement.type)
// domElement.innerHTML = reactElement.children
// domElement.setAttribute('href',reactElement.props.href)
// domElement.setAttribute('target',reactElement.props.target)

// container.appendChild(domElement)

// } 

function customRender(reactElement,container){

    const domElement = document.createElement(reactElement.type)
    domElement.innerText = reactElement.children;


    for (const prop in reactElement.props) {
        if(prop == 'children') continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }

    container.appendChild(domElement)

}

const reactElement = {
    type : 'a',
    props: {
        href : 'https://youtube.com',
        traget : '_blank',
        id : 'MY_YOUTUBE_LINK'
    },
    children: 'VISIT US ON GOOGLE'
}


customRender(reactElement,container)