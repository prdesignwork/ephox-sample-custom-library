$( document ).ready(function() {

    $( "a" ).click(function( event ) {

        alert( "Thanks for visiting!" );

    });

});
this.template = '<div id="salutation"><a href="">Test</a></div>';
document.body.innerHTML += this.template;

this.template = '<div id="fullname"></div>';
document.body.innerHTML += this.template;
