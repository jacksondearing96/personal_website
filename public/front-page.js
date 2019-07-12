function ShowMoreInfo(info)
{
    let moreInfoContainer = $('#more-info');
    moreInfoContainer.css('display', 'inline');
    moreInfoContainer.text(info);
    event.stopPropagation();
}

document.addEventListener('click', function(event) {
    let moreInfoContainer = document.getElementById("more-info");
    let clickInside = moreInfoContainer.contains(event.target);

    if (clickInside == false) {
        $(moreInfoContainer).css('display', 'none');
    }
});