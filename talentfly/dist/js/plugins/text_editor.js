$(document).ready(
    function () {
        var toolbar = [
            '/',
            { name: 'basicstyles', items : [ 'Bold','Italic','Underline' ] },
            { name: 'paragraph', items : ['BulletedList'] }
        ];

        var edit = CKEDITOR.replace( 'editor1', {
            toolbar: toolbar

        });

        // experience
        var experiencesDescription = $("textarea[id^='id_experience']");
        for(var i=0; i < experiencesDescription.length; i++){
            CKEDITOR.replace( experiencesDescription[i].id, {
                toolbar: toolbar
            });
        }

        //volunteering
        var volunteeringDescription = $("textarea[id^='id_volunteering']");
        for(var i=0; i < volunteeringDescription.length; i++){
            CKEDITOR.replace( volunteeringDescription[i].id, {
                toolbar: toolbar
            });
        }
        $('form').submit(function (ev) {
            if(window.location.pathname == '/profile/'){
                for(var instanceName in CKEDITOR.instances){
                    CKEDITOR.instances[instanceName].updateElement();
                }
            }
        })
    });