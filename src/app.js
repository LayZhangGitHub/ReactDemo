import React from 'react'

import Style from '../css/app.css'

var App = React.createClass({
    // getState
    getInitialState: function () {
        console.log("getInitialState")
        return {
            bgColor: 0
        };
    },
    // getProps
    getDefaultProps: function () {
        console.log("getDefaultProps")
        return {};
    },
    componentWillMount: function () {
        console.log("componentWillMount")
    },
    componentDidMount: function () {
        console.log("componentDidMount")
        // setInterval(this.timerTick, 1000);
    },
    componentWillUnmount: function () {
        console.log("componentWillUnmount")
    },
    componentWillUpdate: function () {
        console.log("componentWillUpdate")
    },
    componentDidUpdate: function () {
        console.log("componentDidUpdate")
    },
    shouldComponentUpdate: function () {
        console.log("shouldComponentUpdate")
        return true
    },
    componentWillReceiveProps: function () {
        console.log("componentWillReceiveProps")
    },
    // timerTick: function () {
    //     var colors = ["#393E41", "#E94F37", "#1C89BF", "#A1D363"];
    //     var ran = Math.floor(Math.random() * colors.length);
    //     this.setState({

    //         bgColor: colors[ran]
    //     });
    // },
    render: function () {
        var cardStyle = {
            height: 200,
            width: 150,
            padding: 0,
            backgroundColor: "#FFF",
            WebkitFilter: "drop-shadow(0px 0px 5px #666)",
            filter: "drop-shadow(0px 0px 5px #666)"
        };
        console.log("render....");
        // return (
        //     <div className={Style.mainBackground}></div>
        // );

        return (
            <div>
                <div className={Style.firstface}>
                    <span className={Style.pip}></span>
                </div>
                <div className={Style.secondface}>
                    <span className={Style.pip}></span>
                    <span className={Style.pip}></span>
                </div>
                <div className={Style.thirdface}>
                    <span className={Style.pip}></span>
                    <span className={Style.pip}></span>
                    <span className={Style.pip}></span>
                </div>
                <div className={Style.fourthface}>
                    <div className={Style.column}>
                        <span className={Style.pip}></span>
                        <span className={Style.pip}></span>
                    </div>
                    <div className={Style.column}>
                        <span className={Style.pip}></span>
                        <span className={Style.pip}></span>
                    </div>
                </div>
                <div className={Style.fifthface}>
                    <div className={Style.column}>
                        <span className={Style.pip}></span>
                        <span className={Style.pip}></span>
                    </div>
                    <div className={Style.column}>
                        <span className={Style.pip}></span>
                    </div>
                    <div className={Style.column}>
                        <span className={Style.pip}></span>
                        <span className={Style.pip}></span>
                    </div>
                </div>
                <div className={Style.sixthface}>
                    <div className={Style.column}>
                        <span className={Style.pip}></span>
                        <span className={Style.pip}></span>
                        <span className={Style.pip}></span>
                    </div>
                    <div className={Style.column}>
                        <span className={Style.pip}></span>
                        <span className={Style.pip}></span>
                        <span className={Style.pip}></span>
                    </div>
                </div>
            </div>
        );
    }
});

// var Label = React.createClass({
//     render: function () {
//         // var labelStyle = {
//         //     // fontFamily: "sans-serif",
//         //     // fontWeight: "bold",
//         //     // padding: 13,
//         //     // margin: 0
//         //     color: red
//         // };

//         return (
//             <div className={Style.mainBackground}>{this.props.bgColor}</div>
//         );
//     }
// });

// var Square = React.createClass({
//     render: function () {
//         var squareStyle = {
//             height: 150,
//             backgroundColor: this.props.bgColor
//         };
//         return (
//             <div style={squareStyle}>

//             </div>
//         );
//     }
// });

export default App;