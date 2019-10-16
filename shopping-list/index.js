function listUpdater() {
    $('#js-shopping-list-form').submit(event => {
        event.preventDefault();
        const userText = $(event.currentTarget).find('#shopping-list-entry');
        console.log(userText.val());
        $('.shopping-list').append(`<li>
        <span class="shopping-item">` + userText.val() + `</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);

      $('#js-shopping-list-form').trigger("reset");
    })

    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
        $(event.target).closest('li').remove();
    })

    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
      $(event.target).closest('li').toggleClass('shopping-item__checked');
    })

}

$(listUpdater);