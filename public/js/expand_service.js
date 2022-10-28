var $cell = $(".card");

//open and close card when clicked on card
$cell.find(".js-expander").click(function () {
  var $thisCell = $(this).closest(".card");

  if ($thisCell.hasClass("is-collapsed")) {
    $cell.not($thisCell).removeClass("is-expanded").addClass("is-collapsed");
    //$cell.not($thisCell).removeClass('is-expanded').addClass('is-collapsed').addClass('is-inactive');

    $thisCell.removeClass("is-collapsed").addClass("is-expanded");

    if ($cell.not($thisCell).hasClass("is-inactive")) {
      //do nothing
    } else {
      //$cell.not($thisCell).addClass('is-inactive');
    }
  } else {
    $thisCell.removeClass("is-expanded").addClass("is-collapsed");
    $cell.not($thisCell).removeClass("is-inactive");
  }
});

//close card when click on cross
$cell.find(".js-collapser").click(function () {
  var $thisCell = $(this).closest(".card");

  $thisCell.removeClass("is-expanded").addClass("is-collapsed");
  $cell.not($thisCell).removeClass("is-inactive");
});

jQuery(document).ready(function ($) {
  //open popup

  //close popup
  $(".cd-popup").on("click", function (event) {
    if ($(event.target).is(".cd-popup-close") || $(event.target).is(".cd-popup")) {
      event.preventDefault();
      $(this).removeClass("is-visible");
    }
  });
  //close popup when clicking the esc keyboard button
  $(document).keyup(function (event) {
    if (event.which == "27") {
      $(".cd-popup").removeClass("is-visible");
    }
  });
});

function openpopup(id) {
  event.preventDefault();
  $("#" + id + "").addClass("is-visible");
}
