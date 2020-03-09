$(document).ready(function () {
    $('input#input_text, textarea#textarea2').characterCounter();
});


//Scrape Articles to check
//======================================================
$(document).on("click", "#scrape-button", function () {
    $.ajax({
        method: "GET",
        url: "/scrape"
    })
    window.location.replace("/scrape");
});

//Delete an article
//=======================================================
$(document).on("click", "#delete-article", function () {
    var thisId = $(this).attr("data-id");
    $.ajax({
        method: "DELETE",
        url: "/saved/" + thisId
    })
        .then(function (data) {
            console.log(data);
            location.reload();
        });
});

//Save an article
//=========================================================
$(document).on("click", "#save-article", function () {
    var thisId = $(this).attr("data-id");
    $(this).hide();
    var data = {}
    data.title = $("#title-" + thisId).text();
    data.link = $("#link-" + thisId).text();
    data.excerpt = $("#excerpt-" + thisId).text();
    $.ajax({
        method: "POST",
        dataType: "json",
        url: "/api/saved",
        data: data
    })
});

//Go to the notes page for a particular article
//=======================================================
$(document).on("click", "#note-comment", function () {
    var thisId = $(this).attr("data-id");
    $.ajax({
        method: "GET",
        url: "/articles/" + thisId
    })
    window.location.replace("/articles/" + thisId);
});

