$( document ).ready(function() {

    $( "a" ).click(function( event ) {

        alert( 'Thanks for visiting!' );

    });

});
this.template = '<div id="salutation"><a href="#">#</a></div>';
document.body.innerHTML += this.template;

this.template = '<div id="fullname"></div>';
document.body.innerHTML += this.template;

this.template = '';
document.body.innerHTML += this.template;
