$(document).ready(function () {
    $("#selected-plays > li").addClass("horizontal");
    $("#selected-plays  li:not(.horizontal)").addClass("sub-level");
    // $("a[href^='mailto:']".addClass("mailto"));
    // $("a[href$='mailto']".addClass("pdf"));
    // $("a[href^='http']".addClass("henry"));
    $("tr:nth-child(odd)").addClass("alt");
    $("td:contains(Henry)").addClass("highlight");

    $("submit").click(function (e) { 
        e.preventDefault();
        let selectedRadio = $("input[type='radio']:checked");
        console.log(selectedRadio);
        let multiSecetedItems = $("input[type='password'],input[type='text']:disabled");
        console.log(multiSecetedItems);
    });
});

// $(document).ready(function () {
//     $("#selected-plays > li").addClass("horizontal");
//     $("#selected-plays li:not(.horizontal)").addClass("sub-level");
//     $("a[href^='mailto:']").addClass("mailto");
//     $("a[href$='.pdf']").addClass("pdflink");
//     $("a[href^='http']").addClass("henrylink");
//     $("tr:nth-child(odd)").addClass("alt");
//     $("td:contains(Henry)").addClass("highlight");
//     $("td:contains(Henry)").next().addClass("highlight");
//     $("td:contains(Henry)").next().next().addClass("highlight");
//     $("td:contains(Henry V)").parent().removeClass("alt");
    
//     $("#submit").click(function (e) { 
//         e.preventDefault();
//         let selectedRadio = $('input[type="radio"]:checked').val();
//         console.log(selectedRadio);
//         let multiSelectedItems = $('input[type="password"],input[type="text"]:disabled');
//         console.log(multiSelectedItems);

//     });
// });