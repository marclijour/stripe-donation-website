var React = require('react');

module.exports = React.createClass({
    render: function(){
        var pageHeaderStyle = {
            "width": "100%",
            "background-color": "#ff3838",
            "height": "80px",
            "text-align": "center"
        }
        var pageHeaderTextStyle = {
            "font-family": "Titillium Web",
            "font-weight": "700",
            "font-style": "normal",
            "font-size": "30px",
            "letter-spacing": "1.06px",
            "text-transform": "none",
            "line-height": "80px",
            "color": "#fff",
            "margin": "20px auto"
        }
        return (
            <div>
                <head>
                </head>
                <body>
                <div style="{pageHeaderStyle}">
                    <label style="{{pageHeaderTextStyle}}"> Start Your Pledge Today </label>
                </div>
                <div>
                    <form class='fiat-donation-form' action="/charge" method="post">
                        <label class="payment-amount-label"> How much would you like to contribute? </label>
                        <input type="number" name="amount" id="fiat-input-amount" class="payment-amount" controllerChangeFunction="onSetFiatPayAmount"/>
                        <input id="stripeToken" name="stripeToken" type="hidden"/> {/* Used when the form is submitted */}
                        <input id="stripeEmail" name="stripeEmail" type="hidden"/> {/* Used when the form is submitted */}
                        <button id="donateButton" controllerClickFunction="openFiatDonation">Donate</button>
                        <label type="text" id="error_explanation"></label>
                        <script src="https://checkout.stripe.com/checkout.js"></script>
                    </form>
                </div>
                {/* Scripts begin here */}
                <script src="third_party/jquery-3.2.1.min.js"></script>
                <script src="controller/setup_controller.js"></script>
                <script src="controller/controller_change.js"></script>
                <script src="controller/controller_click.js"></script>
                <script src="startup/test_change_amount.js"></script>
                {/* Scripts end here */}
                </body>
            </div>
        );
    }
});