$(function() {
    
    var userId = 8637060;
    var clientId = "4f903e604df94df5b6d3d404a3e3bd33";
    var accessToken = '8637060.339718c.e0ddf464c1ca425b92c5d9fa2cc12802';

    //Set up instafeed
    var feed = new Instafeed({
        clientId: clientId,
        accessToken: accessToken,
        target: 'instafeed',
        get: 'user',
        userId: userId,
        links: true,
        limit: 8,
        sortBy: 'most-liked',
        resolution: 'standard_resolution',
        useHttp: true,  
        template: '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"><div class="photo-box"><div class="image-wrap"><a href="{{link}}"><img src="{{image}}"></a><div class="likes">{{likes}}Likes</div></div></div></div></div>'
    });
    feed.run();

});