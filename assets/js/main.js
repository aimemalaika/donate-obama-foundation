$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});

$('.donation-month-details').click(function () {
    $('#modal-container').removeAttr('class').addClass('one');
    $('body').addClass('modal-active');
})

$('#modal-container').click(function () {
    $(this).addClass('out');
    $('body').removeClass('modal-active');
});

$('#leftbarmenue').mouseover(function () {
    $(this).removeClass('shinking')
    $(this).addClass('expended')
});

$( "#leftbarmenue" ).mouseleave(function() {
    $(this).removeClass('expended')
    $(this).addClass('shinking')
});

$('.donationperprice').click(function(){
    $('#submitdonate').text('PROCESSING ...')
    $('#submitdonate').attr('disabled',true)
    setTimeout(() => {
        window.location.href = "pay.html";
    }, 2000);
})

paypal.Button.render({
    // Configure environment
    env: 'sandbox',
    client: {
    sandbox: 'demo_sandbox_client_id',
    production: 'demo_production_client_id'
    },
    // Customize button (optional)
    locale: 'en_US',
    style: {
    size: 'small',
    color: 'gold',
    shape: 'pill',
    },

    // Enable Pay Now checkout flow (optional)
    commit: true,

    // Set up a payment
    payment: function(data, actions) {
    return actions.payment.create({
        transactions: [{
        amount: {
            total: '0.01',
            currency: 'USD'
        }
        }]
    });
    },
    // Execute the payment
    onAuthorize: function(data, actions) {
    return actions.payment.execute().then(function() {
        // Show a confirmation message to the buyer
        window.alert('Thank you for your purchase!');
    });
    }
}, '#paypal-button');