//! Practice 

const container = React.createElement("div",{},[
    React.createElement("h1",{key:1},"Registration Information:"),
    React.createElement("form",{key:2},[
        //! username Input
        React.createElement("div",{key:1},[
            React.createElement("label",{htmlFor:"name",key:1},"Name: "),
            React.createElement("input",{key:2, id:"name",placeholder:"Enter Name"})
        ]),
        //! email
        React.createElement("div",{key:2},[
            React.createElement("label",{key:1, htmlFor:"email"},"Email: "),
            React.createElement("input",{key:2,type:"email",placeholder:"Enter email:"}),
        ]),
        //! phone number
        React.createElement("div",{key:3},[
            React.createElement("label",{htmlFor:"contact",key:1},"Contact No:"),
            React.createElement("input",{key:2, id:"contact", type:"number"})
        ]),
        //! adddress:
        React.createElement("div",{key:4},[
            React.createElement("label",{key:1,htmlFor:"address"},"Address: "),
            React.createElement("input",{key:2,id:"adddress"})
        ]),
        //! City:
        React.createElement("div",{key:5},[
            React.createElement("label",{key:1,htmlFor:"city"},"City"),
            React.createElement("input",{key:2})
        ]),
        //! State: 
        React.createElement("div",{key:6},[
            React.createElement("label",{key:1, htmlFor:"state"},"State"),
            React.createElement("select",{key:2},[
                React.createElement("option",{key:1},"Select State:"),
                React.createElement("option",{key:2},"delhi"),
                React.createElement("option",{key:3},"Jharkhand")
            ])
        ]),
        //! Buttons:
        React.createElement("button",{key:7},"Subit My Registration")
        
    ])
])

const root= ReactDOM.createRoot(document.querySelector("#root"));
root.render(container)




//! final Result

const container2 = React.createElement("div",
    {style: 
        {
            border:"1px solid red",
            padding:"20px",
            background:"teal",
            boxShadow:"2px 3px 4px gray",
            borderRadius:"18px"
            
        
        }
    },[
    React.createElement("form",{key:1},[
        React.createElement("table",{key:1},[
            React.createElement("thead",{key:1},[
                React.createElement("tr",{key:1},[
                    React.createElement("td",{key:1},[
                        React.createElement("label",{htmlFor:"name2",key:1},"Name: ")
                    ]),
                    React.createElement("td",{key:2},[
                        React.createElement("input",{key:1, id:"name2"})
                    ])
                    
                ]),
                React.createElement("tr",{key:2},[
                    React.createElement("td",{key:1},[
                        React.createElement("label",{htmlFor:"email",key:1},"Email: ")
                    ]),
                    React.createElement("td",{key:2},[
                        React.createElement("input",{key:1, id:"email",type:"email"})
                    ])
                    
                ]),
                React.createElement("tr",{key:3},[
                    React.createElement("td",{key:1},[
                        React.createElement("label",{htmlFor:"contact",key:1},"Contact: ")
                    ]),
                    React.createElement("td",{key:2},[
                        React.createElement("input",{key:1, id:"contact",type:"number"})
                    ])
                    
                ]),
                React.createElement("tr",{key:4},[
                    React.createElement("td",{key:1},[
                        React.createElement("label",{htmlFor:"address",key:1},"Address: ")
                    ]),
                    React.createElement("td",{key:2},[
                        React.createElement("input",{key:1, id:"address",type:"text"})
                    ])
                    
                ]),
                React.createElement("tr",{key:6},[
                    React.createElement("td",{key:1},[
                        React.createElement("label",{htmlFor:"city",key:1},"City: ")
                    ]),
                    React.createElement("td",{key:2},[
                        React.createElement("input",{key:1, id:"city",type:"text"})
                    ])
                    
                ]),
                React.createElement("tr",{key:7},[
                    React.createElement("td",{key:1},[
                        React.createElement("label",{htmlFor:"state",key:1},"State: ")
                    ]),
                    React.createElement("td",{key:2},[
                        React.createElement("select",{key:1, id:"state"},[
                            React.createElement("option",{key:1},"Select State:"),
                            React.createElement("option",{key:2},"delhi"),
                            React.createElement("option",{key:3},"Jharkhand")
                        ])
                    ])
                ]),
               React.createElement("tr",{key:8},[
                React.createElement("button",{key:1},"Click Here")
               ])
                 
                

            ])
        ])
    ])
])

const root2 = ReactDOM.createRoot(document.querySelector("#root2"))
root2.render(container2)
