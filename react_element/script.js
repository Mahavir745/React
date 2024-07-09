// todo: Create element using react

// todo: It's take three parameters 
// ? element name
// ? className 
// ? children (content of the element), textnode



// const h2 = React.createElement("h2",{className:"heading", id:"heading"},"hello React")

// ! there is no way to view react element in doucment using react
//! we use reactDOM

// const root = ReactDOM.createRoot(document.querySelector("#root"))
// root.render(h2)


// todo: next 
// ?whenever we use an array as the third parameter then use a key
// ? all key are unique when we use it inside a parent element

// const container = React.createElement("div", { className: "container", id: "container" },
//     [
//     React.createElement("section", {key: 1},
//         [
//         React.createElement("p", {key: 2}, "The Library for web and native user interface")
//     ])
// ])




// ? It not necessary to made an array if we use a single element, It's better to use if we use multiple of elements

// const container = React.createElement("div", { className: "container", id: "container" },
//     React.createElement("section", {},
        
//         React.createElement("p", {}, "The Library for web and native user interface")
//     )
// )

// ! there is no way to view react element in doucment using react
//! we use reactDOM

// const root = ReactDOM.createRoot(document.querySelector("#root"))
// root.render(container)




//! practice 
// const h2 = React.createElement("h2",{},"hello Mahavir")

// const root= ReactDOM.createRoot(document.querySelector("#root"))
// root.render(h2)


// const container = React.createElement("div",{},
//     React.createElement("section",{},
//         React.createElement("p",{}, "THIS IS A NESTED PARAGRAPH")))


// const root = ReactDOM.createRoot(document.querySelector("#root"))
// root.render(container)



//! project time

let container = React.createElement("div",{id:"container"}, [
    React.createElement("button",{key:1, id:"btn"}, "click me"),
    React.createElement("img",{key:2, src: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"})
])

const root= ReactDOM.createRoot(document.querySelector("#root"))
root.render(container)



